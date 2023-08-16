import { useState } from 'react'
import { Button } from './components/Button'
import { FriendsList } from './components/FriendsList'
import './index.css'
import { friends } from './data'

function App() {
  const [viewAll, setViewAll] = useState(false)

  return (
    <div className='layout'>
      <div>
        <h2>{friends.length} birthdays today</h2>
      </div>
      <FriendsList viewAll={viewAll} />
      <div className='layout-bottom'>
        <Button onClick={() => setViewAll(!viewAll)} title='View all' />
      </div>
    </div>
  )
}

export default App
