/**
 * Created by georgeallen on 29/02/2016.
 */
angular.module('portfolio').controller('HomeController', ['$scope', '$log', '$reactive', '$window', '$anchorScroll', '$location',
    function ($scope, $log, $reactive, $window, $anchorScroll, $location) {
        $reactive(this).attach($scope);

        this.jobsPerRow = 3;
        this.projectsPerRow = 3;

        this.browserHeight = $window.innerHeight;

        this.helpers({

            jobs: () => {
                return Jobs.find({});
            },
            projects: () => {
                return Projects.find({});
            },
            groupedJobs: () => {
                const data = Jobs.find({}).fetch();
                return lodash.chunk(data, this.jobsPerRow);
            }
        });

        this.subscribe('jobs');
        this.subscribe('projects');

        $(window).on("resize.doResize", function () {
            this.browserHeight = $window.innerHeight;
            $scope.$apply();
        });

        $scope.$on("$destroy", function () {
            $(window).off("resize.doResize");
        });

        this.goToAnchor = function (scrollId) {
            if ($location.hash() !== scrollId) {
                $location.hash(scrollId);
            } else {
                $anchorScroll();
            }
        };

    }]);