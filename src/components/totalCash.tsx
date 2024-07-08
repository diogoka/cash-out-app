'use client';
import React, { useEffect } from 'react';
import { useCashStore } from '@/store/cashStore';
import { RowsTotal } from '@/types/types';

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

  const calculate = Object.values(object).reduce((acc, curr) => acc + curr);

  return (
    <div className='flex'>
      <h2>Total Cash Component</h2>
      <h1>{total.toFixed(2)}</h1>
    </div>
  );
};

export default TotalCash;
