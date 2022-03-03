import React from 'react';
import ShowCard from './ShowCard';

function MyWatchList({ watchList, handleWatchListDelete }) {

    return(
        <div className="watch-list-container">
            {
            watchList.map(show => {
                return <ShowCard 
                    key={show.id} 
                    show={show}
                    onShowClicked={handleWatchListDelete}
                    onShowDelete={handleWatchListDelete}
                    />
            })
            }
        </div>
    )
}

export default MyWatchList;