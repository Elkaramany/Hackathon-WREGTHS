import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import CheckBox from '@react-native-community/checkbox';

import { RegText } from '@Components';
import { GlobalStyles, Colors } from '@Config';

export interface Contact {
    profile_img_url: ImageSourcePropType;
    name: string;
}

export interface ContactCellProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const ContactCell: React.FC<Contact & ContactCellProps> = ({
    profile_img_url,
    name,
    checked,
    onChange,
}) => {
    return (
        <View style={styles.container}>
            <Image source={profile_img_url} />
            <RegText str={name} />
            <CheckBox value={checked} onValueChange={onChange} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...GlobalStyles.columnWrap,
        backgroundColor: Colors.backGround,
        ...GlobalStyles.centeredContainer,
        marginTop: verticalScale(10),
    },
});


export default ContactCell;