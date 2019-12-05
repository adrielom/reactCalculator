import React, { useContext } from 'react';
import '../App.scss';
import { Context } from '../Context';

export default function Item({ value, className, valueToJsx }) {
	const { eqtn } = useContext(Context);
	const [equation, setEquation] = eqtn;

	return (
		<div
			onClick={() => {
				let aws;
				if (valueToJsx) aws = equation + '**2';
				else if (isNaN(value) && value.toString() === ',') {
					aws = equation + value;
				} else {
					aws = equation + value.toString() + ' ';
				}
				console.log(aws);
				setEquation(aws);
				console.log(`equation is ${equation} and value is ${value}`);
			}}
			className={className}>
			{!valueToJsx ? (
				<p> {value} </p>
			) : (
				<p>
					{' '}
					x<sup>2</sup>{' '}
				</p>
			)}
		</div>
	);
}
