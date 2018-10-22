(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['project'] = template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "                <li>"
    + ((stack1 = container.invokePartial(partials.forecastPartial,blockParams[0][0],{"name":"forecastPartial","data":data,"blockParams":blockParams,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "      <h1>Weather Update</h1>\r\n      <div class=\"details\">Location: <span class=\"location\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.city : stack1), depth0))
    + ", "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.region : stack1), depth0))
    + "</span></div>\r\n      <div class=\"details\">Date: <span class=\"date\">"
    + alias2(((helper = (helper = helpers.lastBuildDate || (depth0 != null ? depth0.lastBuildDate : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"lastBuildDate","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "</span></div>\r\n      <div class=\"details\">Conditions: <span class=\"conditions\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.condition : stack1)) != null ? stack1.text : stack1), depth0))
    + "</span></div>\r\n      <div class=\"details\">Current Temp: <span class=\"temp\">"
    + alias2((helpers.temperature || (depth0 && depth0.temperature) || alias4).call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.condition : stack1)) != null ? stack1.temp : stack1),{"name":"temperature","hash":{},"data":data,"blockParams":blockParams}))
    + "</span></div>\r\n      <div class=\"details\">Sunrise: <span class=\"sunrise\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.astronomy : depth0)) != null ? stack1.sunrise : stack1), depth0))
    + "</span></div>\r\n      <div class=\"details\">Sunset: <span class=\"sunset\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.astronomy : depth0)) != null ? stack1.sunset : stack1), depth0))
    + "</span></div>\r\n      <div class=\"forecast\">\r\n          <ul>\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.forecast : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "          </ul>\r\n      </div>";
},"usePartial":true,"useData":true,"useBlockParams":true});
})();