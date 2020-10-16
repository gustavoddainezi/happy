module.exports = {
    index(req, res) {
        const city = req.query.city;
        return res.render('index')
    }
}