//Middleware to check if the user is admin
function isAdmin(req, res, next) {
    if (req.session.user && req.session.user.admin) {
        return next();
    }
    res.status(403).send('Access denied. You must be an admin to view this page.');
}

module.exports = isAdmin