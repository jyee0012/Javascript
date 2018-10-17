(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['project'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <li><span class=\"week-day\">"
    + alias4(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data}) : helper)))
    + "</span> "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + " : hi| "
    + alias4(((helper = (helper = helpers.high || (depth0 != null ? depth0.high : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"high","hash":{},"data":data}) : helper)))
    + "&#176C , low| "
    + alias4(((helper = (helper = helpers.low || (depth0 != null ? depth0.low : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"low","hash":{},"data":data}) : helper)))
    + "&#176C</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "      <h1>Weather Update</h1>\r\n      <div class=\"details\">Location: <span class=\"location\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.city : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.region : stack1), depth0))
    + "</span></div>\r\n      <div class=\"details\">Date: <span class=\"date\">"
    + alias2(((helper = (helper = helpers.lastBuildDate || (depth0 != null ? depth0.lastBuildDate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias3,{"name":"lastBuildDate","hash":{},"data":data}) : helper)))
    + "</span></div>\r\n      <div class=\"details\">Conditions: <span class=\"conditions\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.condition : stack1)) != null ? stack1.text : stack1), depth0))
    + "</span></div>\r\n      <div class=\"details\">Current Temp: <span class=\"temp\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.condition : stack1)) != null ? stack1.temp : stack1), depth0))
    + "&#176C</span></div>\r\n      <div class=\"details\">Sunrise: <span class=\"sunrise\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.astronomy : depth0)) != null ? stack1.sunrise : stack1), depth0))
    + "</span></div>\r\n      <div class=\"details\">Sunset: <span class=\"sunset\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.astronomy : depth0)) != null ? stack1.sunset : stack1), depth0))
    + "</span></div>\r\n      <div class=\"forecast\">\r\n          <ul>\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.forecast : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </ul>\r\n      </div>";
},"useData":true});
})();