const servicios = require("../../Services/Posts/servicios.posts.js");
exports = module.exports = {};

/**
 *
 */
exports.GetCharacters = ({ Autentica }, res) => {
  servicios
    .GetCharacters()
    .then((Response) => {
      res.json(Response);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};
/**
 *
 */
exports.GetEpisodes = ({ params }, res) => {
  servicios
    .GetEpisodes(params)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
};

/**
 *
 */
 exports.GetCitas = ({ params }, res) => {
  servicios
    .GetCitas(params)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
};
