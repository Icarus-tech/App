import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class Divider extends React.Component {
    render() {
        return (
            <View style={{marginLeft: this.props.margin, marginRight: this.props.margin, borderBottomColor: this.props.color, ...styles.line}}></View>
        )
    }
}

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 1,
    },
})