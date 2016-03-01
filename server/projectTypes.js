/**
 * Created by georgeallen on 01/03/2016.
 */
Meteor.publish('projectTypes', function () {
   return ProjectTypes.find();
});