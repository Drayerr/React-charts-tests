import { createContext, ReactNode } from "react";

interface ChartDataTypes {
  label: string,
  data: number[],
  backgroundColor: string
}

//Definindo que os childrens são do tipo ReactNode
interface ChartProviderProps {
  children: ReactNode;
}

export const ChartDataContext = createContext<ChartDataTypes>(
  {} as ChartDataTypes
)

export default function ChartDataProvider({children} : ChartProviderProps) {

  const chartData : ChartDataTypes = {
    label: 'Numero de votos',
    data: [12, 15, 25, 10, 8],
    backgroundColor: 'white'
  } 

  return(
    <ChartDataContext.Provider value={chartData}>
      {children}
    </ChartDataContext.Provider>
  )
}