const {UserList } = require("../FakeData")

const resolvers = { 
    Query : {
        users(){
            //  Here we have to make our API call to the query fullfilled
            return UserList;
        },
    },
};
module.exports = { resolvers }
