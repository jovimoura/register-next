import { useState } from "react";

export default function useTableOrForm() {
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const viewTable = () => setVisible('table')
  const viewForm = () => setVisible('form')

  return {
    visibleForm: visible === 'form',
    visibleTable: visible === 'table',
    viewTable,
    viewForm
  }
}