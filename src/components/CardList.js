import React from 'react';
import Card from './Card'

const CardList = ({robots}) => { 
	return(
		<div>
			{
				robots.map((user,i) =>{
					return (
						<Card 
						key = {user.id} 
						id={user.id} 
						name={user.name} 
						username={user.username} 
						email={user.email}
						 />
					);
				})
			}
		</div>
	)
}

export default CardList;