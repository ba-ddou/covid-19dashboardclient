import React, { useEffect, memo } from "react";
import { Line } from "@antv/g2plot";

let getLine = (data, color) => {
	return new Line(document.getElementById("multipleLineChart"), {
		padding: [0, 20, 30, 60],
		forceFit: true,
		data,
		xField: "date",
		yField: "confirmed",
		seriesField: "territory",
		// color: (elem) => color[elem.territory],
		xAxis: {
			type: "dateTime",
			tickCount: 5,
			label: {
				visible: true,
				autoHide: true,
			},
		},
		// yAxis: {
		// 	formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
		// },
		legend: {
			visible: false,
		},
		label: {
			visible: true,
			type: "line",
		},
		animation: {
			appear: {
				animation: "clipingWithData",
				duration: 0.4,
			},
		},
		smooth: true,
	});
};

const MultipleLineChart = ({ timeSeriesData }) => {
	useEffect(() => {
		async function run() {
			let data = timeSeriesData.reduce(
				(accumulator, current) => [...accumulator, ...current.stats],
				[]
			);
			const linePlot = getLine(data, { morocco: "#F00" });
			linePlot.render();
		}
		if (timeSeriesData) run();
		return () => {
			document.getElementById("multipleLineChart").innerHTML = "";
		};
	}, [timeSeriesData]);
	return <div id="multipleLineChart"></div>;
};

export default memo(MultipleLineChart);
