import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Button, Container, Header, RegText } from '@Components'
import { GlobalStyles } from '@Config'

let str = `MIT License
Copyright (c) 2017 Boris Berak
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
5:46
Copyright Notice
All content, artwork, sounds, characters and graphics are the property of Nintendo of America Inc, its affiliates and/or subsidiaries.`

interface Props {
    navigation: any
}

const Disclaimer: React.FC<Props> = ({ navigation }) => {
    return (
        <Container>
            <Header headerText='DISCLAIMER' />
            <RegText
                big
                customTextStyle={{ textAlign: 'center' }}
                str='THIS GAME IS NOT OUR PROPERTY NOR ARE WE MONETIZING FROM IT'
            />

            <RegText
                customTextStyle={{ textAlign: 'center' }}
                str={str}
            />

            <View style={GlobalStyles.bottomContainer}>
                <Button text='I Understand' onPress={() => navigation.navigate("DonkeyKong")} />
            </View>
        </Container>
    )
}



export default Disclaimer;