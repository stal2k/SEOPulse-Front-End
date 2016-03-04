(function ()
{
    'use strict';

    angular
        .module('app.learn.seovault', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider
            .state('app.learn_seovault', {
                url    : '/learn',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/learn/seovault/seovault.html',
                    }
                },               
            });
    }
})();