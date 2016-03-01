/**
 * Created by georgeallen on 01/03/2016.
 */
/**
 * Created by georgeallen on 29/02/2016.
 */
Projects = new Mongo.Collection('projects');

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

