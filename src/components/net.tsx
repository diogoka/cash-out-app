import React, { ChangeEvent } from 'react';
import ValueInput from './valueInput';
import { PropsCashOut } from '@/types/types';

const NetDue = ({ data, setData }: PropsCashOut) => {
  return (
    <div className='flex'>
      <h2>Net Due</h2>
      <ValueInput
        type='net'
        rowData={data}
        placeHolder='Net'
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setData((prevState) => ({ ...prevState, net: event.target.value }))
        }
      />
    </div>
  );
};

export default NetDue;
