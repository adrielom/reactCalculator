import React, { useState, useContext } from 'react';
import './App.scss';
import { Provider } from './Context';
import Calculator from './components/Calculator';

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

export default App;
