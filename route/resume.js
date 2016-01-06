/**
 * Created by jfluke on 1/5/2016.
 */
angular.module('resume', ['ui.router'])


    .config(function ($stateProvider) {
        $stateProvider
            .state('resume', {
                url: '/resume',
                templateUrl: 'route/resume.html'
                            })
    })

    .config(function ($urlRouterProvider) {
        //whats going in the url and an object with properties, of url, templateurl and controller
        $urlRouterProvider
            .otherwise('/')
    })



