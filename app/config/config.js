(function () {
    'use strict';

    var config = angular.module('config', []);
    
    config.constant('FLICKR_API', {
        url: 'https://api.flickr.com/services/feeds/photos_public.gne'
    });

})();