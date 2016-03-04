(function ()
{
    'use strict';

    angular
        .module('app.analyze.seopulse', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider
            .state('app.analyze_seopulse', {
                url    : '/analyze/deepcrawl',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/analyze/seopulse/seopulse.html',                      
                    }
                },
                
            });

       
        // Navigation 

       
    }
})();