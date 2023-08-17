import { createStore } from 'vuex';

interface State {
    user: string;
    userid: string;
    email: string;
}
  
const state: State = {
    user: '',
    userid: '',
    email: '',
};

const mutations = {
    setUser(state: State, newUser: string) {
      state.user = newUser;
    },
    setUserId(state: State, newUserId: string) {
      state.userid = newUserId;
    },
    setEmail(state: State, newEmail: string) {
      state.email = newEmail;
    },
    deleteUser(state: State) {
        state.user = "";
    },
    deleteUserId(state: State) {
        state.userid = "";
    },
    deleteEmail(state: State) {
        state.email = "";
    },
};  
  
const actions = {
    updateUser(context: any, newUser: string) {
        context.commit('setUser', newUser);
    },
    updateUserId(context: any, newUserId: string) {
        context.commit('setUserId', newUserId);
    },
    updateEmail(context: any, newEmail: string) {
        context.commit('setEmail', newEmail);
    },
    deleteUser(context: any) {
        context.commit('deleteUser');
    },
    deleteUserId(context: any) {
        context.commit('deleteUserId');
    },
    deleteEmail(context: any) {
        context.commit('deleteEmail');
    },
};
  
const getters = {
    getUser(state: State) {
        return state.user;
    },
    getUserId(state: State) {
        return state.userid;
    },
    getEmail(state: State) {
        return state.email;
    },
};
  
const store = createStore({
    state,
    mutations,
    actions,
    getters,
});

export default store;