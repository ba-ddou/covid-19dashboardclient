// import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const QUERY = gql`
	query($territories: [String!]) {
		timeSeries(territories: $territories) {
			name
			stats {
				territory
				date
				confirmed
				recovered
				dead
			}
		}
	}
`;

const useGodView = (territories) => {
	console.log(territories);
	const { loading, error, data } = useQuery(QUERY, {
		variables: { territories },
	});

	return { loading, error, data };
};

export default useGodView;
