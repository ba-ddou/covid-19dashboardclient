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

const colorScale = scaleLinear()
	.domain([1000000, 400000000])
	.range(["#ffedea", "#ff5233"]);
const rounded = (num) => {
	if (num > 1000000000) {
		return Math.round(num / 100000000) / 10 + "Bn";
	} else if (num > 1000000) {
		return Math.round(num / 100000) / 10 + "M";
	} else {
		return Math.round(num / 100) / 10 + "K";
	}
};

const MapChart = ({ setTooltipContent, onClick }) => {
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
									onMouseEnter={() => {
										const {
											NAME,
											POP_EST,
										} = geo.properties;
										let infections = Math.round(
											0.0001 * POP_EST
										);
										let deaths = Math.round(
											infections * 0.1
										);
										let recoveries = Math.round(
											infections * 0.04
										);
										setTooltipContent(
											`${NAME} — ${rounded(
												POP_EST
											)} <br /> 
                                                infections : ${infections} <br />
                                                Deaths : ${deaths} <br />
                                                recoveries : ${recoveries}`
										);
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
												const {
													POP_EST,
												} = geo.properties;
												return POP_EST
													? colorScale(POP_EST)
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
