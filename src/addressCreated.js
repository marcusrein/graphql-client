export async function getFirstTransactionDate() {
	const address = "YOUR_ADDRESS_HERE";

	const GET_FIRST_TRANSACTION = gql`
		query GetFirstTransaction($address: String!) {
			transactions(
				first: 1
				orderBy: blockTimestamp
				orderDirection: asc
				where: { from: $address }
			) {
				blockTimestamp
			}
		}
	`;

	const { data } = await this.$apollo.query({
		query: GET_FIRST_TRANSACTION,
		variables: { address },
	});

	if (data.transactions.length > 0) {
		this.firstTransactionDate = new Date(
			data.transactions[0].blockTimestamp * 1000
		);
	} else {
		this.firstTransactionDate = null;
	}
	console.log(this.firstTransactionDate);

	return data.firstTransactionDate;
}
