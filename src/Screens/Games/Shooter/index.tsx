import React from 'react';
import { Text } from 'react-native';

import { Container, HeaderArrow } from '@Components';
import { Emojis } from '@Config';

import ShootingGameView, {
    GameInitDef as ShootingGameInitDef,
} from './ShootingGameView';

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
    const response: DataDef & ShootingGameInitDef = dummy_response();
    const getTarget = (index: number) => textTarget(response.data, index);
    const onFinish = (solved: boolean) => {
        console.log('Game finished, solved: ', solved);
    };

    return (
        <Container>
            <HeaderArrow headerText="Shooter" />

            <ShootingGameView
                {...response}
                getTarget={getTarget}
                onFinish={onFinish}
            />
        </Container>
    );
};


export default Shooter;