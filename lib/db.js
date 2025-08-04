import Constants from "expo-constants";
import PocketBase, { AsyncAuthStore } from "pocketbase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const store = new AsyncAuthStore({
  save: async (serialized) => AsyncStorage.setItem("pb_auth", serialized),
  initial: AsyncStorage.getItem("pb_auth"),
});

const pb = new PocketBase(
  Constants.expoConfig.extra.EXPO_PUBLIC_POCKETBASE_URL,
  store
);

export default pb;
