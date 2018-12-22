import React from "react";
import { View } from "react-native";
import Header from "~/Components/Header";
// import styles from './styles';
import Icon from "react-native-vector-icons/FontAwesome";

const Organization = () => (
    <View>
        <Header title="Organizações" />
    </View>
);

Organization.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="building" size={20} color={tintColor} />
    )
};

export default Organization;
