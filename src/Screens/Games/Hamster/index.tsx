import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Button, Container, HeaderArrow, RegText } from '@Components'
import Score from './Score'
import Board from './Board'

import { Hamster1, Hamster2, Hamster3 } from '@Config';
import { verticalScale } from 'react-native-size-matters';

interface Props {

}

const columns = 3, rows = 8;

const Hamster: React.FC<Props> = ({ }) => {
    const navigation = useNavigation()

    const [score, setScore] = useState(0);
    const [time, setTime] = useState(5000);
    const [showHamster, setShowHamster] = useState<{ x: number, y: number, time: number, hamster: any }[]>([]);
    const onHamsterHit = (item: number) => {
        setScore(score => score + item);
    }

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(time => {
                let newTime = time - 500
                console.log("cambio de nivel, newTime: " + newTime)
                if (newTime <= 0) {
                    // game is finnished
                    clearInterval(timer)
                    return -1;
                } else {
                    return newTime;
                }
            })
        }, 10000) // every 10 seconds increase the interval
        return () => {
            clearInterval(timer)
        }
    }, [])

    useEffect(() => {
        if (time == -1) return
        let timer = setInterval(() => {
            let x = Math.floor(Math.random() * columns + 1)
            let y = Math.floor(Math.random() * rows + 1)
            let aux = Math.floor(Math.random() * 10 + 1)
            let hamster: any;
            if (aux <= 3) {
                hamster = Hamster1
            } else if (aux <= 6) {
                hamster = Hamster2
            } else {
                hamster = Hamster3
            }
            let time = Math.floor(Math.random() * 4 + 1)
            setShowHamster([{ x, y, hamster, time }])
        }, time)
        return () => {
            clearInterval(timer)
        }
    }, [time])


    return (
        <Container>
            <HeaderArrow
                headerText='Hamster'
            />
            <View style={{ flex: 1 }}>
                {
                    time < 0 ?
                        <>
                            <RegText customTextStyle={styles.gameOver} biggest str={'Game Over!'} />
                            <RegText customTextStyle={styles.message} str={`You hit ${score} hamsters!`} />
                            <RegText customTextStyle={styles.message} str={`You finnished number 1!`} />
                            <Button containerStyle={styles.button} onPress={() => { navigation.goBack() }} text="Yay!" />
                        </>
                        :
                        <>
                            <Score score={score} />
                            <Board rows={rows} columns={columns} onHamsterHit={onHamsterHit} showHamster={showHamster} />
                        </>
                }
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    gameOver: {
        textAlign: 'center',
        marginTop: verticalScale(20),
        fontWeight: 'bold'
    },
    message: {
        textAlign: 'center',
        marginTop: verticalScale(15),
    },
    button: {
        marginTop: verticalScale(15),
    }
})

export default Hamster;