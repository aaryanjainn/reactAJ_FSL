import './App.css';
import { useState } from 'react';

// useState is in curly braces because it is a named export, not a default export

function App() {
	let [counter, setCounter] = useState(0)

	// let counter = 0
	// function increment(){
	// 	if(counter < 10)
	// 	{
	// 		setCounter(counter + 1)
	// 	}
	// }
	// function decrement(){
	// 	if(counter >= 1)
	// 	{
	// 		// setCounter(counter + 1)
	// 		setCounter(counter - 1)
	// 	}
	// }

	function changeCounter(e, what) {
		e.preventDefault();
		if (what === 'increment')
		{
			if(counter < 10) 
			{
				setCounter(counter + 1);
			}
		}
		else
		{
			if(counter > 0) 
			{
				setCounter(counter - 1);
			}
		}
	}

	//events are passed in react implicitly
	function noReload(e)
	{
		e.preventDefault()
		console.log("NO Reload")
	}
	return (
		<div className='counter'>
			<a href="" onClick={(e) => changeCounter(e, 'decrement')}> - </a>
			<p>{counter}</p>
			<a href="" onClick={(e) => changeCounter(e, 'increment')}> + </a>
			<a href='' onClick={noReload}>Hello</a>
		</div>
	)




}
export default App;
