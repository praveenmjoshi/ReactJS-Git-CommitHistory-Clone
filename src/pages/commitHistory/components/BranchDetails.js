import Form from 'react-bootstrap/Form';

function BranchDetails() {
  return (
    <>
        <Form.Select  size="md" className="w-20 branch-select" aria-label='Branch select option'>
            <option>Master</option>
        </Form.Select>
    </>
  )
}

export default BranchDetails