/**
 * Created by georgeallen on 29/02/2016.
 */
Jobs = new Mongo.Collection('jobs', {idGeneration: 'MONGO'});

Jobs.allow({
    insert: function (userId, job) {
        return userId;
    },
    update: function (userId, job, fields, modifier) {
        return userId;
    },
    remove: function (userId, job) {
        return userId
    }
});

Jobs.attachSchema(new SimpleSchema({
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

