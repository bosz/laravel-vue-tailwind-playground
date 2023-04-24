import { createStore } from 'vuex';

const store = createStore({
    state: {
        user: {
            data: {
                name: 'Fongoh Martin',
                email: 'fongohmartin@gmail.com',
                imageUrl:
                    'https://gcdnb.pbrd.co/images/jfGzFD8W6Sth.png?o=1',
            },
            token: 232,
        }
    },
    getters: {},
    actions: {},
    mutations: {
        logout: state => {
            state.user.data = {}
            state.user.token = null
        }
    },
    modules: {},
});

export default store;