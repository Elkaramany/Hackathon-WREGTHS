import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import useState from 'react-usestateref'
import { scale } from 'react-native-size-matters'

import { Colors } from '@Config'

import { moveSnake, SNAKE } from './utils'

interface Props {
    currentDirection: any
    playing: boolean
    navigation: any
}

const SnakePixel: React.FC<{ pos: SNAKE, dim: number }> = ({ pos, dim }) => <View style={[styles.snake, { left: pos.left, top: pos.top, width: dim, height: dim }]} />
const GAME_PACE = 35
const Board: React.FC<Props> = ({ currentDirection, playing, navigation }) => {
    const [limit, setLimit] = React.useState({ width: 100, height: 100 })
    const [pixel, setPixel] = React.useState<number>(10)
    const [snake, setSnake, snakeRef] = useState<SNAKE[]>([])

    const onLayout = (event: any) => {
        //Get how big the snake pixel would be
        const { width, height } = event.nativeEvent.layout;
        setLimit({ width, height })
        let move = width / 26
        setPixel(move)
        setInitialSnake(move)
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
        startGame()
    }, [playing])

    const startGame = () => {
        let interval: any;
        setInitialSnake(pixel)
        if (playing) {
            interval = setInterval(() => {
                moveTheSnake(interval)
            }, GAME_PACE);
        } else clearInterval(interval);

        return () => clearInterval(interval);
    }

    const moveTheSnake = (interval: any) => {
        let newSnake = moveSnake(currentDirection.current, snakeRef.current, pixel, limit)
        if (newSnake) setSnake(newSnake)
        else {
            clearInterval(interval)
            Alert.alert(
                "Game Over, but don't worry. Toptal still loves you!",
                "Wanna try again?",
                [
                    {
                        text: "I wanna try another game",
                        onPress: () => navigation.goBack(),
                        style: "cancel"
                    },
                    { text: "I'm gonna win this time", onPress: () => startGame() }
                ]
            );
        }
    }

    return (
        <View onLayout={onLayout} style={styles.container}>
            {snake.map((pos, index) => {
                return (
                    index !== 0 && <SnakePixel key={index} pos={pos} dim={pixel - 2} />
                )
            })}
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