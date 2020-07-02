<%@ Page Language="C#" AutoEventWireup="true" CodeFile="think.aspx.cs" Inherits="think" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
    <meta name="format-detection" content="telephone=no,email=no,date=no,address=no">
    <title>思考题</title>
    <!--<link rel="stylesheet" type="text/css" href="../css/api.css"/>-->
    <style>
       *{
         margin:0px;
         padding:0px;
         list-style:none;
       }
    	html,body{
    	    width:100%;
    	    height:100%;
    		  
    	}
    	#bg img{
    	    width:100%;
    	    height:100%;
    	    /*background:url("../image/experimental_principle_bg.jpg")  center center;
    		background-size:cover;*/
    	    position:absolute;
    	    z-index:-1;
    	}
    	h1{
    	    font-family:FangSong;
    	    color:#222;
    	    font-size:380%;
    	    text-shadow:5px 3px 7px #333;
    	   	font-style:italic;
    	   	position:absolute;
    	    top:10%;
    	    left:8%;
	    	}
    	li {
    	    color:#fff;
    	    font-size:110%;
    	    position:absolute;
    	    top:30%;
    	    left:3%;
    	     text-indent:35px
    	}
    </style>
    <body onload="onload()">
<script language="JavaScript">

    quotes = new Array(12)				//创建消息数组
    quotes[1] = '1、请根据模拟实验情况分析影响筛分效率的主要因素有哪些？如何影响？'
    quotes[2] = '2、叙述风选工艺利用什么原理？'
    quotes[3] = '3、磁力分析有几种工艺？在实际应用中的优缺点是什么。'
    quotes[4] = '4、模拟系统中滚筒是利用了什么分选原理？如何影响分选效率的。'
    quotes[5] = '5、分选效果如何评价？'
    quotes[6] = '6、模拟系统中缺少光电分选工艺，其采用何种原理如何进行分选？'
    quotes[7] = '7、振动筛是如何工作的？该工艺处理特点是什么？'
    quotes[8] = '8、模拟系统如果采用水选方式，主要利用什么原理？其优缺点是什么？'
    quotes[9] = '9、机械分选与人工分选模式对比，有哪些优缺点？'
    quotes[10] = '10、画出模拟系统的工艺流程图，并说出主要部件工艺采用的分选原理。'
    quotes[11] = '11、举例说明当前研究的新分选技术工艺特点。'
    quotes[0] = '12、针对实际分选工艺条件，如何降低现场污染气体以及细颗粒影响，请设计回收与处理工艺流程。'


    function onload() {

        var num = Math.floor((Math.random() * 11));

        // document.write(quotes[num])		//将上面选择的话写进页面
        document.getElementById("dlg_1").innerHTML = quotes[num];
    }
</script>
</head>
<body>
 <form id="form1" runat="server">
	<div>
	   <div id="bg">
	        <img src="images/experimental_bg.jpg">
	    </div>
	    <h1>思考题</h1>
	    <li>
     
 <div id="dlg_1"></div>
       
         </li>
	</div>
    </form>	 
</body>
<script type="text/javascript" src="../script/api.js"></script>
<script type="text/javascript">
    apiready = function () {

    };
</script>
</html>










