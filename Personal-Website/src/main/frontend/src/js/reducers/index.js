
const REQUEST_ISSUES = 'REQUEST_ISSUES';
const RECEIVE_ISSUES = 'RECEIVE_ISSUES';
function issues(state = {
  isFetching: false,
  items: [],
}, action) {
  switch (action.type) {
    case REQUEST_ISSUES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_ISSUES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
      });
    default:
      return state;
  }
}

export default issues;