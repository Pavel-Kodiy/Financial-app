import QuoteCard from "../QuoteCard/QuoteCard";
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
import classes from './Quotes.module.css';

const Quotes = () => {

   const [quotes, setQuotes] = useState([]);

   useEffect(() => {
      const socket = io.connect('http://localhost:4000');
      socket.emit('start');
      socket.on('ticker', function (response) {
         //console.log(response)
         return setQuotes(response)
      });
   }, []);

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
   )
}

export default Quotes;