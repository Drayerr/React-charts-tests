import { Container } from './styles'
import { ChartJs2 } from '../ChartJs2'
interface DashboardProps {
  openChartModal: () => void,
}

export function Dashboard({ openChartModal }: DashboardProps) {
  const titles = [
    { id : 0, name: 'GoogleChart' },
    { id : 1, name: 'Chart.Js 2' }
  ]

  return (
    <Container>
      {titles.map(type => (
        <button type="button" key={type.id} onClick={openChartModal} >
          {type.name}
        </button>
      ))}

      <ChartJs2 />
    </Container>
  )
}