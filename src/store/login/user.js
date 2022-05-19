import { defineStore } from 'pinia';

export const useUserStore = defineStore('drag', {
  state: () => ({
    userName: '',
    token: ''
  }),
  actions: {
    SetData (data) {
      this.$patch((state) => {
        Object.assign(state, {
          ...data
        });
      });
    },
    async Login (queryData) {
      const Data = {
        userName: queryData.userName,
        token: '123456'
      };
      localStorage.setItem('token', Data.token);
      localStorage.setItem('username', Data.userName);
      this.SetData(Data);
      return Data;
    },
  }
});
