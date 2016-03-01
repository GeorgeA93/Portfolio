/**
 * Created by georgeallen on 01/03/2016.
 */


angular.module('portfolio').controller('LoginController', ['$scope', '$log', '$state',
    function ($scope, $log, $state) {

        this.credentials = {
            email: '',
            password: ''
        };

        this.error = '';
        this.hasError = false;

        this.login = function () {
            console.log(this.credentials);
            Meteor.loginWithPassword(this.credentials.email, this.credentials.password, function(error) {
                if(error){
                    this.hasError = true;
                    this.error = 'Login error: ';
                } else {
                    this.hasError = false;
                    $state.go('data');
                }
            });
        };


    }]);