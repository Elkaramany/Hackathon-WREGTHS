import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import useState from 'react-usestateref'
import { verticalScale } from 'react-native-size-matters'

import { Container, HeaderArrow, } from '@Components'
import Controls from './Controls'
import Board from './Board'
import { canMoveInDirection } from './utils'


interface Props {

}

const Snake: React.FC<Props> = ({ }) => {
    const [currentDirection, setCurrentDirection, currentDirectionRef] = useState('right')
    const [playing, setPlaying] = React.useState(false)

    const onMove = (direction: string) => {
        if (canMoveInDirection(direction, currentDirection)) setCurrentDirection(direction)
    }

    React.useEffect(() => {
        setTimeout(() => {
            setPlaying(true)
        }, 1500)
    }, [])


    return (
        <Container>
            <HeaderArrow
                headerText='Snake'
            />
            <View style={{ flex: 1 }}>
                <Board currentDirection={currentDirectionRef} playing={playing} />
            </View>

            <View style={{ alignItems: 'center', marginVertical: verticalScale(5) }}>
                <Controls onMove={onMove} />
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