(function ()
{
    'use strict';

    angular
        .module('app.analyze.pspeed-jobs', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.analyze_pspeed_jobs', {
            url    : '/analyze/pagespeed-jobs',
            views  : {
                'content@app': {
                    templateUrl: 'app/main/analyze/pspeed-jobs/pspeed-jobs.html',
                    controller : 'PspeedJobsController as vm'
                }
            },
            resolve: {
                Jobs: function (apiResolver)
                {
                    return apiResolver.resolve('pspeedjobs.pspeedjobs@get');
                }
            }
        });
    }

})();