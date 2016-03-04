(function ()
{
    'use strict';

    /**
     * Main modules 
     */
    angular
        .module('360iCP', [

            // Core Modules, Do not mess with these
            'app.core',
			'app.navigation',            
            'app.toolbar',
            'app.quick-panel',            
            			
			// Analyze            
             'app.analyze',

            // Learn          
             'app.learn',

            // Plan 

            // Pages
            'app.pages.coming-soon',
            'app.home'                              

        ]);
})();
