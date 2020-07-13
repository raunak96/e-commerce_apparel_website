This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Redux-thunk

***Thunks** are **actionCreators** that returns a **function** instead of action(i.e normal actionCreators return object)..They also get
**dispatch** as its argument...So whenever an Action-Creator returns a 'function', thunk automatically attaches to it and using dispatch we can dispatch other actions inside this thunk...Thunk is mainly used to perform **asynchronous** actions*

In our code, since getting shopData from firestore is asynch and to make it reusable for other pages apart from Shop in future, we made fetching shopData a redux action, dispatching which fetches shopData. Since, it is asynch, we used redux-thunk library to create this action which in turn can fire other actions like fetchSuccess,fetchFailure etc.

# Current Changes

Moved responsibility of HOC wrapping of Collection and CollectionsOverview Pages from Shop to above Components itself by making new Container files for the 2 components whose job is to render actual Component or Loading Spinner according to condition by wrapping to WithSpinner HOC.
Now Shop's page only role is to route to CollectionPage or CollectionsOverview Page according to route.

This was done to ensure seperation of concerns as Job of rendering Loading Spinner or data if available for a component should be its own responsibility.

