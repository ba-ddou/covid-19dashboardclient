import React, { useState } from "react";
import MapChart from "./components/MapChart";
import ReactTooltip from "react-tooltip";
import "./styles.sass";

// import { useQuery } from "@apollo/react-hooks";
// import { gql } from "apollo-boost";

// const QUERY = gql`
// 	query($date: String!) {
// 		godView(date: $date) {
// 			date
// 			territory
// 			confirmed
// 		}
// 	}
// `;

const Map = () => {
	// const { loading, error, data } = useQuery(QUERY, {
	// 	variables: { date: "03/01/2020" },
	// });

	// let content = <p>{JSON.stringify(data)}</p>;
	// if (error) content = <p style={{ color: "red" }}>{error}</p>;
	// else if (loading) content = <p>loading...</p>;

	const [content, setContent] = useState("");
	return (
		<div id="mapPanel" className="mainPanel">
			<MapChart setTooltipContent={setContent} />
			<ReactTooltip html={true}>{content}</ReactTooltip>
		</div>
	);
};

export default Map;
