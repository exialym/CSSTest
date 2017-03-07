/**
 * Created by exialym on 2017/3/7 0007.
 */
function Gallery(container,options) {
    var that = this;
    if (!options.srcs instanceof Array) {
        return;
    }
    this.srcs = options.srcs;
    this.now = 0;
    this.left = 0;
    this.id;
    this.container = container;
    var len = this.srcs.length;
    var html = '';
    html += "<ul class=\"gallery\">";
    for (var i = 0;i < len;i++) {
        html += "<li class=\"pic\" style=\"background-image: url(" + this.srcs[i] + ")\"></li>";
    }
    html += "</ul>";
    container.innerHTML = html;
    var width = container.querySelector('.gallery').offsetWidth;
    container.querySelectorAll('.pic').style.width = width + 'px';
    container.querySelector('.gallery').style.width = width * len + 'px';
    setInterval(function () {
        that.id = requestAnimationFrame(animate);
    },5000);
    function animate() {
        that.left -= 10;
        that.now++;
        that.container.querySelector('.gallery').style.left = that.left +'px';
        if (that.left<=-that.now*width) {
            cancelAnimationFrame(this.id);
        }
    };
}
var a = new Gallery(document.querySelector('.container'),{
    srcs:['1.jpg','2.jpg','3.jpg','4.jpg']
});
