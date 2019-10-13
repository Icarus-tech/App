import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class NavigationBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.leftIcon} source={require('../assets/icons/baseline_menu_white_24.png')} />
                <Text style={styles.title}>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 56,
        backgroundColor: '#620BD9',
        elevation: 4,
    },
    leftIcon: {
        margin:16,
        height: 24,
        width:24,
    },
    title: {
        left: 16,
        top: 13,
        color: 'white',
        opacity: 1,
        fontSize: 20,
    },
});