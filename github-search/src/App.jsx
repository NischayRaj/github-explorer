import { useState } from 'react'
import Home from './Components/Home'
import RepositoryPage from'./Components/RepositoryPage'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Home/>
      {/* <RepositoryPage/> */}
   </div>
  )
}

export default App
