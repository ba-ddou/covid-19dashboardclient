import React, { useState } from "react";
import MarkSelector from "app/components/MarkSelector";
import useTimeSeries from "app/hooks/useTimeSeries";
import MultipleLineChart from "./components/MultipleLineChart";
import Loader from "app/components/Loader";
import PanelHeader from "app/components/PanelHeader";

import "./styles.sass";

const MarkSeries = () => {
	let [countries, setCountries] = useState(["morocco"]);
	let { loading, error, data } = useTimeSeries(countries);
	return (
		<div id="markSeries" className="mainPanel rootPanel">
			<PanelHeader
				title="Mark series"
				helpText={`Compare covid-19 statistics between countries`}
			/>
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
