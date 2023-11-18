const ResultTable = ({columnName, result, count}) => 

<div className='result'>
          <h2 className='heading__secondary'>Result</h2>
          <table className='result__table'>
            <thead>
              <tr>
                {columnName.map(name => <th>{name}</th>)}
              </tr>
            </thead>
            <tbody>
              {result.map(item => <tr key={count++}>
                {columnName.map(el => <td key={count++}>{item[el]}</td>)}
              </tr>)}
            </tbody>
          </table>
        </div>


export default ResultTable;