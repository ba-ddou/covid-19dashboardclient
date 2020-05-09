import React, { useState } from "react";
import MarkSelector from "app/components/MarkSelector";
import "./styles.sass";

const MarkSeries = () => {
	let [countries, setCountries] = useState([]);
	return (
		<div id="markSeries" className="mainPanel">
			<MarkSelector countries={countries} setCountries={setCountries} />
		</div>
	);
};

export default MarkSeries;
