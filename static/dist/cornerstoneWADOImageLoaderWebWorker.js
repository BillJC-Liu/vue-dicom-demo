/*! cornerstone-wado-image-loader - 2.1.1 - 2018-04-18 | (c) 2016 Chris Hafey | https://github.com/cornerstonejs/cornerstoneWADOImageLoader */
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') { module.exports = factory(); } else if (typeof define === 'function' && define.amd) { define('cornerstoneWADOImageLoaderWebWorker', [], factory); } else if (typeof exports === 'object') { exports.cornerstoneWADOImageLoaderWebWorker = factory(); } else { root.cornerstoneWADOImageLoaderWebWorker = factory(); }
}(this, () =>
/** *** */ (function (modules) { // webpackBootstrap
    /** *** */ 	// The module cache
    /** *** */ 	const installedModules = {};
    /** *** */
    /** *** */ 	// The require function
    /** *** */ 	function __webpack_require__(moduleId) {
      /** *** */
      /** *** */ 		// Check if module is in cache
      /** *** */ 		if (installedModules[moduleId]) {
        /** *** */ 			return installedModules[moduleId].exports;
        /** *** */
      }
      /** *** */ 		// Create a new module (and put it into the cache)
      /** *** */ 		const module = installedModules[moduleId] = {
        /** *** */ 			i: moduleId,
        /** *** */ 			l: false,
        /** *** */ 			exports: {},
        /** *** */
      };
      /** *** */
      /** *** */ 		// Execute the module function
      /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /** *** */
      /** *** */ 		// Flag the module as loaded
      /** *** */ 		module.l = true;
      /** *** */
      /** *** */ 		// Return the exports of the module
      /** *** */ 		return module.exports;
      /** *** */
    }
    /** *** */
    /** *** */
    /** *** */ 	// expose the modules object (__webpack_modules__)
    /** *** */ 	__webpack_require__.m = modules;
    /** *** */
    /** *** */ 	// expose the module cache
    /** *** */ 	__webpack_require__.c = installedModules;
    /** *** */
    /** *** */ 	// define getter function for harmony exports
    /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
      /** *** */ 		if (!__webpack_require__.o(exports, name)) {
        /** *** */ 			Object.defineProperty(exports, name, {
          /** *** */ 				configurable: false,
          /** *** */ 				enumerable: true,
          /** *** */ 				get: getter,
          /** *** */
        });
        /** *** */
      }
      /** *** */
    };
    /** *** */
    /** *** */ 	// define __esModule on exports
    /** *** */ 	__webpack_require__.r = function (exports) {
      /** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */
    };
    /** *** */
    /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
    /** *** */ 	__webpack_require__.n = function (module) {
      /** *** */ 		const getter = module && module.__esModule ?
      /** *** */ 			function getDefault() { return module.default; } :
      /** *** */ 			function getModuleExports() { return module; };
      /** *** */ 		__webpack_require__.d(getter, 'a', getter);
      /** *** */ 		return getter;
      /** *** */
    };
    /** *** */
    /** *** */ 	// Object.prototype.hasOwnProperty.call
    /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /** *** */
    /** *** */ 	// __webpack_public_path__
    /** *** */ 	__webpack_require__.p = '';
    /** *** */
    /** *** */
    /** *** */ 	// Load entry module and return exports
    /** *** */ 	return __webpack_require__(__webpack_require__.s = './webWorker/index.js');
    /** *** */
  }({

    /***/ './shared/calculateMinMax.js':
    /*! ***********************************!*\
  !*** ./shared/calculateMinMax.js ***!
  \********************************** */
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = calculateMinMax;

      const _getMinMax = __webpack_require__(/*! ./getMinMax.js */ './shared/getMinMax.js');

      const _getMinMax2 = _interopRequireDefault(_getMinMax);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      /**
         * Check the minimum and maximum values in the imageFrame pixel data
         * match with the provided smallestPixelValue and largestPixelValue metaData.
         *
         * If 'strict' is true, log to the console a warning if these values do not match.
         * Otherwise, correct them automatically.
         *
         * @param {Object} imageFrame
         * @param {Boolean} strict
         */
      function calculateMinMax(imageFrame) {
        const strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        const minMax = (0, _getMinMax2.default)(imageFrame.pixelData);
        console.log("错误提示：", minMax , imageFrame);
        
        if (strict === true) {
          if (imageFrame.smallestPixelValue !== minMax.min) {
            console.warn('Image smallestPixelValue tag is incorrect. Rendering performance will suffer considerably.');
          }

          if (imageFrame.largestPixelValue !== minMax.max) {
            console.warn('Image largestPixelValue tag is incorrect. Rendering performance will suffer considerably.');
          }
        } else {
          imageFrame.smallestPixelValue = minMax.min;
          imageFrame.largestPixelValue = minMax.max;
        }
      }

      /***/
    }),

    /***/ './shared/decodeImageFrame.js':
    /*! ************************************!*\
  !*** ./shared/decodeImageFrame.js ***!
  \*********************************** */
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      const _decodeLittleEndian = __webpack_require__(/*! ./decoders/decodeLittleEndian.js */ './shared/decoders/decodeLittleEndian.js');

      const _decodeLittleEndian2 = _interopRequireDefault(_decodeLittleEndian);

      const _decodeBigEndian = __webpack_require__(/*! ./decoders/decodeBigEndian.js */ './shared/decoders/decodeBigEndian.js');

      const _decodeBigEndian2 = _interopRequireDefault(_decodeBigEndian);

      const _decodeRLE = __webpack_require__(/*! ./decoders/decodeRLE.js */ './shared/decoders/decodeRLE.js');

      const _decodeRLE2 = _interopRequireDefault(_decodeRLE);

      const _decodeJPEGBaseline = __webpack_require__(/*! ./decoders/decodeJPEGBaseline.js */ './shared/decoders/decodeJPEGBaseline.js');

      const _decodeJPEGBaseline2 = _interopRequireDefault(_decodeJPEGBaseline);

      const _decodeJPEGLossless = __webpack_require__(/*! ./decoders/decodeJPEGLossless.js */ './shared/decoders/decodeJPEGLossless.js');

      const _decodeJPEGLossless2 = _interopRequireDefault(_decodeJPEGLossless);

      const _decodeJPEGLS = __webpack_require__(/*! ./decoders/decodeJPEGLS.js */ './shared/decoders/decodeJPEGLS.js');

      const _decodeJPEGLS2 = _interopRequireDefault(_decodeJPEGLS);

      const _decodeJPEG = __webpack_require__(/*! ./decoders/decodeJPEG2000.js */ './shared/decoders/decodeJPEG2000.js');

      const _decodeJPEG2 = _interopRequireDefault(_decodeJPEG);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      function decodeImageFrame(imageFrame, transferSyntax, pixelData, decodeConfig, options) {
        const start = new Date().getTime();

        if (transferSyntax === '1.2.840.10008.1.2') {
          // Implicit VR Little Endian
          imageFrame = (0, _decodeLittleEndian2.default)(imageFrame, pixelData);
        } else if (transferSyntax === '1.2.840.10008.1.2.1') {
          // Explicit VR Little Endian
          imageFrame = (0, _decodeLittleEndian2.default)(imageFrame, pixelData);
        } else if (transferSyntax === '1.2.840.10008.1.2.2') {
          // Explicit VR Big Endian (retired)
          imageFrame = (0, _decodeBigEndian2.default)(imageFrame, pixelData);
        } else if (transferSyntax === '1.2.840.10008.1.2.1.99') {
          // Deflate transfer syntax (deflated by dicomParser)
          imageFrame = (0, _decodeLittleEndian2.default)(imageFrame, pixelData);
        } else if (transferSyntax === '1.2.840.10008.1.2.5') {
          // RLE Lossless
          imageFrame = (0, _decodeRLE2.default)(imageFrame, pixelData);
        } else if (transferSyntax === '1.2.840.10008.1.2.4.50') {
          // JPEG Baseline lossy process 1 (8 bit)
          imageFrame = (0, _decodeJPEGBaseline2.default)(imageFrame, pixelData);
        } else if (transferSyntax === '1.2.840.10008.1.2.4.51') {
          // JPEG Baseline lossy process 2 & 4 (12 bit)
          imageFrame = (0, _decodeJPEGBaseline2.default)(imageFrame, pixelData);
        } else if (transferSyntax === '1.2.840.10008.1.2.4.57') {
          // JPEG Lossless, Nonhierarchical (Processes 14)
          imageFrame = (0, _decodeJPEGLossless2.default)(imageFrame, pixelData);
        } else if (transferSyntax === '1.2.840.10008.1.2.4.70') {
          // JPEG Lossless, Nonhierarchical (Processes 14 [Selection 1])
          imageFrame = (0, _decodeJPEGLossless2.default)(imageFrame, pixelData);
        } else if (transferSyntax === '1.2.840.10008.1.2.4.80') {
          // JPEG-LS Lossless Image Compression
          imageFrame = (0, _decodeJPEGLS2.default)(imageFrame, pixelData);
        } else if (transferSyntax === '1.2.840.10008.1.2.4.81') {
          // JPEG-LS Lossy (Near-Lossless) Image Compression
          imageFrame = (0, _decodeJPEGLS2.default)(imageFrame, pixelData);
        } else if (transferSyntax === '1.2.840.10008.1.2.4.90') {
          // JPEG 2000 Lossless
          imageFrame = (0, _decodeJPEG2.default)(imageFrame, pixelData, decodeConfig, options);
        } else if (transferSyntax === '1.2.840.10008.1.2.4.91') {
          // JPEG 2000 Lossy
          imageFrame = (0, _decodeJPEG2.default)(imageFrame, pixelData, decodeConfig, options);
        } else {
          throw new Error(`no decoder for transfer syntax ${transferSyntax}`);
        }

        /* Don't know if these work...
           // JPEG 2000 Part 2 Multicomponent Image Compression (Lossless Only)
           else if(transferSyntax === "1.2.840.10008.1.2.4.92")
           {
           return decodeJPEG2000(dataSet, frame);
           }
           // JPEG 2000 Part 2 Multicomponent Image Compression
           else if(transferSyntax === "1.2.840.10008.1.2.4.93")
           {
           return decodeJPEG2000(dataSet, frame);
           }
           */

        const shouldShift = imageFrame.pixelRepresentation !== undefined && imageFrame.pixelRepresentation === 1;
        const shift = shouldShift && imageFrame.bitsStored !== undefined ? 32 - imageFrame.bitsStored : undefined;

        if (shouldShift && shift !== undefined) {
          for (let i = 0; i < imageFrame.pixelData.length; i++) {
            // eslint-disable-next-line no-bitwise
            imageFrame.pixelData[i] = imageFrame.pixelData[i] << shift >> shift;
          }
        }

        const end = new Date().getTime();

        imageFrame.decodeTimeInMS = end - start;

        return imageFrame;
      }

      exports.default = decodeImageFrame;

      /***/
    }),

    /***/ './shared/decoders/decodeBigEndian.js':
    /*! ********************************************!*\
  !*** ./shared/decoders/decodeBigEndian.js ***!
  \******************************************* */
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      /* eslint no-bitwise: 0 */
      function swap16(val) {
        return (val & 0xFF) << 8 | val >> 8 & 0xFF;
      }

      function decodeBigEndian(imageFrame, pixelData) {
        if (imageFrame.bitsAllocated === 16) {
          let arrayBuffer = pixelData.buffer;
          let offset = pixelData.byteOffset;
          const length = pixelData.length;
          // if pixel data is not aligned on even boundary, shift it so we can create the 16 bit array
          // buffers on it

          if (offset % 2) {
            arrayBuffer = arrayBuffer.slice(offset);
            offset = 0;
          }

          if (imageFrame.pixelRepresentation === 0) {
            imageFrame.pixelData = new Uint16Array(arrayBuffer, offset, length / 2);
          } else {
            imageFrame.pixelData = new Int16Array(arrayBuffer, offset, length / 2);
          }
          // Do the byte swap
          for (let i = 0; i < imageFrame.pixelData.length; i++) {
            imageFrame.pixelData[i] = swap16(imageFrame.pixelData[i]);
          }
        } else if (imageFrame.bitsAllocated === 8) {
          imageFrame.pixelData = pixelData;
        }

        return imageFrame;
      }

      exports.default = decodeBigEndian;

      /***/
    }),

    /***/ './shared/decoders/decodeJPEG2000.js':
    /*! *******************************************!*\
  !*** ./shared/decoders/decodeJPEG2000.js ***!
  \****************************************** */
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      function decodeJpx(imageFrame, pixelData) {
        const jpxImage = new JpxImage();

        jpxImage.parse(pixelData);

        const tileCount = jpxImage.tiles.length;

        if (tileCount !== 1) {
          throw new Error(`JPEG2000 decoder returned a tileCount of ${tileCount}, when 1 is expected`);
        }

        imageFrame.columns = jpxImage.width;
        imageFrame.rows = jpxImage.height;
        imageFrame.pixelData = jpxImage.tiles[0].items;

        return imageFrame;
      }

      let openJPEG = void 0;

      function decodeOpenJPEG(data, bytesPerPixel, signed) {
        const dataPtr = openJPEG._malloc(data.length);

        openJPEG.writeArrayToMemory(data, dataPtr);

        // create param outpout
        const imagePtrPtr = openJPEG._malloc(4);
        const imageSizePtr = openJPEG._malloc(4);
        const imageSizeXPtr = openJPEG._malloc(4);
        const imageSizeYPtr = openJPEG._malloc(4);
        const imageSizeCompPtr = openJPEG._malloc(4);

        const t0 = new Date().getTime();
        const ret = openJPEG.ccall('jp2_decode', 'number', ['number', 'number', 'number', 'number', 'number', 'number', 'number'], [dataPtr, data.length, imagePtrPtr, imageSizePtr, imageSizeXPtr, imageSizeYPtr, imageSizeCompPtr]);
        // add num vomp..etc

        if (ret !== 0) {
          console.log('[opj_decode] decoding failed!');
          openJPEG._free(dataPtr);
          openJPEG._free(openJPEG.getValue(imagePtrPtr, '*'));
          openJPEG._free(imageSizeXPtr);
          openJPEG._free(imageSizeYPtr);
          openJPEG._free(imageSizePtr);
          openJPEG._free(imageSizeCompPtr);

          return;
        }

        const imagePtr = openJPEG.getValue(imagePtrPtr, '*');

        const image = {
          length: openJPEG.getValue(imageSizePtr, 'i32'),
          sx: openJPEG.getValue(imageSizeXPtr, 'i32'),
          sy: openJPEG.getValue(imageSizeYPtr, 'i32'),
          nbChannels: openJPEG.getValue(imageSizeCompPtr, 'i32'), // hard coded for now
          perf_timetodecode: undefined,
          pixelData: undefined,
        };

        // Copy the data from the EMSCRIPTEN heap into the correct type array
        const length = image.sx * image.sy * image.nbChannels;
        const src32 = new Int32Array(openJPEG.HEAP32.buffer, imagePtr, length);

        if (bytesPerPixel === 1) {
          if (Uint8Array.from) {
            image.pixelData = Uint8Array.from(src32);
          } else {
            image.pixelData = new Uint8Array(length);
            for (let i = 0; i < length; i++) {
              image.pixelData[i] = src32[i];
            }
          }
        } else if (signed) {
          if (Int16Array.from) {
            image.pixelData = Int16Array.from(src32);
          } else {
            image.pixelData = new Int16Array(length);
            for (let _i = 0; _i < length; _i++) {
              image.pixelData[_i] = src32[_i];
            }
          }
        } else if (Uint16Array.from) {
          image.pixelData = Uint16Array.from(src32);
        } else {
          image.pixelData = new Uint16Array(length);
          for (let _i2 = 0; _i2 < length; _i2++) {
            image.pixelData[_i2] = src32[_i2];
          }
        }

        const t1 = new Date().getTime();

        image.perf_timetodecode = t1 - t0;

        // free
        openJPEG._free(dataPtr);
        openJPEG._free(imagePtrPtr);
        openJPEG._free(imagePtr);
        openJPEG._free(imageSizePtr);
        openJPEG._free(imageSizeXPtr);
        openJPEG._free(imageSizeYPtr);
        openJPEG._free(imageSizeCompPtr);

        return image;
      }

      function decodeOpenJpeg2000(imageFrame, pixelData) {
        const bytesPerPixel = imageFrame.bitsAllocated <= 8 ? 1 : 2;
        const signed = imageFrame.pixelRepresentation === 1;

        const image = decodeOpenJPEG(pixelData, bytesPerPixel, signed);

        imageFrame.columns = image.sx;
        imageFrame.rows = image.sy;
        imageFrame.pixelData = image.pixelData;
        if (image.nbChannels > 1) {
          imageFrame.photometricInterpretation = 'RGB';
        }

        return imageFrame;
      }

      function initializeJPEG2000(decodeConfig) {
        // check to make sure codec is loaded
        if (!decodeConfig.usePDFJS) {
          if (typeof OpenJPEG === 'undefined') {
            throw new Error('OpenJPEG decoder not loaded');
          }
        }

        if (!openJPEG) {
          openJPEG = OpenJPEG();
          if (!openJPEG || !openJPEG._jp2_decode) {
            throw new Error('OpenJPEG failed to initialize');
          }
        }
      }

      function decodeJPEG2000(imageFrame, pixelData, decodeConfig) {
        const options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        initializeJPEG2000(decodeConfig);

        if (options.usePDFJS || decodeConfig.usePDFJS) {
          // OHIF image-JPEG2000 https://github.com/OHIF/image-JPEG2000
          // console.log('PDFJS')
          return decodeJpx(imageFrame, pixelData);
        }

        // OpenJPEG2000 https://github.com/jpambrun/openjpeg
        // console.log('OpenJPEG')
        return decodeOpenJpeg2000(imageFrame, pixelData);
      }

      exports.default = decodeJPEG2000;
      exports.initializeJPEG2000 = initializeJPEG2000;

      /***/
    }),

    /***/ './shared/decoders/decodeJPEGBaseline.js':
    /*! ***********************************************!*\
  !*** ./shared/decoders/decodeJPEGBaseline.js ***!
  \********************************************** */
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });


      function decodeJPEGBaseline(imageFrame, pixelData) {
        // check to make sure codec is loaded
        if (typeof JpegImage === 'undefined') {
          throw new Error('No JPEG Baseline decoder loaded');
        }
        const jpeg = new JpegImage();

        jpeg.parse(pixelData);

        // Do not use the internal jpeg.js color transformation,
        // since we will handle this afterwards
        jpeg.colorTransform = false;

        if (imageFrame.bitsAllocated === 8) {
          imageFrame.pixelData = jpeg.getData(imageFrame.columns, imageFrame.rows);

          return imageFrame;
        } else if (imageFrame.bitsAllocated === 16) {
          imageFrame.pixelData = jpeg.getData16(imageFrame.columns, imageFrame.rows);

          return imageFrame;
        }
      }

      exports.default = decodeJPEGBaseline;

      /***/
    }),

    /***/ './shared/decoders/decodeJPEGLS.js':
    /*! *****************************************!*\
  !*** ./shared/decoders/decodeJPEGLS.js ***!
  \**************************************** */
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      let charLS = void 0;

      function jpegLSDecode(data, isSigned) {
        // prepare input parameters
        const dataPtr = charLS._malloc(data.length);

        charLS.writeArrayToMemory(data, dataPtr);

        // prepare output parameters
        const imagePtrPtr = charLS._malloc(4);
        const imageSizePtr = charLS._malloc(4);
        const widthPtr = charLS._malloc(4);
        const heightPtr = charLS._malloc(4);
        const bitsPerSamplePtr = charLS._malloc(4);
        const stridePtr = charLS._malloc(4);
        const allowedLossyErrorPtr = charLS._malloc(4);
        const componentsPtr = charLS._malloc(4);
        const interleaveModePtr = charLS._malloc(4);

        // Decode the image
        const result = charLS.ccall('jpegls_decode', 'number', ['number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number', 'number'], [dataPtr, data.length, imagePtrPtr, imageSizePtr, widthPtr, heightPtr, bitsPerSamplePtr, stridePtr, componentsPtr, allowedLossyErrorPtr, interleaveModePtr]);

        // Extract result values into object
        const image = {
          result,
          width: charLS.getValue(widthPtr, 'i32'),
          height: charLS.getValue(heightPtr, 'i32'),
          bitsPerSample: charLS.getValue(bitsPerSamplePtr, 'i32'),
          stride: charLS.getValue(stridePtr, 'i32'),
          components: charLS.getValue(componentsPtr, 'i32'),
          allowedLossyError: charLS.getValue(allowedLossyErrorPtr, 'i32'),
          interleaveMode: charLS.getValue(interleaveModePtr, 'i32'),
          pixelData: undefined,
        };

        // Copy image from emscripten heap into appropriate array buffer type
        const imagePtr = charLS.getValue(imagePtrPtr, '*');

        if (image.bitsPerSample <= 8) {
          image.pixelData = new Uint8Array(image.width * image.height * image.components);
          image.pixelData.set(new Uint8Array(charLS.HEAP8.buffer, imagePtr, image.pixelData.length));
        } else if (isSigned) {
          image.pixelData = new Int16Array(image.width * image.height * image.components);
          image.pixelData.set(new Int16Array(charLS.HEAP16.buffer, imagePtr, image.pixelData.length));
        } else {
          image.pixelData = new Uint16Array(image.width * image.height * image.components);
          image.pixelData.set(new Uint16Array(charLS.HEAP16.buffer, imagePtr, image.pixelData.length));
        }

        // free memory and return image object
        charLS._free(dataPtr);
        charLS._free(imagePtr);
        charLS._free(imagePtrPtr);
        charLS._free(imageSizePtr);
        charLS._free(widthPtr);
        charLS._free(heightPtr);
        charLS._free(bitsPerSamplePtr);
        charLS._free(stridePtr);
        charLS._free(componentsPtr);
        charLS._free(interleaveModePtr);

        return image;
      }

      function initializeJPEGLS() {
        // check to make sure codec is loaded
        if (typeof CharLS === 'undefined') {
          throw new Error('No JPEG-LS decoder loaded');
        }

        // Try to initialize CharLS
        // CharLS https://github.com/cornerstonejs/charls
        if (!charLS) {
          charLS = CharLS();
          if (!charLS || !charLS._jpegls_decode) {
            throw new Error('JPEG-LS failed to initialize');
          }
        }
      }

      function decodeJPEGLS(imageFrame, pixelData) {
        initializeJPEGLS();

        const image = jpegLSDecode(pixelData, imageFrame.pixelRepresentation === 1);

        // throw error if not success or too much data
        if (image.result !== 0 && image.result !== 6) {
          throw new Error(`JPEG-LS decoder failed to decode frame (error code ${image.result})`);
        }

        imageFrame.columns = image.width;
        imageFrame.rows = image.height;
        imageFrame.pixelData = image.pixelData;

        return imageFrame;
      }

      exports.default = decodeJPEGLS;
      exports.initializeJPEGLS = initializeJPEGLS;

      /***/
    }),

    /***/ './shared/decoders/decodeJPEGLossless.js':
    /*! ***********************************************!*\
  !*** ./shared/decoders/decodeJPEGLossless.js ***!
  \********************************************** */
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });


      function decodeJPEGLossless(imageFrame, pixelData) {
        // check to make sure codec is loaded
        if (typeof jpeg === 'undefined' || typeof jpeg.lossless === 'undefined' || typeof jpeg.lossless.Decoder === 'undefined') {
          throw new Error('No JPEG Lossless decoder loaded');
        }

        const byteOutput = imageFrame.bitsAllocated <= 8 ? 1 : 2;
        // console.time('jpeglossless');
        const buffer = pixelData.buffer;
        const decoder = new jpeg.lossless.Decoder();
        const decompressedData = decoder.decode(buffer, pixelData.byteOffset, pixelData.length, byteOutput);
        // console.timeEnd('jpeglossless');

        if (imageFrame.pixelRepresentation === 0) {
          if (imageFrame.bitsAllocated === 16) {
            imageFrame.pixelData = new Uint16Array(decompressedData.buffer);

            return imageFrame;
          }
          // untested!
          imageFrame.pixelData = new Uint8Array(decompressedData.buffer);

          return imageFrame;
        }
        imageFrame.pixelData = new Int16Array(decompressedData.buffer);

        return imageFrame;
      }

      exports.default = decodeJPEGLossless;

      /***/
    }),

    /***/ './shared/decoders/decodeLittleEndian.js':
    /*! ***********************************************!*\
  !*** ./shared/decoders/decodeLittleEndian.js ***!
  \********************************************** */
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      function decodeLittleEndian(imageFrame, pixelData) {
        let arrayBuffer = pixelData.buffer;
        let offset = pixelData.byteOffset;
        const length = pixelData.length;

        if (imageFrame.bitsAllocated === 16) {
          // if pixel data is not aligned on even boundary, shift it so we can create the 16 bit array
          // buffers on it
          if (offset % 2) {
            arrayBuffer = arrayBuffer.slice(offset);
            offset = 0;
          }

          if (imageFrame.pixelRepresentation === 0) {
            imageFrame.pixelData = new Uint16Array(arrayBuffer, offset, length / 2);
          } else {
            imageFrame.pixelData = new Int16Array(arrayBuffer, offset, length / 2);
          }
        } else if (imageFrame.bitsAllocated === 8 || imageFrame.bitsAllocated === 1) {
          imageFrame.pixelData = pixelData;
        } else if (imageFrame.bitsAllocated === 32) {
          // if pixel data is not aligned on even boundary, shift it
          if (offset % 2) {
            arrayBuffer = arrayBuffer.slice(offset);
            offset = 0;
          }

          imageFrame.pixelData = new Float32Array(arrayBuffer, offset, length / 4);
        }

        return imageFrame;
      }

      exports.default = decodeLittleEndian;

      /***/
    }),

    /***/ './shared/decoders/decodeRLE.js':
    /*! **************************************!*\
  !*** ./shared/decoders/decodeRLE.js ***!
  \************************************* */
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      function decodeRLE(imageFrame, pixelData) {
        if (imageFrame.bitsAllocated === 8) {
          if (imageFrame.planarConfiguration) {
            return decode8Planar(imageFrame, pixelData);
          }

          return decode8(imageFrame, pixelData);
        } else if (imageFrame.bitsAllocated === 16) {
          return decode16(imageFrame, pixelData);
        }

        throw new Error('unsupported pixel format for RLE');
      }

      function decode8(imageFrame, pixelData) {
        const frameData = pixelData;
        const frameSize = imageFrame.rows * imageFrame.columns;
        const outFrame = new ArrayBuffer(frameSize * imageFrame.samplesPerPixel);
        const header = new DataView(frameData.buffer, frameData.byteOffset);
        const data = new Int8Array(frameData.buffer, frameData.byteOffset);
        const out = new Int8Array(outFrame);

        let outIndex = 0;
        const numSegments = header.getInt32(0, true);

        for (let s = 0; s < numSegments; ++s) {
          outIndex = s;

          let inIndex = header.getInt32((s + 1) * 4, true);
          let maxIndex = header.getInt32((s + 2) * 4, true);

          if (maxIndex === 0) {
            maxIndex = frameData.length;
          }

          const endOfSegment = frameSize * numSegments;

          while (inIndex < maxIndex) {
            const n = data[inIndex++];

            if (n >= 0 && n <= 127) {
              // copy n bytes
              for (let i = 0; i < n + 1 && outIndex < endOfSegment; ++i) {
                out[outIndex] = data[inIndex++];
                outIndex += imageFrame.samplesPerPixel;
              }
            } else if (n <= -1 && n >= -127) {
              const value = data[inIndex++];
              // run of n bytes

              for (let j = 0; j < -n + 1 && outIndex < endOfSegment; ++j) {
                out[outIndex] = value;
                outIndex += imageFrame.samplesPerPixel;
              }
            } /* else if (n === -128) {
        } // do nothing */
          }
        }
        imageFrame.pixelData = new Uint8Array(outFrame);

        return imageFrame;
      }

      function decode8Planar(imageFrame, pixelData) {
        const frameData = pixelData;
        const frameSize = imageFrame.rows * imageFrame.columns;
        const outFrame = new ArrayBuffer(frameSize * imageFrame.samplesPerPixel);
        const header = new DataView(frameData.buffer, frameData.byteOffset);
        const data = new Int8Array(frameData.buffer, frameData.byteOffset);
        const out = new Int8Array(outFrame);

        let outIndex = 0;
        const numSegments = header.getInt32(0, true);

        for (let s = 0; s < numSegments; ++s) {
          outIndex = s * frameSize;

          let inIndex = header.getInt32((s + 1) * 4, true);
          let maxIndex = header.getInt32((s + 2) * 4, true);

          if (maxIndex === 0) {
            maxIndex = frameData.length;
          }

          const endOfSegment = frameSize * numSegments;

          while (inIndex < maxIndex) {
            const n = data[inIndex++];

            if (n >= 0 && n <= 127) {
              // copy n bytes
              for (let i = 0; i < n + 1 && outIndex < endOfSegment; ++i) {
                out[outIndex] = data[inIndex++];
                outIndex++;
              }
            } else if (n <= -1 && n >= -127) {
              const value = data[inIndex++];
              // run of n bytes

              for (let j = 0; j < -n + 1 && outIndex < endOfSegment; ++j) {
                out[outIndex] = value;
                outIndex++;
              }
            } /* else if (n === -128) {
        } // do nothing */
          }
        }
        imageFrame.pixelData = new Uint8Array(outFrame);

        return imageFrame;
      }

      function decode16(imageFrame, pixelData) {
        const frameData = pixelData;
        const frameSize = imageFrame.rows * imageFrame.columns;
        const outFrame = new ArrayBuffer(frameSize * imageFrame.samplesPerPixel * 2);

        const header = new DataView(frameData.buffer, frameData.byteOffset);
        const data = new Int8Array(frameData.buffer, frameData.byteOffset);
        const out = new Int8Array(outFrame);

        const numSegments = header.getInt32(0, true);

        for (let s = 0; s < numSegments; ++s) {
          let outIndex = 0;
          const highByte = s === 0 ? 1 : 0;

          let inIndex = header.getInt32((s + 1) * 4, true);
          let maxIndex = header.getInt32((s + 2) * 4, true);

          if (maxIndex === 0) {
            maxIndex = frameData.length;
          }

          while (inIndex < maxIndex) {
            const n = data[inIndex++];

            if (n >= 0 && n <= 127) {
              for (let i = 0; i < n + 1 && outIndex < frameSize; ++i) {
                out[outIndex * 2 + highByte] = data[inIndex++];
                outIndex++;
              }
            } else if (n <= -1 && n >= -127) {
              const value = data[inIndex++];

              for (let j = 0; j < -n + 1 && outIndex < frameSize; ++j) {
                out[outIndex * 2 + highByte] = value;
                outIndex++;
              }
            } /* else if (n === -128) {
        } // do nothing */
          }
        }
        if (imageFrame.pixelRepresentation === 0) {
          imageFrame.pixelData = new Uint16Array(outFrame);
        } else {
          imageFrame.pixelData = new Int16Array(outFrame);
        }

        return imageFrame;
      }

      exports.default = decodeRLE;

      /***/
    }),

    /***/ './shared/getMinMax.js':
    /*! *****************************!*\
  !*** ./shared/getMinMax.js ***!
  \**************************** */
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      /**
         * Calculate the minimum and maximum values in an Array
         *
         * @param {Number[]} storedPixelData
         * @return {{min: Number, max: Number}}
         */
      function getMinMax(storedPixelData) {
        // we always calculate the min max values since they are not always
        // present in DICOM and we don't want to trust them anyway as cornerstone
        // depends on us providing reliable values for these
        let min = storedPixelData[0];
        let max = storedPixelData[0];
        let storedPixel = void 0;
        const numPixels = storedPixelData.length;

        for (let index = 1; index < numPixels; index++) {
          storedPixel = storedPixelData[index];
          min = Math.min(min, storedPixel);
          max = Math.max(max, storedPixel);
        }

        return {
          min,
          max,
        };
      }

      exports.default = getMinMax;

      /***/
    }),

    /***/ './version.js':
    /*! ********************!*\
  !*** ./version.js ***!
  \******************* */
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = '2.1.1';

      /***/
    }),

    /***/ './webWorker/decodeTask/decodeTask.js':
    /*! ********************************************!*\
  !*** ./webWorker/decodeTask/decodeTask.js ***!
  \******************************************* */
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      const _decodeJPEG = __webpack_require__(/*! ../../shared/decoders/decodeJPEG2000.js */ './shared/decoders/decodeJPEG2000.js');

      const _decodeJPEGLS = __webpack_require__(/*! ../../shared/decoders/decodeJPEGLS.js */ './shared/decoders/decodeJPEGLS.js');

      const _calculateMinMax = __webpack_require__(/*! ../../shared/calculateMinMax.js */ './shared/calculateMinMax.js');

      const _calculateMinMax2 = _interopRequireDefault(_calculateMinMax);

      const _decodeImageFrame = __webpack_require__(/*! ../../shared/decodeImageFrame.js */ './shared/decodeImageFrame.js');

      const _decodeImageFrame2 = _interopRequireDefault(_decodeImageFrame);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      // flag to ensure codecs are loaded only once
      let codecsLoaded = false;

      // the configuration object for the decodeTask
      let decodeConfig = void 0;

      /**
         * Function to control loading and initializing the codecs
         * @param config
         */
      function loadCodecs(config) {
        // prevent loading codecs more than once
        if (codecsLoaded) {
          return;
        }

        // Load the codecs
        // console.time('loadCodecs');
        self.importScripts(config.decodeTask.codecsPath);
        codecsLoaded = true;
        // console.timeEnd('loadCodecs');

        // Initialize the codecs
        if (config.decodeTask.initializeCodecsOnStartup) {
          // console.time('initializeCodecs');
          (0, _decodeJPEG.initializeJPEG2000)(config.decodeTask);
          (0, _decodeJPEGLS.initializeJPEGLS)(config.decodeTask);
          // console.timeEnd('initializeCodecs');
        }
      }

      /**
         * Task initialization function
         */
      function initialize(config) {
        decodeConfig = config;
        if (config.decodeTask.loadCodecsOnStartup) {
          loadCodecs(config);
        }
      }

      /**
         * Task handler function
         */
      function handler(data, doneCallback) {
        // Load the codecs if they aren't already loaded
        loadCodecs(decodeConfig);

        const strict = decodeConfig && decodeConfig.decodeTask && decodeConfig.decodeTask.strict;
        const imageFrame = data.data.imageFrame;

        // convert pixel data from ArrayBuffer to Uint8Array since web workers support passing ArrayBuffers but
        // not typed arrays
        const pixelData = new Uint8Array(data.data.pixelData);

        (0, _decodeImageFrame2.default)(imageFrame, data.data.transferSyntax, pixelData, decodeConfig.decodeTask, data.data.options);

        if (!imageFrame.pixelData) {
          throw new Error('decodeTask: imageFrame.pixelData is undefined after decoding');
        }

        (0, _calculateMinMax2.default)(imageFrame, strict);

        // convert from TypedArray to ArrayBuffer since web workers support passing ArrayBuffers but not
        // typed arrays
        imageFrame.pixelData = imageFrame.pixelData.buffer;

        // invoke the callback with our result and pass the pixelData in the transferList to move it to
        // UI thread without making a copy
        doneCallback(imageFrame, [imageFrame.pixelData]);
      }

      exports.default = {
        taskType: 'decodeTask',
        handler,
        initialize,
      };

      /***/
    }),

    /***/ './webWorker/index.js':
    /*! ****************************!*\
  !*** ./webWorker/index.js ***!
  \*************************** */
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.version = exports.registerTaskHandler = undefined;

      const _version = __webpack_require__(/*! ../version.js */ './version.js');

      Object.defineProperty(exports, 'version', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_version).default;
        },
      });

      const _webWorker = __webpack_require__(/*! ./webWorker.js */ './webWorker/webWorker.js');

      const _decodeTask = __webpack_require__(/*! ./decodeTask/decodeTask.js */ './webWorker/decodeTask/decodeTask.js');

      const _decodeTask2 = _interopRequireDefault(_decodeTask);

      function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

      // register our task
      (0, _webWorker.registerTaskHandler)(_decodeTask2.default);

      exports.registerTaskHandler = _webWorker.registerTaskHandler;

      /***/
    }),

    /***/ './webWorker/webWorker.js':
    /*! ********************************!*\
  !*** ./webWorker/webWorker.js ***!
  \******************************* */
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.registerTaskHandler = registerTaskHandler;
      // an object of task handlers
      const taskHandlers = {};

      // Flag to ensure web worker is only initialized once
      let initialized = false;

      // the configuration object passed in when the web worker manager is initialized
      let config = void 0;

      /**
         * Initialization function that loads additional web workers and initializes them
         * @param data
         */
      function initialize(data) {
        // console.log('web worker initialize ', data.workerIndex);
        // prevent initialization from happening more than once
        if (initialized) {
          return;
        }

        // save the config data
        config = data.config;

        // load any additional web worker tasks
        if (data.config.webWorkerTaskPaths) {
          for (let i = 0; i < data.config.webWorkerTaskPaths.length; i++) {
            self.importScripts(data.config.webWorkerTaskPaths[i]);
          }
        }

        // initialize each task handler
        Object.keys(taskHandlers).forEach((key) => {
          taskHandlers[key].initialize(config.taskConfiguration);
        });

        // tell main ui thread that we have completed initialization
        self.postMessage({
          taskType: 'initialize',
          status: 'success',
          result: {},
          workerIndex: data.workerIndex,
        });

        initialized = true;
      }

      /**
         * Function exposed to web worker tasks to register themselves
         * @param taskHandler
         */
      function registerTaskHandler(taskHandler) {
        if (taskHandlers[taskHandler.taskType]) {
          console.log('attempt to register duplicate task handler "', taskHandler.taskType, '"');

          return false;
        }
        taskHandlers[taskHandler.taskType] = taskHandler;
        if (initialized) {
          taskHandler.initialize(config.taskConfiguration);
        }
      }

      /**
         * Function to load a new web worker task with updated configuration
         * @param data
         */
      function loadWebWorkerTask(data) {
        config = data.config;
        self.importScripts(data.sourcePath);
      }

      /**
         * Web worker message handler - dispatches messages to the registered task handlers
         * @param msg
         */
      self.onmessage = function (msg) {
        // console.log('web worker onmessage', msg.data);

        // handle initialize message
        if (msg.data.taskType === 'initialize') {
          initialize(msg.data);

          return;
        }

        // handle loadWebWorkerTask message
        if (msg.data.taskType === 'loadWebWorkerTask') {
          loadWebWorkerTask(msg.data);

          return;
        }

        // dispatch the message if there is a handler registered for it
        if (taskHandlers[msg.data.taskType]) {
          taskHandlers[msg.data.taskType].handler(msg.data, (result, transferList) => {
            self.postMessage({
              taskType: msg.data.taskType,
              status: 'success',
              result,
              workerIndex: msg.data.workerIndex,
            }, transferList);
          });

          return;
        }

        // not task handler registered - send a failure message back to ui thread
        console.log('no task handler for ', msg.data.taskType);
        console.log(taskHandlers);
        self.postMessage({
          taskType: msg.data.taskType,
          status: 'failed - no task handler registered',
          workerIndex: msg.data.workerIndex,
        });
      };

      /***/
    }),

    /** *** */
  })),
));
// # sourceMappingURL=cornerstoneWADOImageLoaderWebWorker.js.map
