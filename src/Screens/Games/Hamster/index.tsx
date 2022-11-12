import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Button, Container, HeaderArrow } from '@Components'
import Score from './Score'
import Board from './Board'
import hamster1 from '../../../Config/assets/images/hamster1.jpeg'
import hamster2 from '../../../Config/assets/images/hamster2.png'
import hamster3 from '../../../Config/assets/images/hamster3.png'
import { Text } from 'react-native-paper';

interface Props {

}

const columns = 3, rows = 8;

const Hamster: React.FC<Props> = ({ }) => {
    const navigation = useNavigation()

    const [score, setScore] = useState(0);
    const [time, setTime] = useState(5000);
    const [showHamster, setShowHamster] = useState<{x: number, y: number, time: number, hamster: any}[]>([]);
    const onHamsterHit = (item: number) => {
        setScore(score => score + item);
    }

    useEffect(() => {
        let timer = setInterval(() => {
            setTime(time => {
                let newTime = time - 500
                console.log("cambio de nivel, newTime: "+newTime)
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
            let x = Math.floor(Math.random() * columns  + 1)
            let y = Math.floor(Math.random() * rows + 1)
            let aux = Math.floor(Math.random() * 10 + 1)
            let hamster: any;
            if (aux <= 3) {
                hamster = hamster1
            } else if (aux <= 6) {
                hamster = hamster2
            } else {
                hamster = hamster3
            }
            let time = Math.floor(Math.random() * 4 + 1)
            setShowHamster([{x, y, hamster, time}])
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
            <View style={styles.container}>
                {
                    time < 0 ?
                    <>
                        <Text style={styles.gameOver}>Game Over!</Text>
                        <Text style={styles.message}>You hit {score} hamsters!</Text>
                        <Text style={styles.message}>You finnished number 1!</Text>
                        <Button containerStyle={styles.button} onPress={() => {navigation.goBack()}} text="Yay!"/>
                    </> 
                    : 
                    <>
                        <Score score={score} />
                        <Board rows={rows} columns={columns} onHamsterHit={onHamsterHit} showHamster={showHamster}/>
                    </>
                }
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gameOver: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 50,
        fontWeight: 'bold'
    },
    message: {
        textAlign: 'center',
        marginTop: 30
    },
    button: {
        marginTop: 30
    }
})

export default Hamster;