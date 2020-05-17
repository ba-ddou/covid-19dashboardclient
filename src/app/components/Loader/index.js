import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./styles.sass";

const Loader = () => {
	return (
		<div id="loader">
			<Spin
				indicator={
					<LoadingOutlined
						style={{ fontSize: 24, color: "#FF5533" }}
						spin
					/>
				}
			/>
		</div>
	);
};

export default Loader;
