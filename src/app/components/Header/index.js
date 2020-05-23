import React, { useState } from "react";
import { Instagram } from "react-feather";
import { Modal } from "antd";
import "./styles.sass";

const Header = () => {
	let [aboutModal, setAboutModal] = useState(false);
	let [contactModal, setContactModal] = useState(false);
	return (
		<div id="header">
			<h1>Covid-19 Dashboard</h1>
			<div>
				<span onClick={(_) => setAboutModal(true)}>About</span>
				<span onClick={(_) => setContactModal(true)}>Contact</span>
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
			<Modal
				title="About"
				centered
				footer={false}
				visible={aboutModal}
				onCancel={(_) => setAboutModal(false)}>
				<p>some contents...</p>
				<p>some contents...</p>
				<p>some contents...</p>
			</Modal>
			<Modal
				title="Contact"
				centered
				footer={false}
				visible={contactModal}
				onCancel={(_) => setContactModal(false)}>
				<p>some contents...</p>
				<p>some contents...</p>
				<p>some contents...</p>
			</Modal>
		</div>
	);
};

export default Header;
