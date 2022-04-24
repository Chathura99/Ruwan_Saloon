//connect with springboot
import axios from 'axios';

const EMP_URL = "http://localhost:8080/api/services";

class SaloonService {

    getServices() {
        return axios.get(EMP_URL);
    }

}

export default new SaloonService()