import React, { useState, memo } from "react";
import MapChart from "./components/MapChart";
import ReactTooltip from "react-tooltip";
import "./styles.sass";

const Map = ({ onClick, godViewData }) => {
	const [tooltipContent, setTooltipContent] = useState("");
	// let setTooltipContent = (content) => {};
	return (
		<div id="mapPanel" className="mainPanel rootPanel">
			<MapChart
				onClick={onClick}
				setTooltipContent={setTooltipContent}
				godViewData={godViewData}
			/>
			<ReactTooltip html={true}>{tooltipContent}</ReactTooltip>
		</div>
	);
};

export default memo(Map);
