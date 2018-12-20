import React from "react";
import styles from "./styles";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar
} from "react-native";

// import styles from './styles';

const Welcome = () => (
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
            />

            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>Prosseguir</Text>
            </TouchableOpacity>
        </View>
    </View>
);

export default Welcome;
