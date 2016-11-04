/**
 * Created by aleksandr on 04.11.16.
 */
let T = require("tcomb")
let {Id} = require("./Id")

const HairColor = T.enums({
  dark: "Dark",
  brown: "Brown",
  blond: "Blond"
}, "Model's Hair Color")
let Body = tuple([Num, Num]); // height (cm) x weight (Kg)

let Model = T.struct({
  id: T.Number,
  userId: T.Number,
  body: Body,
  hairColor: HairColor
})
