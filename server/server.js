const mongoose = require('mongoose')
const app = require('./app')
    const PORT = process.env.PORT,
          DB_LOCAL = process.env.DB_LOCAL
// database connection
function connect (app){
  const dbURI =DB_LOCAL ;

  mongoose.set("strictQuery", false);
    mongoose
        .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, dbName:"ChatApp" })
        .then(() => app.listen(PORT, ()=>{
        console.log(`App running at PORT: ${PORT} and MongoDB Server started`)
        }))
        .catch((err) => console.log(err));
    }

connect(app)
