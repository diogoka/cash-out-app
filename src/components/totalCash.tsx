'use client';
import React, { useEffect } from 'react';
import { useCashStore } from '@/store/cashStore';
import { RowsTotal } from '@/types/types';
import { Input } from './ui/input';

type Props = {};

const TotalCash = (props: Props) => {
  const object = useCashStore((state) => state.TotalByRow);
  const setTotalCash = useCashStore((state) => state.setTotalCash);
  const total = useCashStore((state) => state.totalCash);

  const calculateFn = (param: RowsTotal): number => {
    return Object.values(param).reduce((acc, curr) => acc + curr);
  };

  useEffect(() => {
    const result = calculateFn(object);
    setTotalCash(result);
  }, [object]);

  return (
    <div className='flex items-center justify-end mt-6 mb-2'>
      <h2 className='min-w-[90px] mr-1'>Total Cash:</h2>
      <Input
        disabled
        value={total.toFixed(2)}
        className='max-w-24 border-slate-950'
      />
    </div>
  );
};

export default TotalCash;
