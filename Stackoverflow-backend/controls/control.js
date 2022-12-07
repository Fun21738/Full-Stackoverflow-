// const { encryptpass, comparePass } = require("../helpers/encryption");
// const { validateSchema } = require("../helpers/validation");

// const users = [{
//       name: "John Doe",
//       email: "johndoe@gmail.com",
//       username: "Jenny",
//       password: "$2b$08$WC5ln8bsk6CIpS5rnpf6zuvZhqcKEqTx6Wt0VIfn99CVGl6MhNkKG"
// }]

// module.exports = {
//       getusers: (req, res) => {
//             res.send(users)
//       },

//       login: async (req, res) => {
//             const data = req.body;
//             const user = users.find(user => user.email === data.email)
//             if (user) {
//                   let loggedin = await comparePass(data.password, user.password).catch(err => console.log(err))

//                   if (loggedin) {
//                         return res.send("user logged in successfully")
//                   }else{
//                         return res.send("Wrong credentials")
//                   }
//             } else {
//                   return res.send("User doesn't exist")
//             }
//       },

//       signup: async (req, res) => {
//             const data = req.body;

//             let hashed_pass = await encryptpass(data.password)
//             res.send({ ...data, password: hashed_pass })
//       }
// }