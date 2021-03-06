import OsfSerializer from './osf-serializer';

export default OsfSerializer.extend({
    serialize: function serialize(snapshot, options) {
        var serialized = this._super(snapshot, options);
        // APIv2 expects node link information to be nested under relationships.
        serialized.data.relationships = {
            nodes: {
                data: {
                    id: snapshot.record.target,
                    type: 'nodes'
                }
            }
        };
        return serialized;
    }
});