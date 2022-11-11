import React from 'react'
import { StyleSheet, TextStyle, TouchableOpacity, ViewStyle, View } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

import { Colors, GlobalStyles } from '../Config'

import RegText from './RegText'

interface Props {
    text: string
    onPress: () => void
    containerStyle?: ViewStyle
    textStyle?: TextStyle
    Icon?: any
}

const Button: React.FC<Props> = ({ text, onPress, containerStyle, textStyle, Icon }) => {

    const renderIcon = () => {
        if (Icon) {
            return <Icon style={{ right: scale(10) }} />
        } else return <View />
    }

    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={[styles.buttonContainer, containerStyle]} >

            <View />

            <RegText
                str={text}
                bigger
                customTextStyle={[styles.buttonText, textStyle]}
            />
            {renderIcon()}
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        ...GlobalStyles.rowBetween,
        backgroundColor: Colors.primary,
        padding: scale(7),
        borderRadius: verticalScale(10),
        margin: verticalScale(2),
    }, buttonText: {
        fontWeight: 'bold',
        color: Colors.backGround,
        paddingVertical: scale(5),
    },
})

export default Button;