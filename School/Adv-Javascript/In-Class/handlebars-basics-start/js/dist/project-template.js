(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['project'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <tr>\r\n              <td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\r\n              <td>"
    + alias4(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data}) : helper)))
    + "</td>\r\n              <td>"
    + alias4(((helper = (helper = helpers.experience || (depth0 != null ? depth0.experience : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"experience","hash":{},"data":data}) : helper)))
    + "</td>\r\n            </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <h2 class=\"project-title\">Project: <span class=\"title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></h2>\r\n    <section class=\"details\">\r\n      <h3>Details</h3>\r\n      <ul>\r\n        <li>Project Start - <span class=\"start\">"
    + alias4(((helper = (helper = helpers.startDate || (depth0 != null ? depth0.startDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startDate","hash":{},"data":data}) : helper)))
    + "</span></li>\r\n        <li>Project End - <span class=\"end\">"
    + alias4(((helper = (helper = helpers.endDate || (depth0 != null ? depth0.endDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endDate","hash":{},"data":data}) : helper)))
    + "</span></li>\r\n        <!-- use helper to format as currency -->\r\n        <li>Estimated Budget - <span class=\"budget\">"
    + alias4((helpers.currency || (depth0 && depth0.currency) || alias2).call(alias1,(depth0 != null ? depth0.budget : depth0),{"name":"currency","hash":{},"data":data}))
    + "</span></li>\r\n      </ul>\r\n      <section>\r\n        <h4>Project Managers</h4>\r\n        <table class=\"tbl-managers\">\r\n          <thead>\r\n            <tr><th>Name</th><th>Position</th><th>Experience</th></tr>\r\n          </thead>\r\n          <tbody>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.managers : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </tbody>\r\n        </table>\r\n      </section>\r\n    </section>\r\n    <!-- <h1>Hello "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "!</h1> -->";
},"useData":true});
})();