import { useContext } from 'react'

import { ChartDataContext } from '../../Hooks/useCharts'

import { Line } from 'react-chartjs-2'

export function ChartJs2() {
  const { label, data, backgroundColor } = useContext(ChartDataContext)

  return (
    <div>
      <Line data={{
        //Definindo camadas X
        labels: ['Red', 'Blue', 'Green', 'Yellow', 'White'],

        //Definindo linha de resultados
        datasets: [
          {
            //Definindo nome
            label: label,
            //Valores
            data: data,
            //Cor dos pontos desta linha
            backgroundColor: backgroundColor
          }
        ]
      }}

      height={400}
      width={600}

      options={{
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }}
      />
    </div>
  )
}