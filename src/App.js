import React from 'react'
import Rest from './rest'
import Header from './elements/Header'
import Meses from './Meses'
import AdicionarMes from './AdicionarMes'

const baseURL = 'https://mymoney-devpleno2.firebaseio.com/'

const { useGet, usePost, useDelete } = Rest(baseURL)

function App() {

  // const data = useGet('movimentacoes/2019-08')
  const data = useGet('meses')
  // const [postData, post] = usePost('movimentacoes/2019-08')
  // const [deleteData, remove] = useDelete()
  const saveNew = () => {
    //   post({ valor: 10, descricao: "olá" })
  }
  const doRemove = () => {
    //   remove('movimentacoes/2019-08/-LnDiS_P_AC8Kj210FvF')
  }

  return (
    <div>
      <Header />
      <div className='container'>
        <AdicionarMes />
        <Meses />
      </div>
    </div>
  )
}

export default App;
