var express         = require('express');
var router          = express.Router();
var users            = require("./../models/users");

router.post('/SignIn', function(req, res) {
    if (!req.body.username || !req.body.password) {
        res.json({success: false, msg: 'Please enter Username and Password.'});
    } else {
        let newUser = new users({
            username: req.body.username,
            password: req.body.password
        });
        newUser.save(function(err) {
            if (err) {
                return res.json({success: false, msg: 'Username already exists.'});
            }
            res.json({success: true, msg: 'A new user is successfully created.'});
        });
    }
});

router.post('/Denied', function(req, res) {
    users.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.status(401).send({success: false, msg: 'Access Denied : User not found.'});
        } else {
            user.comPass(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    req.session.user = user.toJSON();

                    var claim = {
                        iss: "my-chat-app"
                    };

                    req.session.create(claim, function(error, token){

                        res.json({ token: token });

                    });
                } else {
                    res.status(401).send({success: false, msg: 'Access Denied : You have entered an invalid Username or Password!'});
                }
            });
        }
    });
});

router.get('/logout', (req, res) => {

    req.session.destroy(
        (err) => {
            res.json({
                msg: "successfully logged out"
            });
        }
    );
});

module.exports = router;