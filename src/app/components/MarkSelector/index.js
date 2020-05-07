import React, { useState } from "react";
import SearchBar from "app/components/SearchBar";
import { Tag } from "antd";
import "./styles.sass";

const hues = [
	"magenta",
	"red",
	"volcano",
	"orange",
	"gold",
	"lime",
	"green",
	"cyan",
	"blue",
	"geekblue",
	"purple",
];

const MarkSelector = (props) => {
	let [countries, setCountries] = useState([]);
	let onClose = (color, country) => {
		hues.push(color);
		setCountries(countries.filter((elem) => elem.name === country));
	};

	let onSelect = (country) => {
		var isSelected = countries.find((elem) => elem.name === country);
		if (!isSelected) {
			let color = hues.pop();
			if (color) setCountries([...countries, { name: country, color }]);
		}
	};
	return (
		<div id="markSelector">
			<div id="markSelector-tags">
				{countries.map((country, index) => (
					<Tag
						closable
						key={index}
						style={{ margin: ".5rem" }}
						color={country.color}
						onClose={onClose.bind(1, country.color)}>
						{country.name}
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
