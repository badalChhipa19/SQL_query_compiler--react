import './form.style.css';

const FromContainer = ({submitFormHandler, onChangeHandler, values}) => {
  return <form className='form' onSubmit={submitFormHandler}>
    <textarea type='text' className='form__input'  onChange={onChangeHandler} value={values} />
    <button className='form__btn'>Run</button>
  </form>
}

export default FromContainer;