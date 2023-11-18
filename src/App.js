import React, { useState, useEffect } from 'react';
import {people, company} from './assets/data';
import FromContainer from './components/form.component';

function App() {
  //! DATA that we have
  const [peopleData, setPeople] = useState('');
  const [companyData, setCompany] = useState('');

  //! columns Name for tables
  const [columnName, setColumnName] =  useState([]);

  //! Final Table data
  const [result, setResult] = useState([]);
  
  //! VAlue of textArea
  const [value, setValue] = useState('SELECT id, first_name FROM people;');

  //! History variable
  const [history, setHistory] = useState([]);

  const setResults = (table, columnsArr = null) => {
    
    if(columnsArr){
      const finalArray = table.map(person => {
        const newObj = {};
        columnsArr.forEach(el => {
        newObj[el] = person[el];
      });
      return newObj;
    });
    setResult(finalArray)
  }else{
    setResult(table)
  }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setHistory([...history, value]);
    if(value.startsWith("SELECT") && (value.replace(';', '').endsWith('people') || value.replace(';', '').endsWith('company'))){
      
      if(value.includes('*') ){
        if(value.includes('people')){
          setColumnName(Object.keys(peopleData[0]))
          setResults(peopleData)
        }else{
          setResults(companyData)
          setColumnName(Object.keys(companyData[0]))
        }
      }else{
        const columns = value.match(/SELECT(.*?)FROM/i)[1];
        const columnsArr = columns.split(',').map(el => el.trim());
        setColumnName(columnsArr)

        if(value.includes('people')){
          setResults(peopleData, columnsArr)
        }else{
          setResults(companyData, columnsArr)
        }
      }

    }else{
      alert('Invalid Syntex')
    }
  }

  const handleChange = (e) =>{
    const input = e.target.value;
    setValue(input);    
  }

  useEffect(() => {
    const fetchData = () => {
      setPeople(people)
      setCompany(company)
    };

    fetchData(); 
  }, []); 

  //! Provide unque key for history and table row and columns repeatation
  let count = 0;
  
  return (
    <div className="App">
      <FromContainer submitFormHandler={handleSubmit} onChangeHandler={handleChange} values={value} />

      <div className='result'>
      <h1>Result</h1>
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

       
      <div className='history'>
        <h2>History: </h2>
        <ul className='history__list'>
          {
            history.map(item => <li className='history__item' key={count++}>{item}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
