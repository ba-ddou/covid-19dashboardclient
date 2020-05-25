import React from "react";
import HelpTooltip from "./components/HelpTooltip";
import SettingMenu from "./components/SettingsMenu";

import "./styles.sass";

const PanelHeader = ({ title }) => {
	return (
		<div className="panelHeader">
			<h2>{title}</h2>
			<div>
				<SettingMenu />
				<HelpTooltip />
			</div>
		</div>
	);
};

export default PanelHeader;
