import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import { GlobalStyles, ToptalLogo, GoogleLogo, GoogleLogin } from '@Config';

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
            <RegText
                biggest
                str='In Collaboration with:'
            />
            <View style={[{ flex: 6 }, GlobalStyles.centeredContainer]}>
                <ToptalLogo width={'100%'} height={'100%'} />
            </View>


            <View style={{ flex: 4 }}>
                <Button
                    onPress={() => TryGoogle()}
                    text='Login with Google'
                    Icon={GoogleLogo}
                />
            </View>

        </Container>
    )
}

export default Home