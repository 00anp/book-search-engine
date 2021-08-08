const { gql } = require('apollo-server-express');


//Define the necessary Query and Mutation types
const typeDefs = gql`
    type User {
        _id: ID!
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
    }

    type Book {
        _id: ID!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    input saveBook {
        authors: [String]
        description: String!
        title: String!
        bookId: String!
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

module.exports = typeDefs;