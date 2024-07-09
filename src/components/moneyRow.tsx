'use client';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { FaMoneyBillWave } from 'react-icons/fa';
import { GiTwoCoins } from 'react-icons/gi';
import ValueInput from './valueInput';
import { MoneyRowType } from '@/types/types';
import { useCashStore } from '@/store/cashStore';

type Props = {
  bankNote: number;
};

const MoneyRow = ({ bankNote }: Props) => {
  const update = useCashStore((state) => state.update);
  const disabled = bankNote === 0 ? true : false;
  const value: string = bankNote === 0 ? '177' : '';

  const [rowData, setRowData] = useState<MoneyRowType>({
    bills: '',
    amount: value,
  });

  const calculateAmount = (value: string, type: keyof MoneyRowType) => {
    if (type === 'bills') {
      const result = bankNote * +value;
      setRowData(() => ({ bills: value, amount: `${result.toFixed(2)}` }));
      update(bankNote, result);
    } else {
      if (bankNote === 0) {
        setRowData(() => ({ amount: value, bills: '' }));
        update(0, +value);
      } else {
        const result = +value / bankNote;
        setRowData(() => ({ amount: value, bills: `${result.toFixed(2)}` }));
        update(bankNote, result);
      }
    }
  };

  useEffect(() => {
    if (bankNote === 0) {
      update(0, 177);
    }
  }, []);

  return (
    <div className='flex items-center gap-2 px-2 my-6'>
      <div className='w-5'>
        {bankNote >= 5 ? (
          <FaMoneyBillWave size={20} />
        ) : (
          <GiTwoCoins size={20} />
        )}
      </div>

      <div className='min-w-[33px]'>
        <h3>{bankNote === 0 ? 'RC' : bankNote}</h3>
      </div>
      <h3>X</h3>
      <ValueInput
        type='bills'
        rowData={rowData!}
        placeHolder='Quantity'
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          calculateAmount(event.target.value, 'bills')
        }
        disabled={disabled}
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
