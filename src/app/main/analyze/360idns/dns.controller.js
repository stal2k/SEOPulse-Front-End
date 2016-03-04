(function ()
{
    'use strict';

    angular
        .module('app.analyze.dns')
        .controller('DnsController', DnsController);

    /** @ngInject */
    function DnsController(DnsData)
    {
        var vm = this;

        // Data
        vm.DnsData = DnsData.helloText;

        // Methods

        //////////
    }
})();
