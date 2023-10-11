const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql")

const app = express();


// define a simple graphQL schema
const schema = new GraphQLSchema ({
    query : new GraphQLObjectType({
        name : 'HelloQuery',
        fields: {
            hello:{
                type:GraphQLString,
                resolve:() => 'Hello Graph',
            },
        },
    })
});


// create a graphQL end point
app.use("/graphserver", graphqlHTTP({
        schema:schema,
        graphiql:true
})
);


app.listen( 4000, ()=>{
    console.log("server is listenning on localhost:4000/graphserver")
});



