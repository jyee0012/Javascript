"use strict";

Handlebars.registerHelper('currency', function (value) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
});

var renderProject = function renderProject(proj) {
  document.querySelector('.project').innerHTML = Handlebars.templates['project'](proj);
}; // now, fetch projects and render the first one.


fetch('data/projects.json').then(function (data) {
  return data.json();
}).then(function (projects) {
  renderProject(projects[0]);
});