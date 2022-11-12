import React from 'react'
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

import { Container, Header, RegText } from '@Components'
import { Colors, GlobalStyles } from '@Config'
import { useDispatch } from 'react-redux'

interface Props {
    navigation: any
}

let games = [
    {
        id: 0,
        name: "Don't crash the plane",
        navigator: "Snake"
    },
    {
        id: 1,
        name: "Shooter",
        navigator: "Shooter"
    },
    {
        id: 2,
        name: "Hit the Hamster",
        navigator: "Hamster"
    },
]

interface GAME {
    id: number
    name: string
    navigator: string
}

const Index: React.FC<Props> = ({ navigation }) => {
    const dispatch = useDispatch()

    const renderItem = (game: GAME) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate(game.navigator)}
                style={styles.card}>
                <RegText
                    big
                    str={game.name}
                />
            </TouchableOpacity>
        )
    }

    return (
        <Container>
            <Header headerText='Select your game' />
            <FlatList
                data={games}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) => renderItem(item)}
            />

        </Container>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: Colors.tertiary,
        borderRadius: 5,
        marginVertical: verticalScale(10),
        padding: scale(20),
        ...GlobalStyles.centeredContainer,
        ...GlobalStyles.shadow,
    },
})

export default Index;