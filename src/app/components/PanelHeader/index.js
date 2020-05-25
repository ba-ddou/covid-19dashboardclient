import React from "react";
import HelpTooltip from "./components/HelpTooltip";
import SettingMenu from "./components/SettingsMenu";

import "./styles.sass";

const PanelHeader = ({ title, ...props }) => {
	return (
		<div className="panelHeader">
			<h3>{title}</h3>
			<div>
				<SettingMenu {...props} />
				<HelpTooltip {...props} />
			</div>
		</div>
	);
};

export default PanelHeader;
