import QuoteCard from '../QuoteCard/QuoteCard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateData } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
import classes from './Quotes.module.css';

const Quotes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const socket = io.connect('http://localhost:4000');
		socket.emit('start');
		socket.on('ticker', function (response) {
			dispatch(updateData(response));
		});
	}, [dispatch]);

	const quotes = useSelector((state) => state.quotes);

	return (
		<div className={classes.wrapper}>
			<div className={classes.quotesBlock}>
				{quotes.map((data) => (
					<QuoteCard
						ticker={data.ticker}
						exchange={data.exchange}
						price={data.price}
						change={data.change}
						change_percent={data.change_percent}
						dividend={data.dividend}
						profit={data.yield}
						last_trade_time={data.last_trade_time}
						key={uuidv4()}
					/>
				))}
			</div>
		</div>
	);
};

export default Quotes;
