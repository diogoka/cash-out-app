import React, { ChangeEvent } from 'react';
import ValueInput from './valueInput';
import { PropsCashOut } from '@/types/types';
import { useCashStore } from '@/store/cashStore';

const CloverTips = ({ data, setData }: PropsCashOut) => {
  const totalCash = useCashStore((state) => state.totalCash);
  const result = +data.floating! - totalCash;

  return (
    <div className='flex'>
      <h2>Clover Tips</h2>
      <div className='flex-col'>
        <ValueInput
          type='cloverTips'
          rowData={data}
          placeHolder='Clover Tips'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setData((prevState) => ({
              ...prevState,
              cloverTips: event.target.value,
            }))
          }
        />
        <h2>difference:{(result * -1 - +data.cloverTips!).toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default CloverTips;
