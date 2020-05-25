import React, { useState } from "react";
import MarkSelector from "app/components/MarkSelector";
import "./styles.sass";
import useTimeSeries from "app/hooks/useTimeSeries";
import MultipleLineChart from "./components/MultipleLineChart";
import Loader from "app/components/Loader";

const MarkSeries = () => {
	let [countries, setCountries] = useState(["morocco"]);
	let { loading, error, data } = useTimeSeries(countries);
	return (
		<div id="markSeries" className="mainPanel rootPanel">
			<MarkSelector countries={countries} setCountries={setCountries} />
			<div id="markSeries-chart">
				<MultipleLineChart
					timeSeriesData={data ? data.timeSeries : false}
				/>
				{loading && <Loader />}
			</div>
		</div>
	);
};

export default MarkSeries;
