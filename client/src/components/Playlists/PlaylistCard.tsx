import React from "react"
import { Container } from "react-bootstrap"
import { Playlist } from "../../types"

function PlaylistCard (playlist: Playlist) {
    
    return (
        <Container>
            <p>Playlist</p>
            <img src={playlist.image.url} height={playlist.image.heigth ?? undefined} width={playlist.image.width ?? undefined}/>
            <p>{playlist.uri}</p>
            <p>Name: {playlist.name}</p>
            <p>Description: {playlist.description}</p>
            <p>Owner: {playlist.owner}</p>
        </Container>
    )
}

export default PlaylistCard