import React from "react";
import { Tag } from "antd";

var tagsList = ["morocco", "italy", "usa"];

const CountrySelector = () => {
	let log = (coutry) => console.log(`closed ${coutry}`);
	return (
		<div>
			{tagsList.map((country, index) => (
				<Tag
					closable
					key={index}
					color="#FF5533"
					onClose={log.bind(1, country)}>
					{country}
				</Tag>
			))}
		</div>
	);
};

export default CountrySelector;
