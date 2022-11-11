import React, {useEffect, useState} from 'react';
import {Text, View, ViewProps} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface ShootingGameProps {
  prompt: string; // The prompt to display to the user
  objective: string; // The objective text
  endsAt: Date; // Date when the game ends
  numAnswers: number; // Number of answers to show
  correctIndex: number; // Index of the correct answer
  getTarget: (index: number) => React.FC<{clicked: boolean}>; // helper to generate the shooting target
  onFinish: (solved: boolean) => void; // callback when the game ends (either timed out or solved)
  viewProps?: ViewProps; // to override View props from parent
}

const ShootingGameView: React.FC<ShootingGameProps> = ({
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
      onFinish(true);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = Math.max(0, endsAt.getTime() - Date.now());
      setTimeLeft(newTimeLeft);
      if (newTimeLeft <= 0) {
        onFinish(false);
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <View {...viewProps}>
      <Text>Time Left: {timeLeft}</Text>
      <Text>{objective}</Text>

      {Array.from(Array(numAnswers).keys()).map(idx => {
        const Target = getTarget(idx);
        return (
          <TouchableOpacity onPress={() => onClickButton(idx)}>
            <Target key={idx} clicked={clicked[idx]} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ShootingGameView;
