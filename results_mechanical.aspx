<%@ Page Language="C#" AutoEventWireup="true" CodeFile="results_mechanical.aspx.cs" Inherits="results" %>

<%@ Register Assembly="System.Web.DataVisualization, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"
    Namespace="System.Web.UI.DataVisualization.Charting" TagPrefix="asp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>实验结果</title>
    <link rel="stylesheet" type="text/css" href="themes/default/easyui.css"/>
	<link rel="stylesheet" type="text/css" href="themes/icon.css"/>
   

	<script type="text/javascript" src="Scripts/jquery.min.js"></script>
	<script type="text/javascript" src="Scripts/jquery.easyui.min.js"></script>
    <script charset="gb2312" language="javascript" src="3Djs/VariableClass.js" type="text/javascript"></script>
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
    	    text-shadow:11px 4px 4px #333;
    	   	font-style:italic;
    	   	position:absolute;
    	    top:10%;
    	    left:8%;
	    	}
         #list{
             width: 40%;
             height: 50%;
            
             position:absolute;
    	     top:30%;
    	     left:8%;
         }
         #pie_chart{
             width:400px;
             height:400px;
             -webkit-border-radius: 200px;
             -moz-border-radius: 200px;
             -ms-border-radius: 200px;
             -o-border-radius: 200px;
            
             position:absolute;
    	     top:30%;
    	     right:12%;
         }
    </style>
</head>
<script  charset="gb2312" language="javascript"  type="text/javascript" >
    function Analysis() {
    
   var m_str=<%=jsonText %>;
  
   //alert( JSON.stringify(m_str))
        jspost('results_Analysis.aspx',  JSON.stringify(m_str),"_blank")
    }
 function init(){
    window.open('think.aspx'); 

    }
</script>
<body  onload="init()">
    <form id="form1" runat="server">
    <div>

     <div id="bg">
	       <img src="images/experimental_bg.jpg"/>
	    </div>
         <%--<div style=" position:absolute; top:50%; left:53%">
    <a href="#" class="easyui-linkbutton" data-options="iconCls:'icon-large-chart',size:'large',iconAlign:'top'" onclick="Analysis()">实验分析</a>

    </div>--%>
    
	    <h1>实验结果</h1>
        
        <div id="list">

	    <table class="easyui-datagrid" title="实验结果" style="width:600px;height:400px"
			data-options="singleSelect:true,collapsible:true">
		<thead>
			<tr>
				<th data-options="field:'itemid',width:80,align:'center'">编号</th>
				<th data-options="field:'productid',width:150,align:'center'">分类</th>
				<th data-options="field:'listprice',width:100,align:'center'">百分比(%)</th>
				<th data-options="field:'unitcost',width:100,align:'center'">重量(kg)</th>
				<th data-options="field:'attr1',width:150,align:'center'">分拣重量</th>
				
			</tr>
                

		</thead>
        <%=m_tablestr%>
	</table>
   
	    </div>
        <div id="pie_chart">
        <center>
            <asp:ScriptManager ID="ScriptManager1" runat="server">
            </asp:ScriptManager>
 
        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
          <ContentTemplate>
            <asp:Chart ID="Chart1" runat="server" Height="400px" Width="500px"  ImageLocation="~/TempImages/ChartPic_#SEQ(300,3)"
                BorderDashStyle="Solid" BackSecondaryColor="White" BackGradientStyle="Center"
                BorderWidth="2px" BackColor="211, 223, 240" BorderColor="#1A3B69" 
                onclick="Chart1_Click">
                <Legends>
                    <asp:Legend IsTextAutoFit="False" Name="Default" BackColor="Transparent" TitleAlignment="Center"
                        Font="Trebuchet MS, 8.25pt, style=Bold">
                    </asp:Legend>
                </Legends>
                <BorderSkin SkinStyle="Emboss"></BorderSkin>
                
               
                
                <ChartAreas>
                    <asp:ChartArea Name="ChartArea1" BorderColor="64, 64, 64, 64" BorderDashStyle="Solid"
                        BackSecondaryColor="White" BackColor="64, 165, 191, 228" ShadowColor="Transparent"
                        BackGradientStyle="TopBottom">
                        <Area3DStyle Rotation="10" Perspective="10" Inclination="15" IsRightAngleAxes="False"
                            WallWidth="0" IsClustered="False"></Area3DStyle>
                        <AxisY LineColor="64, 64, 64, 64" Title="分拣重量">
                            <LabelStyle Font="Trebuchet MS, 8.25pt, style=Bold" />
                            <MajorGrid LineColor="64, 64, 64, 64" />
                            
                        </AxisY>
                         <AxisX LineColor="64, 64, 64, 64"  Title="分拣垃圾编号(表格编号)">
                            <LabelStyle Font="Trebuchet MS, 8.25pt, style=Bold" />
                            <MajorGrid LineColor="64, 64, 64, 64" />
                        </AxisX>
                    </asp:ChartArea>
                </ChartAreas>
                <Titles>
                    <asp:Title Text="实验结果" />
                </Titles>
            </asp:Chart>
            </ContentTemplate>
        </asp:UpdatePanel>
             </center>
 </div>
    </div>
    </form>
     <div id="m_LoadingDiv" style=" display:none"><iframe id='iframe_loading' name="iframe_loading_name" src="<%=m_url %>"  width='100%' height='100%' frameborder='0' scrolling='no'></iframe></div>
   
    <div>
</body>
</html>
