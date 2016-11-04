let T = require("tcomb")
let {Id} = require("./Id")

const Gender = T.enums({
  male: "Male",
  female: "Female"
}, "Gender")

const Conditions = T.enums({
  paid: "Work Only For Money",
  partPay: "Part Pay",
  tfp: "TFP/TFCD"
},"Partnership Conditions")

const UserRole = T.enums({
  model: "Model",
  photo: "Photographer",
  hairdresser: "Hairdresser"
}, "UserRole")

let User = T.struct({
  id: Id,
  role: UserRole,
  name: T.String,
  email: T.String,
  phone: T.String,
  birthDate: T.Date,
  gender: Gender,
  conditions: Conditions, // partnership conditions

  createdOn: T.Date
})

exports.User = User


// for later use
//const PhotoGenre = T.enums({
// portrait: "Portrait",
//   fashion: "Fashion",
//   family: "Family"
// }, "PhotoGenre")
// let Photographer = T.struct({
//   genre: PhotoGenre
// })