// import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const QUERY = gql`
	query($date: String!) {
		godView(date: $date) {
			territory
			date
			active
			newActive
			confirmed
			newConfirmed
			recovered
			newRecovered
			dead
			newDead
		}
	}
`;

// return the date 1 day in the past
function toPreviousDate(date) {
	let dateMs = new Date(date).getTime();
	dateMs -= 1000 * 60 * 60 * 24;
	return new Date(dateMs).toISOString().slice(0, 10);
}
// dates in the array are the date who's previous day's data is already fetched
// the first day of the time series is a special cases, since it has no previous day
var fetchedDates = ["2020-01-22"];
const useGodView = (date) => {
	// console.log(date);
	const { loading, error, data, client } = useQuery(QUERY, {
		variables: { date },
	});
	let dateIsFetched = fetchedDates.find((elem) => elem === date);
	// fetch the previous day's data if the current day's data if retreived for the first time
	if (!dateIsFetched) {
		fetchedDates.push(date);
		let previousDate = toPreviousDate(date);
		// console.log("previousDate", previousDate);
		client.query({
			query: QUERY,
			variables: { date: previousDate },
		});
	}
	// console.log(data, error);
	return { loading, error, godViewData: data };
};

export default useGodView;
