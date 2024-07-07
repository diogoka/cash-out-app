'use client';
import React, { useState, ChangeEvent } from 'react';
import ValueInput from './valueInput';
import { MoneyRowType } from '@/types/types';
import { useCashStore } from '@/store/cashStore';

type Props = {};

const Floating = (props: Props) => {
  const [rowData, setRowData] = useState<MoneyRowType>({
    floating: '1000',
  });

  const totalCash = useCashStore((state) => state.totalCash);
  return (
    <div>
      <h2>Floating</h2>
      <ValueInput
        type='floating'
        rowData={rowData}
        placeHolder='Floating'
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setRowData(() => ({ floating: event.target.value }))
        }
      />
      <h2>Difference: {+rowData.floating! - totalCash}</h2>
    </div>
  );
};

export default Floating;
