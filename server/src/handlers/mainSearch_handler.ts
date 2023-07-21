const axios = require('axios');

interface Request {
    body: any;
    params: any;
    query: any;
  }
  
  interface Response {
    send: (body?: any) => Response;
    status: (code: number) => Response;
  }

const Search = async (req: Request, res: Response) => {
    let {q, offset, limit, gl} = req.params;

    if (!q) {
        return res.status(400).send("Envíe los parámetros obligatorios");
    }

    interface Options {
        url: string;
        params: {
            type: string;
            numberOfTopResults: string;
            offset?: string;
            limit?: string;
            gl?: string
        };
        headers: {
            'X-RapidAPI-Key': string;
            'X-RapidAPI-Host': string
        }
    };

    const options: Options = {
        url: 'https://spotify23.p.rapidapi.com/search/',
        params: {
            type: 'multi',
            numberOfTopResults: '500'
        },
        headers: {
            'X-RapidAPI-Key': '7c06c63847mshdbce20741b65348p170416jsn3c1fd871067e',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    
    if (offset) {
        options.params.offset = offset;
    };
    if (limit) {
        options.params.limit = limit;
    };
    if (gl) {
        options.params.gl = gl;
    };

    try {
        const response = await axios.get(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default Search;