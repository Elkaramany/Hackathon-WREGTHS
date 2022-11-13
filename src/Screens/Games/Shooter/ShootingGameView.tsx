import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ViewProps } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Colors, GlobalStyles } from '@Config';
import { verticalScale } from 'react-native-size-matters';

export interface GameInitDef {
  objective: string; // The objective text
  endsAt: Date; // Date when the game ends
  numAnswers: number; // Number of answers to show
  correctIndex: number; // Index of the correct answer
}

export interface ShootingGameProps {
  getTarget: (index: number) => React.FC<{ clicked: boolean }>; // helper to generate the shooting target
  onFinish: (solved: boolean, time: number) => void; // callback when the game ends (either timed out or solved)
  viewProps?: ViewProps; // to override View props from parent
}

const NUM_COLUMNS = 4;

const ShootingGameView: React.FC<GameInitDef & ShootingGameProps> = ({
  objective,
  endsAt,
  numAnswers,
  correctIndex,
  getTarget,
  onFinish,
  viewProps,
}) => {
  const [timeLeft, setTimeLeft] = useState(endsAt.getTime() - Date.now());
  const [clicked, setClicked] = useState(Array(numAnswers).fill(false));

  function onClickButton(index: number) {
    setClicked(prev => {
      const newClicked = [...prev];
      newClicked[index] = true;
      return newClicked;
    });

    if (index === correctIndex) {
      onFinish(true, timeLeft);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = Math.max(0, endsAt.getTime() - Date.now());
      setTimeLeft(newTimeLeft);
      if (newTimeLeft <= 0) {
        onFinish(false, timeLeft);
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <View key={'shooter'} style={styles.container} {...viewProps}>
      <Text>Time Left: {Math.trunc(timeLeft / 1000)} seconds</Text>
      <Text>{objective}</Text>

      <FlatList
        numColumns={NUM_COLUMNS}
        data={Array.from(Array(numAnswers).keys())}
        renderItem={({ item }) => {
          const Target = getTarget(item);
          return (
            <TouchableOpacity
              style={{ minWidth: 50 }}
              onPress={() => onClickButton(item)}>
              <Target clicked={clicked[item]} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ShootingGameView;

const styles = StyleSheet.create({
  container: {
    flex: NUM_COLUMNS,
    ...GlobalStyles.columnAround,
    backgroundColor: Colors.backGround,
    ...GlobalStyles.centeredContainer,
    marginTop: verticalScale(10),
  },
});