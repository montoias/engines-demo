import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // in repo addon
  this.mount('admin-engine', { as: 'admin', path: '/admin' });

  // standard addon
  this.mount('blog-engine', { as: 'blog', path: '/blog' });
});

export default Router;
