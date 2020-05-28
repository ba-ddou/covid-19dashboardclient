import React, { useEffect, useState } from "react";
import { Area } from "@antv/g2plot";
import useTimeSeries from "app/hooks/useTimeSeries";
import Loader from "app/components/Loader";
import PanelHeader from "app/components/PanelHeader";

import "./styles.sass";

let getArea = (data, parameter) => {
	return new Area(document.getElementById("areaSeries-chart"), {
		data,
		padding: [10, 20, 30, 60],
		xField: "date",
		yField: parameter,
		// yAxis :{
		// 	formatter: (v) => {
		// 		if(v>1000000) return `${parseInt(v / 1000000)} M`
		// 		else if(v>1000) return `${parseInt(v / 1000000)} K`
		// 		else return v
		// 	},
		// },
		xAxis: {
			type: "dateTime",
			tickCount: 5,
		},
		color: "#FF5533",
		smooth: true,
		legend: true,
		animation: {
			appear: {
				animation: "clipingWithData",
				duration: 0.4,
			},
		},
	});
};

const AreaSeries = ({ country }) => {
	let { loading, error, data } = useTimeSeries([country.value.toLowerCase()]);
	let [parameter, setParameter] = useState("active");
	useEffect(
		(_) => {
			async function run() {
				// let data = await fetch(
				// 	"https:/g2plot.antv.vision/en/examples/data/fireworks-sales.json"
				// ).then((res) => res.json());
				let areaPlot = getArea(data.timeSeries[0].stats, parameter);
				// console.log(data.timeSeries[0].stats);
				areaPlot.render();
			}
			if (data) run();
			return () => {
				document.getElementById("areaSeries-chart").innerHTML = "";
			};
		},
		[data, parameter]
	);
	return (
		<div id="areaSeries" className="mainPanel rootPanel">
			<PanelHeader
				title={`Daily Statistics changes`}
				parameter={parameter}
				setParameter={setParameter}
				helpText={`The progression of covid-19
					statistics in the selected country`}
			/>
			<div id="areaSeries-chart"></div>
			{loading && <Loader />}
		</div>
	);
};

export default AreaSeries;
