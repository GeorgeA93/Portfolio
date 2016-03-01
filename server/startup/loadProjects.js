/**
 * Created by georgeallen on 01/03/2016.
 */
Meteor.startup(function () {
    if (Projects.find().count() === 0) {

        Projects.insert({
            title: 'Project One',
            shortDescription: 'A short description of the project',
            longDescription: 'A long description of the project',
            projectTypeId: 'r3WgiyCeyMQmf54io'
        });
    }
});