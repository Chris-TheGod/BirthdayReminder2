import { friends } from '../data'
import '../maincard.css'
import { FriendCard } from './FriendCard'

export const FriendsList = ({ viewAll }) => {
  return (
    <div>
      {!viewAll ? (
        <div className='friends-list'>
          {friends.slice(0, 5).map(({ name, age, image, id }) => (
            <FriendCard key={id} name={name} image={image} age={age} />
          ))}
        </div>
      ) : (
        <div className='friends-list'>
          {friends.map(({ id, name, age, image }) => (
            <FriendCard key={id} name={name} image={image} age={age} />
          ))}
        </div>
      )}
    </div>
  )
}
