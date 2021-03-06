import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../apollo/schema';

const apolloServer = new ApolloServer({ 
    schema,
    playground: true,
    introspection: true
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })