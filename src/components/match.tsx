import React from 'react';
import { PropsCashOut } from '@/types/types';
import { useCashStore } from '@/store/cashStore';

const Match = ({ data, setData }: PropsCashOut) => {
  const totalCash = useCashStore((state) => state.totalCash);

  const totalCashMinusFloat = (+data.floating! - totalCash).toFixed(2);
  const afterClover = +totalCashMinusFloat * -1 - +data.cloverTips!;

  console.log('Cash Minus Float', totalCashMinusFloat);
  console.log('Cash Minus Float Minus Clover', afterClover);
  console.log('Net', data.net);

  return (
    <>
      <h2>Match</h2>
      {afterClover > +data.net! ? <p>Red</p> : <p>Green</p>}
      {(Math.abs(afterClover) - Math.abs(+data.net!)).toFixed(2)}
    </>
  );
};

export default Match;
