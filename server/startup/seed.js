/**
 * Created by georgeallen on 01/03/2016.
 */
Meteor.startup(function () {
    if (Jobs.find().count() === 0) {
        Jobs.insert({
            title: 'Hi-Level',
            shortDescription: 'A short description of the job',
            longDescription: 'A long description of the job'
        });

        Jobs.insert({
            title: 'University of Reading',
            shortDescription: 'A short description of the job',
            longDescription: 'A long description of the job'
        });
    }

    if (ProjectTypes.find().count() === 0) {

        ProjectTypes.insert({
            description: 'University'
        });

        ProjectTypes.insert({
            description: 'Personal'
        });

        ProjectTypes.insert({
            description: 'Business'
        });
    }

    if (Projects.find().count() === 0) {

        Projects.insert({
            title: 'Project One',
            shortDescription: 'A short description of the project',
            longDescription: 'A long description of the project',
            projectTypeId: ProjectTypes.find().fetch()[0]._id._str
        });
    }
});
