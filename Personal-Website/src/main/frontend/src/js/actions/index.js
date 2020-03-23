import axios from 'axios';

const REQUEST_ISSUES = 'REQUEST_ISSUES';
const RECEIVE_ISSUES = 'RECEIVE_ISSUES';
const requestIssues = () => ({ type: REQUEST_ISSUES });

const receiveIssues = json => ({ type: RECEIVE_ISSUES, posts: json });

function fetchIssues() {
  return (dispatch) => {
    dispatch(requestIssues());
    return axios.get('https://api.github.com/repos/axuebin/articles/issues', {
      params: {
        creator: 'axuebin',
        labels: 'blog',
      },
    }).then(response => dispatch(receiveIssues(response.data))).catch(e => console.log(e));
  };
}

function shouldFetchIssues(state) {
  if (!state) {
    return true;
  }
  return !state.items.length;
}

export function fetchIssuesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchIssues(getState())) {
      return dispatch(fetchIssues());
    }
    return Promise.resolve();
  };
}