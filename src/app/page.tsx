import Header from '@/components/header';
import MoneyTable from '@/components/moneyTable';
import TotalCash from '@/components/totalCash';
import Floating from '@/components/floating';

export default function Home() {
  return (
    <div>
      <Header />
      <MoneyTable />
      <TotalCash />
      <Floating />
    </div>
  );
}
