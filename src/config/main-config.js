const path = require("path");
const bodyParser = require('body-parser');

module.exports = {
  init(app, express){
    app.use(express.static(path.join(__dirname, "..", "assets")));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, './../../client/build')));
      app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, './../../client/build', 'index.html'));
      });
    }

  }
};
