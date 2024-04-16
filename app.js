const express = require('express')
const catsRouter = require('./routes/cat.routes')
const birds = require('./routes/birds')
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.use('/birds', birds)
//app.use(express.json())
app.use('/routes',catsRouter)

//const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

app.listen(3000)