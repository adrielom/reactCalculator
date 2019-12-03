import React, { useState, useContext } from 'react';
import './App.scss';
import { Provider, Context } from './Context';

function App() {
	return (
		<Provider>
			<div className='parent'>
				<div className='background'>
					<Calculator />
				</div>
			</div>
		</Provider>
	);
}

const Calculator = () => {
	return (
		<>
			<Display />
			<ButtonGroup />
		</>
	);
};

function Display() {
	const { eqtn, aswr } = useContext(Context);
	const [equation, setEquation] = eqtn;
	const [answer, setAnswer] = aswr;

	return (
		<div className='display'>
			<div className='equation'>
				<p>{equation}</p>
			</div>
			<div className='answer'>
				<p>{answer}</p>
			</div>
		</div>
	);
}

function Item({ value, className }) {
	const { eqtn } = useContext(Context);
	const [equation, setEquation] = eqtn;
	return (
		<div
			onClick={() => {
				setEquation(equation + ' ' + value.toString() + ' ');
				console.log(`equation is ${equation} and value is ${value}`);
			}}
			className={className}>
			<p>{value}</p>
		</div>
	);
}

function ButtonGroup() {
	return (
		<div className='buttonGroup'>
			<Item className='item' value={'%'} />
			<Item className='item' value={'+ / -'} />
			<Item className='item' value={'C'} />
			<Item className='item purple' value={'/'} />
			<Item className='item' value={7} />
			<Item className='item' value={8} />
			<Item className='item' value={9} />
			<Item className='item purple' value={'x'} />
			<Item className='item' value={4} />
			<Item className='item' value={5} />
			<Item className='item' value={6} />
			<Item className='item purple' value={'-'} />
			<Item className='item' value={1} />
			<Item className='item' value={2} />
			<Item className='item' value={3} />
			<Item className='item purple' value={'+'} />
			<Item className='item zero' value={0} />
			<Item className='item' value={','} />
			<Equals className='item equals' value={'='} />
		</div>
	);
}

function Equals({ value, className }) {
	const { eqtn, aswr } = useContext(Context);
	const [equation, setEquation] = eqtn;
	const [answer, setAnswer] = aswr;

	return (
		<div
			onClick={() => {
				setAnswer(eval(equation));
				console.log(`answer is ${answer} and value is ${value}`);
			}}
			className={className}>
			<p>{value}</p>
		</div>
	);
}

export default App;
