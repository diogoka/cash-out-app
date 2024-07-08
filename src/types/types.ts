export type MoneyRowType = {
  bills?: string;
  amount?: string;
  floating?: string;
  cloverTips?: string;
  net?: string;
};

export type RowsTotal = {
  [key: number]: number;
};

export type PropsCashOut = {
  data: MoneyRowType;
  setData: React.Dispatch<React.SetStateAction<MoneyRowType>>;
};
