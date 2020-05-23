import React from "react";
import { Instagram } from "react-feather";
import "./styles.sass";

const Header = () => {
	return (
		<div id="header">
			<h1>Covid-19 Dashboard</h1>
			<div>
				<span>About</span>
				<span>Contact</span>
				<a href="https://www.instagram.com/ba_ddou/" target="_blank">
					<div className="igButton">
						<Instagram
							color="white"
							size={18}
							style={{ marginRight: ".5rem" }}
						/>
						<span>Follow @ba-ddou</span>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Header;
