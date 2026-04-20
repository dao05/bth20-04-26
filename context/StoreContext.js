import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultFavouriteIds, getProductById } from "../data";
import useStorage from "../hooks/useStorage";

const StoreContext = createContext(null);

export function StoreProvider({ children }) {
  const [cartItems, setCartItems, clearCart, cartLoading] = useStorage("cart", {});
  const [orders, setOrders, clearOrders, ordersLoading] = useStorage("orders", []);
  const [authInfo, setAuthInfo, clearAuthInfo, authLoading] = useStorage("auth", null);
  const [favouriteIds, setFavouriteIds] = useState(defaultFavouriteIds);
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    categories: ["eggs"],
    brands: ["cocola"],
  });

  const isLoading = cartLoading || ordersLoading || authLoading;
  const isAuthenticated = Boolean(
    authInfo?.token && authInfo?.expiry && authInfo.expiry > Date.now()
  );
  const user = authInfo?.email ? { email: authInfo.email } : null;

  useEffect(() => {
    if (!authLoading && authInfo?.expiry && authInfo.expiry <= Date.now()) {
      clearAuthInfo();
    }
  }, [authInfo, authLoading, clearAuthInfo]);

  const addToCart = (productId) => {
    setCartItems((current) => ({
      ...current,
      [productId]: (current[productId] || 0) + 1,
    }));
  };

  const updateCartQuantity = (productId, nextQuantity) => {
    setCartItems((current) => {
      if (nextQuantity <= 0) {
        const updated = { ...current };
        delete updated[productId];
        return updated;
      }

      return {
        ...current,
        [productId]: nextQuantity,
      };
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((current) => {
      const updated = { ...current };
      delete updated[productId];
      return updated;
    });
  };

  const login = async (email) => {
    const token = `token-${email}-${Date.now()}`;
    const expiry = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days

    await setAuthInfo({ email, token, expiry });
  };

  const logout = async () => {
    try {
      await Promise.all([clearAuthInfo(), clearOrders(), clearCart()]);
    } catch (error) {
      console.warn("logout error", error);
    }
  };

  const checkout = async () => {
    const cartProducts = Object.entries(cartItems)
      .map(([productId, quantity]) => {
        const product = getProductById(productId);
        if (!product) return null;
        return {
          ...product,
          quantity,
        };
      })
      .filter(Boolean);

    if (cartProducts.length === 0) {
      return null;
    }

    const order = {
      id: `order-${Date.now()}`,
      items: cartProducts,
      total: cartProducts.reduce((total, item) => total + item.price * item.quantity, 0),
      placedAt: new Date().toISOString(),
    };

    await Promise.all([
      setOrders((current) => [order, ...current]),
      clearCart(),
    ]);

    return order;
  };

  const toggleFavourite = (productId) => {
    setFavouriteIds((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  };

  const addAllFavouritesToCart = () => {
    setCartItems((current) => {
      const updated = { ...current };

      favouriteIds.forEach((id) => {
        updated[id] = (updated[id] || 0) + 1;
      });

      return updated;
    });
  };

  const cartProducts = Object.entries(cartItems)
    .map(([productId, quantity]) => {
      const product = getProductById(productId);
      if (!product) {
        return null;
      }

      return {
        ...product,
        quantity,
      };
    })
    .filter(Boolean);

  const favouriteProducts = favouriteIds
    .map((id) => getProductById(id))
    .filter(Boolean);

  const cartTotal = cartProducts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = useMemo(
    () => ({
      addAllFavouritesToCart,
      addToCart,
      cartItems,
      cartProducts,
      cartTotal,
      favouriteIds,
      favouriteProducts,
      filtersApplied,
      isAuthenticated,
      isLoading,
      login,
      logout,
      orders,
      removeFromCart,
      checkout,
      setFiltersApplied,
      selectedFilters,
      setSelectedFilters,
      toggleFavourite,
      updateCartQuantity,
      user,
    }),
    [
      addAllFavouritesToCart,
      addToCart,
      cartItems,
      cartProducts,
      cartTotal,
      favouriteIds,
      favouriteProducts,
      filtersApplied,
      isAuthenticated,
      isLoading,
      orders,
      selectedFilters,
      user,
    ]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }

  return context;
}
