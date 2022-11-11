import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Container, HeaderArrow, } from '@Components'

interface Props {

}

const Snake: React.FC<Props> = ({ }) => {
    return (
        <Container>
            <HeaderArrow
                headerText='Snake'
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Snake;