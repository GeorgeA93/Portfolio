/**
 * Created by georgeallen on 29/02/2016.
 */
Meteor.startup(function () {
    if (Jobs.find().count() === 0) {

        Jobs.insert({
            _id: Random.id(),
            title: 'Hi-Level',
            shortDescription: 'A short description of the job',
            longDescription: 'A long description of the job'
        });

        Jobs.insert({
            _id: Random.id(),
            title: 'University of Reading',
            shortDescription: 'A short description of the job',
            longDescription: 'A long description of the job'
        });
    }
});