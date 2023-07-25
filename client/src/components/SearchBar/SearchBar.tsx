import React, { useState } from "react";
import Container from "react-bootstrap/Container";

function SearchBar () {
    const [searchProps, setSearchProps] = useState({
        q: "",
        albums: false,
        artists: false,
        playlists: false,
        tracks: false
    })
    
    const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const {type, name, value, checked} = evt.target
        
        const insert = type === "checkbox" ? checked : value

        setSearchProps({...searchProps, [name]: insert})
    }

    return (
        <Container>
            <input onChange={changeHandler} type="text" name="q" value={searchProps.q} placeholder="Search"/>
            <label>
                Albums:
                <input onChange={changeHandler} type="checkbox" name="albums" checked={searchProps.albums}/>
            </label>
            <label>
                Artists:
                <input onChange={changeHandler} type="checkbox" name="artists" checked={searchProps.artists}/>
            </label>
            <label>
                playlists:
                <input onChange={changeHandler} type="checkbox" name="playlists" checked={searchProps.playlists}/>
            </label>
            <label>
                Tracks:
                <input onChange={changeHandler} type="checkbox" name="tracks" checked={searchProps.tracks}/>
            </label>
        </Container>
    )
};

export default SearchBar;