<template>
  <div class="container">
    <div @click="test">click</div>
    <div class="enterURL">
      <input
        type="file"
        id="dcmfile"
        style="width: 35%;"
        placeholder="Enter WADO URL"
        value="http://localhost:5000/test.DCM"
      />
      <button type="button" id="downloadAndView" v-on:click="handleClick">加载Dicom</button>
    </div>
    <div id="loadProgress" style="position:relative;left:-15%">Dicom加载:</div>
    <div
      style="width:512px; height:512px; position:relative; color:white; display:inline-block; border-style:solid; border-color:black;"
      oncontextmenu="return false"
      class="disable-selection noIbar"
      unselectable="on"
      onselectstart="return false;"
      onmousedown="return false;"
    >
      <div id="dicomImage" style="width:512px;height:512px;top:0px;left:0px; position:absolute"></div>
    </div>
  </div>
</template>

<script>
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

export default {
  name: 'HelloWorld',
  data() {
    return {
    };
  },
  methods: {
    test(){
      console.log(123);
    },
    // 当点击加载图像时 调用 loadAndViewImage 加载 Dicom 图像
    loadAndViewImage(imageId) {
      var element = document.getElementById('dicomImage');
      cornerstone.loadImage(imageId).then(function (image) {
        console.log("image:", image);

        var viewport = cornerstone.getDefaultViewportForImage(element, image);
        cornerstone.displayImage(element, image, viewport);
      }, function (err) {
        alert(err);
        console.log(err);
      });
    },

    handleClick() {
      const _this = this;
      const element = document.getElementById('dicomImage');
      cornerstone.enable(element);
      const file = document.getElementById('dcmfile').files[0];
      // 为 加载Dicom 按钮添加 点击事件 拼接 url 调用 loadAndViewImage 函数
      const url = cornerstoneWADOImageLoader.wadouri.fileManager.add(file);

      // 调用这个函数加载像,和激活工具
      _this.loadAndViewImage(url);
      // Dicom 加载 进度
      cornerstone.events.addEventListener(
        'cornerstoneimageloadprogress',
        (event) => {
          const eventData = event.detail;
          const loadProgress = document.getElementById('loadProgress');
          loadProgress.textContent = `Dicom加载: ${eventData.percentComplete}%`;
        },
      );
    },
  },
};
</script>
<style>
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
