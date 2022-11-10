import API from './api';
export const fetchData = async( id: number ) => {
    const response = await API.get(`/fetch?id=${id}`);
    
    if(response.status !== 200) {
        throw new Error(`Unable to fetch data`)
    }

    return response.data;
}