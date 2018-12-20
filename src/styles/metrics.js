import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("windows");

export default {
    baseMargin: 10,
    basePadding: 20,
    baseRadius: 3,

    screenWidth: width < height ? width : height,
    screenHeight: width < height ? width : height
};
