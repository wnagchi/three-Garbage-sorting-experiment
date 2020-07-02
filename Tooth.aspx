<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Tooth.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>
        <%=m_title%></title>
</head>
<style>
    #m_LoadingDiv
    {
        width: 100%;
        height: 2000px;
        position: absolute;
        top: 0px;
        left: 0px;
        background: #202020;
        filter: alpha(opacity=80);
        z-index: 16;
    }
    body
    {
        font-family: Monospace;
        font-size: 13px;
        text-align: center;
        margin: 0px;
        overflow: hidden;
    }
    #info
    {
        position: absolute;
        top: 30px;
        left: 45%;
        padding: 5px;
        font-family: "宋体" , "Dosis" , sans-serif;
        font-size: 150px;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 1px #ffffff;
        background-size: cover;
    }
    a
    {
        color: #2983ff;
    }
</style>
            <!--             库文件调用                     -->
            <script charset="gb2312" language="javascript" src="lib/three.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="lib/Detector.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="lib/stats.min.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="lib/OrbitControls.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="lib/jszip.js" type="text/javascript"></script>
            <%-- <script charset="gb2312" language="javascript" src="lib/ShaderSkin.js" type="text/javascript"></script>--%>
            <script charset="gb2312" language="javascript" src="lib/Water.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="lib/dat.gui.min.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="lib/Refractor.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="lib/Reflector.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="lib/hilbert3D.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="lib/CurveExtras.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="lib/shaders/FXAAShader.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="lib/shaders/CopyShader.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="lib/postprocessing/EffectComposer.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="lib/postprocessing/RenderPass.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="lib/postprocessing/ShaderPass.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="lib/postprocessing/OutlinePass.js" type="text/javascript"></script>
            <!--           3djs库文件调用                     -->
            <script charset="gb2312" language="javascript" src="3Djs/VariableClass_Standard.js"  type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="3Djs/BaseRenderClass.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="3Djs/SceneClass_Standard.js"  type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="3Djs/CameraClass.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="3Djs/LightClass.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="3Djs/bar.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="3Djs/MaterialClass.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="3Djs/LoadZLFClass.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="3Djs/OBJLoader.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="3Djs/PsarticleClass.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="3Djs/CanvasRenderer.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="3Djs/AnimationClass.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="3Djs/3dTextClass.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="3Djs/MouseClass_Standard.js" type="text/javascript"></script>
             <!--           Tooth库文件调用                     -->
              <script charset="gb2312" language="javascript" src="Tooth/ToolClass.js" type="text/javascript"></script>
               <script charset="gb2312" language="javascript" src="Tooth/ToolPanelClass.js" type="text/javascript"></script>
               <script charset="gb2312" language="javascript" src="Tooth/SmallSence.js" type="text/javascript"></script>

                 <script charset="gb2312" language="javascript" src="Tooth/ErrorTitle.js" type="text/javascript"></script>
           <script charset="gb2312" language="javascript" src="Tooth/JS_PointClass.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="Tooth/Tooth_Enamel.js" type="text/javascript"></script>
           <script charset="gb2312" language="javascript" src="Tooth/VarTooth.js" type="text/javascript"></script>
            <script charset="gb2312" language="javascript" src="Tooth/ObjectLoader.js" type="text/javascript"></script>
<%-- <script charset="gb2312" language="javascript" src="Tooth/ErrorTitle.js" type="text/javascript"></script>
           <script charset="gb2312" language="javascript" src="Tooth/JS_PointClass.js" type="text/javascript"></script>
          <script charset="gb2312" language="javascript" src="Tooth/JScript.js" type="text/javascript"></script>
          <script charset="gb2312" language="javascript" src="Tooth/Tooth_Enamel.js" type="text/javascript"></script>
           <script charset="gb2312" language="javascript" src="Tooth/VarTooth.js" type="text/javascript"></script>--%>
<!----------------------------------字体库------------------------------------>
<script charset="gb2312" language="javascript" src="fonts/gentilis_regular.typeface.js"
    type="text/javascript"></script>
<script charset="gb2312" language="javascript" src="fonts/gentilis_bold.typeface.js"
    type="text/javascript"></script>
