import { useState } from 'react';
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'

import { ChartModal } from './components/ChartModal'
import { Dashboard } from './components/Dashboard'

import ChartDataProvider from './Hooks/useCharts'

Modal.setAppElement('#root')

export function App() {
  const [isChartModalOpen, setIsChartModalOpen] = useState(false)
  const [chartSelected, setChartSelected] = useState('')

  function handleOpenChartModal() {
    setIsChartModalOpen(true)

    setChartSelected('teste')
  }

  function handleCloseChartModal() {
    setIsChartModalOpen(false)
  }


  return (
    <div className="App">
      <ChartDataProvider>

        <Dashboard openChartModal={handleOpenChartModal} />

        <ChartModal isOpen={isChartModalOpen} onRequestClose={handleCloseChartModal} chartTitle={chartSelected} />

        <GlobalStyle />
        
      </ChartDataProvider>
    </div>
  );
}