import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'e680b8bb-76ea-445a-a706-2c9170f0614d'
    }

})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=  ${pageSize}`,
            {withCredentials: true}
        )
            .then(response => {
                return response.data;
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`,
        )
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`,
        )
    } ,
    getProfile(userId: number) {
        return instance.get('profile/' + userId)
    }
}


export const authAPI = {
    me() {
        return  instance.get('auth/me')
    }
}