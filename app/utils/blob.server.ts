import { expr } from 'cypress/types/jquery'

export async function base64ToBlob(base64: any, mime?: any) {
  mime = mime || 'image/png'
  var sliceSize = 1024
  var byteChars = Buffer.from(base64).toString('base64')
  var byteArrays = []

  for (
    var offset = 0, len = byteChars.length;
    offset < len;
    offset += sliceSize
  ) {
    var slice = byteChars.slice(offset, offset + sliceSize)

    var byteNumbers = new Array(slice.length)
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    var byteArray = new Uint8Array(byteNumbers)

    byteArrays.push(byteArray)
  }

  return new Blob(byteArrays, { type: mime })
}

export async function dataURItoBlob(dataURI: any) {
  var binary = atob(dataURI.split(',')[1])
  var array = []
  for (var i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i))
  }
  return new Blob([new Uint8Array(array)], { type: 'image/jpeg' })
}
