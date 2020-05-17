import React, { useEffect } from "react";
import { Area } from "@antv/g2plot";
import useTimeSeries from "app/hooks/useTimeSeries";
import "./styles.sass";
import Loader from "app/components/Loader";

let getArea = (data) => {
	return new Area(document.getElementById("areaSeries-chart"), {
		data,
		xField: "date",
		yField: "active",
		xAxis: {
			type: "dateTime",
			tickCount: 5,
		},
		color: "#FF5533",
		smooth: true,
	});
};

const AreaSeries = ({ country }) => {
	let { loading, error, data } = useTimeSeries([country.value.toLowerCase()]);
	useEffect(
		(_) => {
			async function run() {
				// let data = await fetch(
				// 	"https:/g2plot.antv.vision/en/examples/data/fireworks-sales.json"
				// ).then((res) => res.json());
				let areaPlot = getArea(data.timeSeries[0].stats);
				console.log(data.timeSeries[0].stats);
				areaPlot.render();
			}
			if (data) run();
			return () => {
				document.getElementById("areaSeries-chart").innerHTML = "";
			};
		},
		[data]
	);
	return (
		<div id="areaSeries" className="mainPanel">
			<div id="areaSeries-chart"></div>
			{loading && <Loader />}
		</div>
	);
};

export default AreaSeries;
