import _regeneratorRuntime from '@babel/runtime/regenerator'
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator'
/* eslint-disable */

import './style.css';
import blackOblique from './output.png'; // import blackOblique from './white.png'

import s from './s.jpg';

function loadImage(imgSrc) {
  return new Promise(function (resolve, reject) {
    var Img = new Image();

    Img.onload = function () {
      resolve(Img);
    };

    Img.src = imgSrc;
  });
}

function addWaterMarkToPic(_x, _x2) {
  return _addWaterMarkToPic.apply(this, arguments);
}

function _addWaterMarkToPic() {
  _addWaterMarkToPic = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(sImage, wImage) {
    var _ref,
        _ref$wWidth,
        wWidth,
        _ref$wHeight,
        wHeight,
        sImg,
        wImg,
        sCanvas,
        w,
        h,
        sCtx,
        wCanvas,
        wCtx,
        finalResult,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = _args.length > 2 && _args[2] !== undefined ? _args[2] : {}, _ref$wWidth = _ref.wWidth, wWidth = _ref$wWidth === void 0 ? 100 : _ref$wWidth, _ref$wHeight = _ref.wHeight, wHeight = _ref$wHeight === void 0 ? 100 : _ref$wHeight;
            _context.next = 3;
            return loadImage(sImage);

          case 3:
            sImg = _context.sent;
            _context.next = 6;
            return loadImage(wImage);

          case 6:
            wImg = _context.sent;
            sCanvas = document.createElement('canvas');
            w = sImg.width;
            h = sImg.height;
            sCanvas.width = w;
            sCanvas.height = h;
            sCtx = sCanvas.getContext('2d');
            sCtx.drawImage(sImg, 0, 0);
            wCanvas = document.createElement('canvas');
            wCtx = wCanvas.getContext('2d');
            wCanvas.width = wWidth;
            wCanvas.height = wHeight;
            wCtx.drawImage(wImg, 0, 0, wImg.width, wImg.height, 0, 0, wWidth, wHeight);
            sCtx.fillStyle = wCtx.createPattern(wCanvas, 'repeat'); // sCtx.fillStyle = wCtx.createPattern(wImg, 'repeat')

            sCtx.fillRect(0, 0, w, h);
            finalResult = sCanvas.toDataURL();
            document.querySelector('.root').src = finalResult;
            return _context.abrupt("return", finalResult);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addWaterMarkToPic.apply(this, arguments);
}

addWaterMarkToPic(s, blackOblique, {
  wWidth: 200,
  wHeight: 200
});