'use strict';

/**
 * This file is part of the Aisel package.
 *
 * (c) Ivan Proskuryakov
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @name            AiselKernel
 * @description     Most important data are loaded here
 */

define(['app'], function (app) {
    console.log('Kernel init service loaded ...');
    angular.module('app')
        .service('initService', ['$http', '$rootScope', 'Environment', 'authService',
            function ($http, $rootScope, Environment, authService) {
                return {
                    launch: function () {

                        console.log('----------- Aisel Loaded! -----------');
                        console.log(Environment);
                        $rootScope.pageTitle = Environment.pageTitle;
                        $rootScope.availableLocales = Environment.locale.available;
                        $rootScope.locale = Environment.currentLocale();
                        $rootScope.topMenu = [];
                        $rootScope.domain = Environment.domain;
                    }
                }
            }
        ]);
});
