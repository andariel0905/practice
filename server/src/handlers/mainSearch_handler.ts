import { Request, Response } from 'express';
import Album from '../models/Album';
import Artist from '../models/Artist';
import Playlist from '../models/Playlist';
import Track from '../models/Track';

const axios = require('axios');

const AdminSearch = async (req: Request, res: Response) => {
    let {q} = req.params;
    let {offset, limit, gl} = req.query;

    if (!q) {
        return res.status(400).send("Envíe los parámetros obligatorios");
    }

    const options = {
        method: "GET",
        url: 'https://spotify23.p.rapidapi.com/search/',
        params: {
            q,
            type: 'multi',
            numberOfTopResults: '500',
            offset,
            limit,
            gl
        },
        headers: {
            'X-RapidAPI-Key': '7c06c63847mshdbce20741b65348p170416jsn3c1fd871067e',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        interface Artist {
            uri: string;
            profile: {name: string}
        };

        const data = (await axios.request(options)).data;
        for (const album of data.albums.items) {
            let exist = await Album.findOne({
                uri: album.data.uri,
                name: album.data.name,
                artists: album.data.artists.items.map((artist: Artist) => artist.profile.name),
                coverArt: album.data.coverArt.sources[2],
                date: album.data.date.year 
            });
            if (!exist) {
                let newAlbum = new Album({
                    uri: album.data.uri,
                    name: album.data.name,
                    artists: album.data.artists.items.map((artist: Artist) => artist.profile.name),
                    coverArt: album.data.coverArt.sources[2],
                    date: album.data.date.year 
                });
                await newAlbum.save();
            }
        }
        for (const artist of data.artists.items) {
            let exist = await Artist.findOne({
                uri: artist.data.uri,
                name: artist.data.profile.name,
                avatarImage: artist.data.visuals.avatarImage.sources[0]
            });
            if (!exist) {
                let newArtist = new Artist({
                    uri: artist.data.uri,
                    name: artist.data.profile.name,
                    avatarImage: artist.data.visuals.avatarImage.sources[0]
                });
                await newArtist.save();    
            };
        }
        for (const playlist of data.playlists.items) {
            let exist = await Playlist.findOne({
                uri: playlist.data.uri,
                name: playlist.data.name,
                description: playlist.data.description,
                image: playlist.data.images.items[0].sources[0],
                owner: playlist.data.owner.name
            });
            if (!exist) {
                let newPlaylist = new Playlist({
                    uri: playlist.data.uri,
                    name: playlist.data.name,
                    description: playlist.data.description,
                    image: playlist.data.images.items[0].sources[0],
                    owner: playlist.data.owner.name
                });
                await newPlaylist.save();
            };
        }
        for (const track of data.tracks.items) {
            let exist = await Track.findOne({
                uri: track.data.uri,
                name: track.data.name,
                album: track.data.albumOfTrack,
                artists: track.data.artists.items.map((artist: Artist) => artist.profile.name),
                duration: track.data.duration.totalMilliseconds
            });
            if (!exist) {
                let newTrack = new Track({
                    uri: track.data.uri,
                    name: track.data.name,
                    album: track.data.albumOfTrack,
                    artists: track.data.artists.items.map((artist: Artist) => artist.profile.name),
                    duration: track.data.duration.totalMilliseconds
                });
                console.log(newTrack)
                await newTrack.save();
            };
        }
        return res.send(data);
    } catch (error) {
        console.error(error);
        return res.status(500).send((error as Error).message)
    }
};

const Search = async (req: Request, res: Response) => {
    let {q} = req.params;

    if (!q) {
        return res.status(400).send("Envíe los parámetros obligatorios");
    }

    try {
        const Albums = await Album.find();
        const Artists = await Artist.find();
        const Playlists = await Playlist.find();
        const Tracks = await Track.find();

        return res.send({Albums, Artists, Playlists, Tracks});
    } catch (error) {
        console.error(error);
        return res.status(500).send((error as Error).message)
    }
};

export default {AdminSearch, Search};