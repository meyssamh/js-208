module.exports = (app) => {
    app.use('/auth', require('./../auth/auth'));
    app.use('/users', require('./users'));
};