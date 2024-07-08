import React, { ChangeEvent } from 'react';
import { Input } from './ui/input';
import ValueInput from './valueInput';
import { PropsCashOut } from '@/types/types';
import { useCashStore } from '@/store/cashStore';

const Floating = ({ data, setData }: PropsCashOut) => {
  const totalCash = useCashStore((state) => state.totalCash);
  return (
    <>
      <div className='flex items-center justify-end mb-2'>
        <h2 className='min-w-[90px] mr-1'>Floating:</h2>
        <ValueInput
          type='floating'
          rowData={data}
          placeHolder='Floating'
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setData((prevState) => ({
              ...prevState,
              floating: event.target.value,
            }))
          }
          className='max-w-24'
        />
      </div>
      <div className='flex items-center justify-end'>
        <h2 className='min-w-[90px] mr-1'>Difference: </h2>
        <Input
          disabled
          value={(+data.floating! - totalCash).toFixed(2)}
          className='max-w-24 border-slate-950'
        />
      </div>
    </>
  );
};

export default Floating;
