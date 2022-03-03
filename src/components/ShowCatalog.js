import React, { useEffect, useState } from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

function ShowCatalog() {
    const [shows, setShows] = useState([]);
    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/shows')
            .then(resp => resp.json())
            .then(showsData => {
                setShows(showsData);
            })
    })

    function onShowClicked(addedShow) {
        // console.log('from catalog: ', addedShow);
        if (watchList.find(element => element.id === addedShow.id)) {
            console.log('Already Here!');
        } else {
            setWatchList([...watchList, addedShow]);
        }
    }

    function onShowDelete(deletedShow) {
        // console.log('from catalog: ', deletedShow);
        fetch(`http://localhost:8081/shows/${deletedShow.id}`, {
            method: "DELETE"
        }, [])
        const updatedShows = shows.filter(show => show.id !== deletedShow.id)
        setShows(updatedShows);
        const updatedWatchList = watchList.filter(show => show.id !== deletedShow.id)
        setWatchList(updatedWatchList);
    }

    function handleWatchListDelete(deletedShow) {
        const updatedWatchList = watchList.filter(show => show.id !== deletedShow.id)
        setWatchList(updatedWatchList);
    }

    return(
        <>
            <MyWatchList watchList={watchList} handleWatchListDelete={handleWatchListDelete} />
            <hr/>
            <ShowList shows={shows} onShowClicked={onShowClicked} onShowDelete={onShowDelete}/>
        </>
    );
}

export default ShowCatalog;