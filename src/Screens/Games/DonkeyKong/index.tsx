import React from 'react'
//@ts-ignore
import DonkeyKong from "react-native-donkey-kong";
import { Container, HeaderArrow } from '@Components'

const Index: React.FC<{}> = ({ }) => {
    return (
        <Container>
            <HeaderArrow
                headerText='Donkey Kong'
            />
            <DonkeyKong />
        </Container>
    )
}


export default Index;