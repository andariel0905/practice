import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { SearchProps } from "../../types";
import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getData, setStateSearchProps } from "../../redux/features/dataSlice";

function SearchBar () {
    const dispatch = useAppDispatch();
    const stateSearchProps = useAppSelector(state => state.data.searchProps)

    const [searchProps, setSearchProps] = useState<SearchProps>({
        q: "",
        albums: false,
        artists: false,
        playlists: false,
        tracks: false
    })
    
    useEffect(() => setSearchProps(stateSearchProps), [])
        
    const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const {type, name, value, checked} = evt.target
        
        const insert = type === "checkbox" ? checked : value

        setSearchProps({...searchProps, [name]: insert})
    }

    const searchHandler = () => {
        dispatch(setStateSearchProps(searchProps))
        dispatch(getData(searchProps.q))
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
            <Button onClick={searchHandler}>Search</Button>
        </Container>
    )
};

export default SearchBar;