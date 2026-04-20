import { useCallback, useEffect, useState } from "react";
import {
  getStorageItem,
  removeStorageItem,
  saveStorageItem,
} from "../services/storageService";

export default function useStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadStorage() {
      try {
        const storedValue = await getStorageItem(key);
        if (active && storedValue !== null) {
          setValue(storedValue);
        }
      } catch (error) {
        console.warn("useStorage load error", error);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadStorage();

    return () => {
      active = false;
    };
  }, [key]);

  const save = useCallback(
    async (next) => {
      try {
        setValue((currentValue) => {
          const nextValue =
            typeof next === "function" ? next(currentValue) : next;

          (async () => {
            try {
              await saveStorageItem(key, nextValue);
            } catch (error) {
              console.warn("useStorage save error", error);
            }
          })();

          return nextValue;
        });
      } catch (error) {
        console.warn("useStorage save callback error", error);
      }
    },
    [key]
  );

  const clear = useCallback(async () => {
    try {
      setValue(initialValue);
      await removeStorageItem(key);
    } catch (error) {
      console.warn("useStorage clear error", error);
    }
  }, [initialValue, key]);

  return [value, save, clear, loading];
}
