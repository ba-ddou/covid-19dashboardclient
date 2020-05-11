import React, { useState } from "react";
import MarkSelector from "app/components/MarkSelector";
import "./styles.sass";
import useTimeSeries from "app/hooks/useTimeSeries";
import MultipleLineChart from "./components/MultipleLineChart";

const MarkSeries = () => {
	let [countries, setCountries] = useState(["morocco"]);
	let { loading, error, data } = useTimeSeries(countries);
	return (
		<div id="markSeries" className="mainPanel">
			<MarkSelector countries={countries} setCountries={setCountries} />
			<MultipleLineChart
				timeSeriesData={data ? data.timeSeries : false}
			/>
			{/* <div>
				{loading ? <p>loading...</p> : <p>{JSON.stringify(data)}</p>}
				{error && <p>{`Error : ${error}`}</p>}
			</div> */}
		</div>
	);
};

export default MarkSeries;
