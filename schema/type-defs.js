const { gql } = require ("apollo-server")

const typeDefs = gql `
  type User{
   id:ID!
   name:String!
   username: String!
   age:Int
   nationality:String!
   #type is being nested here
   # And it is not nested because not all people got frnds :)
   friends: [User]

  }

# this type Query is the parent to write all the other query in this
 type Query {
    # We want it to return the list of the user thats why we are using []
    users: [User!]!
     }

# The below is like that we have specified that only these many options should be there in the Data

# Its a good practice the to keep enum in CAPS ON
enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE

}


`;
module.exports = { typeDefs }