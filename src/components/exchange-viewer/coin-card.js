import React from "react";
import Binance from "./Binance.png";
import KuCoin from "./KuCoin.png";

function CoinCard(props) {
	return (
		<div>
			{(function () {
				if (props.exchange === "Binance") {
					return (
						<div
							className="card"
							style={{ width: "18rem", margin: "15px" }}
						>
							<img
								className="card-img-top"
								alt="Binance Logo"
								src={Binance}
							></img>
							<div className="card-body">
								<h1 className="card-title">{props.exchange}</h1>
								<p className="card-text">
									Bid Price: {props.prices.Binance_bidPrice}
									<br></br>
									Ask Price: {props.prices.Binance_askPrice}
								</p>
							</div>
						</div>
					);
				} else {
					return (
						<div
							className="card"
							style={{ width: "18rem", margin: "15px" }}
						>
							<img
								className="card-img-top"
								alt="KuCoin Logo"
								src={KuCoin}
							></img>
							<div className="card-body">
								<h1 className="card-title">{props.exchange}</h1>
								<p className="card-text">
									Bid Price: {props.prices.KuCoin_bidPrice}
									<br></br>
									Ask Price: {props.prices.KuCoin_askPrice}
								</p>
							</div>
						</div>
					);
				}
			})()}
		</div>
	);
}

export default CoinCard;
