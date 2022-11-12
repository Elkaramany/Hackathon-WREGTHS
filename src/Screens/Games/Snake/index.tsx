import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import useState from 'react-usestateref'
import { verticalScale } from 'react-native-size-matters'

import { Container, HeaderArrow, RegText, } from '@Components'
import Controls from './Controls'
import Board from './Board'
import { canMoveInDirection } from './utils'


interface Props {
    navigation: any
}

const Snake: React.FC<Props> = ({ navigation }) => {
    const [currentDirection, setCurrentDirection, currentDirectionRef] = useState('right')
    const [highscore, setHighscore] = React.useState(0)
    const [playing, setPlaying] = React.useState(false)

    const onMove = (direction: string) => {
        if (canMoveInDirection(direction, currentDirection)) setCurrentDirection(direction)
    }

    React.useEffect(() => {
        let time = setTimeout(() => {
            setPlaying(true)
        }, 1500)

        return () => clearTimeout(time)
    }, [])

    const updateScore = (score: number) => {
        if (score > highscore) setHighscore(score)
    }


    return (
        <Container>
            <HeaderArrow
                headerText="Don't crash the plane"
            />
            <View style={{ marginVertical: verticalScale(20) }}>
                <RegText str={`Your high score: ${highscore}`} />
            </View>
            <View style={{ flex: 1 }}>
                <Board
                    currentDirection={currentDirectionRef}
                    setCurrentDirection={setCurrentDirection}
                    playing={playing}
                    setPlaying={setPlaying}
                    navigation={navigation}
                    setHighscore={updateScore}
                />
            </View>

            <View style={{ alignItems: 'center', marginVertical: verticalScale(5) }}>
                <Controls onMove={onMove} currentDirection={currentDirectionRef} />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Snake;