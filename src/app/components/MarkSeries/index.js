import React, { useState } from "react";
import MarkSelector from "app/components/MarkSelector";
import "./styles.sass";
import useTimeSeries from "app/hooks/useTimeSeries";

const MarkSeries = () => {
	let [countries, setCountries] = useState([]);
	let { loading, error, data } = useTimeSeries(["morocco"]);
	return (
		<div id="markSeries" className="mainPanel">
			<MarkSelector countries={countries} setCountries={setCountries} />
			<div>
				{loading ? <p>loading...</p> : <p>{JSON.stringify(data)}</p>}
				{error && <p>{`Error : ${error}`}</p>}
			</div>
		</div>
	);
};

export default MarkSeries;
