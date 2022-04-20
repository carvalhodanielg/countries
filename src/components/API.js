import axios from "axios";

export const API  = {

    getAllFlags: async () => {
        let response = await axios.get('https://restcountries.com/v3.1/all')
        return response.data;
    }

}