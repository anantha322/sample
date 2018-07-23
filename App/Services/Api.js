// a library to wrap and simplify api calls
import apisauce from 'apisauce'

const Base_URL = 'https://api.github.com/'

const create = (baseURL = Base_URL) => {
    const api = apisauce.create({
        // base URL is read from the "constructor"
        baseURL,
        // here are some default headers
        headers: {
            'Cache-Control': 'no-cache'
        },
        timeout: 10000
    })

    // TODO: define  all your API calls here (GET, POST,DELETE etc...)


    return {
      // return all the methods
    }
}

// let's return back our create method as the default.
export default {
    create
}
