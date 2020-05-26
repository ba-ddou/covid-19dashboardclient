import React, { useState, useEffect } from "react";
import { Instagram } from "react-feather";
import InfoModals from "app/components/InfoModals";
import "./styles.sass";

const Header = () => {
	let [aboutModal, setAboutModal] = useState(false);
	let [contactModal, setContactModal] = useState(false);

	// let pwaPromptEvent = false;
	let deferredPrompt = null;
	useEffect(() => {
		console.log("root use Effect");
		window.addEventListener(
			"beforeinstallprompt",
			(e) => {
				console.log("beforeinstallprompt captured");
				// Prevent the mini-infobar from appearing on mobile
				e.preventDefault();
				// Stash the event so it can be triggered later.
				deferredPrompt = e;
				// Update UI notify the user they can install the PWA
			},
			[]
		);
	});

	return (
		<div id="header">
			<h1>Covid-19 Dashboard</h1>
			<div>
				<span
					onClick={(_) => {
						if (deferredPrompt) deferredPrompt.prompt();
					}}>
					Install
				</span>
				<span onClick={(_) => setAboutModal(true)}>About</span>
				<span onClick={(_) => setContactModal(true)}>Contact</span>
				<a href="https://www.instagram.com/ba_ddou/" target="_blank">
					<div className="igButton">
						<Instagram
							color="white"
							size={18}
							style={{ marginRight: ".5rem" }}
						/>
						<span>Follow @ba_ddou</span>
					</div>
				</a>
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
