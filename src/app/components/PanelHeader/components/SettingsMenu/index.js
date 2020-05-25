import React from "react";
import { Settings } from "react-feather";
import { Menu, Dropdown, Radio } from "antd";

import "./styles.sass";

const SettingsMenu = ({ parameter, setParameter }) => {
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
								{ value: "active", text: "active cases" },
								{
									value: "newActive",
									text: "daily active cases",
								},
								{
									value: "confirmed",
									text: "confirmed cases",
								},
								{
									value: "newConfirmed",
									text: "daily confirmed cases",
								},
								{ value: "dead", text: "deaths" },
								{ value: "newDead", text: "daily deaths" },
								{ value: "recovered", text: "recoveries" },
								{
									value: "newRecovered",
									text: "daily recoveries",
								},
							].map((elem) => (
								<Radio
									key={elem.value}
									style={radioStyle}
									value={elem.value}>
									{elem.text}
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
