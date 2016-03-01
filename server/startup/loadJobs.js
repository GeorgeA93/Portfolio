/**
 * Created by georgeallen on 29/02/2016.
 */
Meteor.startup(function () {
    if (Jobs.find().count() === 0) {
        var jobs = [
            {
                'title': 'Hi-Level',
                'shortDescription': 'A short description of the job',
                'longDescription': 'A long description of the job'
            },
            {
                'title': 'University of Reading',
                'shortDescription': 'A short description of the job',
                'longDescription': 'A long description of the job'
            }
        ];

        for (var i = 0; i < jobs.length; i++) {
            Jobs.insert(jobs[i]);
        }
    }
});