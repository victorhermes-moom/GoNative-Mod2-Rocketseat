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
import OrganizationItem from "./OrganizationItem";
import Reactotron from "reactotron-react-native";
export default class Organization extends Component {
    state = {
        data: [],
        loading: true,
        refreshing: false
    };

    componentDidMount() {
        this.loadOrganizations();
    }

    loadOrganizations = async () => {
        this.setState({ refreshing: true });

        const username = await AsyncStorage.getItem("@Githuber:username");
        const { data } = await api.get(`/users/${username}/orgs`);
        Reactotron.log(data);
        this.setState({ data, loading: false, refreshing: false });
    };

    renderListItem = ({ item }) => <OrganizationItem organization={item} />;

    renderList = () => {
        const { data, refreshing } = this.state;

        return (
            <FlatList
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={this.renderListItem}
                onRefresh={this.loadOrganizations}
                refreshing={refreshing}
            />
        );
    };

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="building" size={20} color={tintColor} />
        )
    };

    render() {
        const { loading } = this.state;

        return (
            <View style={styles.container}>
                <Header title="Organizações" />
                {loading ? (
                    <ActivityIndicator style={styles.loading} />
                ) : (
                    this.renderList()
                )}
            </View>
        );
    }
}
