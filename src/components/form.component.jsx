const FromContainer = ({submitFormHandler, onChangeHandler, values}) => {
  return <form onSubmit={submitFormHandler}>
    <textarea rows="10" cols="50" onChange={onChangeHandler} value={values}></textarea>
    <button>Run</button>
  </form>
}

export default FromContainer;