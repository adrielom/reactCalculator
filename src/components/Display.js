import React, { useContext } from 'react';
import '../App.scss';
import { Context } from '../Context';

export default function Display() {
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
