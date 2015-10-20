(function () {
    'use strict';

    var datacontextModule = angular.module('datacontextModule', ['config']);

    datacontextModule.service('datacontext', ['$http', 'FLICKR_API', function ($http, FLICKER_API) {

        this.getLatestFlickrData = function (tags, success, failure) {

            var url = FLICKER_API.url + "?format=json&jsoncallback=JSON_CALLBACK";

            if (tags != null && tags.length) {
                for (var i = 0; i < tags.length; i++) { //Removes blank space.
                    tags[i] = tags[i].replace(/\s+/g, '');
                }
                url += "&tags=" + tags.join(); //Adds tags to url
            }


            $http.jsonp(url).then(function (response) {
                success(response);
            }, function (response) {
                failure(response);
            });
        };

    }]);


})();