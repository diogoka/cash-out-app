import React, { ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';
import { MoneyRowType } from '@/types/types';

type Props = {
  rowData: MoneyRowType;
  type: keyof MoneyRowType;
  placeHolder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const ValueInput = ({
  onChange,
  placeHolder,
  rowData,
  type,
  className,
}: Props) => {
  return (
    <Input
      type='number'
      id={type}
      placeholder={placeHolder}
      value={rowData[type]}
      onChange={onChange}
      className={className}
      min='0'
    />
  );
};

export default ValueInput;
