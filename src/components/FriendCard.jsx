export const FriendCard = ({ name, age, image }) => {
  return (
    <div className='friend-card'>
      <div>
        <img className='avatar' src={image} alt='user image' />
      </div>
      <div>
        <div>{name}</div>
        <div>{age}</div>
      </div>
    </div>
  )
}
