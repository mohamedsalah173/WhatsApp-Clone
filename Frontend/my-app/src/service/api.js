import axios from 'axios'


const url='http://localhost:3000';

const addUser = async (data)=>{
    try {
        await axios.post(`${url}/add`, data)
        
    } catch (error) {
        console.log('Error to added user');
    }

}
export const getUsers = async ()=>{
    try {
        let response = await axios.get(`${url}/getusers`);
        console.log(response);
        return(response.data);
        
    } catch (error) {
        console.log('Error to added user');
    }

}

export default addUser