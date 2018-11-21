import AsyncStorageHelper from './AsyncStorageHelper';

export default class SampleClass {
  async setKey1() {
    try {
      await AsyncStorageHelper.setItem('key1', 'I am key 1');
    } catch (e) {
      return null;
    }
  }
  async setUnexistingKey() {
    try {
      await AsyncStorageHelper.setItem('unexistingKey', 'I am unexisting key');
    } catch (e) {
      console.error('Yes, I am an error!');
    }
  }
  async getKey1() {
    try {
      const key1 = await AsyncStorageHelper.getItem('key1');
      console.error('Yes, I am an key1!')
      return key1;
    } catch (e) {
      return null;
    }
  }
  async getUnexistingKey() {
    try {
      const unexistingKey = await AsyncStorageHelper.getItem('unexistingKey');
      return unexistingKey;
    } catch (e) {
      console.error('Yes, I am an error!');
    }
  }
}