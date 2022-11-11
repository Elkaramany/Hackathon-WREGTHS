import React from 'react';
import { Text, ViewStyle, TextStyle, StyleSheet, TouchableOpacity, View } from 'react-native';

import { verticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

import { LeftArrow, GlobalStyles, Colors } from '@Config';
import RegText from './RegText'

interface Props {
    headerStyle?: ViewStyle;
    textStyle?: TextStyle;
    headerText: string;
    imageName?: string;
    onSkip?: () => void
}

const HeaderArrow: React.FC<Props> = ({ headerText, headerStyle, textStyle }) => {
    const navigation = useNavigation()

    return (
        <View
            style={[headerStyle, GlobalStyles.rowBetween]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <LeftArrow height={25} width={25} fill={Colors.primary} />
            </TouchableOpacity >
            <RegText
                str={headerText}
                biggest
                customTextStyle={[styles.headerTextStyle, textStyle]}
            />
            <View />
        </View>
    )
}

const styles = StyleSheet.create({
    headerTextStyle: {
        color: Colors.primary,
        fontSize: verticalScale(17),
        fontWeight: 'bold'
    },
})

export default HeaderArrow;