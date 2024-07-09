import React, { ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';
import { MoneyRowType } from '@/types/types';

type Props = {
  rowData: MoneyRowType;
  type: keyof MoneyRowType;
  placeHolder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
};

const ValueInput = ({
  onChange,
  placeHolder,
  rowData,
  type,
  className,
  disabled,
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
      disabled={disabled}
    />
  );
};

export default ValueInput;
