/**
 * Created by georgeallen on 01/03/2016.
 */
ProjectTypes = new Mongo.Collection('projectTypes', {idGeneration: 'MONGO'});

ProjectTypes.allow({
    insert: function (userId, projectType) {
        return userId;
    },
    update: function (userId, projectType, fields, modifier) {
        return userId;
    },
    remove: function (userId, projectType) {
        return userId
    }
});

ProjectTypes.attachSchema(new SimpleSchema({
    description: {type: String, label: 'Description'},
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
