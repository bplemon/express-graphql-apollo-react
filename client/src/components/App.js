import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Launches from  './Launches/Launches';

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
})

const App = () => {
    return (
        <ApolloProvider client={client}>
            <div>
                <h1>SpaceX test site!</h1>
                <Launches />
            </div>
        </ApolloProvider>)
}

export default App;