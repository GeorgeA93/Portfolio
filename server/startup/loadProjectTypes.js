/**
 * Created by georgeallen on 01/03/2016.
 */
Meteor.startup(function () {
    if (ProjectTypes.find().count() === 0) {

        ProjectTypes.insert({
           _id: Random.id(),
            description: 'University'
        });

        ProjectTypes.insert({
            _id: Random.id(),
            description: 'Personal'
        });

        ProjectTypes.insert({
            _id: Random.id(),
            description: 'Business'
        });
    }
});