import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {

    return (
        <View
            style={styles.viewStyle} >
            <Text
                style={styles.textStyle} >
                {props.headerText}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 5,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
})

export default Header;