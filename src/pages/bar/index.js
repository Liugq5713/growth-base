/* eslint-disable */

import './style.css'
import blackOblique from './output.png'
// import blackOblique from './white.png'
import s from './s.jpg'

function loadImage(imgSrc) {
  return new Promise((resolve, reject) => {
    const Img = new Image()
    Img.onload = function() {
      resolve(Img)
    }
    Img.src = imgSrc
  })
}

async function addWaterMarkToPic(sImage, wImage, config) {
  const sImg = await loadImage(sImage)
  const wImg = await loadImage(wImage)

  const sCanvas = document.createElement('canvas')
  const w = sImg.width
  const h = sImg.height
  sCanvas.width = w
  sCanvas.height = h
  const sCtx = sCanvas.getContext('2d')

  sCtx.drawImage(sImg, 0, 0)

  const wCanvas = document.createElement('canvas')
  const wCtx = wCanvas.getContext('2d')
  wCanvas.width = w
  wCanvas.height = h
  wImg.setAttribute('width', 200)
  wImg.setAttribute('height', 200)
  console.log('wImg', wImg)
  sCtx.fillStyle = wCtx.createPattern(wImg, 'repeat')
  sCtx.fillRect(0, 0, w, h)

  const finalResult = sCanvas.toDataURL()
  document.querySelector('.root').src = finalResult
  return finalResult
}

addWaterMarkToPic(s, blackOblique)
