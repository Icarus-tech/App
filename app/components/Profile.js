import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Profile extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.photo} />
                <Text style={styles.name}>{this.props.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 72,
    },
    photo: {
        backgroundColor: '#00000042',
        borderRadius: 20,
        height: 40,
        width: 40,
        marginLeft: 28,
        marginTop: 16,
        marginRight: 16,
        marginBottom: 16,
    },
    name: {
        fontSize: 14,
        color: 'black',
        marginLeft: 4,
        marginTop: 24,

    },
})