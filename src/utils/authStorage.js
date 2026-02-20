import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    return await AsyncStorage.getItem(`${this.namespace}:access_token`);
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(`${this.namespace}:access_token`, accessToken);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:access_token`);
  }
}

export default AuthStorage;
