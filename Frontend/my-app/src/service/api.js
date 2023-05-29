import axios from 'axios'


const url='http://localhost:3000';

const addUser = async (data)=>{
    try {
        await axios.post(url, data)
        
    } catch (error) {
        console.log('Error to added user');
    }

}

export default addUser