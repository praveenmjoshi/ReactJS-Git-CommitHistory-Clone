import Card from 'react-bootstrap/Card';

function CardComp({children}) {
  return (
    <Card body className='mb-1 gray-hover'>{children}</Card>
  )
}

export default CardComp