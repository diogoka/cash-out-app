'use client';
import Header from '@/components/header';
import MoneyTable from '@/components/moneyTable';
import TotalCash from '@/components/totalCash';
import Floating from '@/components/floating';
import NetDue from '@/components/net';
import CloverTips from '@/components/cloverTips';
import Match from '@/components/match';

import { useState } from 'react';
import { MoneyRowType } from '@/types/types';

const CashOut = () => {
  const [data, setData] = useState<MoneyRowType>({
    cloverTips: '0',
    floating: '1000',
    net: '0',
  });
  return (
    <>
      <MoneyTable />
      <TotalCash />
      <Floating data={data} setData={setData} />
      <CloverTips data={data} setData={setData} />
      <NetDue data={data} setData={setData} />
      <Match data={data} setData={setData} />
    </>
  );
};

export default CashOut;
