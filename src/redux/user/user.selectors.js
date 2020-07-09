import {createSelector} from "reselect";

const selectUser= state=> state.user;

export const selecCurrenttUser= createSelector(
    selectUser,
    user=> user.currentUser
);