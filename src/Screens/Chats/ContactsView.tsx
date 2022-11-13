import {GlobalStyles, Colors} from 'Config';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {verticalScale} from 'react-native-size-matters';
import ContactCell, {Contact} from './ContactCell';

export interface ChatProps {
    onContactsSelected(selections: Contact[]): void;
}

export interface ContactsResponse {
    contacts: Contact[];
}

function dummy_response() {
    let contacts: Contact[] = [];

    for (let i = 0; i < 10; i++) {
        contacts.push({
            profile_img_url: require('@Config/assets/images/dummy_user.png'),
            name: 'Contact ' + i,
        });
    }

    return {contacts};
}

const ContactsView: React.FC<ChatProps> = ({onContactsSelected}) => {
    const [selections, setSelections] = React.useState<number[]>([]);
    const data: ContactsResponse = dummy_response();

    return (
        <View style={styles.container}>
            <FlatList
                data={data.contacts}
                renderItem={({item, index}) => (
                    <ContactCell
                        {...item}
                        checked={
                            selections.find(i => i === index) !== undefined
                        }
                        onChange={val => {
                            setSelections(prev => {
                                if (val) {
                                    return [...prev, index];
                                } else {
                                    return prev.filter(i => i !== index);
                                }
                            });
                            onContactsSelected(
                                data.contacts.filter(
                                    (_, i) =>
                                        selections.includes(i) || i === index,
                                ),
                            );
                        }}
                    />
                )}
            />
        </View>
    );
};

export default ContactsView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...GlobalStyles.rowWrap,
        backgroundColor: Colors.backGround,
        ...GlobalStyles.centeredContainer,
        marginTop: verticalScale(10),
    },
});
