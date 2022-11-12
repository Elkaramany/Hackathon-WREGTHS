import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import useState from 'react-usestateref'
import { scale, verticalScale } from 'react-native-size-matters'

import { Colors, GlobalStyles, Airplane, DownControl } from '@Config'

import { moveSnake, SNAKE } from './utils'
import { RegText } from '@Components'

interface Props {
    currentDirection: any
    setCurrentDirection: (val: string) => void
    playing: boolean
    setPlaying: (val: boolean) => void
    navigation: any
    setHighscore: (val: number) => void
}

const SnakePixel: React.FC<{ pos: SNAKE, dim: number, index: number, items: SNAKE[] }> = ({ pos, dim, index, items }) => {
    if (index === items.length - 1) {
        return (
            <View style={{ left: pos.left, top: pos.top, position: 'absolute' }}>
                <Airplane width={dim} height={dim} fill={Colors.secondary}/>
            </View>
        )
    } else {
        return <View style={[styles.snake, { left: pos.left, top: pos.top, width: dim, height: dim }]} />
    }
}

const GAME_PACE = 75

const Board: React.FC<Props> = ({ currentDirection, setCurrentDirection, playing, setPlaying, navigation, setHighscore }) => {
    const [limit, setLimit] = React.useState({ width: 100, height: 100 })
    const [pixel, setPixel] = React.useState<number>(10)
    const [snake, setSnake, snakeRef] = useState<SNAKE[]>([])

    const onLayout = (event: any) => {
        //Get how big the snake pixel would be
        const { width, height } = event.nativeEvent.layout;
        setLimit({ width, height })
        let move = width / 26
        setPixel(move)
    }

    const setInitialSnake = (move: number) => {
        //Get a 3 pixel long snake to start with
        let newSnake = [{ left: 0, top: 0 }]
        for (let i = 0; i < 3; i++) {
            newSnake.push({ left: move * i, top: 0 })
        }

        setSnake(newSnake)
    }


    React.useEffect(() => {
        setCurrentDirection("right")
        setInitialSnake(pixel)
        let interval: any;
        if (playing) startGame(interval)
        else clearInterval(interval)

        return () => clearInterval(interval);
    }, [playing])

    const startGame = (interval: any) => {
        interval = setInterval(() => {
            moveTheSnake(interval)
        }, GAME_PACE);
    }

    const restartGame = () => {
        setPlaying(false)
        setTimeout(() => {
            setPlaying(true)
        }, 3000)
    }

    const moveTheSnake = (interval: any) => {
        let newSnake = moveSnake(currentDirection.current, snakeRef.current, pixel, limit)

        if (newSnake) setSnake(newSnake)
        else {
            setHighscore(snakeRef.current.length)
            clearInterval(interval)
            Alert.alert(
                "Game Over, but don't worry. Toptal still loves you!",
                "Wanna try again?",
                [
                    {
                        text: "I wanna try another game",
                        onPress: () => navigation.goBack(),
                    },
                    { text: "Let me try again", onPress: () => restartGame(), style: "cancel" }
                ]
            );
        }
    }

    return (
        <View onLayout={onLayout} style={styles.container}>
            {playing ?
                snake.map((pos, index, items) => index !== 0 && <SnakePixel key={index} pos={pos} dim={pixel - 2} index={index} items={items} />)
                :
                <View style={[GlobalStyles.centeredContainer, { marginVertical: verticalScale(10) }]}>
                    <RegText str='Any time now..., you ready? we have a really fast plane' />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: Colors.tertiary,
        borderWidth: 1,
    }, snake: {
        borderColor: Colors.tertiary,
        borderWidth: 0.5,
        width: scale(12),
        height: scale(12),
        backgroundColor: Colors.primary,
        position: 'absolute',
    }
})

export default Board;