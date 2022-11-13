import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import { GlobalStyles, ToptalLogo, GoogleLogo, GoogleLogin, LogoSvg, Colors } from '@Config';

import { Container, RegText, Button } from '@Components';
import { Credential } from '@Actions';

interface Props {
    navigation: StackNavigationProp<any, any>,
}

const Home: React.FC<Props> = ({ navigation }) => {
    const dispatch = useDispatch()


    const TryGoogle = async () => {
        let user = await GoogleLogin()
        //user logged in, otherwise it would be null
        if (user) Credential(dispatch, { prop: "user", value: user })
    }

    return (
        <Container>
            <View style={{ flex: 4 }}>
                <ToptalLogo width={'100%'} height={'100%'} />
            </View>
            <RegText
                biggest
                str='Toptal Hackathon team WREGHTS'
                customTextStyle={styles.textStyle}
            />
            <RegText
                biggest
                str='In Collaboration with:'
                customTextStyle={[styles.textStyle, { color: 'tomato' }]}
            />
            <View style={[{ flex: 4 }, GlobalStyles.centeredContainer]}>
                <LogoSvg width={'100%'} height={'100%'} />
            </View>


            <View style={GlobalStyles.bottomContainer}>
                <Button
                    onPress={() => TryGoogle()}
                    text='Login with Google'
                    Icon={GoogleLogo}
                />
            </View>

        </Container>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        color: Colors.primary
    }
})

export default Home