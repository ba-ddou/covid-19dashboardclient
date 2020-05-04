import React from "react";
import { ArrowLeft, ArrowRight, Calendar } from "react-feather";
import { Slider } from "antd";
import "./styles.sass";

const DateSlider = () => {
	return (
		<div id="dateSlider">
			<div id="dateSlider-cpanel">
				<ArrowLeft color="#141414" size={20} />
				<span>Tuesday, April 07 2020</span>
				<ArrowRight color="#141414" size={20} />
			</div>
			<div id="dateSlider-slider">
				<Calendar color="#FF6F61" size={20} />
				<Slider />
			</div>
		</div>
	);
};

export default DateSlider;
