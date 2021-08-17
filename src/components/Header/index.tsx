import React from 'react'

interface HeaderProps {
  openChartModal: () => void
}

export function Header({ openChartModal } : HeaderProps) {
  return (
    <div>
      <button type="button" onClick={openChartModal}>
        Abrir Modal
      </button>
    </div>
  )
}