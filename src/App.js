import React from 'react';
import './App.css';
import { useHook } from './Hooks/useHook';

const App = () => {
	const {
		text,
		ChangeHandler,
		timer,
		StartGame,
		WordCounter,
		isRunning,
		textBoxRef,
	} = useHook(10);
	return (
		<div>
			<h1>How fast do you type</h1>
			<textarea
				ref={textBoxRef}
				name='text'
				value={text}
				onChange={ChangeHandler}
				disabled={!isRunning}
			/>
			<h3>Time remaining {timer}</h3>
			<button disabled={isRunning} onClick={StartGame}>
				Start
			</button>
			<h2>Word count {WordCounter}</h2>
		</div>
	);
};
export default App;
