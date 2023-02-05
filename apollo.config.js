module.exports = {
	client: {
		service: {
			name: "my-graphql-app",
			// URL to the GraphQL API
			url: "https://api.thegraph.com/subgraphs/name/gitcoinco/grants-round-goerli-testnet",
		},
		// Files processed by the extension
		includes: ["src/**/*.gql"],
	},
};
