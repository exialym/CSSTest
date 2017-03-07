/**
 * Created by exialym on 2017/3/7 0007.
 */
function Modal(el,options) {
    var that = this;
    if (!el) {
        throw 'no element';
    }
    this.el = el;
    this.cancel = options.cancel ? options.cancel : true;
    el.querySelector('.modal-close').addEventListener('click',function(e){
        e.stopPropagation();
        that.close();
    });
    if (this.cancel) {
        el.querySelector('.modal').addEventListener('click',function(e){
            e.stopPropagation();
        });

        el.addEventListener('click',function(e){
            e.stopPropagation();
            that.close();
        });
    }
}
Modal.prototype.pop = function () {
    var that = this;
    var event = document.createEvent("CustomEvent");
    event.initCustomEvent('show',false,true,null);
    this.el.dispatchEvent(event);

    this.el.style.display = 'block';

    event.initCustomEvent('shown',false,true,null);
    setTimeout(function () {
        that.el.dispatchEvent(event);
    },0);
};
Modal.prototype.close = function () {
    var that = this;
    var event = document.createEvent("CustomEvent");
    event.initCustomEvent('close',false,true,null);
    this.el.dispatchEvent(event);

    this.el.style.display = 'none';

    event.initCustomEvent('closed',false,true,null);
    setTimeout(function () {
        that.el.dispatchEvent(event);
    },0);

};
Modal.prototype.addEvent = function(event,fn) {
    this.el.addEventListener(event,function(e){
        e.stopPropagation();
        fn.call(this,e);
    });
};
var a = new Modal(document.querySelector('.modal-overlay'),{cancel:true});
a.addEvent('shown',function () {
    alert('Model Shown');
});
a.addEvent('closed',function () {
    alert('Model closed');
});
a.addEvent('show',function () {
    alert('Model Will Show');
});
a.addEvent('close',function () {
    alert('Model Will close');
});
document.getElementById('modal').addEventListener('click',function(){
    a.pop();
});
