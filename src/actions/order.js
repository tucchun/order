//请求菜单类型
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';

// 请求菜单类型失败
export const REQUEST_CATEGORES_FAILURE = 'REQUEST_CATEGORES_FAILURE';

// 请求菜单类型成功
export const REQUEST_CATEGORES_SUCCESS = 'REQUEST_CATEGORES_SUCCESS';

//请求菜单类型
export function requestCategories() {
  return {type: REQUEST_CATEGORIES};
}

// 请求菜单类型失败
export function requestCategoresFailure(err) {
  return {type: REQUEST_CATEGORES_FAILURE, err};
}

// 请求菜单类型成功
export function requestCategoresSuccess(data) {
  return {type: REQUEST_CATEGORES_SUCCESS, data};
}

export function fetchCategories() {
  return function(dispatch) {
    dispatch(requestCategories());
    return fetch().then(response => response.json()).then(json => dispatch(requestCategoresSuccess(json)));
  };
}
