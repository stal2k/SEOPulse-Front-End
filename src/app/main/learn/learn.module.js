(function ()
{
    'use strict';

	angular
        .module('app.learn', [
            'app.learn.seovault'
            ])

        .config(config);

    /** @ngInject */

function config(msNavigationServiceProvider)
    
    {
        // Navigation                    
              
        msNavigationServiceProvider.saveItem('learn', {
            title : 'LEARN',
            group : true,
            weight: 3
        });

        msNavigationServiceProvider.saveItem('learn.seovault', {
            title: 'SEO Vault',
            state: 'app.learn_seovault',
            icon  : 'icon-owl'
        });
    }

})();
