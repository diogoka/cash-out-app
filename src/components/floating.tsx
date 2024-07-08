import React, { ChangeEvent } from 'react';
import ValueInput from './valueInput';
import { PropsCashOut } from '@/types/types';
import { useCashStore } from '@/store/cashStore';

const Floating = ({ data, setData }: PropsCashOut) => {
  const totalCash = useCashStore((state) => state.totalCash);
  return (
    <>
      <div className='flex'>
        <h2>Floating</h2>
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
        />
      </div>
      <h2>Difference: {(+data.floating! - totalCash).toFixed(2)}</h2>
    </>
  );
};

export default Floating;
