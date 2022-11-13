import React from 'react'
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { verticalScale } from 'react-native-size-matters';

import { Container, Button, RegText } from '@Components';
import { Colors, GlobalStyles, LogoSvg, ToptalLogo } from '@Config';


const Index: React.FC<{}> = () => {
    const { user } = useSelector((state: any) => state.AuthReducer)
    const dispatch = useDispatch()

    return (
        <Container>
            <View style={{ flex: 2 }}>
                <ToptalLogo width={'100%'} height={'100%'} />
            </View>
            <View style={{ flex: 2 }}>
                <LogoSvg width={'100%'} height={'100%'} />
            </View>
            <View style={{ flex: 6, marginTop: verticalScale(20) }}>
                <RegText bigger str={`Email: ${user.email}`} />
                <RegText bigger str={`Name: ${user.name}`} />
                {user.email.includes("@toptal.com") &&
                    <RegText
                        customTextStyle={{ color: Colors.primary }}
                        bigger
                        str={`Special features coming soon to Toptal talent like yourself...`}
                    />
                }


                <View style={[GlobalStyles.bottomContainer, { flex: 1, width: '50%', alignSelf: 'center' }]}>
                    <Button text='Sign Out' onPress={() => dispatch({ type: "RESET" })} containerStyle={{ backgroundColor: 'tomato' }} />
                </View>

            </View>
        </Container >
    )
}

export default Index;