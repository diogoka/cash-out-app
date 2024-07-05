'use client';
import React, { useState } from 'react';
import ValueInput from './valueInput';
import { MoneyRowType } from '@/types/types';

type Props = {
  bankNote: number;
};

const MoneyRow = (props: Props) => {
  const [rowData, setRowData] = useState<MoneyRowType>();

  return (
    <div className='flex items-center'>
      <h3>{props.bankNote}</h3>
      <h3>X</h3>
      <ValueInput rowData={rowData!} bankNote={props.bankNote} />
      <h3>=</h3>
      <h3>CAD</h3>
      <ValueInput rowData={rowData!} bankNote={props.bankNote} />
    </div>
  );
};

export default MoneyRow;
