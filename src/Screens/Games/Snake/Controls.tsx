import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

import { Colors, DownControl, GlobalStyles, LeftControl, RightControl, UpControl } from '@Config'

interface ControlProps {
    Icon: any
    direction: string
    onMove: (val: string) => void
    currentDirection: string
}
const CONTROL_DIMENSION = 50

const Control: React.FC<ControlProps> = ({ Icon, direction, onMove, currentDirection }) => {

    return (
        <TouchableOpacity
            style={[styles.container,{backgroundColor: direction === currentDirection ? 'tomato' : 'transparent'}]}
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

interface Props {
    onMove: (val: string) => void
    currentDirection: any
}

const Controls: React.FC<Props> = ({ onMove, currentDirection }) => {
    return (
        <>
            <Control
                Icon={UpControl} direction='up' onMove={onMove} currentDirection={currentDirection.current}
            />
            <View style={[GlobalStyles.rowBetween, { marginVertical: verticalScale(10), width: '80%' }]}>
                <Control
                    Icon={LeftControl} direction='left' onMove={onMove} currentDirection={currentDirection.current}
                />

                <Control
                    Icon={RightControl} direction='right' onMove={onMove} currentDirection={currentDirection.current}
                />
            </View>
            <Control
                Icon={DownControl} direction='down' onMove={onMove} currentDirection={currentDirection.current}
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