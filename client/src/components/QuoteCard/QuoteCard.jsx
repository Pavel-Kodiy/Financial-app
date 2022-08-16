import { useState, useEffect, useMemo } from 'react';
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
      last_trade_time
   } = props;

   function getCompanyName(ticker) {
      switch (ticker) {
         case 'AAPL': return 'Apple';
            break;
         case 'GOOGL': return 'Alphabet';
            break;
         case 'MSFT': return 'Microsoft';
            break;
         case 'FB ': return 'Facebook';
            break;
         case 'AMZN': return 'Amazon';
            break;
         case 'TSLA': return 'Tesla';
            break;
         default: return 'Company'
      }
   };

   const setValueToLocalStorage = (key, value) => {
      localStorage.setItem(key, value)
   };

   const getValueFromLocalStorage = (key) => {
      return localStorage.getItem(key);
   };
   
   useEffect(() => {
      setValueToLocalStorage('change_percent', change_percent)
      setValueToLocalStorage('profit', profit)
      setValueToLocalStorage('dividend', dividend)
   }, [change_percent, dividend, profit])

   return (
      <div className={classes.wrapper}>
         <div className={classes.mainInfo}>
            <div>{getCompanyName(ticker)}</div>
            <div>{price}</div>
            <div
               style={{
                  color: (
                     change_percent > getValueFromLocalStorage('change_percent')
                  ) ? 'green' : 'red'
               }}
            >{change_percent}</div>
         </div>
         <div className={classes.additionalInfo}>
            <div>{exchange}</div>
            <div>{change}</div>
            <div
               style={{
                  color: (
                     dividend > getValueFromLocalStorage('dividend')
                  ) ? 'green' : 'red'
               }}
            >{dividend}</div>
            <div
               style={{
                  color: (
                     profit > getValueFromLocalStorage('profit')
                  ) ? 'green' : 'red'
               }}
            >{profit}</div>
         </div>
      </div>
   )
}

export default QuoteCard;