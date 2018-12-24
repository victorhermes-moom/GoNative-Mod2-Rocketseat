import React, { Component } from "react";
import {
    View,
    Text,
    AsyncStorage,
    ActivityIndicator,
    FlatList
} from "react-native";
import Header from "~/Components/Header";
import api from "~/services/api";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import RepositoryItem from "./RepositoryItem";

export default class Repositories extends Component {
    state = {
        data: [],
        loading: true
    };

    async componentDidMount() {
        const username = await AsyncStorage.getItem("@Githuber:username");
        const { data } = await api.get(`/users/${username}/repos`);

        this.setState({ data, loading: false });
    }

    renderListItem = ({ item }) => <RepositoryItem repository={item} />;

    renderList = () => {
        const { data } = this.state;

        return (
            <FlatList
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={this.renderListItem}
            />
        );
    };

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="list-alt" size={20} color={tintColor} />
        )
    };

    render() {
        const { loading } = this.state;

        return (
            <View style={styles.container}>
                <Header title="Repositórios" />
                {loading ? (
                    <ActivityIndicator style={styles.loading} />
                ) : (
                    this.renderList()
                )}
            </View>
        );
    }
}
