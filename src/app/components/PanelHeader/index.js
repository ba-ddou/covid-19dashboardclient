import React from "react";
import HelpTooltip from "./components/HelpTooltip";
import SettingMenu from "./components/SettingsMenu";

import "./styles.sass";

const PanelHeader = ({ title, helpText }) => {
	return (
		<div className="panelHeader">
			<h2>{title}</h2>
			<div>
				<SettingMenu />
				<HelpTooltip helpText={helpText} />
			</div>
		</div>
	);
};

export default PanelHeader;
