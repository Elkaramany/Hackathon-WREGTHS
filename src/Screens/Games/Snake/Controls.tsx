import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

import { Container, HeaderArrow, } from '@Components'
import { Colors, DownControl, GlobalStyles, LeftControl, RightControl, UpControl } from '@Config'


interface Props {
    onMove: (val: string) => void
}

interface ControlProps {
    Icon: any
    direction: string
    onMove: (val: string) => void
}
const CONTROL_DIMENSION = 50

const Control: React.FC<ControlProps> = ({ Icon, direction, onMove }) => {

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onMove(direction)}
        >
            <Icon
                fill={Colors.primary}
                width={CONTROL_DIMENSION}
                height={CONTROL_DIMENSION}
            />
        </TouchableOpacity>
    )

}

const Controls: React.FC<Props> = ({ onMove }) => {
    return (
        <>
            <Control
                Icon={UpControl} direction='up' onMove={onMove}
            />
            <View style={[GlobalStyles.rowBetween, { marginVertical: verticalScale(10), width: '80%' }]}>
                <Control
                    Icon={LeftControl} direction='left' onMove={onMove}
                />

                <Control
                    Icon={RightControl} direction='right' onMove={onMove}
                />
            </View>
            <Control
                Icon={DownControl} direction='down' onMove={onMove}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: Colors.tertiary,
        borderRadius: 5,
        padding: scale(5)
    },
})

export default Controls;