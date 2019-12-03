import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = (props) => {
	const [equation, setEquation] = useState('');
	const [answer, setAnswer] = useState(0);

	return (
		<Context.Provider value={{ eqtn: [equation, setEquation], aswr: [answer, setAnswer] }}>
			{props.children}
		</Context.Provider>
	);
};
