import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Container, HeaderArrow, RegText } from '@Components'

interface Props {

}

const Shooter: React.FC<Props> = ({ }) => {
    return (
        <Container>
            <HeaderArrow
                headerText='Shooter'
            />

        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Shooter;