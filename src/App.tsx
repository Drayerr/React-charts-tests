import { useState } from 'react';
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'

import { ChartModal } from './components/ChartModal'
import { Header } from './components/Header'

Modal.setAppElement('#root')

export function App() {
  const [isChartModalOpen, setIsChartModalOpen] = useState(false)

  function handleOpenChartModal() {
    setIsChartModalOpen(true)
  }

  function handleCloseChartModal() {
    setIsChartModalOpen(false)
  }

  return (
    <div className="App">
      <>
        <Header openChartModal={handleOpenChartModal}/>

        <ChartModal isOpen={isChartModalOpen} onRequestClose={handleCloseChartModal}/>

        <GlobalStyle />
      </>
    </div>
  );
}