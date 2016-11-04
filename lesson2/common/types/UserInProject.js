/**
 * Created by aleksandr on 04.11.16.
 */
//К каждому проекту могут присоединяться пользователи. Таблица содержит взаимосвязь userId и projectId

let T = require("tcomb")
let {Id} = require("./Id")

let UserInProject = T.Struct({
  id: Id,
  userId: T.Integer,
  projectId: T.Integer,
  dateJoin: T.Date
})