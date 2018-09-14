import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://fastboot.prodtype.com',
  shouldBackgroundReloadAll(store, snapshotArray) {
    return false;
  },
});
