const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema, root } = require('../services/graphqlService');

const router = express.Router();

router.use(
  '/',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

module.exports = router;
