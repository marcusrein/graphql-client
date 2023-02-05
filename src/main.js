import { createApp, h, provide } from "vue";
import App from "./App.vue";
import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client/core";
import gql from "graphql-tag";
import { DefaultApolloClient } from "@vue/apollo-composable";

// const httpLink = createHttpLink({
// 	uri: "http://localhost:4000/graphql",
// });

const httpLink = createHttpLink({
	uri: "https://api.thegraph.com/subgraphs/name/gitcoinco/grants-round-goerli-testnet",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
	link: httpLink,
	cache,
});

const ALL_VOTES_QUERY = gql`
	query InitQuery {
		votingStrategies {
			strategyName
			strategyAddress
			votes(orderBy: from) {
				amount
				createdAt
				from
				id
				projectId
				to
				token
				version
			}
		}
	}
`;

const ALL_BOOKS_QUERY = gql`
	query AllBooks {
		allBooks {
			id
			title
			rating
		}
	}
`;

// const ALL_BOOKS_QUERY = gql`
// 	query AllBooks {
// 		allBooks {
// 			id
// 			title
// 			rating
// 		}
// 	}
// `;

// apolloClient
// 	.query({
// 		query: ALL_VOTES_QUERY,
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	});

const app = createApp({
	setup() {
		provide(DefaultApolloClient, apolloClient);
	},
	render: () => h(App),
});

app.mount("#app");
