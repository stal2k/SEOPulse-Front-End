(function ()
{
    'use strict';

    angular
        .module('app.analyze.seometrics', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider
            .state('app.analyze_seometrics', {
                url    : '/analyze',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/analyze/seometrics/seometrics.html',
                        }
                },               
            });        
    } 
})();