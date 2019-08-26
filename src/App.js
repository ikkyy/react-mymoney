import React from 'react'
import useGet from './useGet'
import usePost from './usePost'
import useDelete from './usePost'

const url = 'https://mymoney-devpleno2.firebaseio.com/movimentacoes/2019-08.json'

function App() {

  const data = useGet(url)
  const [postData, post] = usePost(url)
  const [deleteData, remove] = useDelete()
  const saveNew = () => {
    post({ valor: 10, descricao: "olá" })
  }
  const doRemove = () => {
    remove('https://mymoney-devpleno2.firebaseio.com/movimentacoes/2019-08/-LnDiS_P_AC8Kj210FvF')
  }

  return (
    <div>
      <h1>MyMoney</h1>
      {JSON.stringify(data)}
      {data.loading && <p>Loading...</p>}
      <button onClick={saveNew}>Salvar</button>
      <pre>{JSON.stringify(postData)}</pre>
      <button onClick={doRemove}>Remover</button>
      <pre>{JSON.stringify(deleteData)}</pre>


    </div>
  )
}

export default App;
