import axios from "axios";

const instance = axios.create ({
    withCredentials:true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/users?page=',
    headers: {
        'API-KEY': 'b3a9a9e4-0bf1-4009-8ba9-a298b1b9d232'
    }

})


export const usersAPI = {
    getUsers  (currentPage = 1,pageSize = 10)  {
        return   instance.get(`/users?page=${currentPage}&count=  ${pageSize}`,
            {withCredentials: true}
        )
            .then(response => {
                return response.data;
            })
    }


}



