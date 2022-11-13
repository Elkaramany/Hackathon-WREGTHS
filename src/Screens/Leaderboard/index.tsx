import React from 'react'

import { Container, Header, RegText } from '@Components'

const Leaderboard: React.FC<{}> = ({ }) => {
    return (
        <Container>
            <Header headerText="Leaderboards to see how your rank up among the top 3% of talent" />

            <RegText str='Coming soon...' />
        </Container>
    )
}

export default Leaderboard;