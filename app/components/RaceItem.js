import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Divider from './Divider'

export default class RaceItem extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={() => alert('1')}>
                <View style={styles.container}>
                    <View style={{ backgroundColor: this.props.race.color, ...styles.sticker }}>
                    </View>
                    <View style={styles.leftTextContainer}>
                        <Text style={styles.note}>{this.props.race.note}/10</Text>
                        <Text style={styles.distance}>{this.props.race.distance} km</Text>
                    </View>
                    <View style={styles.rightTextContainer}>
                        <Text style={styles.date}>{this.props.race.date}</Text>
                        <Text style={styles.duration}>{this.props.race.duration}</Text>
                    </View>
                </View>
                <Divider margin={16} color='#0000000D'/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 16,
        marginRight: 16,
        height: 55,
        flexDirection: 'row',
    },
    sticker: {
        height: 20,
        width: 20,
        borderRadius: 10,
        marginLeft: 16,
        marginTop: 20,
        marginBottom: 20,
    },
    leftTextContainer: {
        marginLeft: 16,
        flex: 0.3,
    },
    note: {
        fontSize: 14,
        marginTop: 8
    },
    distance: {
        fontSize: 10,
        color: '#0000008F',
        marginTop: 3,
    },
    rightTextContainer: {
        marginRight: 24,
        flex: 0.7,
        alignItems: 'flex-end'
    },
    date: {
        fontSize: 14,
        marginTop: 8
    },
    duration: {
        fontSize: 10,
        color: '#0000008F',
        marginTop: 3,
    },
})