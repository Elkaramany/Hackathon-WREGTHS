import React from 'react'
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Button, RegText } from '@Components';
import { Colors, GlobalStyles } from '@Config';

const Index: React.FC<{}> = () => {
    const { user } = useSelector((state: any) => state.AuthReducer)
    const dispatch = useDispatch()

    return (
        <Container>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <RegText bigger str={`Email: ${user.email}`} />
                <RegText bigger str={`Name: ${user.name}`} />
                {user.email.includes("@toptal.com") && <RegText customTextStyle={{ color: Colors.primary }} bigger str={`Toptal Freelancer`} />}
            </View>

            <View style={[GlobalStyles.bottomContainer, { flex: 1, width: '50%', alignSelf: 'center' }]}>
                <Button text='Sign Out' onPress={() => dispatch({ type: "RESET" })} containerStyle={{ backgroundColor: 'tomato' }} />
            </View>

        </Container >
    )
}

export default Index;