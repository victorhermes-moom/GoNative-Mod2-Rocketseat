import React, { Component } from "react";
import Reactotron from "reactotron-react-native";
import api from "~/services/api";
import styles from "./styles";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    AsyncStorage
} from "react-native";

export default class Welcome extends Component {
    state = {
        username: ""
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
        try {
            await this.checkUserExists(username);
            await this.saveUser(username);

            navigation.navigate("Repositories");
        } catch (err) {
            Reactotron.log("Usuário não encontrado.");
        }
    };

    render() {
        const { username } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Text style={styles.title}>Bem-vindo</Text>

                <Text style={styles.subtitle}>
                    Para iniciar, informe seu usuário do Github.
                </Text>

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
                        <Text style={styles.buttonText}>Prosseguir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
