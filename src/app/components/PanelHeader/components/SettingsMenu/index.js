import React from "react";
import { Settings } from "react-feather";
import { Menu, Dropdown, Radio } from "antd";

import "./styles.sass";

const SettingsMenu = ({ parameter, setParameter, multi }) => {
	const radioStyle = {
		display: "block",
		height: "30px",
		lineHeight: "30px",
		margin: "0 .5rem",
	};
	return (
		<div className="settingsMenu">
			<Dropdown
				trigger={["click"]}
				overlay={
					<Menu>
						<Radio.Group
							onChange={({ target }) =>
								setParameter(target.value)
							}
							value={parameter}>
							{[
								{ value: "active", label: "active cases" },
								{
									value: "newActive",
									label: "daily active cases",
								},
								{
									value: "confirmed",
									label: "confirmed cases",
								},
								{
									value: "newConfirmed",
									label: "daily confirmed cases",
								},
								{ value: "dead", label: "deaths" },
								{ value: "newDead", label: "daily deaths" },
								{ value: "recovered", label: "recoveries" },
								{
									value: "newRecovered",
									label: "daily recoveries",
								},
							].map((elem) => (
								<Radio
									key={elem.value}
									style={radioStyle}
									value={elem.value}>
									{elem.label}
								</Radio>
							))}
						</Radio.Group>
					</Menu>
				}>
				<Settings size={18} />
			</Dropdown>
		</div>
	);
};

export default SettingsMenu;
