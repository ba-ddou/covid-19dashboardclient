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

const extractStats = (country, godViewData) => {
	if (godViewData) {
		let res = godViewData.find(
			(elem) => elem.territory == country.toLowerCase()
		);

		if (res)
			return {
				confirmed: res.confirmed,
				recovered: res.recovered,
				dead: res.dead,
			};
	}
	return {
		confirmed: "unavailable",
		recovered: "unavailable",
		dead: "unavailable",
	};
};

const MapChart = ({ setTooltipContent, onClick, godViewData }) => {
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
												confirmed,
												recovered,
												dead,
											} = extractStats(NAME, godViewData);
											setTooltipContent(
												`${NAME} — ${rounded(
													POP_EST
												)} <br /> 
                                                infections : ${confirmed} <br />
                                                Deaths : ${dead} <br />
                                                recoveries : ${recovered}`
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
