const app = require('../app')
const port = Number(process.env.PORT)
console.log(port)
app.listen(port, () => {
  console.log('server running on port', port)
})