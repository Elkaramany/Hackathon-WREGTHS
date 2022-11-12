import React from 'react'
import useState from 'react-usestateref'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import { Container } from '@Components'
import { Colors } from '@Config'
import { scale } from 'react-native-size-matters'
import { moveSnake, SNAKE } from './utils'

interface Props {
    currentDirection: any
    playing: boolean
}

const SnakePixel: React.FC<{ pos: SNAKE, dim: number }> = ({ pos, dim }) => <View style={[styles.snake, { left: pos.left, top: pos.top, width: dim, height: dim }]} />

const Board: React.FC<Props> = ({ currentDirection, playing }) => {
    const [pixel, setPixel] = React.useState<number>(10)
    const [snake, setSnake, snakeRef] = useState<SNAKE[]>([])

    const onLayout = (event: any) => {
        const { width } = event.nativeEvent.layout;
        let move = width / 26
        setPixel(move)
        let newSnake = [{ left: 0, top: 0 }, { left: move, top: 0 }, { left: move + move, top: 0 }]
        setSnake(newSnake)
    }

    React.useEffect(() => {
        let interval: any;
        if (playing) {
            interval = setInterval(() => {

                let newSnake = moveSnake(currentDirection.current, snakeRef.current, pixel)
                setSnake(newSnake)
            }, 500);
        } else clearInterval(interval);

        return () => clearInterval(interval);
    }, [playing])

    React.useEffect(() => {
        //console.log(snake)
    }, [snake])

    return (
        <View onLayout={onLayout} style={styles.container}>
            {snake.map((pos, index) => {
                return (
                    <SnakePixel key={index} pos={pos} dim={pixel - 2} />
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