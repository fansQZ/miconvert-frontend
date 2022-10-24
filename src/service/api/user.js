import request from '../utils';

const user = {
  // 注册
  register(data) {
    return request.post('/user/register', data);
  },
  // 登录
  login(data) {
    return request.post('/user/login', data);
  },
  changePassword(data) {
    return request.post('/user/changePassword', data);
  },
};

export default user;