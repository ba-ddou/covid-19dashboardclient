import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import "./styles.sass";
import countries from "./countries";

export const SearchBar = ({ onSelect, onBlur, mainPanel }) => {
	const [options, setOptions] = useState();

	const onSelectHandler = (value) => {
		let target = countries.find((elem) => elem.value === value);
		onSelect(target);
	};

	const onSearchHandler = (searchText) => {
		setOptions(
			countries.filter((element) => {
				return element.value.includes(searchText.toLowerCase());
			})
		);
	};

	return (
		<div className={mainPanel ? "mainPanel searchBar" : "searchBar"}>
			<AutoComplete
				options={options}
				onSelect={onSelectHandler}
				onSearch={onSearchHandler}>
				{onBlur ? (
					<Input
						size="small"
						className="tag-input"
						onBlur={() => onBlur(false)}
						ref={(input) => input && input.focus()}
					/>
				) : (
					<Input.Search size="medium" placeholder="country name" />
				)}
			</AutoComplete>
		</div>
	);
};
