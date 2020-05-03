import React from "react";

import "./styles/antd-overrides.less";
import "./styles/index.sass";

// import config from "./config";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Info from "./components/Info";
import Map from "./components/Map";
import AreaSeries from "./components/AreaSeries";
import MarkSeries from "./components/MarkSeries";
import Footer from "./components/Footer";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const App = () => {
	const client = new ApolloClient();
	return (
		<ApolloProvider client={client}>
			<>
				<Header />
				<div id="mainContainer">
					<div id="mainContainer-subC1">
						<div id="mainContainer-subC1-subC">
							<SearchBar />
							<Info />
						</div>
						<Map />
					</div>
					<div id="mainContainer-subC2">
						<AreaSeries />
						<MarkSeries />
					</div>
				</div>
				<Footer />
			</>
		</ApolloProvider>
	);
};

export default App;
