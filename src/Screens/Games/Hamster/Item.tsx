import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GlobalStyles, Colors } from '@Config';
import { scale } from 'react-native-size-matters';

export type props = {
    time: number,
    width: number,
    hamster: any,
    onHamsterHit: (score: number) => void;
}

const Item: React.FC<props> = ({ time, onHamsterHit, hamster }) => {
    const [hasTarget, setHasTarget] = useState(false);
    let style = styles.item as any;

    const onPress = () => {
        if (hasTarget) {
            onHamsterHit(1);
            setHasTarget(false);
        }
    }

    useEffect(() => {
        let timer: any;
        if (time > 0) {
            timer = setTimeout(() => {
                setHasTarget(false)
            }, time * 1000)
            setHasTarget(true)
        } else {
            setHasTarget(false)
        }
        return () => {
            if (timer) {
                clearTimeout(time)
            }
        }
    }, [time])

    return (
        <TouchableOpacity onPress={onPress}>
            <Image style={style} source={hasTarget ? hamster : null} />
        </TouchableOpacity>
    )
}

export default Item

const styles = StyleSheet.create({
    item: {
        ...GlobalStyles.centeredContainer,
        height: scale(70),
        width: scale(70),
        margin: 2,
        borderColor: Colors.tertiary,
        borderWidth: 1
    }
})