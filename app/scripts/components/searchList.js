import React from 'react';
import Card from './card';

const SearchList = ({cards}) => {
    return(
        <div className="searchList">
            {
                cards.map(card => <Card key={card._id} card={card}/>)
            }
        </div>
    )
}

export default SearchList;