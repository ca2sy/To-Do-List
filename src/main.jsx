import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import ListaDeTarefa from './listaDeTarefas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListaDeTarefa />
  </StrictMode>,
)
