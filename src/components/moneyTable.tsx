import React from 'react';
import MoneyRow from './moneyRow';
import { bankNotes } from '@/constants/currency';

type Props = {};

const MoneyTable = (props: Props) => {
  return bankNotes.map((value, index) => {
    return <MoneyRow bankNote={value} key={index} />;
  });
};

export default MoneyTable;
