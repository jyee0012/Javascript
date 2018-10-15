Handlebars.registerHelper('currency', (value) => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
});

const renderProject = (proj) => {
  document.querySelector('.project').innerHTML = Handlebars.templates['project'](proj);
};

// now, fetch projects and render the first one.
fetch('data/projects.json')
  .then(data => {
    return data.json();
  })
  .then(projects => {
    renderProject(projects[0]);
  });