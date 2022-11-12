import { View, Text } from 'react-native'
import React from 'react'

export type props = {
    score: number;
}

const Score: React.FC<props> = ({score}) => {
  return (
    <View>
      <Text style={{textAlign: 'right'}}>You have hit: {score} hamsters</Text>
    </View>
  )
}

export default Score