import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // in repo engine
  this.mount('admin-engine', { as: 'admin', path: '/admin' });

  // standalone addon
  this.mount('blog-engine', { as: 'blog', path: '/blog' });
});

export default Router;
