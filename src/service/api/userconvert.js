import request from '../utils';
import baseUrl from '../utils/baseUrl';

const convert = {
  // 用户获取文件列表
  listFile() {
    return request.get('/userConvert/listFile', {});
  },
  // 删除
  deleteFiles(ids) {
    return request.delete('/userConvert/deleteFiles', { ids: `${ids}` });
  },
  // 下载一个文件
  downloadFile(data) {
    return request.download(`/userConvert/downloadFile/${data}`, {}, 'get');
  },
  // 异步解析一个文件
  convertFile(data) {
    return request.post('/userConvert/convertFile', data);
  },
  getDownloadUrl(fileId) {
    return `${baseUrl}/userConvert/downloadFile/${fileId}`;
  },
};

export default convert;
