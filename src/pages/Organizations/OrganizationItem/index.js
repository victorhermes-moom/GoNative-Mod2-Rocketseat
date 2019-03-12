import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";

import styles from "./styles";

const OrganizationItem = ({ organization }) => (
    <View style={styles.container}>
        <Image
            style={styles.avatar}
            source={{ uri: organization.avatar_url }}
        />
        <Text style={styles.title}>{organization.login}</Text>

        <View style={styles.infoContainer}>
            <View style={styles.info}>
                <Text style={styles.infoText}>{organization.description}</Text>
            </View>
        </View>
    </View>
);

OrganizationItem.propTypes = {
    repository: PropTypes.shape({
        avatar_url: PropTypes.string,
        login: PropTypes.string,
        description: PropTypes.description
    })
};

export default OrganizationItem;
