export interface User {
    name: string,
    password: string,
    email: string
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