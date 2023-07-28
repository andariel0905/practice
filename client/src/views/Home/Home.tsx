import React from "react";
import Container from "react-bootstrap/Container";
import style from './Home.module.css';
import { useAppSelector } from "../../redux/store";
import SearchBar from "../../components/SearchBar/SearchBar";
import AlbumCard from "../../components/Albums/AlbumCard";
import ArtistCard from "../../components/Artists/ArtistCard";
import PlaylistCard from "../../components/Playlists/PlaylistCard";
import TrackCard from "../../components/Tracks/TrackCard";

function Home () {
    const darkMode = useAppSelector(state => state.user.darkMode)
    const data = useAppSelector(state => state.data)
    const filters = useAppSelector(state => state.data.searchProps)

    const bodyClasses = darkMode ? style.containerDarkMode : ""

    const containerClasses  = darkMode 
        ? `${style.containerDarkMode} ${style.containerStyle}`
        : style.containerStyle 

    
    return (
        <div className={bodyClasses}>
            <Container className={containerClasses}>
                <h1>Home</h1>
                <SearchBar/>
                {filters.albums !== false && data.albums ?
                    <>
                        <h3>Albums</h3>
                        {data.albums.map(album => (<AlbumCard album={album}/>))}
                    </>
                    : null
                }
                {filters.artists !== false && data.artists ?
                    <>
                        <h3>Artists</h3>
                        {data.artists.map(artist => (<ArtistCard artist={artist}/>))}
                    </>
                    : null
                }
                {filters.playlists !== false && data.playlists ?
                    <>
                        <h3>Playlists</h3>
                        {data.playlists.map(playlists => (<PlaylistCard playlist={playlists}/>))}
                    </>
                    : null
                }
                {filters.tracks !== false && data.tracks ?
                    <>
                        <h3>Tracks</h3>
                        {data.tracks.map(tracks => (<TrackCard track={tracks}/>))}
                    </>
                    : null
                }
            </Container>
        </div>
    )
};

export default Home;