export const Button = ({ title, onClick }) => {
  return (
    <button className='default-btn' onClick={onClick}>
      {title}
    </button>
  )
}
