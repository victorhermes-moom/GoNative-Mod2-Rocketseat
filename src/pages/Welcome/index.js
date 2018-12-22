import React, { Component } from "react";
import api from "~/services/api";
import styles from "./styles";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    AsyncStorage,
    ActivityIndicator
} from "react-native";

export default class Welcome extends Component {
    state = {
        username: "",
        loading: false,
        error: false
    };

    checkUserExists = async username => {
        const user = await api.get(`/users/${username}`);

        return user;
    };

    saveUser = async username => {
        await AsyncStorage.setItem("@Githuber:username", username);
    };

    signIn = async () => {
        const { username } = this.state;
        const { navigation } = this.props;

        this.setState({ loading: true });
        try {
            await this.checkUserExists(username);
            await this.saveUser(username);

            navigation.navigate("User");
        } catch (err) {
            this.setState({ loading: false, error: true });
        }
    };

    render() {
        const { username, loading, error } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#444a5a" />
                <Text style={styles.title}>Bem-vindo</Text>

                <Text style={styles.subtitle}>
                    Para iniciar, informe seu usuário do Github.
                </Text>

                {error && (
                    <Text style={styles.error}>Usuário não encontrado</Text>
                )}

                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Usuário do Github"
                        underlineColorAndroid="transparent"
                        value={username}
                        onChangeText={text => this.setState({ username: text })}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.signIn}
                    >
                        {loading ? (
                            <ActivityIndicator size="small" color="#fff" />
                        ) : (
                            <Text style={styles.buttonText}>Prosseguir</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
