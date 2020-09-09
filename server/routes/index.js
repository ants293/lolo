module.exports = (app) => {
    app.get("/", (req, res) => require('../controllers/root'));
};
