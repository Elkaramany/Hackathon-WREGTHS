import React from 'react';

import { Button, Container, Header } from '@Components';
import { Contact } from './ContactCell';
import ContactsView from './ContactsView';

export interface ChatProps {

}

const Index: React.FC<ChatProps> = ({ }) => {
    const [selections, setSelections] = React.useState<Contact[]>([]);

    return (
        <Container>
            <Header headerText="Chat and connect with your fellow Toptalers" />
            <ContactsView onContactsSelected={setSelections} />
            <Button
                text="Start Conversation"
                onPress={() => console.log(selections)}
            />
        </Container>
    );
};

export default Index;