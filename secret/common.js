/**
 * Created by exialym on 16/6/22.
 */
function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    //将nodelist转换为数组
    return Array.prototype.slice.call(elements);
}
/**************************测试浏览器是否支持某个规则*****************/
function testProperty(property) {
    var root = document.documentElement;
    if (property in root.style) {
        root.classList.add(property.toLowerCase());
        return true;
    }
    root.classList.add('no-' + property.toLowerCase());
    return false;
}
testProperty('textShadow');
/**************************测试浏览器是否支持某个规则的某个值*****************/
function testValue(id, value, property) {
    var root = document.documentElement;
    var dummy = document.createElement('p');
    dummy.style[property] = value;
    if (dummy.style[property]) {
        root.classList.add(id);
        return true;
    }
    root.classList.add('no-' + id);
    return false;
}
testValue('lineargradients', 'linear-gradient(red,tan)', "backgroundImage");


$$('.pie').forEach(
    function(pie) { 
        var p = parseFloat(pie.textContent); 
        pie.style.animationDelay = '-' + p + 's'; 
    }
);
$$('.piesvg').forEach(function(pie) {
    var p = parseFloat(pie.textContent);
    var NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS, "svg");
    var circle = document.createElementNS(NS, "circle");
    var title = document.createElementNS(NS, "title");
    circle.setAttribute("r", 16);
    circle.setAttribute("cx", 16);
    circle.setAttribute("cy", 16);
    circle.setAttribute("stroke-dasharray", p + " 100");
    svg.setAttribute("viewBox", "0 0 32 32");
    title.textContent = pie.textContent; pie.textContent = '';
    svg.appendChild(title); 
    svg.appendChild(circle); 
    pie.appendChild(svg); 
});


