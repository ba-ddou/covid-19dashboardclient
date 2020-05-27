// import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const QUERY = gql`
	query{
		date
	}
`;

const useDate = () => {
	const { loading, error, data } = useQuery(QUERY);
    // console.log("useDate -> data", data);
    if(data) return { lastDate : data };
    else return false;
	
};

export default useDate;
