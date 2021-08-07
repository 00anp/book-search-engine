const { gql } = require('apollo-server-express');

// typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]        
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        me: User
        # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    }

    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    input saveBook {
        authors: [String]
        description: String
        title: String
        bookId: String
        image: String
        link: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: saveBook): User
        removeBook(bookId: String!): User
}
`;

// export the typeDefs
module.exports = typeDefs;