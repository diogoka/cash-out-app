import Header from '@/components/header'
import MoneyRow from '@/components/moneyRow'

export default function Home() {
  return (
    <div>
      <Header />
      <MoneyRow bankNote={100} />
    </div>
  )
}
