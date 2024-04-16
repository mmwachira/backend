const express = require('express');
const bodyParser = require('body-parser');
//const catsRouter = require('./routers/cat.routes')
const birds = require('./routers/birds')
const todoRouter = require('./routers/todoRouter')
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.use('/birds', birds)
app.use(bodyParser.json());
//app.use('/routers',catsRouter)
app.use('/routers', todoRouter);

//const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

app.listen(3000)