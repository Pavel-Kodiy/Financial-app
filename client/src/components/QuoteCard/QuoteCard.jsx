import { useEffect } from 'react';
import classes from './QuoteCard.module.css';

const QuoteCard = (props) => {
	const {
		ticker,
		exchange,
		price,
		change,
		change_percent,
		dividend,
		profit,
		last_trade_time,
	} = props;

	function getCompanyName(ticker) {
		switch (ticker) {
			case 'AAPL':
				return 'Apple';
			case 'GOOGL':
				return 'Alphabet';
			case 'MSFT':
				return 'Microsoft';
			case 'FB ':
				return 'Facebook';
			case 'AMZN':
				return 'Amazon';
			case 'TSLA':
				return 'Tesla';
			default:
				return 'Company';
		}
	}

	const setValueToLocalStorage = (key, value) => {
		localStorage.setItem(key, value);
	};

	const getValueFromLocalStorage = (key) => {
		return localStorage.getItem(key);
	};

	useEffect(() => {
		setValueToLocalStorage('change_percent', change_percent);
		setValueToLocalStorage('profit', profit);
		setValueToLocalStorage('dividend', dividend);
	}, [change_percent, dividend, profit]);

	return (
		<div className={classes.wrapper}>
			<div className={classes.mainInfo}>
				<div className={classes.mainInfoData}>{getCompanyName(ticker)}</div>
				<div className={classes.mainInfoData}>{`$ ${price}`}</div>
				<div
					className={classes.mainInfoData}
					style={{
						color:
							change_percent > getValueFromLocalStorage('change_percent')
								? 'green'
								: 'red',
					}}
				>
					{change_percent > getValueFromLocalStorage('change_percent')
						? `+ ${change_percent} %`
						: `- ${change_percent} %`}
				</div>
			</div>
			<div className={classes.additionalInfo}>
				<div>
					<div>Marketplace:</div>
					<div>{exchange}</div>
				</div>

				<div>
					<div>Change:</div>
					<div>{change}</div>
				</div>

				<div>
					<div>Dividents:</div>
					<div
						style={{
							color:
								dividend > getValueFromLocalStorage('dividend')
									? 'green'
									: 'red',
						}}
					>
						{dividend > getValueFromLocalStorage('dividend')
							? `+ ${dividend}`
							: `- ${dividend}`}
					</div>
				</div>
				<div>
					<div>Yield:</div>
					<div
						style={{
							color:
								profit > getValueFromLocalStorage('profit') ? 'green' : 'red',
						}}
					>
						{profit > getValueFromLocalStorage('profit')
							? `+ ${profit}`
							: `- ${profit}`}
					</div>
				</div>
				<div>
					<div>Trade time:</div>
					<div>{new Date(last_trade_time).toLocaleTimeString()}</div>
				</div>
			</div>
		</div>
	);
};

export default QuoteCard;
