import {combineReducers} from 'redux';
import {REQUEST_CATEGORIES, REQUEST_CATEGORES_FAILURE, REQUEST_CATEGORES_SUCCESS} from '../actions/order';

// 开始请求菜单
function requestCategories(state = {
  isFetching: false
}, action) {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return {isFetching: true};
    default:
      return state;
  }
}

// 请求菜单失败
function requestCategoresFailure(state = {
  err: ''
}, action) {
  switch (action.type) {
    case REQUEST_CATEGORES_FAILURE:
      return {err: action.err};
    default:
      return state;
  }
}

function requestCategoresSuccess(state = [], action) {
  switch (action.type) {
    case REQUEST_CATEGORES_SUCCESS:
      return action.data;
    default:
      return state;

  }
}

const rootReducer = combineReducers({
  requestCategories,
  requestCategoresFailure,
  requestCategoresSuccess
});

export default rootReducer;
