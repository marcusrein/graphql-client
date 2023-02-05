<template>
	<div>
		<ul
			v-for="(strategy, strategyIndex) in result.votingStrategies"
			:key="strategyIndex"
		>
			<ul v-for="(vote, voteIndex) in strategy.votes" :key="voteIndex">
				<li>{{ vote.from }}</li>
				<li>{{ vote.to }}</li>
				<li>{{ vote.token }}</li>
				<li>{{ vote.amount }}</li>
				<li>{{ vote.createdAt }}</li>
				<li>{{ vote.id }}</li>
				<li>{{ vote.projectId }}</li>
				<li>{{ vote.version }}</li>
			</ul>
		</ul>
	</div>
</template>

<script>
import { useQuery } from "@vue/apollo-composable";
import ALL_VOTES_QUERY from "./graphql/allVotes.query.gql";
// import getFirstTransactionDate from "./addressCreated";

// const ALL_BOOKS_QUERY = gql`
// 	query AllBooks {
// 		allBooks {
// 			id
// 			title
// 			rating
// 		}
// 	}
// `;
export default {
	name: "App",
	setup() {
		const { result } = useQuery(ALL_VOTES_QUERY);

		// const addressArray = [];

		// for (const strategy of result.votingStrategies) {
		// 	for (const vote of strategy.votes) {
		// 		addressArray.push(vote.from);
		// 	}
		// }
		// console.log("THIS IS THE ADDRESSSARRYYY%$$%$%$ " + addressArray);

		return { result };
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

.list-wrapper {
	display: flex;
	margin: 0 auto;
	max-width: 960px;
}

.list {
	width: 50%;
}
</style>
