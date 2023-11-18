import './form.style.css';

const FromContainer = ({submitFormHandler, onChangeHandler, values, clearTextareHandler}) => {
  return <form className='form' onSubmit={submitFormHandler}>
    <textarea type='text' className='form__input'  onChange={onChangeHandler} value={values} placeholder='SELECT * FROM people;' />
    <div className='btn__box'>
      <button className='form__btn'>Run</button>
      <button type='button' onClick={clearTextareHandler} className='form__btn btn__clear'>Clear</button>
    </div>
  </form>
}

export default FromContainer;