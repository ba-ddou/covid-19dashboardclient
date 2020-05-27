import React, { useEffect, useState } from "react";
import { X, Download } from "react-feather";

import "./styles.sass";

const PwaPrompt = () => {
	let [promptVisible, setPromptVisible] = useState(false);

	let deferredPrompt = null;
	useEffect(() => {
		console.log("root use Effect");
		window.addEventListener("beforeinstallprompt", (e) => {
			console.log("beforeinstallprompt captured");
			// Prevent the mini-infobar from appearing on mobile
			e.preventDefault();
			// Stash the event so it can be triggered later.
			deferredPrompt = e;
			console.log("PwaPrompt -> deferredPrompt", deferredPrompt);
			// Update UI notify the user they can install the PWA
			setTimeout(() => {
				setPromptVisible(true);
			}, 200);
		});
	}, []);

	// let install = (_) => {
	// 	console.log("user wants to install the app");
	// 	if (deferredPrompt) deferredPrompt.prompt();
	// 	else console.log("deferredPrompt is null");
	// };

	return (
		<div>
			{promptVisible && (
				<div id="pwaPrompt">
					<span
						onClick={(_) => {
							console.log("user wants to install the app");
							if (deferredPrompt) deferredPrompt.prompt();
							else console.log("deferredPrompt is null");
						}}>
						<Download size="20" />
						Tap this message to add the app to your homescreen
					</span>
					<X size="14" onClick={(_) => setPromptVisible(false)} />
				</div>
			)}
		</div>
	);
};

export default PwaPrompt;
