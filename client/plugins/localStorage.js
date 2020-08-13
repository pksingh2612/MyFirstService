//npm install vuex-persistedstate --save
import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({})(store);
  });
};