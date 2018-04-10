module.exports = function (app) {

    var path = require('path')
        , util = require('util')
        , jwt = require('jsonwebtoken')
        , fs = require('fs-extra')
        , formidable = require('formidable')
        , bodyParser = require('body-parser');

    //Gestion de l'authentification
    app.post('/rest/authenticate', function (req, res) {
            var user = {
                username: 'madera'
                , password: 'madera'
                , firstName: 'madera'
                , lastName: 'madera'
            };


          console.log(req.body);
            if (req.body.username === user.username && req.body.password === user.password) {
                res.send({authorisation: true});
            } else {
                res.send({authorisation: false});
            }
        });

    var projects = [
        { "id": 1, "idClient": "testA", "status": "En Cours", "step": "Commercial", "date": "10/02/2018" },
        { "id": 2, "idClient": "testB", "status": "En cours", "step": "Comptable", "date": "20/12/2017" },
        { "id": 3, "idClient": "testC" , "status": "Terminé", "step": "", "date": "12/01/2017"}
    ];

    var plans = [
        { "id": 1, "range": "testA", "status": "En Cours", "service": "Commercial", "date": "10/02/2018" },
        { "id": 2, "range": "testB", "status": "En cours", "service": "Comptable", "date": "20/12/2017" },
        { "id": 3, "range": "testC" , "status": "Terminé", "service": "", "date": "12/01/2017"}
    ];




    var components = [
        { "id": 1, "name": "Vis", "quantity": 10, "price": 100, "family": "Visserie", "supplier": "BTP"},
        { "id": 2, "name": "Poutre", "quantity": 11, "price": 10, "family": "Visserie", "supplier": "BTP"},
        { "id": 3, "name": "Plaque", "quantity": 100, "price": 234, "family": "materiaux", "supplier": "BTP"}
    ];

    var modules = [
        { "id": 1, "name": "testA", "price": 10, "nature":"testA", "range": "testA"},
        { "id": 2, "name": "testB", "price": 10000, "nature":"testB", "range": "testB"},
        { "id": 3, "name": "testC", "price": 10414441, "nature":"testC", "range": "testC"}
    ];

    var ranges = [
        { "id": 1, "name": "testA", "outdoor": "testA", "insulating":"testA", "windowFrame": "testA", "roofting": "testA"},
        { "id": 2, "name": "testB", "outdoor": "testB", "insulating":"testB", "windowFrame": "testB", "roofting": "testB"},
        { "id": 3, "name": "testC", "outdoor": "testC", "insulating":"testC", "windowFrame": "testC", "roofting": "testC"}
    ];


    var suppliers = [
        { "id": 1, "name": "testA", "siren": "testA"},
        { "id": 2, "name": "testB", "siren": "testA"},
        { "id": 3, "name": "testC", "siren": "testA"}
    ];

    /** plans **/

    app.get('/rest/plans', function (req, res) {

        if(Object.keys(req.query).length !== 0){
            console.log('--- get plan ---');
            for(plan in plans){
                if(plan === req.query.id){
                    res.send( { "id": 1, "range": "testA", "status": "En Cours", "service": "Commercial", "date": "10/02/2018" });
                }
            }
        } else {
            console.log('--- get plans ---');
            res.send(plans);
        }
    });

    /** users **/

    app.get('/rest/users', function (req, res) {

        if(Object.keys(req.query).length !== 0){
            console.log('--- get user ---');
            for(user in users){
                if(user === req.query.id){
                    res.send({ "id": 2, "firstname": "Cyril", "lastname": "Rust"});
                }
            }
        } else {
            console.log('--- get users ---');
            res.send(users);
        }
    });

    app.post('/rest/users', function (req, res) {
        console.log('--- post profile --- ', req.body);
        res.send('ok');
    });

    app.put('/rest/users', function (req, res) {
        console.log('--- put profile --- ', req.body);
        res.send('ok');
    });

    app.delete('/rest/users', function (req, res) {
        console.log('--- delete profile --- ');
        res.send(req.query.id);
    });

    /** customers **/
    app.get('/rest/customers', function (req, res) {

        if(Object.keys(req.query).length !== 0){
            console.log('--- get customer ---');
            for(customer in customers){
                if(customer === req.query.id){
                    res.send({ "id": 1, "lastname": "testA", "firstname": "testA"});
                }
            }
        } else {
            console.log('--- get customers ---');
            res.send(customers);
        }
    });

    app.post('/rest/customers', function (req, res) {
        console.log('--- post customers ---');
        console.log(req);
        res.send(customers);
    });

    app.put('/rest/customers', function (req, res) {
        console.log('--- put customers ---');
        res.send(customers);
    });

    app.delete('/rest/customers', function (req, res) {
        console.log('--- delete customers ---');
        res.send(req.query.id);
    });

    /** suppliers **/

    app.get('/rest/suppliers', function (req, res) {

        if(Object.keys(req.query).length !== 0){
            console.log('--- get supplier ---');
            for(supplier in suppliers){
                if(supplier === req.query.id){
                    res.send({ "id": 1, "name": "testA", "siren": "testA"});
                }
            }
        } else {
            console.log('--- get suppliers ---');
            res.send(suppliers);
        }
    });

    app.delete('/rest/suppliers', function (req, res) {
        console.log('--- delete suppliers ---');
        res.send(req.query.id);
    });

    /** projects **/

    app.delete('/rest/customers', function (req, res) {
        console.log('--- delete customers ---');
        res.send(req.query.id);
    });

    app.get('/rest/projects', function (req, res) {
        if(Object.keys(req.query).length !== 0){
            console.log('--- get projects ---> ', req.query.id);
            for(project in projects){
                if(project === req.query.id){
                    res.send({ "id": 1, "idClient": "testA", "status": "En Cours", "step": "Commercial", "date": "10/02/2018" });
                }
            }
        } else {
            console.log('--- get projects ---');
            res.send(projects);
        }

    });

    /** components **/

    app.get('/rest/components', function (req, res) {

        if(Object.keys(req.query).length !== 0){
            console.log('--- get component ---');
            for(component in components){
                if(component === req.query.id){
                    console.log('ok');
                    res.send({ "id": 1, "name": "Vis", "quantity": 10, "price": 100, "family": "Visserie", "supplier": "BTP"});
                }
            }
        } else {
            console.log('--- get components ---');
            res.send(components);
        }

    });

    app.delete('/rest/components', function (req, res) {
        console.log('--- delete components ---');
        res.send(req.query.id);
    });

    app.post('/rest/components', function (req, res) {
        console.log('--- post components ---');
        res.send(req.query.id);
    });

    app.put('/rest/components', function (req, res) {
        console.log('--- put components ---');
        res.send(req.query.id);
    });

    /** ranges **/

    app.get('/rest/ranges', function (req, res) {

        if(Object.keys(req.query).length !== 0){
            console.log('--- get range ---');
            for(range in ranges){
                if(range === req.query.id){
                    res.send({ "id": 1, "name": "testA", "outdoor": "testA", "insulating":"testA", "windowFrame": "testA", "roofting": "testA"});
                }
            }
        } else {
            console.log('--- get ranges ---');
            res.send(ranges);
        }
    });

    app.put('/rest/ranges', function (req, res) {
        console.log('--- put ranges ---');
        res.send(req.query.id);
    });

    app.post('/rest/ranges', function (req, res) {
        console.log('--- post ranges ---');
        res.send(req.query.id);
    });

    app.delete('/rest/ranges', function (req, res) {
        console.log('--- delete ranges ---');
        res.send(req.query.id);
    });

    /** extensions **/

    app.get('/rest/extensions', function (req, res) {

        if(Object.keys(req.query).length !== 0){
            console.log('--- get module ---');
            for(module in modules){
                if(module === req.query.id){
                    console.log(module, ' ',req.query.id);
                    res.send({ "id": 1, "name": "testA", "price": 10, "nature":"testA", "range": "testA"});
                }
            }
        } else {
            console.log('--- get modules ---');
            res.send(modules);
        }

    });

    app.delete('/rest/extensions', function (req, res) {
        console.log('--- delete extensions ---');
        res.send(req.query.id);
    });

    app.post('/rest/extensions', function (req, res) {
        console.log('--- post extensions ---');
        res.send(req.query.id);
    });

    app.put('/rest/extensions', function (req, res) {
        console.log('--- put extensions ---');
        res.send(req.query.id);
    });
    /** profile **/

    app.put('/rest/profile', function (req, res) {
        console.log('--- put profile ---');
        res.send('ok');
    });

    app.delete('/rest/profile', function (req, res) {
        console.log('--- delete profile ---');
        res.send(req.query.id);
    });


   /* app.put('/rest/projects/:id', function (req, res) {
        console.log('--- put ---');
        var id = req.params.id;
        var f = foods.find(x => x.id == id);
        f.name = req.body.name;
        res.send(f);
    });

    app.delete('/rest/projects/:id', function (req, res) {
        console.log('--- delete ---');
        var id = req.params.id;
        var f = foods.find(x => x.id == id);
        foods = foods.filter(x => x.id != id);
        res.send(f);
    }); */

    //Route par défaut
    app.get('*', function (req, res) {});
};