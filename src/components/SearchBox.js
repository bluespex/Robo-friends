import React from 'react';

const SearchBox = ({Searchfield, SearchChange}) => {
	return(
		<div className = 'pa2'>
			<input 
				className = 'pa3 ba b--green bg-lightest-blue'
				type = 'search' 
				placeholder = 'search robots' 
				onChange = {SearchChange}
			/>
		</div>
	);
}

export default SearchBox;