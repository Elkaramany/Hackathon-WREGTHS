import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { verticalScale } from 'react-native-size-matters';

import ContactCell, { Contact } from './ContactCell';
import { GlobalStyles, Colors, Dummy_User } from '@Config';

export interface ChatProps {
    onContactsSelected(selections: Contact[]): void;
}

function dummy_response() {
    let contacts: Contact[] = [];

    for (let i = 0; i < 3; i++) {
        contacts.push({
            profile_img_url: Dummy_User,
            name: `Contact ${i + 1}`,
        });
    }

    return contacts;
}

const ContactsView: React.FC<ChatProps> = ({ onContactsSelected }) => {
    const [selections, setSelections] = React.useState<number[]>([]);
    const contacts: Contact[] = dummy_response();

    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                renderItem={({ item, index }) => (
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
                                contacts.filter(
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...GlobalStyles.rowWrap,
        backgroundColor: Colors.backGround,
        ...GlobalStyles.centeredContainer,
        marginTop: verticalScale(10),
    },
});

export default ContactsView;