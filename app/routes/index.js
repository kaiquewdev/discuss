
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Discuss' });
};

exports.partials = function (req, res) {
    var partialsDir = 'partials';
    var dynamicDir = partialsDir + '/' + 
                     req.params.dir + '/' +
                     req.params.id;

    console.log( dynamicDir );
    res.render(dynamicDir, {});
};
