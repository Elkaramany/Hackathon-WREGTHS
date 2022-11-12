import { View, Text } from 'react-native'
import React from 'react'

import { RegText } from '@Components';

export type props = {
  score: number;
}

const Score: React.FC<props> = ({ score }) => {
  return (
    <View>
      <RegText customTextStyle={{ textAlign: 'right' }} str={`You hit ${score} hamsters!`} />
    </View>
  )
}

export default Score