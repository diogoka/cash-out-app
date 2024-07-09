import React, { ChangeEvent } from 'react';
import ValueInput from './valueInput';
import { PropsCashOut } from '@/types/types';

const NetDue = ({ data, setData }: PropsCashOut) => {
  return (
    <div className='flex items-center justify-end mt-9 mb-6'>
      <h2 className='min-w-[90px] mr-1'>Net Due</h2>
      <ValueInput
        type='net'
        rowData={data}
        placeHolder='Net'
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setData((prevState) => ({ ...prevState, net: event.target.value }))
        }
        className='max-w-24'
        pattern={'[+-]?[0-9]+'}
      />
    </div>
  );
};

export default NetDue;
