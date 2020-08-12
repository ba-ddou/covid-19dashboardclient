import React from "react";
import { Modal } from "antd";
import { Instagram, Linkedin, Mail } from "react-feather";
import "./styles.sass";

const InfoModals = ({
	aboutModal,
	setAboutModal,
	contactModal,
	setContactModal,
}) => {
	return (
		<>
			<Modal
				title="About"
				centered
				footer={false}
				visible={aboutModal}
				onCancel={(_) => setAboutModal(false)}>
				<div className="infoModal">
					<h3>This dashboard was built by :</h3>
					<span>
						Abdelbassite Badou - Imane Ech-chahbi - Lamyaa Jouichat - Chaimae Bouslikhane
						- Adil Oubella - Abla Amharref
					</span>
					<br />
					<br />

					<h3>Sources</h3>
					<span>
						All data powering this dashboard is sourced from a
						GitHub repository maintained by the Center for Systems
						Science and Engineering (CSSE) at Johns Hopkins
						University -{" "}
						<a
							target="#_data"
							href="https://github.com/CSSEGISandData/COVID-19">
							data repository link
						</a>
					</span>
					<br />
					<br />
					<span>
						The Center for Systems Science and Engineering (CSSE) at
						Johns Hopkins University aggregates the data from many
						different Sources that do not always agree. Data
						corrections are ongoing to make the data as clean and as
						accurate as possible.
					</span>
					<br />
					<br />
					<h3>Update frequency</h3>
					<span>Once a day around 03:30 (GMT)</span>
					<br />
					<br />

					<h3>Disclaimer</h3>
					<span>
						This dashboard is not maintained or supervised by any
						governement agency, and therefore should not be
						regareded as an official source of covid-19 statistics.
					</span>
				</div>
			</Modal>
			<Modal
				title="Contact"
				centered
				footer={false}
				visible={contactModal}
				onCancel={(_) => setContactModal(false)}>
				<div className="infoModal">
					<span>
						Please mention 'Covid-19 dashboard' in the subject of
						any and all inquiries
					</span>
					<a
						href="https://www.linkedin.com/in/abdelbassite-badou/"
						target="_blank_linkedin">
						<div className="contactBtn linkedinButton">
							<Linkedin
								color="white"
								size={18}
								style={{ marginRight: ".5rem" }}
							/>
							<span>Abdelbassite Badou</span>
						</div>
					</a>
					<a
						href="https://www.instagram.com/ba_ddou/"
						target="_blank_ig">
						<div className="contactBtn igButton">
							<Instagram
								color="white"
								size={18}
								style={{ marginRight: ".5rem" }}
							/>
							<span>@ba_ddou</span>
						</div>
					</a>

					<div className="contactBtn gmailButton">
						<Mail
							color="white"
							size={18}
							style={{ marginRight: ".5rem" }}
						/>
						<span>abdelbassite.badou@gmail.com</span>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default InfoModals;
