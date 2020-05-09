import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import "./styles.sass";
import countries from "./countries";

export const SearchBar = (props) => {
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
		<div className={props.mainPanel ? "mainPanel searchBar" : "searchBar"}>
			<AutoComplete
				options={options}
				onSelect={onSelect}
				onSearch={onSearch}>
				<Input.Search size="medium" placeholder="country name" />
			</AutoComplete>
		</div>
	);
};

export const TagSearchBar = ({ onSelect, onBlur, mainPanel }) => {
	const [options, setOptions] = useState();

	const onSelectHandler = (value) => {
		let target = countries.find((elem) => elem.value == value);
		onSelect(target);
	};

	const onSearchHandler = (searchText) => {
		setOptions(
			countries.filter((element) => {
				return element.value.includes(searchText);
			})
		);
	};

	return (
		<AutoComplete
			options={options}
			onSelect={onSelectHandler}
			onSearch={onSearchHandler}>
			<Input
				size="small"
				className="tag-input"
				onBlur={() => onBlur(false)}
			/>
		</AutoComplete>
	);
};
