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
				let nString = equation
					.replace(/x/g, '*')
					.replace(/,/g, '.')
					.replace(/ /g, '')
					.replace(/%/g, '/100');
				console.log(`nString ${nString}`);
				try {
					let aws = eval(nString.trim()).toFixed(2);
					console.log(`aws ${aws}`);
					if (aws !== null) {
						setAnswer(aws.split('.')[1] == 0 ? aws.split('.')[0] : aws);
					} else {
						setAnswer(0);
					}
				} catch (e) {
					setAnswer(0);
				}
			}}
			className={className}>
			<p>{value}</p>
		</div>
	);
}
