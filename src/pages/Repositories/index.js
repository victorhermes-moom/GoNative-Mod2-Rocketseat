import React from "react";
import { View } from "react-native";
import Header from "~/Components/Header";
// import styles from './styles';
import Icon from "react-native-vector-icons/FontAwesome";

const Repositories = () => (
    <View>
        <Header title="Repositórios" />
    </View>
);

Repositories.navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name="list-alt" size={20} color={tintColor} />
    )
};

export default Repositories;
