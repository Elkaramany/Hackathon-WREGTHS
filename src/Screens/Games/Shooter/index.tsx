import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
  Container,
  HeaderArrow,
  RegText,
  ShootingGameView,
  ShootingGameInitDef,
} from '@Components';

interface Props {}

interface DataDef {
  data: string[];
}

const textTarget = (
  data: string[],
  index: number,
): React.FC<{clicked: boolean}> => {
  return ({clicked}) => {
    return (
      <Text
        style={{
          fontSize: 60,
          textAlign: 'center',
          ...(clicked && {backgroundColor: 'red'}),
        }}>
        {data[index]}
      </Text>
    );
  };
};

const Shooter: React.FC<Props> = ({}) => {
  const response: DataDef & ShootingGameInitDef = {
    objective: 'Shoot the cowboy (c)!',
    endsAt: new Date(Date.now() + 10000),
    numAnswers: 5,
    correctIndex: 2,
    data: ['a', 'b', 'c', 'd', 'e'],
  };
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Shooter;
