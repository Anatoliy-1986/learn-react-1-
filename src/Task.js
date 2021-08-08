import { useState } from 'react'
import './App.css';

const initObj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
}

function Task () {
   /* const [notes, setNotes] = useState([1, 2, 3]);
	
	function changeHandler(index, event) {
		setNotes([...notes.slice(0, index), event.target.value, ...notes.slice(index + 1)]);
        console.log(notes);
	}
	
	return <div style = {{margin: '20px'}}>
		<input value={notes[0]} onChange={event => changeHandler(0, event)} />
		<input value={notes[1]} onChange={event => changeHandler(1, event)} />
		<input value={notes[2]} onChange={event => changeHandler(2, event)} />
		
	
	</div>;*/
    /*

const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
const [editNum, setEditNum] = useState(null);

const result = notes.map((note, index) => {
    return <p key={index} onClick={() => setEditNum(index)}>
        {note}
    </p>;
});

function changeItem(event) {
    setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(
        editNum + 1)]); 
}

return <div>
    {result}
    <input value={editNum ? notes[editNum] : ''} onChange={changeItem} />
</div>;
}*/


	const [obj, setObj] = useState(initObj);
	
	function handleChange(prop, event) {
		setObj({...obj, ...{[prop]: event.target.value}});
	}
	
	return <div>
        <form>
          <checkboks></checkboks><p>12</p>

        </form>
		<input value={obj.prop1} onChange={event => handleChange('prop1', event)} />
		<input value={obj.prop2} onChange={event => handleChange('prop2', event)} />
		<input value={obj.prop3} onChange={event => handleChange('prop3', event)} />
		
		<br />
		{obj.prop1}-{obj.prop2}-{obj.prop3}
	</div>;
}


export default Task;
