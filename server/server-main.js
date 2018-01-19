module.exports = function (app) {

    var path = require('path')
        , util = require('util')
        , jwt = require('jsonwebtoken')
        , fs = require('fs-extra')
        , formidable = require('formidable');

    //Gestion de l'authentification
    app.route('/api/authenticate')
        .post(function (req, res) {
            var user = {
                username: 'madera'
                , password: 'madera'
                , firstName: 'madera'
                , lastName: 'madera'
            };

            var secret = fs.readFileSync('./config/private.key');

            var token = jwt.sign(user, secret, {
                algorithm: 'RS512'
            });
            if (req.body.username === user.username && req.body.password === user.password) {
                res.status(200).json({
                    token: token
                });
                console.log('ok');
            } else {
                res.status(204).json({});
                console.log('no');
            }
        });

    //Fonction Mode bouchon : renvoie le status http 200 ok
    function getTest() {
        return   res.status(200);
    }

    //Route par défaut
    app.get('*', function (req, res) {});
};