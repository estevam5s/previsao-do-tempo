const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { schema } = require('./services/graphqlService');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.use(errorHandler);

module.exports = app;
