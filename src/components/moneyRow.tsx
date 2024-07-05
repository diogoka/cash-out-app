'use client';
import React, { ChangeEvent, useState } from 'react';
import ValueInput from './valueInput';
import { MoneyRowType } from '@/types/types';

type Props = {
  bankNote: number;
};

const MoneyRow = ({ bankNote }: Props) => {
  const [rowData, setRowData] = useState<MoneyRowType>({
    bills: '',
    amount: '',
  });

  const calculateAmount = (value: string, type: keyof MoneyRowType) => {
    if (type === 'bills') {
      setRowData(() => ({ bills: value, amount: `${bankNote * +value}` }));
    } else {
      setRowData(() => ({ amount: value, bills: `${+value / bankNote}` }));
    }
  };

  return (
    <div className='flex items-center'>
      <h3>{bankNote}</h3>
      <h3>X</h3>
      <ValueInput
        type='bills'
        rowData={rowData!}
        placeHolder='Num of Bills'
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          calculateAmount(event.target.value, 'bills')
        }
      />
      <h3>=</h3>
      <h3>CAD</h3>
      <ValueInput
        type='amount'
        rowData={rowData}
        placeHolder='Total'
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          calculateAmount(event.target.value, 'amount')
        }
      />
    </div>
  );
};

export default MoneyRow;
