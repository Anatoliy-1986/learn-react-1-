import { queryAllByTitle } from '@testing-library/react';
import { useState } from 'react'
import './App.css';

function Todo () {
  
  const arr = [
	{
		id: 1,
		author: 'Саша Печкин',
		text: 'В четверг, четвертого числа...'
		},
		{
		id: 2,
		author: 'Просто Вася',
		text: 'Считаю, что $ должен стоить 35 рублей!'
		},
		{
		id: 3,
		author: 'Max Frontend',
		text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35'
		},
		{
		id: 4,
		author: 'Гость',
		text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru'
		}];

  const [list, setList] = useState(arr);
  const state = <div>{list.map((item) => <div key={item.id} onClick={() => remItem(item.id)}> <p>{item.author}:</p> <p>{item.text}</p></div>)}</div>;
  
  const [value, setValue] = useState('');
	function enteryNumber(event) {
		setValue(event.target.value);
	}

	const remItem = (index) => {
	setList([...list.slice(0, index), ...list.slice(index + 1)]);
	
	};

  const handleChangeString = () => {
    setList([...list, {id:value, author:value, text:value}]);
    setValue('');
	
  };

  return (
   <div className="App">
      <div> {state}</div>
        <input onChange={enteryNumber} value={value} />
        <button onClick={handleChangeString}>Добавить в список</button>
		
    </div>
  );

  
}


export default Todo;