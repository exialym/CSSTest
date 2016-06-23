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


