import { useState } from "react";
import useGodView from "./useGodView";

const useInfo = (date, country) => {
	let [info, setInfo] = useState({
		date,
		territory: country,
		confirmed: 0,
		recovered: 0,
		dead: 0,
	});
	let { loading, error, data } = useGodView(date);
	if (data) {
		let res = data.godView.find((elem) => elem.territory == country);
		setInfo(res);
	} else if (loading) {
		setInfo({
			date,
			territory: country,
			confirmed: 0,
			recovered: 0,
			dead: 0,
		});
	}
	return info;
};

export default useInfo;
