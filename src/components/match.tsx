import React from 'react';
import { PropsCashOut } from '@/types/types';
import { useCashStore } from '@/store/cashStore';

const Match = ({ data, setData }: PropsCashOut) => {
  const totalCash = useCashStore((state) => state.totalCash);
  const totalCashMinusFloat = (+data.floating! - totalCash).toFixed(2);
  const afterClover = +totalCashMinusFloat * -1 - +data.cloverTips!;

  const result = (Math.abs(afterClover) - Math.abs(+data.net!)).toFixed(2);

  let bgColor = 'bg-yellow-300';
  let text = 'Even';
  if (+result > 0) {
    bgColor = 'bg-green-300';
    text = 'Over';
  } else if (+result < 0) {
    bgColor = 'bg-red-300';
    text = 'Short';
  }

  return (
    <div className='min-w-14 flex-col items-center justify-center min-h-12'>
      <h2 className='text-center mb-2'>{text}</h2>
      <div
        className={`${bgColor} px-6 py-2 min-w-40 rounded-md flex justify-center`}
      >
        {result}
      </div>
    </div>
  );
};

export default Match;
