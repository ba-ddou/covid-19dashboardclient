import React, { useState } from "react";
import { AutoComplete } from "antd";
import "./styles.sass";

const data = [
	{ value: "morocco" },
	{ value: "canada" },
	{ value: "tunisia" },
	{ value: "united states" },
	{ value: "united kingdom" },
	{ value: "algeria" },
];

const SearchBar = () => {
	const [options, setOptions] = useState();

	const onSearch = (searchText) => {
		setOptions(
			data.filter((element) => {
				return element.value.includes(searchText);
			})
		);
	};

	const onSelect = (data) => {
		console.log("onSelect", data);
	};

	return (
		<>
			<AutoComplete
				options={options}
				style={{
					width: 200,
				}}
				onSelect={onSelect}
				onSearch={onSearch}
				placeholder="country name"
			/>
		</>
	);
};

export default SearchBar;
