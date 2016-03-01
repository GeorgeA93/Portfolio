/**
 * Created by georgeallen on 01/03/2016.
 */
Meteor.startup(function () {
    if (Projects.find().count() === 0) {
        var projects = [
            {
                'title': 'Project One',
                'shortDescription': 'A short description of the project',
                'longDescription': 'A long description of the project'
            },
            {
                'title': 'Project Two',
                'shortDescription': 'A short description of the project',
                'longDescription': 'A long description of the project'
            },
            {
                'title': 'Project Three',
                'shortDescription': 'A short description of the project',
                'longDescription': 'A long description of the project'
            },
            {
                'title': 'Project Four',
                'shortDescription': 'A short description of the project',
                'longDescription': 'A long description of the project'
            },
            {
                'title': 'Project Five',
                'shortDescription': 'A short description of the project',
                'longDescription': 'A long description of the project'
            }
        ];

        for (var i = 0; i < projects.length; i++) {
            Projects.insert(projects[i]);
        }
    }
});