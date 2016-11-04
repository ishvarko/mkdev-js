let T = require("tcomb")
let {Id} = require("./Id")

let Project = T.Struct({
  id: Id,
  title: T.String,
  description: T.String,
  authorId: T.Number,
  location: T.String,
  date: t.Date
})