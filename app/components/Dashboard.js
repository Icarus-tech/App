import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NavigationBar from './NavigationBar';

export default class Dashboard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title="Tableau de bord" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});