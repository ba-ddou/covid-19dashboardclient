// import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const QUERY = gql`
	query($date: String!) {
		godView(date: $date) {
			date
			territory
			confirmed
			recovered
			dead
		}
	}
`;

const useGodView = (date) => {
	const { loading, error, data } = useQuery(QUERY, {
		variables: { date },
	});

	return { loading, error, godViewData: data };
};

export default useGodView;
