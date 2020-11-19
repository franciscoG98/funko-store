module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg', 'Please log to access Funko´s Store ');
        res.redirect('/users/login');
    },
    forwardAuthenticated: function (req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        res.redirect('/'); //no me acuerdo cual es la ruta home
    },
    isAdmin: function (req, res, next) { //para poder hacer uso de la key primero hay que setear el rol modelo 
        // if () {
        //     return next();
        // } else {
        //     return res.status(401).send();
        // }
    },
    isNotAdmin: function (req, res, next) {
        // if () {
        //     return next;
        // } else {
        //     return res.status(401).send();
        // }
    }
};