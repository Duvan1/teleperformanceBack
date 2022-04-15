const controller = require('../../Controllers/posts/controller.posts.js');
module.exports = function(app){
    app.get('/get/characters',controller.GetCharacters);
    app.get('/get/episodes',controller.GetEpisodes);
    app.get('/get/citas',controller.GetCitas);
}