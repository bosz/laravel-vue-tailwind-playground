import { createStore } from 'vuex';
import axiosClient from '../axios';

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        }
    },
    getters: {},
    actions: {
        register: ({ commit }, user) => {
            return axiosClient.post('/auth/register', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    return data;
                })


        },
        login: ({ commit }, user) => {
            return axiosClient.post('/auth/login', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    return data;
                })
        },
        logout: ({ commit }, user) => {
            return axiosClient.post('/auth/logout', user)
                .then(({ data }) => {
                    commit('logout');
                    return data;
                })
        },
    },
    mutations: {
        logout: state => {
            state.user.data = {}
            state.user.token = null
            sessionStorage.clear();
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);
        }
    },
    modules: {},
});

export default store;