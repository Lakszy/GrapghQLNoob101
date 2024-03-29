const {UserList, MovieList } = require("../FakeData")
const _ = require ("lodash")

const resolvers = { 
    Query : {
        users(){
            //  Here we have to make our API call to the query fullfilled
            return UserList;
        },

        // since we dont want the first para that is parent 
        // so we can left ( '_' or parent) there and for accepting
        // args we can use arguments  
        user: (parent, args) => {
            const id = args.id
            // We are passing as ID which can be number or string 
            // but in this case it is being passed as string 
            // So we need to convert that in Number
            const user  = _.find(UserList, {id: Number(id)})
            return user;
        },
        movies: () => {
            return MovieList
        },
        movie: (parent , args) => {
            const name = args.name
            const answer = _.find(MovieList, {name})
            return answer;
        },
    },
    User:{
        favMovie :() => {
           return  _.filter(
            MovieList,
            (movie) => 
            movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010 
            );
        },
    },
    Mutation:{
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
          },
          updateUsername: (parent, args) => {
            const { id, newUsername } = args.input;
            let userUpdated;
            UserList.forEach((user) => {
              if (user.id === Number(id)) {
                user.username = newUsername;
                userUpdated = user;
              }
            });
      
            return userUpdated;
          },
          deleteUser: (parent, args) => {
            const id = args.id;
            _.remove(UserList, (user) => user.id === Number(id));
            return null;
          },
    }
};

module.exports = { resolvers }
