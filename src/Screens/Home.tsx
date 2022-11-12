import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import { GlobalStyles, ToptalLogo, GoogleLogo, GoogleLogin } from '@Config';

import { Container, RegText, Button, Spinner } from '@Components';
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

    const loggedIn = () => navigation.navigate("Index")

    return (
        <Container>
            <RegText
                biggest
                str='In Collaboration with:'
            />
            <View style={[{ flex: 6 }, GlobalStyles.centeredContainer]}>
                <ToptalLogo width={'100%'} height={'100%'} />
            </View>


            <View style={styles.container}>
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
    container: {
        flex: 4,
    }
})

export default Home