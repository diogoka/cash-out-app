import React from 'react';
import { Input } from '@/components/ui/input';
import { MoneyRowType } from '@/types/types';

type Props = {
  rowData: MoneyRowType;
  bankNote: number;
};

const ValueInput = (props: Props) => {
  return (
    <Input
      type='number'
      id=''
      placeholder='value'
      onChange={(event) => {
        console.log(event.target.value);
      }}
    />
  );
};

export default ValueInput;
