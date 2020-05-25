import React from "react";
import { Settings } from "react-feather";

import "./styles.sass";

const SettingsMenu = () => {
	return (
		<div className="settingsMenu">
			<Settings size={18} />
		</div>
	);
};

export default SettingsMenu;
