import Input from '../../components/input';
import './Price.css';

function Price({ handleChange }) {
  return (
    <div className='ml'>
      <h2 className='sidebar_title price_title'>Price</h2>

      <label className='sidebar_label-container'>
          <input type='radio' onChange={handleChange} value='' name='test2' />
          <span className='checkmark'></span>All
      </label>  
      
      <Input type='radio'
      handleChange={handleChange} value={50}
        title='$0-$50'
      name='test2'
      />
      <Input type='radio'
      handleChange={handleChange} value={100}
        title='$51-$100'
      name='test2'
      />

        <Input type='radio'
      handleChange={handleChange} value={150}
        title='$101-$150'
      name='test2'
      />

        <Input type='radio'
      handleChange={handleChange} value={200}
        title='Over $150'
      name='test2'
      />
    </div>
  )
}

export default Price;