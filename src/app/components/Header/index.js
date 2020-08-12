import React, { useState } from "react";
import { Instagram } from "react-feather";
import InfoModals from "app/components/InfoModals";
import "./styles.sass";

const Header = () => {
	let [aboutModal, setAboutModal] = useState(false);
	let [contactModal, setContactModal] = useState(false);

	return (
		<div id="header">
			<div>
				<h1>Covid-19 Dashboard</h1>
				<span>BETA</span>
			</div>

			<div>
				<span onClick={(_) => setAboutModal(true)}>About</span>
				{/* <span onClick={(_) => setContactModal(true)}>Contact</span> */}
			</div>
			<InfoModals
				aboutModal={aboutModal}
				setAboutModal={setAboutModal}
				contactModal={contactModal}
				setContactModal={setContactModal}
			/>
		</div>
	);
};

export default Header;
