/**
 * Created by exialym on 16/6/22.
 */
function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    //将nodelist转换为数组
    return Array.prototype.slice.call(elements);
}
