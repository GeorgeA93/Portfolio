/**
 * Created by georgeallen on 01/03/2016.
 */
Projects = new Mongo.Collection('projects', {idGeneration: 'MONGO'});

Projects.allow({
    insert: function (userId, project) {
        return userId;
    },
    update: function (userId, project, fields, modifier) {
        return userId;
    },
    remove: function (userId, project) {
        return userId
    }
});

Projects.attachSchema(new SimpleSchema({
    title: {type: String, label: 'Title'},
    shortDescription: {type: String, label: 'Short Description'},
    longDescription: {type: String, label: 'Long Description'},
    projectTypeId: {type: String, label: 'Project Type'},
    createdAt: {
        type: Date,
        label: 'Created',
        autoValue: function () {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();  // Prevent user from supplying their own value
            }
        }
    },
    // Force value to be current date (on server) upon update
    // and don't allow it to be set upon insert.
    updatedAt: {
        type: Date,
        label: 'Updated',
        autoValue: function () {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    }
}));

Projects.helpers({
    projectType: function () {
        return ProjectTypes.findOne(this.projectType);
    }
});

