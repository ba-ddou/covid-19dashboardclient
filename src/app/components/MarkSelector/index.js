import React, { useState } from "react";
import SearchBar from "app/components/SearchBar";
import { Tag } from "antd";
import "./styles.sass";

const MarkSelector = (props) => {
	let [countries, setCountries] = useState([]);
	let onClose = (country) =>
		setCountries(countries.filter((elem) => elem !== country));
	let onSelect = (country) => setCountries([...countries, country]);
	return (
		<div id="markSelector">
			<div id="markSelector-tags">
				{countries.map((country, index) => (
					<Tag
						closable
						key={index}
						style={{ margin: ".5rem" }}
						color="#FF5533"
						onClose={onClose}>
						{country}
					</Tag>
				))}
			</div>
			<div id="markSelector-searchBar">
				<SearchBar onSelect={onSelect} />
			</div>
		</div>
	);
};

export default MarkSelector;
