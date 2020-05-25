import React from "react";
import { HelpCircle } from "react-feather";

import "./styles.sass";

const HelpTooltip = () => {
	return (
		<div className="helpTooltip">
			<HelpCircle size={18} />
		</div>
	);
};

export default HelpTooltip;
