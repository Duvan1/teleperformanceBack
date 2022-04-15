const jwt = require("jwt-simple");
const palabraSecreta = "gatito";

exports = module.exports = {};
let databaseUsers = {
  Admin: {
    Id: 1,
    Password: "AdminPassword",
    Correo: "admin@correo.com",
    Nombre: "Mr. Admin",
    Role: "admin",
  },
  User: {
    Id: 2,
    Password: "UserPassword",
    Correo: "user@correo.com",
    Nombre: "Mr. User",
    Role: "user",
  },
};
exports.signinUser = (User = "", Password = "", Token = "") =>
  new Promise((resolve) => {
    let Status = {
      status: true,
      data: {
        loggued: false,
      },
      notification: {
        msg: "",
        typeNotify: "success",
      },
    };
    if (Token.length === 0) {
      if (databaseUsers[User] !== undefined) {
        let {
          Password: PasswordOfDatabase,
          Correo,
          Nombre,
          Role,
        } = databaseUsers[User];
        if (PasswordOfDatabase === Password) {
          Status.data.loggued = true;
          Status.data.User = User;
          Status.data.Correo = Correo;
          Status.data.Nombre = Nombre;
          Status.data.Role = Role;
          Status.notification.msg = "Usuario Logueado Correctamente";
          let Token = jwt.encode(Status.data, palabraSecreta);
          Status.data.Cookie = Token;
          resolve(Status);
        } else {
          Status.notification.msg =
            "El usuario o la contraseña pueden ser incorrectos.";
          Status.notification.typeNotify = "warning";
          resolve(Status);
        }
      } else {
        Status.notification.msg = "El usuario no existe";
        Status.notification.typeNotify = "warning";
        resolve(Status);
      }
    } else {
      let Data = jwt.decode(Token, palabraSecreta);
      const { User, Correo, Nombre, Role } = Data;
      if (databaseUsers[User] !== undefined) {
        Status.data.loggued = true;
        Status.data.User = User;
        Status.data.Correo = Correo;
        Status.data.Nombre = Nombre;
        Status.data.Role = Role;
      } else {
        Status.notification.msg = "No hay usuario logueado";
      }
      resolve(Status);
    }
  });
