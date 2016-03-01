/**
 * Created by georgeallen on 01/03/2016.
 */
Meteor.publish('projects', function () {
   return Projects.find();
});