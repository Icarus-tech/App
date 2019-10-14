import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Section extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.title}>{this.props.title}</Text>
                {this.props.children}
                {this.props.seeMore
                    ? <Text style={styles.seeMore}> VOIR PLUS </Text>
                    : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 16,
        marginTop: 16,
        fontSize: 12,
        height: 16,
    },

    seeMore: {
        marginTop: 24,
        marginBottom: 16,
        marginLeft: 16,
        color: '#26C6DA',
        fontSize: 14,
        height: 19,
    },
})