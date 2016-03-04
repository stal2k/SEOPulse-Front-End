(function ()
{
    'use strict';

    angular
        .module('app.analyze.dns', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider
            .state('app.analyze_dns', {
                url    : '/dns',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/analyze/360idns/dns.html',
                       // controller : 'DnsController as vm' 
                    } 
                },
                /* resolve: {
                    dnsData: function (apiResolver)
                    {
                        return apiResolver.resolve('dns@get');
                    }
                } */
            });

        // Translation
        // $translatePartialLoaderProvider.addPart('app/main/analyze/360idns');

        // Navigation
        
// Navigation
        
        
    }
})();