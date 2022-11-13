import {Button, Container, Header} from '@Components';
import React from 'react';
import {Contact} from './ContactCell';
import ContactsView from './ContactsView';

export interface ChatProps {
    onStart(selections: Contact[]): void;
}

const Index: React.FC<ChatProps> = ({onStart}) => {
    const [selections, setSelections] = React.useState<Contact[]>([]);

    return (
        <Container>
            <Header headerText="Chat" />
            <ContactsView onContactsSelected={setSelections} />
            <Button
                text="Start Conversation"
                onPress={() => onStart(selections)}
            />
        </Container>
    );
};

export default Index;