<!--------------------------------------------------------------------------------------->
<script charset="gb2312" language="javascript" type="text/javascript">

    var m_VarGlobal = new VariableClass();
    var m_initArr;
    var m_SceneArr;
    var clock = new THREE.Clock();

    var mixer, animationClip;
    var varToothClass = new VarToothClass();
    varToothClass.m_Error = new ErrorTiltleClass();
    varToothClass.m_Enamel = new EnamelObj();
    function InitWebgl() {

        m_VarGlobal.m_Mouse = new StereMouse();

        m_VarGlobal.m_BaseRender = new BaseRenderer('webgl');

        ////////////////////////////////////////////////////

       



        for (var i = 0; i < m_VarGlobal.m_XMLWall.length; i++) {
            if (m_VarGlobal.m_XMLWall[i] != "") {

                var m_arr = m_VarGlobal.m_XMLWall[i];

                if (m_arr[0] == "init") {
                    m_initArr = m_VarGlobal.m_XMLWall[i];


                    m_VarGlobal.m_Camera = new PerspeCamera(m_arr[2], m_arr[3], m_arr[4]);
                    m_VarGlobal.m_CubeCamera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 20000);

                }
                if (m_arr[0] == "Scene") {

                    m_SceneArr = m_VarGlobal.m_XMLWall[i];
                }

            }
        }
        m_VarGlobal.m_BaseSence = new BaseScene();
        m_VarGlobal.m_Animation = new AnimationClass();

        
     
       
        m_VarGlobal.m_BaseSence.CreateBackGround(m_initArr);
        m_VarGlobal.m_BaseSence.init();
        m_VarGlobal.m_Mouse.init();
        m_VarGlobal.m_SmallSence = new SmallSenceClass();
        onSetEnvironment()
        m_VarGlobal.m_Controls = new THREE.OrbitControls(m_VarGlobal.m_Camera.m_Camera, document.getElementById('webgl'));


        m_VarGlobal.m_Tooth_ToolBar = new Tooth_ToolBar();
       
        m_VarGlobal.m_ToothPanel_Top = new ToothPanel_Top();

       
        SetLoadingPart(100);
        onRenderTick();

        var m_load = new ObjectLoader();

        m_load.load("Tooth/m_Json_15.json", function (text) {
            var obj = JSON.parse(text);

            varToothClass.m_Enamel.initTooth(obj);

        });
        m_load.load("Tooth/m_Json_15_1.json", function (text) {
            var obj = JSON.parse(text);

            varToothClass.m_Enamel.initTooth(obj);

        });


    }

    function onSetEnvironment() {


        m_VarGlobal.m_BaseSence.CreateSysPic(); //加载图片
        m_VarGlobal.m_BaseSence.CreateSysWall(); //加载墙面
        m_VarGlobal.m_BaseSence.CreateSysCylinder()//加载圆柱
        m_VarGlobal.m_BaseSence.CreateSysLight(); //加载灯光
    }
    var m_ResLoading = 0;
    var m_LongPart = 2;
    function SetLoadingPart(num) {

        // m_SaveDataStr= document.getElementById('SysSave_id').value;

        var m_Iframe = window.frames["iframe_loading"].document;

        if (!m_Iframe) {

            m_Iframe = window.frames["iframe_loading"].contentWindow.document;

        }

        if (iframe_loading_name.window.m_part) {
            clearInterval(m_ResLoading);
            iframe_loading_name.window.SetClearInterval();
            iframe_loading_name.window.SetPartPos(num);
            //iframe_loading_name.window.SetLoop();
            m_ResLoading = 0
        } else {
            if (m_ResLoading == 0) {

                m_ResLoading = setInterval("SetLoadingPart(" + num + ")", 100);
            }
        }

    }
    function SetLoadingVisible(s_name) {//设置 进度条隐藏

        document.getElementById(s_name).style.display = 'none';
        m_VarGlobal.m_BaseSence.CreateModeChild();
      
        

    }
    function OnloadXML(arr) {

        m_VarGlobal.m_XMLWall = arr;
        m_VarGlobal.m_LoadTotal = Load_total();
        InitWebgl();



    }
    function initload() {

        document.getElementById("Div_LoadXML").innerHTML = "<iframe src='LoadXML_Standard.aspx?id=<%=m_id %>' width='0' height='0'></iframe>";

    }
</script>
<body onload="initload()" style="background-color: Gray">
<div id="webPanel"  style=" position:absolute;width:50px; height:50px; right:15%; top:5%; background-color:Gray">
    
 </div>
    <div id="webgl">
    </div>
     
    <div id="info" style="font-size: xx-large; font-family: @黑体">
        牙体测试
    </div>
    <div id="m_LoadingDiv">
        <iframe id='iframe_loading' name="iframe_loading_name" src="loading.html" width='100%'
            height='100%' frameborder='0' scrolling='no'></iframe>
    </div>
    <div id="Div_LoadXML">
    </div>
</body>
</html>
