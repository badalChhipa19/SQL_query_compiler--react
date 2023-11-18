const TableNames = () => 
  <div className='details'>
    <ul className='list query__list'>
    <h2 className='heading__secondary'>Queries Available</h2>
      <li className='item query__item'>All types of SELECT</li>
    </ul>

    <h2 className='heading__secondary'>Tables Available</h2>
    <dl className='list table__list'>
      <dt className='item table__title'>people</dt>
      <dd className='item table__item'>id</dd>
      <dd className='item table__item'>first_name</dd>
      <dd className='item table__item'>last_name</dd>
      <dd className='item table__item'>email</dd>
      <dd className='item table__item'>gender</dd>
      <dd className='item table__item'>ip_address</dd>

      <dt className='item table__title'>company</dt>
      <dd>id</dd>
      <dd>company_name</dd>
      <dd>company_type</dd>
      <dd>email</dd>
      <dd>location</dd>
      <dd>country</dd>
    </dl>
  </div>

  export default TableNames;
