import React from "react"
import { Container } from "react-bootstrap"
import { Artist } from "../../types"

function ArtistCard ({artist}: {artist: Artist}) {
    
    return (
        <Container>
            <img src={artist.avatarImage.url} height={artist.avatarImage.height} width={artist.avatarImage.width}/>
            <p>{artist.uri}</p>
            <p>Name: {artist.name}</p>
        </Container>
    )
}

export default ArtistCard