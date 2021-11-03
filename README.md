# Zhao2D.js

这是一款由中国人打造的开源js库,这个东西将来还会更新
<br>
这个库目前的功能有:<br>
1. 鼠标特效--MouseMove<br>
2. 批量生成同样的网页元素--BulkBuild<br>
3. post接口调用--post<br>
<br>
接下来,将是这个shit东西的使用方法:<br>
* MouseMove(imgLJ,xPY,yPY)里面的imgLJ是指定图片路径,需要传入string类型的数值.xPY是设置x偏移几px.yPX同理.<br>
* BulkBuild(form)form是一个对象,里面的数据请看 对象对照表
* post(htp,postname,text)htp是接口网址,postname是 / 后面的网址,text是传入的数值
<br>
<br>
对象对照表:<br>
form{<br>
  divid:"",<br>
  id:[""],//(可选)<br>
  txt:[""],//(可选)<br>
  Class:[""],//(可选)<br>
  src:[""],//(可选)<br>
  First://no or first<br>
}
