/**
 * Created by georgeallen on 29/02/2016.
 */
Meteor.publish("jobs", function (options, searchString) {
    if (!searchString || searchString == null) {
        searchString = '';
    }

    let selector = {
        $or: [
            {
                shortDescription: {'$regex': '.*' + searchString || '' + '.*', '$options': 'i'}
            },
            {
                longDescription: {'$regex': '.*' + searchString || '' + '.*', '$options': 'i'}
            }
        ]
    };

    Counts.publish(this, 'numberOfJobs', Jobs.find(selector), {noReady: true});
    return Jobs.find(selector, options);
});