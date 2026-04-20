import AsyncStorage from "@react-native-async-storage/async-storage";

const storagePrefix = "@nectarapp:";

function encodeValue(data) {
  const json = JSON.stringify(data);
  const hex = Array.from(json)
    .map((char) => char.charCodeAt(0).toString(16).padStart(2, "0"))
    .reverse()
    .join("");
  return hex;
}

function decodeValue(value) {
  if (value == null) {
    return null;
  }

  const chars = [];
  for (let index = value.length - 2; index >= 0; index -= 2) {
    const hexByte = value.slice(index, index + 2);
    chars.push(String.fromCharCode(parseInt(hexByte, 16)));
  }

  return JSON.parse(chars.join(""));
}

export async function saveStorageItem(key, data) {
  try {
    const storageKey = `${storagePrefix}${key}`;
    const encoded = encodeValue(data);
    await AsyncStorage.setItem(storageKey, encoded);
    return true;
  } catch (error) {
    console.warn("saveStorageItem error", error);
    throw error;
  }
}

export async function getStorageItem(key) {
  try {
    const storageKey = `${storagePrefix}${key}`;
    const value = await AsyncStorage.getItem(storageKey);
    if (value === null) {
      return null;
    }
    return decodeValue(value);
  } catch (error) {
    console.warn("getStorageItem error", error);
    return null;
  }
}

export async function removeStorageItem(key) {
  try {
    const storageKey = `${storagePrefix}${key}`;
    await AsyncStorage.removeItem(storageKey);
    return true;
  } catch (error) {
    console.warn("removeStorageItem error", error);
    throw error;
  }
}

export async function clearStorage() {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const ourKeys = keys.filter((key) => key.startsWith(storagePrefix));
    if (ourKeys.length > 0) {
      await AsyncStorage.multiRemove(ourKeys);
    }
    return true;
  } catch (error) {
    console.warn("clearStorage error", error);
    throw error;
  }
}
