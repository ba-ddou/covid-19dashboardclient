import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import "./styles.sass";
import countries from "./countries";

const SearchBar = (props) => {
	const [options, setOptions] = useState();

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
				// style={{
				// 	width: 200,
				// }}
				onSelect={props.onSelect}
				onSearch={onSearch}>
				<Input.Search size="medium" placeholder="country name" />
			</AutoComplete>
		</div>
	);
};

export default SearchBar;
