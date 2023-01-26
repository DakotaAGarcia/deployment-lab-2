const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/public`))
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'f6bc1887986e4cafb737560f61776aa1',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')



// try {
//     nonExistentFunction();
//   } catch (error) {
//     rollbar.error('error')
//     console.error(error);
//   }
//   try {
//     nonExistentFunction();
//   } catch (error) {
//     rollbar.warning('warning')
//     console.error(error);
//   }
//   try {
//     nonExistentFunction();
//   } catch (error) {
//     rollbar.critical('critical error')
//     console.error(error);
//   }

// app.listen(4000, () =>{
//     console.log('ready to rock on 4000')
// })