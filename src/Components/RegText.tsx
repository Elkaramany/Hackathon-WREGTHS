import React from 'react';
import { Text, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';

import { GlobalStyles } from '../Config';

interface Props {
    str: string
    customTextStyle?: TextStyle,
    big?: boolean
    bigger?: boolean
    biggest?: boolean
}

const RegText: React.FC<Props> = ({ str, customTextStyle, big, bigger, biggest }) => {

    const getFontSize = () => {
        if (big === true) return scale(14)
        if (bigger === true) return scale(16)
        if (biggest === true) return scale(18)

        return scale(12)
    }

    return (
        <Text style={[GlobalStyles.regularText, { fontSize: getFontSize() }, customTextStyle]}>
            {str}
        </Text>
    )
}

export default RegText