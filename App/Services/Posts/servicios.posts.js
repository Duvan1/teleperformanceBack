const axios = require("axios");

exports = module.exports = {};
const api_url = "https://www.breakingbadapi.com/api/";
/**
 *
 */
const HoraDeCreacionParaMysql = () => {
  let Fecha = new Date();
  let Year = Fecha.getUTCFullYear();
  let Month = Fecha.getUTCMonth();
  let Day = Fecha.getUTCDate();
  let Hour = Fecha.getUTCHours();
  let Minutes = Fecha.getUTCMinutes();
  let Seconds = Fecha.getUTCSeconds();
  return `${Year}/${Month}/${Day - 1} ${Hour}:${Minutes}:${Seconds}`;
};

/**
 *
 */
exports.GetCharacters = () =>
  new Promise((resolve, reject) => {
    let Status = {
      status: true,
      notification: {
        msg: "",
        typeNotify: "success",
      },
      data: [],
    };

    axios
      .get(`${api_url}characters`)
      .then(async (characters) => {
        Status["notification"].msg = "Los datos se trajeron correctamente";
        Status.data = characters.data;
        res.send(characters.data);
        resolve(Status);
      })
      .catch(function (err) {
        console.log(err);
        Status["notification"].msg = "Hubo un error en la consulta";
        Status["notification"].typeNotify = "danger";
        reject(Status);
      });
  });
/**
 *
 */
exports.GetEpisodes = ({ IdPost }) =>
  new Promise((resolve, reject) => {
    let Status = {
      status: true,
      notification: {
        msg: "",
        typeNotify: "success",
      },
      data: {
        Titulo: "",
        Contenido: "",
      },
    };

    axios
      .get(`${api_url}episodes`)
      .then(async (episodes) => {
        Status["notification"].msg = "Los datos se trajeron correctamente";
        Status.data = episodes.data;
        res.send(episodes.data);
        resolve(Status);
      })
      .catch(function (err) {
        console.log(err);
        Status["notification"].msg = "Hubo un error en la consulta";
        Status["notification"].typeNotify = "danger";
        reject(Status);
      });
  });

/**
 *
 */
exports.GetCitas = ({}) =>
  new Promise((resolve, reject) => {
    let Status = {
      status: true,
      notification: {
        msg: "",
        typeNotify: "success",
      },
      data: {
        Titulo: "",
        Contenido: "",
      },
    };

    axios
      .get(`${api_url}quotes`)
      .then(async (episodes) => {
        Status["notification"].msg = "Los datos se trajeron correctamente";
        Status.data = episodes.data;
        res.send(episodes.data);
        resolve(Status);
      })
      .catch(function (err) {
        console.log(err);
        Status["notification"].msg = "Hubo un error en la consulta";
        Status["notification"].typeNotify = "danger";
        reject(Status);
      });
  });
