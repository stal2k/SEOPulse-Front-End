(function ()
{
    'use strict';

    angular
        .module('app.home', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.home', {
                url    : '/home',
                views  : {
                    'content@app': {
                        //templateUrl: 'app/main/home/home.html',
                        templateUrl: 'app/main/pages/coming-soon/coming-soon.html',
                        controller : 'HomeController as vm'
                    }
                },
                resolve: {
                    HomeData: function (msApi)
                    {
                        return msApi.resolve('sample@get');
                    }
                }
            });

        // Translation
        // $translatePartialLoaderProvider.addPart('app/main/sample');

        // Api
        msApiProvider.register('sample', ['app/data/sample/sample.json']);

        // Navigation
        msNavigationServiceProvider.saveItem('360iCP', {
            title : 'MAIN MENU',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('360iCP.home', {
            title    : 'Home',
            icon     : 'icon-tile-four',
            state    : 'app.home',            
            weight   : 1
        });            

       /* msNavigationServiceProvider.saveItem('360iCP.plan', {
            title : 'PLAN - COMING SOON',
            group : true,
            weight: 3
        });  */
    }
})();