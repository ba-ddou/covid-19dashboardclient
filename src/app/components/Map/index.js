import React, { useState, memo } from "react";
import MapChart from "./components/MapChart";
import ReactTooltip from "react-tooltip";
import PanelHeader from "app/components/PanelHeader";

import "./styles.sass";

const Map = ({ onClick, godViewData }) => {
	const [tooltipContent, setTooltipContent] = useState("");
	// let setTooltipContent = (content) => {};
	return (
		<div id="mapPanel" className="mainPanel rootPanel">
			<PanelHeader
				title="Map view"
				helpText={`a chrophlete map showing covid-19 spread around the world`}
			/>
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
