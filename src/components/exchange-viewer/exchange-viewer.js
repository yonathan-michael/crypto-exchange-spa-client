import React from "react";
import CoinCard from "./coin-card.js";

function ExchangeViewer(props) {
	return (
		<div>
			<div className="container">
				{(function () {
					if (props.coin === "BTC") {
						return (
							<div className="row mx-auto">
								<div className="col d-flex justify-content-center ">
									<CoinCard
										exchange={"Binance"}
										coin={props.coin}
										prices={props.bitcoin_prices}
									/>
								</div>
								<div className="col d-flex justify-content-center">
									<CoinCard
										exchange={"KuCoin"}
										coin={props.coin}
										prices={props.bitcoin_prices}
									/>
								</div>
								<div>
									{(function () {
										if (
											props.bitcoin_prices
												.KuCoin_bidPrice >
											props.bitcoin_prices
												.Binance_bidPrice
										) {
											return (
												<div className="alert alert-info ">
													<h1>
														Sell on KuCoin for
														higher Bid Price
													</h1>
												</div>
											);
										} else {
											return (
												<div className="alert alert-info ">
													<h1>
														Sell on Binance for
														higher Bid Price
													</h1>
												</div>
											);
										}
									})()}
									{(function () {
										if (
											props.bitcoin_prices
												.KuCoin_askPrice <
											props.bitcoin_prices
												.Binance_askPrice
										) {
											return (
												<div className="alert alert-info">
													<h1>
														Buy on KuCoin for lower
														Ask Price
													</h1>
												</div>
											);
										} else {
											return (
												<div className="alert alert-info">
													<h1>
														Buy on Binance for lower
														Ask Price
													</h1>
												</div>
											);
										}
									})()}
								</div>
							</div>
						);
					} else {
						return (
							<div className="row mx-auto">
								<div className="col d-flex justify-content-center ">
									<CoinCard
										exchange={"Binance"}
										coin={props.coin}
										prices={props.ethereum_prices}
									/>
								</div>
								<div className="col d-flex justify-content-center ">
									<CoinCard
										exchange={"KuCoin"}
										coin={props.coin}
										prices={props.ethereum_prices}
									/>
								</div>
								<div>
									{(function () {
										if (
											props.ethereum_prices
												.KuCoin_bidPrice >
											props.ethereum_prices
												.Binance_bidPrice
										) {
											return (
												<div className="alert alert-info">
													<h1>
														Sell on KuCoin for
														higher Bid Price
													</h1>
												</div>
											);
										} else {
											return (
												<div className="alert alert-info">
													<h1>
														Sell on Binance for
														higher Bid Price
													</h1>
												</div>
											);
										}
									})()}
									{(function () {
										if (
											props.ethereum_prices
												.KuCoin_askPrice <
											props.ethereum_prices
												.Binance_askPrice
										) {
											return (
												<div className="alert alert-info">
													<h1>
														Buy on KuCoin for lower
														Ask Price
													</h1>
												</div>
											);
										} else {
											return (
												<div className="alert alert-info">
													<h1>
														Buy on Binance for lower
														Ask Price
													</h1>
												</div>
											);
										}
									})()}
								</div>
							</div>
						);
					}
				})()}
			</div>
		</div>
	);
}

export default ExchangeViewer;
