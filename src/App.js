import "./App.css";
import ExchangeViewer from "./components/exchange-viewer/exchange-viewer";
import React from "react";
import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:8080",
});

export default class App extends React.Component {
	constructor() {
		super();
		api.get("/bitcoin").then((res) => {
			this.state = { ...this.state, bitcoin_prices: res.data };
		});
	}

	state = {
		coin: "BTC",
		bitcoin_prices: {
			KuCoin_bidPrice: 0,
			KuCoin_askPrice: 0,
			Binance_bidPrice: 0,
			Binance_askPrice: 0,
		},

		ethereum_prices: {
			KuCoin_bidPrice: 0,
			KuCoin_askPrice: 0,
			Binance_bidPrice: 0,
			Binance_askPrice: 0,
		},
	};

	setBitcoin = () => {
		api.get("/bitcoin").then((res) => {
			this.setState({
				...this.state,
				coin: "BTC",
				bitcoin_prices: res.data,
			});
			console.log(this.state);
		});
	};

	setEthereum = () => {
		api.get("/ethereum").then((res) => {
			this.setState({
				...this.state,
				coin: "ETH",
				ethereum_prices: res.data,
			});
			console.log(this.state);
		});
	};

	render() {
		return (
			<div>
				<div className="container-fluid">
					<ExchangeViewer
						coin={this.state.coin}
						bitcoin_prices={this.state.bitcoin_prices}
						ethereum_prices={this.state.ethereum_prices}
					/>
				</div>
				<div>
					<button
						onClick={this.setBitcoin}
						type="button"
						className="btn btn-primary float-right"
					>
						Bitcoin!
					</button>
					<button
						onClick={this.setEthereum}
						type="button"
						className="btn btn-warning float-right"
					>
						Ethereum!
					</button>
				</div>
			</div>
		);
	}
}
