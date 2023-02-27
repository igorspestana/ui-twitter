import React from 'react'
import ReactDOM from 'react-dom/client'
import Tweet from './components/Tweet'

import './components/global.css'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Tweet user='Igor'>Primeiro tweet do Igor</Tweet>
    <Tweet user='Pedro'>Primeiro tweet do Pedro</Tweet>
    <Tweet user='Carla'>Primeiro tweet da Carla</Tweet>
    <Tweet user='Zé' likes={3}>Primeiro tweet do Zé</Tweet>
  </React.StrictMode>,
)

/* 

<React.StrictMode> - componente não visual que avisa possíveis erros dentro do código.
*/