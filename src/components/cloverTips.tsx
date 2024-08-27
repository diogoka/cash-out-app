import React, { ChangeEvent } from 'react';
import ValueInput from './valueInput';
import { PropsCashOut } from '@/types/types';
import { useCashStore } from '@/store/cashStore';
import { Input } from './ui/input';

const CloverTips = ({ data, setData }: PropsCashOut) => {
  const totalCash = useCashStore((state) => state.totalCash);
  const result = +data.floating! - totalCash;

  return (
    <div className='flex-col mt-9'>
      <div className='flex items-center justify-end mb-2'>
        <h2 className='min-w-[90px] mr-1'>Clover Tips: </h2>
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
          className='max-w-24'
          pattern={'[+-]?[0-9]+'}
        />
      </div>
      <div className='flex items-center justify-end'>
        <h2 className='min-w-[90px] mr-1'>Grand total:</h2>
        <Input
          disabled
          value={(result * -1 - +data.cloverTips!).toFixed(2)}
          className='max-w-24 border-slate-950'
        />
      </div>
    </div>
  );
};

export default CloverTips;
