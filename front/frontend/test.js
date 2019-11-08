import axios from 'axios';
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const client = axios.create();
client.defaults.baseURL = 'https://lovero-go-api.run.goorm.io/'

const login = ({username, password}) => {
    client.post('/rest-auth/login/', {username, password})
    .then(function (res) {
        localStorage.setItem('token', res.data.token);
        console.log(res);
    })
    .catch((err) => {
       console.log(err); 
    });
}

const register = ({username, password}) =>{
    client.post('/rest-auth/register/',{username, password})};
const check = () => client.get('/api/auth/check');

const logout = () => client.post('/api/auth/logout');
