import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { Container, Header, RegText } from '@Components'
import { Colors, GlobalStyles } from '@Config'

const Leaderboard: React.FC<{}> = ({ }) => {
    const { hamsterHighscore, snakeHighscore, shooterHighscore } = useSelector((state: any) => state.AuthReducer)

    return (
        <Container>
            <Header headerText="Leaderboards" />

            <RegText
                customTextStyle={{ color: Colors.primary }}
                biggest
                str={`Your high scores:`}
            />
            <RegText
                customTextStyle={{ color: Colors.primary }}
                biggest
                str={`Don't crash the plane: ${snakeHighscore}`}
            />
            <RegText
                customTextStyle={{ color: Colors.primary }}
                biggest
                str={`Hamster: ${hamsterHighscore}`}
            />
            <RegText
                customTextStyle={{ color: Colors.primary }}
                biggest
                str={`Shooter: ${shooterHighscore}`}
            />

            <View style={GlobalStyles.bottomContainer}>
                <RegText
                    customTextStyle={{ color: 'tomato', textAlign: 'center' }}
                    biggest
                    str={`See how you rank among your fellow Toptalers, coming soon...`}
                />
            </View>
        </Container>
    )
}

export default Leaderboard;