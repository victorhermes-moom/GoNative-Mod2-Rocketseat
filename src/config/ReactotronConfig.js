import Reactotron from "reactotron-react-native";

Reactotron.configure({
    host: "192.168.0.106"
})
    .useReactNative()
    .connect();
