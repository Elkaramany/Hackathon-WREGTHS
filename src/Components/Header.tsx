import React from 'react';
import { View, Text, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import { Colors } from '../Config'
import RegText from './RegText';

interface Props {
    headerStyle?: ViewStyle;
    textStyle?: TextStyle;
    headerText: string;
}

const Header: React.FC<Props> = ({ headerStyle, textStyle, headerText }) => {
    return (
        <View style={[styles.headerContainer, headerStyle]}>
            <RegText str={headerText}
                biggest
                customTextStyle={styles.headerTextStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'transparent'
    }, headerTextStyle: {
        color: Colors.primary,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})

export default Header;