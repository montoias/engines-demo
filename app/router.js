import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount('blog-engine', { as: 'blog', path: '/blog' });  
  this.mount('blog-engine', { as: 'blog', path: '/another-blog' });  
});

export default Router;
