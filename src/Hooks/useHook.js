import { useState, useEffect, useRef } from 'react';

export const useHook = (startingTime) => {
	const [text, setText] = useState('');
	const [timer, setTimer] = useState(startingTime);
	const [isRunning, setIsRunning] = useState(false);
	const [WordCounter, setWordCounter] = useState(0);
	const textBoxRef = useRef();

	const ChangeHandler = (e) => {
		const { value } = e.target;
		setText(value);
	};
	function calculateWordCount(text) {
		const wordsArr = text.trim().split(' ');
		return wordsArr.filter((word) => word !== '').length;
	}
	const StartGame = () => {
		setIsRunning(true);
		setWordCounter(0);
		setTimer(startingTime);
		setText('');
		textBoxRef.current.disabled = false;
		textBoxRef.current.focus();
	};
	const GameEnd = () => {
		setWordCounter(calculateWordCount(text));
		setIsRunning(false);
	};
	useEffect(() => {
		if (isRunning && timer > 0) {
			setTimeout(() => {
				setTimer((prevTime) => prevTime - 1);
			}, 1000);
		} else if (timer <= 0) {
			GameEnd();
		}
	}, [timer, isRunning]);
	return {
		text,
		ChangeHandler,
		timer,
		StartGame,
		WordCounter,
		isRunning,
		textBoxRef,
	};
};
