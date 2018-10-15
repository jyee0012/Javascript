let source = document.querySelector("#project-template").innerHTML;
let template = Handlebars.compile(source);

Handlebars.registerHelper('currency', (value) => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
});

const renderProject = (proj) => {
  document.querySelector('.project').innerHTML = template(proj);
};

// now, fetch projects and render the first one.
fetch('data/projects.json')
  .then(data => {
    return data.json();
  })
  .then(projects => {
    renderProject(projects[0]);
  });