import React from "react"
import { Container } from "react-bootstrap"
import { Album } from "../../types"

function AlbumCard ({ album }: { album: Album }) {
    
    return (
        <Container>
            <p>Album</p>
            <p>{album.uri}</p>
            <p>Name: {album.name}</p>
            {album.artists.map((artist, index) => (
                <p key={index}>{artist}</p>
            ))}
        </Container>
    )
}

export default AlbumCard