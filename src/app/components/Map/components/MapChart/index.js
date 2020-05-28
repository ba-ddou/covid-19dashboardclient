import React, { memo } from "react";
import {
	ZoomableGroup,
	ComposableMap,
	Geographies,
	Geography,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";

const geoUrl =
	"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = (num) => {
	if (num > 1000000000) {
		return Math.round(num / 100000000) / 10 + "Bn";
	} else if (num > 1000000) {
		return Math.round(num / 100000) / 10 + "M";
	} else {
		return Math.round(num / 100) / 10 + "K";
	}
};

const extractStats = (country, godViewData) => {
	if (godViewData) {
		let res = godViewData.find(
			(elem) => elem.territory === country.toLowerCase()
		);

		if (res) return res;
	}
	return {};
};

const MapChart = ({ setTooltipContent, onClick, godViewData, parameter }) => {
	// if (godViewData)
	// 	console.log(
	// 		parameter,
	// 		Math.max(
	// 			...godViewData.map((elem) =>
	// 				elem.territory !== "global" ? elem[parameter] : 0
	// 			)
	// 		)
	// 	);
	let colorScale = godViewData
		? scaleLinear()
				.domain([
					1,
					Math.max(...godViewData.map((elem) => elem[parameter])),
				])
				.range(["#ffedea", "#ff5233"])
		: false;
	return (
		<>
			<ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
				<ZoomableGroup>
					<Geographies geography={geoUrl}>
						{({ geographies }) =>
							geographies.map((geo) => (
								<Geography
									key={geo.rsmKey}
									geography={geo}
									// hover state event handler
									onMouseEnter={(_) => {
										if (godViewData) {
											const {
												NAME,
												POP_EST,
											} = geo.properties;
											let {
												active,
												confirmed,
												recovered,
												dead,
											} = extractStats(NAME, godViewData);
											setTooltipContent(
												`${NAME} — ${rounded(
													POP_EST
												)} <br /> 
												Active cases : ${active} <br />
                                                Confirmed cases : ${confirmed} <br />
                                                Deaths : ${dead} <br />
                                                Recoveries : ${recovered}`
											);
										}
									}}
									onMouseLeave={() => {
										setTooltipContent("");
									}}
									onClick={() => {
										const { NAME, ISO_A2 } = geo.properties;
										onClick({ value: NAME, ISO_A2 });
									}}
									style={{
										default: {
											fill: ((_) => {
												const { NAME } = geo.properties;
												let stats = extractStats(
													NAME,
													godViewData
												);
												// console.log(stats, parameter);
												return typeof stats[
													parameter
												] === "number"
													? colorScale(
															stats[parameter]
													  )
													: "#F5F4F6";
											})(),
											outline: "none",
										},
										hover: {
											fill: "#F53",
											outline: "none",
										},
										pressed: {
											fill: "#E42",
											outline: "none",
										},
									}}
								/>
							))
						}
					</Geographies>
				</ZoomableGroup>
			</ComposableMap>
		</>
	);
};

export default memo(MapChart);
