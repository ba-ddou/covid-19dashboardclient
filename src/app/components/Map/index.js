import React, { useState, memo } from "react";
import MapChart from "./components/MapChart";
import ReactTooltip from "react-tooltip";
import PanelHeader from "app/components/PanelHeader";

import "./styles.sass";

const Map = ({ onClick, godViewData }) => {
	const [tooltipContent, setTooltipContent] = useState("");
	let [parameter, setParameter] = useState("active");
	// let setTooltipContent = (content) => {};
	return (
		<div id="mapPanel" className="mainPanel rootPanel">
			<PanelHeader
				title="Map view"
				parameter={parameter}
				setParameter={setParameter}
				helpText={`a chrophlete map showing covid-19 spread around the world`}
			/>
			<MapChart
				onClick={onClick}
				setTooltipContent={setTooltipContent}
				godViewData={godViewData}
				parameter={parameter}
			/>
			<ReactTooltip html={true}>{tooltipContent}</ReactTooltip>
		</div>
	);
};

export default memo(Map);
