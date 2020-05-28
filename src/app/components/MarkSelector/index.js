import React, { useState } from "react";
import { Tag } from "antd";
import { Plus } from "react-feather";
import { SearchBar } from "app/components/SearchBar";
import "./styles.sass";

// const hues = [
// 	"magenta",
// 	"red",
// 	"volcano",
// 	"orange",
// 	"gold",
// 	"lime",
// 	"green",
// 	"cyan",
// 	"blue",
// 	"geekblue",
// 	"purple",
// ];
const MarkSelector = ({ countries, setCountries }) => {
	let [inputVisible, setInputVisible] = useState(false);

	let handleClose = (removedCountry, color) => {
		// hues.push(color);
		setCountries(countries.filter((tag) => tag !== removedCountry));
	};

	let showInput = () => {
		setInputVisible(true);
	};

	let onSelectHandler = (newCountry) => {
		if (newCountry) {
			let isSelected = countries.find(
				(elem) => elem.name === newCountry.value
			);
			if (!isSelected) {
				setCountries([...countries, newCountry.value]);
				setInputVisible(false);
				return 0;
			}
		}
		setInputVisible(false);
	};

	return (
		<div id="markSelector">
			{countries.map((country, index) => {
				return (
					<Tag
						closable
						className="edit-tag"
						key={country}
						// color={country.color}
						onClose={() => handleClose(country)}>
						{country}
					</Tag>
				);
			})}
			{inputVisible && (
				<SearchBar
					mainPanel={false}
					onSelect={onSelectHandler}
					onBlur={onSelectHandler}
				/>
			)}
			{!inputVisible && (
				<Tag className="site-tag-plus" onClick={showInput}>
					<Plus size={15} /> Add Country
				</Tag>
			)}
		</div>
	);
};

export default MarkSelector;
