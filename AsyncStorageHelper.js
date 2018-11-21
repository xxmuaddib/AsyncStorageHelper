import { AsyncStorage } from 'react-native';

export default class AsyncStorageHelper {
	static keys = ['key1', 'key2', 'key3'];

  static async getItem(key) {
    try {
      if (AsyncStorageHelper.keys.indexOf(key) == -1) {
        return Promise.reject();
      }
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (e) {
      return null;
    }
  }

  static async setItem(key, value) {
    try {
      if (AsyncStorageHelper.keys.indexOf(key) == -1) {
        return Promise.reject();
      }
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (e) {
      return false;
    }
  }

  static async removeItem(key) {
    try {
      if (AsyncStorageHelper.keys.indexOf(key) == -1) {
        return Promise.reject();
      }
      await AsyncStorage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  }
}