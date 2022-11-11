import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Container, RegText, HeaderArrow } from '@Components'

interface Props {

}

const Hamster: React.FC<Props> = ({ }) => {
    return (
        <Container>
            <HeaderArrow
                headerText='Hamster'
            />

        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Hamster;