export default store => next => action => {
    //code here
    console.log('action', action);
        return next(action);
}