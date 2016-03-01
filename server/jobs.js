/**
 * Created by georgeallen on 29/02/2016.
 */
Meteor.publish("jobs", function () {
    return Jobs.find();
});