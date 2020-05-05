import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import "./styles.sass";
import countries from "./countries";

const SearchBar = (props) => {
	const [options, setOptions] = useState();

	const onSelect = (value) => {
		let target = countries.find((elem) => elem.value == value);
		props.onSelect(target);
	};

	const onSearch = (searchText) => {
		setOptions(
			countries.filter((element) => {
				return element.value.includes(searchText);
			})
		);
	};

	return (
		<div className="mainPanel">
			<AutoComplete
				options={options}
				onSelect={onSelect}
				onSearch={onSearch}>
				<Input.Search size="medium" placeholder="country name" />
			</AutoComplete>
		</div>
	);
};

export default SearchBar;
