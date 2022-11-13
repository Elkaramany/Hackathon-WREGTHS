import React from 'react';
import { Text, Alert, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Container, HeaderArrow } from '@Components';
import { Credential } from '@Actions';
import { Emojis } from '@Config';

import ShootingGameView, {
    GameInitDef as ShootingGameInitDef,
} from './ShootingGameView';
import { useNavigation } from '@react-navigation/native';

interface Props { }

interface DataDef {
    data: string[];
}

const textTarget = (
    data: string[],
    index: number,
): React.FC<{ clicked: boolean }> => {
    return ({ clicked }) => {
        return (
            <Text
                style={{
                    fontSize: 60,
                    textAlign: 'center',
                    ...(clicked && { backgroundColor: 'red' }),
                }}>
                {data[index]}
            </Text>
        );
    };
};

function dummy_response(): DataDef & ShootingGameInitDef {
    const emojis = Emojis.sort((a, b) => 0.5 - Math.random()).slice(0, 16);
    const correctIndex = Math.floor(Math.random() * emojis.length);
    const answer = emojis[correctIndex];

    return {
        objective: `Shoot the ${answer.name}!`,
        endsAt: new Date(Date.now() + 10000),
        numAnswers: emojis.length,
        correctIndex: correctIndex,
        data: emojis.map(e => e.unicode),
    };
}

const Shooter: React.FC<Props> = ({ }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const { shooterHighscore } = useSelector((state: any) => state.AuthReducer)
    const response: DataDef & ShootingGameInitDef = dummy_response();

    const getTarget = (index: number) => textTarget(response.data, index);

    const onFinish = (solved: boolean, time: number) => {
        time = time / 1000
        if (time > shooterHighscore) Credential(dispatch, { prop: "shooterHighscore", value: time })
        let titleMsg = solved ? "You won" : "Game Over"
        let msg = solved ? `You had an extra ${time.toFixed(1)} seconds left` : "Don't worry, Toptal is here for you"
        Alert.alert(
            titleMsg,
            msg,
            [
                { text: "Alright, I Love Toptal too!", onPress: () => navigation.goBack() }
            ]
        );
    };

    return (
        <Container>
            <HeaderArrow headerText="Shooter" />

            <View style={{ flex: 1 }}>
                <ShootingGameView
                    {...response}
                    getTarget={getTarget}
                    onFinish={onFinish}
                />
            </View>
        </Container>
    );
};


export default Shooter;