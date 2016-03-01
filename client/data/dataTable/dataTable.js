/**
 * Created by georgeallen on 01/03/2016.
 */
angular.module('portfolio').controller('DataTableController', ['$scope', '$stateParams', '$modal', '$log', '$reactive',
    function ($scope, $stateParams, $modal, $log, $reactive) {
        $reactive(this).attach($scope);

        this.collection = Mongo.Collection.get($stateParams.entity);
        this.currentPage = 1;
        this.numPerPage = 15;
        this.sort = {'_id': 1};
        this.sortType = '_id';
        this.sortReverse = false;
        this.searchText = '';

        this.helpers({
            entities: () => {
                return this.collection.find({}, {sort: this.getReactively('sort')});
            },
            entityCount: () => {
                return Counts.get('numberOf' + lodash.capitalize($stateParams.entity));
            },
            isLoggedIn: () => {
                return Meteor.userId() !== null;
            }
        });

        this.pageChanged = (newPage) => {
            this.currentPage = newPage;
        };

        this.updateSort = (key) => {
            this.sort = {};
            this.sortType = key;
            this.sortReverse = !this.sortReverse;
            this.sort[this.sortType] = this.sortReverse ? 1 : -1;
        };

        this.getLabel = (key) => {
            return this.collection.simpleSchema().label(key);
        }


        this.subscribe($stateParams.entity, () => {
            return [
                {
                    limit: parseInt(this.numPerPage),
                    skip: parseInt((this.getReactively('currentPage') - 1) * this.numPerPage),
                    sort: this.getReactively('sort')
                },
                this.getReactively('searchText')
            ]
        });

        this.getSelectOptions = (foreignEntity, optionList) => {
            optionList[foreignEntity] = Mongo.Collection.get(foreignEntity).find({});
        };

        this.keyShouldBeIncluded = (key) => {
            return ['_id', 'createdAt', 'updatedAt'].indexOf(key) === -1;
        };

        this.checkType = (key, val) => {
            if (val == null)
                return 'undefined';
            if (key.match(/\wId$/))
                return 'foreignKey';
            return typeof val;
        };

        this.extractMainProp = (obj) => {
            if (obj.hasOwnProperty('Name')) {
                return obj.Name;
            } else if (obj.hasOwnProperty('Description')) {
                return obj.Description;
            }
        };

        this.getForeignKeyLink = (key) => {
            return "dataTable({ entity:'" +  key.replace('Id', '') + 's' + "' })";
        };


    }]);