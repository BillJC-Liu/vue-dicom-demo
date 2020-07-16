// 引入 cornerstone,dicomParser,cornerstoneWADOImageLoader
import * as cornerstone from 'cornerstone-core';
import * as dicomParser from 'dicom-parser';
// 不建议 npm 安装 cornerstoneWADOImageLoader 如果你做了 会很头疼
import * as cornerstoneWADOImageLoader from '../../static/dist/cornerstoneWADOImageLoader.js';
// 指定要注册加载程序的基石实例
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
// 配置 webWorker (必须配置)
// 注意这里的路径问题  如果路径不对 cornerstoneWADOImageLoaderWebWorker 会报错 index.html Uncaught SyntaxError: Unexpected token <
const config = {
  webWorkerPath: '/static/dist/cornerstoneWADOImageLoaderWebWorker.js',
  taskConfiguration: {
    decodeTask: {
      codecsPath: '/static/dist/cornerstoneWADOImageLoaderCodecs.js',
    },
  },
};
cornerstoneWADOImageLoader.webWorkerManager.initialize(config);

