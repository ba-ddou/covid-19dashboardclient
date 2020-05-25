import React, { useState } from "react";
import { HelpCircle } from "react-feather";
import { Tooltip } from "antd";

import "./styles.sass";

const HelpTooltip = ({ helpText }) => {
	// let [content, setContent] = useState("");
	return (
		<div className="helpTooltip">
			<Tooltip title={helpText} placement="bottomRight">
				<HelpCircle size={18} />
			</Tooltip>
		</div>
	);
};

export default HelpTooltip;
