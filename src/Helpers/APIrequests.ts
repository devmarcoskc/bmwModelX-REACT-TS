import axios from "axios";
import { FormRequestType } from "../Types/FormRequest";

export const APIrequests = {

    getAPICEP: async (cep:string) => {
        let response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data;
    },

    getStatesAPI: async () => {
        let response = await axios.get(`https://brasilapi.com.br/api/ibge/uf/v1`);
        return response.data;
    },

    getCityAPI: async (uf: string) => {
        let response = await axios.get(`https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`);
        return response.data;
    },
    sendRequestCarForm: async (data:FormRequestType) => {
        /*
        let response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            data
        });
        console.log(response.data);
        return response.data;
        */
    }
}