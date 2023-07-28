import React from "react"
import { Container } from "react-bootstrap"
import { Track } from "../../types"

function TrackCard ({track} : {track: Track}) {
    
    return (
        <Container>
            <p>Track</p>
            <p>{track.uri}</p>
            <p>Name: {track.name}</p>
            {track.artists.map((artist, index) => (
                <p key={index}>{artist}</p>
            ))}
            <p>Album: {track.album.url}</p>
            <p>Duration {track.duration}</p>
        </Container>
    )
}

export default TrackCard