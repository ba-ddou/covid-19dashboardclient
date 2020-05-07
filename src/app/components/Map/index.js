import React, { useState, memo } from "react";
import MapChart from "./components/MapChart";
import ReactTooltip from "react-tooltip";
import "./styles.sass";

const Map = ({ onClick, godViewData }) => {
	// const [tooltipContent, setTooltipContent] = useState("");
	let setTooltipContent = (content) => {};
	return (
		<div id="mapPanel" className="mainPanel">
			<MapChart onClick={onClick} setTooltipContent={setTooltipContent} />
			{/* <ReactTooltip html={true}>{tooltipContent}</ReactTooltip> */}
			<ReactTooltip html={true}>
				{JSON.stringify(godViewData)}
			</ReactTooltip>
		</div>
	);
};

export default memo(Map);
