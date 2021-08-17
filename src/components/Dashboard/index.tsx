import { Container } from './styles'

interface DashboardProps {
  openChartModal: () => void,
}

export function Dashboard({ openChartModal }: DashboardProps) {

  const titles = [
    { id : 0, name: 'GoogleChart' },
    { id : 1, name: 'Chart.JS' }
  ]

  return (
    <Container>
      {titles.map(type => (
        <button type="button" key={type.id} onClick={openChartModal} >
          {type.name}
        </button>
      ))}
    </Container>
  )
}