import { useState } from 'react';
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'

import { ChartModal } from './components/ChartModal'
import { Dashboard } from './components/Dashboard'

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
      <>
        <Dashboard openChartModal={handleOpenChartModal}/>

        <ChartModal isOpen={isChartModalOpen} onRequestClose={handleCloseChartModal} chartTitle={chartSelected}/>

        <GlobalStyle />
      </>
    </div>
  );
}