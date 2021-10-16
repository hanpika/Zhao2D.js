function MouseMove(imgLJ,xPY,yPY){
    var a = document.createElement("div");
    a.id="pikaqius";
    a.style="width: 100%;height: 100%;position: fixed; top: 0px; left: 0px; z-index: -3; ";
    document.body.insertBefore(a,document.body.insertBefore(a,document.body.firstChild));


    var a = document.createElement("img");
    a.id="pikaqiu";
    a.src=imgLJ
    document.getElementById("pikaqius").appendChild(a)

    var b = document.getElementById("pikaqiu")
    b.style = "-webkit-user-drag: none;";
    b.style.position = "fixed";

    document.addEventListener('mousemove',function (e) {
        //mousemove 只要鼠标一移动，就会触发事件
        //获取鼠标最新的坐标
        b.style.left = e.pageX - xPY
        b.style.top = e.pageY - yPY
    });
}

function BulkBuild(form) {
    for (var i = 0;form.Frequency > i;i++){
        var div = document.getElementById(form.divid)

        var a = document.createElement(form.BuildType);
        if (typeof(form.id) == "undefined" || a == null){
            a.id=i;
        }
        else {
            a.innerText = form.id[i];
        }

        if (typeof(form.txt) == "undefined" || a == null){ }
        else {
            a.innerText = form.txt[i];
        }

        if (typeof(form.Class) == "undefined" || a == null){ }
        else {
            a.className = form.Class[i];
        }

        if (typeof(form.src) == "undefined" || a == null){ }
        else {
            a.src = form.src[i];
        }

        if (typeof(form.First) == "undefined" || a == null){
            div.appendChild(a)
        }
        else {
            if (form.First=="first"){
                div.insertBefore(a,div.insertBefore(a,div.firstChild));
            }
            else {
                div.appendChild(a)
            }
        }
    }
}