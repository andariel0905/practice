import { Request, Response } from 'express';

const axios = require('axios');

const Search = async (req: Request, res: Response) => {
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
            type: 'albums',
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
        const response = await axios.request(options);
        console.log(response.data);
        return res.send(response.data);
    } catch (error) {
        console.error(error);
        return res.status(500).send((error as Error).message)
    }
};

export default Search;