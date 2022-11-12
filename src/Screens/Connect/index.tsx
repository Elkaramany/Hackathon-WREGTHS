import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import { Container, RegText } from '@Components'
import { GlobalStyles } from '@Config'
 
interface Props{
 
}
 
const Leaderboard: React.FC<Props> = ({}) =>{
    return(
        <Container>
           <View style={styles.container}>
                <RegText biggest str='Connect with fellow toptalers coming soon...' />
           </View>
        </Container>
    )
}
 
const styles = StyleSheet.create({
    container:{
        ...GlobalStyles.centeredContainer
    },
})
 
export default Leaderboard;