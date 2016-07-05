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
$$('.circularJS').forEach(function(el) {
    var NS = "http://www.w3.org/2000/svg";
    var xlinkNS = "http://www.w3.org/1999/xlink";
    var svg = document.createElementNS(NS, "svg");
    var circle = document.createElementNS(NS, "path");
    var text = document.createElementNS(NS, "text");
    var textPath = document.createElementNS(NS, "textPath");
    svg.setAttribute("viewBox", "0 0 100 100");
    circle.setAttribute("d", "M0,50 a50,50 0 1,1 0,1z");
    circle.setAttribute("id", "circle");
    textPath.textContent = el.textContent;
    textPath.setAttributeNS(xlinkNS, "xlink:href", "#circle");
    text.appendChild(textPath);
    svg.appendChild(circle);
    svg.appendChild(text);
    el.textContent = '';
    el.appendChild(svg);
});
$$("#blur-pop").forEach(function(el) {
    el.onclick = function () {
        $$("main")[0].className = "de-emphasized";
        $$(".model")[0].style.display = "block";
    }
});
$$(".image-slider-range input")[0].oninput = function() {
    $$(".image-slider-range>div")[0].style.width = this.value + '%';
};
