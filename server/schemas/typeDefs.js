const { gql } = require("apollo-server-express");

const typeDefs = gql`

type Book {
    authors: String
}
`

module.exports = typeDefs;