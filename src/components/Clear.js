import React, { useContext } from 'react';
import Item from './Item';
import { Context } from '../Context';

export default function Clear({ value, className }) {
	const { eqtn, aswr } = useContext(Context);
	const [equation, setEquation] = eqtn;
	const [answer, setAnswer] = aswr;

	return (
		<div
			onClick={() => {
				setEquation('');
				setAnswer(0);
			}}
			className={className}>
			<p>{value}</p>
		</div>
	);
}
