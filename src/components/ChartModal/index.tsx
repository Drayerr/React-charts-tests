import Modal from 'react-modal'

import { GoogleLineChart } from '../GoogleLineChart'

interface ChartModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function ChartModal({ isOpen, onRequestClose } : ChartModalProps) {

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <GoogleLineChart />

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        Fechar
      </button>

    </Modal>
  )
}