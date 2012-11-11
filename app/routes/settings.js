var settings = exports;

settings.routes = function ( app, routes ) {
    // main route
    app.get('/', routes.index);
    // template partials route
    app.get('/partials/:dir/:id', routes.partials);
};
