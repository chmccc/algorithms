(async function main() {
  const readline = require('readline')

  const uhdPix = 3280 * 2160;
  const wqhdPix = 3440 * 1440;
  const qhdPix = 2560 * 1440;
  const hdPix = 1920 * 1080;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const promptFPS = (message) => new Promise((resolve) => {
    rl.question(message, res => {
      rl.resume()
      resolve(parseInt(res))
      rl.pause()
    })
  })

  const uhdFPS = await promptFPS('Enter UHD FPS (0 for unknown): ')
  // const qhdFPS = await promptFPS('Enter QHD FPS (0 for unknown): ')
  // const hdFPS = await promptFPS('Enter HD FPS (0 for unknown): ')

  rl.close()
  
  const withUHD = uhdFPS ? (uhdFPS * uhdPix) / wqhdPix : null
  // const withQHD = qhdFPS ? (qhdFPS * qhdPix) / wqhdPix : null
  // const withHD = hdFPS ? (hdFPS * hdPix) / wqhdPix : null
  // console.log('Expecteds: ', withUHD, withQHD, withHD)

  // const fpsValues = [withUHD, withQHD, withHD].filter(e => !!e)

  // if (!fpsValues.length) return console.log('You must enter at least one FPS input to receive an estimate.')

  // const expectedFPS = fpsValues.reduce((sum, fps) => sum + fps, 0) / fpsValues.length

  console.log('Expected FPS: ', withUHD)
})()