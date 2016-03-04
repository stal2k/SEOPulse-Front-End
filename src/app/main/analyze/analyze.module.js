(function ()
{
    'use strict';

	angular
        .module('app.analyze', [
            'app.analyze.dns',
            'app.analyze.seometrics',
            'app.analyze.seopulse',
            'app.analyze.pspeed-jobs'
            ])

        .config(config);

    /** @ngInject */

function config(msNavigationServiceProvider)
    
    {
        // Navigation                    
              
        msNavigationServiceProvider.saveItem('analyze', {
            title : 'ANALYZE',
            group : true,
            weight: 2
        });

        msNavigationServiceProvider.saveItem('analyze.seopulse', {
            title    : 'DeepCrawl',
            icon     : 'icon-tile-four',
            state    : 'app.analyze_seopulse',
            weight   : 2
        });

        msNavigationServiceProvider.saveItem('analyze.dns', {
            title: 'DNS',
            state: 'app.analyze_dns',
            icon  : 'icon-clipboard',
            weight: 3
        });

        msNavigationServiceProvider.saveItem('analyze.seometrics', {
            title    : 'SEO Metrics',
            icon     : 'icon-tile-four',
            state    : 'app.analyze_seometrics',
            weight   : 1
        });

        msNavigationServiceProvider.saveItem('analyze.psapi', {
            title    : 'Page Speed Api',                      
            icon     : 'icon-folder-move',
            group    : false,
            weight   : 4
        });

        msNavigationServiceProvider.saveItem('analyze.psapi.pspeed-jobs', {
            title    : 'Jobs List',
            icon     : 'icon-tile-four',
            state    : 'app.analyze_pspeed_jobs',
            weight   : 1
        });
    }
})();
