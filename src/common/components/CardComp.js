import Card from 'react-bootstrap/Card';

function CardComp({children}) {
  return (
    <div className='mb-1'>
      <Card body>{children}</Card>
    </div>
  )
}

export default CardComp