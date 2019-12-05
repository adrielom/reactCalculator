import React from 'react';
import '../App.scss';

import Item from './Item';
import Equals from './Equals';
import Clear from './Clear';

export default function ButtonGroup() {
	return (
		<div className='buttonGroup'>
			<Item className='item' value={'%'} />
			<Item className='item' value={'x'} valueToJsx={true} />
			<Clear className='item' value='C' />
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
