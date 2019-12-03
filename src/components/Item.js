import React, { useContext } from 'react';
import '../App.scss';
import { Context } from '../Context';

export default function Item({ value, className }) {
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
