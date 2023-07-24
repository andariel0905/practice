export interface Album {
    uri: string,
    name: string,
    artists: Array<string>,
    coverArt: {
        url: string,
        width: number,
        height: number
    },
    date: number
}

export interface Artist {
    uri: string,
    name: string,
    avatarImage: {
        url: string,
        width: number,
        height: number
    }
}

export interface Playlist {
    uri: string,
    name: string,
    description: Array<string>,
    image: {
        url: string,
        width: number | null,
        heigth: number | null
    },
    owner: string
}

export interface Track {
    uri: string,
    name: string,
    album: {
        url: string,
        name: string,
        coverArt: {
            url: string,
            width: number,
            height: number
        },
        shareUrl: string
    },
    artists: Array<string>,
    duration: number
}

export interface User {
    name: string,
    password: string,
    email: string
}