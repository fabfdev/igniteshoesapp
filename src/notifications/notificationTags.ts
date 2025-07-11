import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: "Felipe",
    user_email: "felipe@email.com",
  });
}
