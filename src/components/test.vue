<template>
  <div class="container">
    <div class="enterURL">
      <input
        type="text"
        id="wadoURL"
        style="width: 35%;"
        placeholder="Enter WADO URL"
        value="http://localhost:5000/test.DCM"
      />
      <button type="button" id="downloadAndView">加载Dicom</button>
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

<script src="./test.js"></script>
<style>
</style>
