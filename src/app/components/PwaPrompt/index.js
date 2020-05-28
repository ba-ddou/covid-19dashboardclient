import React, { useEffect, useState } from "react";
import { X, Download } from "react-feather";
import share from "app/assets/images/share-outline.svg";

import "./styles.sass";

const PwaPrompt = () => {
	let [prompt, setPrompt] = useState(false);
	let [deferredPrompt, setDeferredPrompt] = useState(null);
	let eventAttached = false;
	let beforeinstallpromptHandler = (e) => {
		console.log("beforeinstallprompt captured");
		// Prevent the mini-infobar from appearing on mobile
		e.preventDefault();
		// Stash the event so it can be triggered later.
		setDeferredPrompt(e);
		// Update UI notify the user they can install the PWA
		setTimeout(() => {
			setPrompt(
				<>
					<Download size="20" />
					Tap this message to add the app to your homescreen
				</>
			);
		}, 200);
	}

	useEffect(() => {
		console.log(navigator.platform);
		if(!eventAttached) {
			window.addEventListener("beforeinstallprompt",beforeinstallpromptHandler);
			eventAttached = true;
		}

		if (["iPhone", "iPad", "iPod"].includes(navigator.platform) && !navigator.standalone) {
			console.log("you're using an apple device");
			setTimeout(() => {
				setPrompt(
					<>
						Tap <img src={share} /> then 'Add to Home Screen' to
						install the app
					</>
				);
			}, 200);
		} else {
			console.log(navigator.platform);
		}
	}, []);

	let install = (_) => {
		if (deferredPrompt) {
			setPrompt(false);
			deferredPrompt.prompt();
		} else console.log("deferredPrompt is null");
		
		window.removeEventListener("beforeinstallprompt",beforeinstallpromptHandler,true);
	};

	return (
		<div>
			{prompt && (
				<div id="pwaPrompt">
					<span onClick={(_) => install()}>{prompt}</span>
					<X size="14" onClick={(_) =>{
						setPrompt(false)
						window.removeEventListener("beforeinstallprompt",beforeinstallpromptHandler,true);
						}} />
				</div>
			)}
		</div>
	);
};

export default PwaPrompt;
