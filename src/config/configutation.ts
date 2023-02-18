export default () => ({
  db: {
    cosmos: {
      name: process.env.AZURE_COSMOS_DB_NAME,
      host: process.env.AZURE_COSMOS_DB_ENDPOINT,
      key: process.env.KEY,
    },
    matchingGraph: {},
  },
});
