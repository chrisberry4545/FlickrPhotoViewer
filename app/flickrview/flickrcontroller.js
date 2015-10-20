(function () {
    'use strict';

    var flickrPhotoViewer = angular.module('flickrPhotoViewer', ['datacontextModule']);

    flickrPhotoViewer.controller('flickrcontroller', ['$scope', 'datacontext', function ($scope, datacontext) {

        var vm = this;
        vm.recentPhotos = [];
        vm.searchForTagString = "";
        vm.loading = true;


        vm.searchOnEnterPress = function (event) {
            if (event.keyCode == 13) {
                vm.newSearch();
            }
        }


        vm.newSearch = function () {
            vm.recentPhotos = [];
            vm.loading = true;
            var tagArray = vm.searchForTagString.split(',');

            datacontext.getLatestFlickrData(tagArray, function (response) {
                vm.recentPhotos = response.data.items;
                vm.loading = false;
            }, function (error) {
                console.log(error);
                vm.loading = false;
            });
        }

        function init() {
            vm.newSearch();
        }

        init();

    }]);


})();