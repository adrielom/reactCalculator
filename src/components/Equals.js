import React, { useContext } from 'react';
import '../App.scss';
import { Context } from '../Context';

export default function Equals({ value, className }) {
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
