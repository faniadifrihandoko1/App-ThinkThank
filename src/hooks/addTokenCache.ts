import * as SecureStore from "expo-secure-store";
export default function tokenCache() {
  const getToken = (key: string) => {
    try {
      return SecureStore.getItemAsync(key);
    } catch (error) {
      return null;
    }
  };

  const saveToken = (key: string, value: string) => {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (error) {
      return null;
    }
  };
}
