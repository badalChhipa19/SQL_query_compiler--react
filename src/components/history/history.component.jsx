const HistoryContainer = ({history, count}) => 
<div className='history'>
<h2>History: </h2>
<ul className='list history__list'>
  {
    history.map(item => <li className='item history__item' key={count++}>{item}</li>)
  }
</ul>
</div> 

export default HistoryContainer;