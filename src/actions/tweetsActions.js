// action crear tweet
export const addTweetAction = (state) => {
  return {
    type: "ADD_TWEET",
    payload: state
  };
};
// action delete tweet
export const deleteTweetAction = (id) => {
  return {
    type: "DELETE_TWEET",
    payload: id
  };
};
