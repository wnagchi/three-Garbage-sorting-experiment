var m_AllocateArr = new Array();
var m_GarbageWeight = 100;
var m_Continuous = 0;
var m_oldCameraPos = new THREE.Vector3(0, 0, 0); //旧的Camera位置

var m_InterNumCamera = 0; //Camera时间参数

var m_RollplugAlignNum = 5; //滚塞角度
var m_RollplugSpeedNum = 20; //滚塞速度

var m_RollerAlignNum = 6; //滚桶角度
var m_RollerSpeedNum = 20; //滚桶速度
var m_WindspeedNum = 24; //风速
var m_SysJson = null;
function Allocate_Garbage() {
    var m_total = 100;
    var m_part_step = 10;
    var m_GarbageTotal = 0;
    var m_Max = m_total / m_part_step;
    var m_Min = m_Max / 2;
    var m_Surplus=0
    for (var i = 0; i < 9; i++) {

        m_AllocateArr[i] = Math.floor(Math.random() * m_Min + (m_Max - m_Min + m_Surplus));
        m_Surplus += m_Max - m_AllocateArr[i];
        m_total -= m_AllocateArr[i];
        m_GarbageTotal += m_AllocateArr[i];
        
      //  alert(document.getElementsByName("Garbage_Part_" + i)[0].value);
        document.getElementsByName("Garbage_Part_"+i)[0].value = m_AllocateArr[i]+"%";
    }
    document.getElementsByName("Garbage_Part_9")[0].value = (100 - m_GarbageTotal) + "%";
    m_GarbageWeight = Math.floor(Math.random() * 100 + 1000);
    document.getElementsByName("Garbage_Part_10")[0].value = m_GarbageWeight + "kg";
  //  alert(m_GarbageTotal);
}
function Allocate_OnEnter() {
    var m_sel = document.getElementsByName("Fruit");

    for (var i = 0; i < m_sel.length; i++) {
        
        if (m_sel[i].checked ) {
           
            if (m_sel[i].value == 1) {
                Hand_Garbage();
            } else if (m_sel[i].value == 2) {
                     Hand_Garbage();
             
            } else {
                $('#dlg_2').dialog('close');
            }
        }
    }

}
function Hand_Garbage() {
    var m_total = 0;
    var m_GarbageArray = new Array();
    var m_GarbageAllArray = new Array();
    for (var i = 0; i < 10; i++) {// 接收 分配百分值
        var m_part = document.getElementsByName("Garbage_Part_" + i)[0].value;
       
        m_GarbageArray[i] = Number(m_part.replace("%", ""));
        m_total += m_GarbageArray[i];
        var m_name = document.getElementById("Garbage_name_" + i).innerHTML;
     // alert(m_name)
        var m_arr = new Array(m_name, m_GarbageArray[i]);
        m_GarbageAllArray.push(m_arr);
    }
   // alert(m_total);
    if (m_total != 100) {
        alert("输入百分比合计值不等于100,请重新输入");
        return;
    }
    m_GarbageWeight = document.getElementsByName("Garbage_Part_10")[0].value;
    if (document.getElementsByName("Continuous")[0].checked) {
        m_Continuous = document.getElementsByName("Garbage_Part_11")[0].value;
       // alert(m_Continuous);
        m_Continuous = Number(m_Continuous.replace("小时", ""));
      //  alert(m_Continuous);
    }
    $('#dlg_2').dialog('close');
   // alert(m_GarbageAllArray)
    m_InterNumHand_Garbage = setTimeout(Hand_GarbageTime, 100, m_GarbageAllArray, m_GarbageWeight, 0);
}

var m_InterNumHand_Garbage = 0;
function Hand_GarbageTime(arr, weight, type) { //分配 百分比设置
  
    weight = Number(weight.replace("kg", ""))
   
    var m_json = [];
    var m_Garbage = { type: "Garbage", weight: weight, GarbageArr: arr };
    m_json.push(m_Garbage);
    //滚塞分拣范围86.66-89.67 (0.005=(89.67-89.66)/2  3=8-5  10=30-20)
    var m_RpAlignNum = m_RollplugAlignNum - 5;
    m_RpAlignNum = (Math.abs(m_RpAlignNum) / 3) * 0.005;
    //alert(m_RpAlignNum)

    var m_RpSpeedNum = m_RollplugSpeedNum - 20;
    m_RpSpeedNum = (Math.abs(m_RpSpeedNum) / 10) * 0.005;
    var m_partNum = (89.67 - m_RpAlignNum - m_RpSpeedNum) / 100;
    var m_plug = { type: "plug", Align: m_RollplugAlignNum, Speed: m_RollplugSpeedNum, part: m_partNum };
    m_json.push(m_plug);
   
    //滚塞分拣范围82.12	-75.15 (3.5=(82.12-75.15)/2  6=12-6  10=30-20)
   
    var m_RsAlignNum = m_RollerAlignNum - 6;
    m_RsAlignNum = (Math.abs(m_RsAlignNum) / 6) * 3.5;


    

    var m_RsSpeedNum = m_RollerSpeedNum - 20;
    m_RsSpeedNum = (Math.abs(m_RsSpeedNum) / 10) * 3.5;
    var m_partNum = (82.12 - m_RsAlignNum - m_RsSpeedNum) / 100;
    var m_plug = { type: "Roller", Align: m_RollerAlignNum, Speed: m_RollerSpeedNum, part: m_partNum };
    m_json.push(m_plug);



    //风机分拣范围93.26-80.47 (3.5=(93.26-80.47)/2  3=8-5  10=34-18)

    var m_WsSpeedNum = m_WindspeedNum - 24;
    m_WsSpeedNum = (Math.abs(m_WsSpeedNum) / 8) * 12.8;
    var m_partNum = (93.26 - m_WsSpeedNum) / 100;

   // alert(44);
    var m_plug = { type: "Wind", Align: m_WindspeedNum, Speed: m_WindspeedNum, part: m_partNum };
    m_json.push(m_plug);
   
    m_VarGlobal.m_ToothPanel_Top.SetArrow(false);
    m_SysJson = m_json;
    setTimeout(TimeOut,5000)
    

    // alert(123);
   
   // window.open("think.aspx"); 


}
function TimeOut(m_json) {
   
    jspost('results_mechanical.aspx', JSON.stringify(m_SysJson), "_blank");
}
function jspost(URL, data, type) {//js 提交form表单数据

    var temp = document.createElement("form");
    temp.action = URL;
    temp.method = "post";
    temp.style.display = "none";
    temp.target = type;
    var opt = document.createElement("textarea");

    opt.name = 'data';

    opt.value = data;
    // alert(opt.value)
    temp.appendChild(opt);

    document.body.appendChild(temp);

    temp.submit();
    return temp;
}
var m_PsarticleSwitchBool = true;
function OnPsarticleSwitch() {//切换粒子效果

    for (var i = 0; i < m_VarGlobal.m_XMLWall.length; i++) {//变量所有 ＸＭＬ文件配置
        if (m_VarGlobal.m_XMLWall[i] != "") {
            var m_arr = m_VarGlobal.m_XMLWall[i];

            if (m_arr[0] == "Psarticle") {
                var m_obj = SeachObj(m_VarGlobal.m_BaseSence.m_dis, m_arr[1]);
                if (m_obj) {

                    var m_str = m_arr[14];
                    if (m_PsarticleSwitchBool) {
                        var m_firststr = m_str.substring(0, m_str.indexOf(".png"));
                        m_str = m_firststr + "_Arrow.png"//粒子在相同文件夹下必须有个对应的 Arrow图片文件 （1-4.png 对应 1-4"_Arrow.png）
                        m_PsarticleSwitchBool = false;
                        // alert(m_firststr);
                    } else {
                        m_PsarticleSwitchBool = true;
                    }

                    var texture = THREE.ImageUtils.loadTexture(m_str); //加载图片 m_str 图片路径
                    m_obj.material.map = texture; //图片复制给obj 对象 material 材质
                    // alert(m_material.map);


                }

            }

        }
    }
}

function onChangeContinuous() {
    //alert(document.getElementsByName("Continuous")[0].checked);
    if (document.getElementsByName("Continuous")[0].checked) {
        document.getElementsByName("Garbage_Part_11")[0].disabled = "";
    } else {
        document.getElementsByName("Garbage_Part_11")[0].disabled = "disabled";
    }
}

function RollplugMenu() {

   // $('#dlg_4').dialog('open');
    $('#dlg_Mark').dialog('open'); //打开介绍对话框
    Setdlg_Mark(1); //设置介绍对话框
    //alert(SeachObj(m_VarGlobal.GoodsList, "t_Rollplug"));
    var m_obj = Global_SeachObj("t_Rollplug");
  
    if (m_obj) {
       // m_VarGlobal.m_Controls.center = m_obj.position;
        //  m_VarGlobal.m_Camera.m_Camera.position = new THREE.Vector3(m_initArr[2], m_initArr[3], m_initArr[4]);
        m_oldCameraPos.x = 654;
        m_oldCameraPos.y = 83;
        m_oldCameraPos.z = 157;

        m_InterNumCamera = setInterval(moveCamera, 100, 0);
        //alert(m_obj.userData.m_Animation_Radian)
       m_obj.userData.m_Animation_Radian.Clear_SetInterval();
    }
}

function Setdlg_Mark(num) {
    if (num == 1) {
        $('#dlg_Mark').dialog('setTitle', '滚筛介绍');
        document.getElementById("dlg_Mechanical_Mark").innerHTML = "<font face='黑体' size=3>滚筛：尺寸：4cm*4cm 电动机经减速机与滚筒装置通过联轴器连接在一起，驱动滚筒装置绕其轴线转动.<br>&nbsp&nbsp当物料进入滚筒装置后，由于滚筒装置的转动，使筛面上的物料翻转与滚动，使尺寸合格的垃圾经滚筒后端底部的出料口排出，不符合尺寸的垃圾经滚筒尾部的排料口排出.<br>&nbsp&nbsp由于物料在滚筒内的翻转、滚动，使卡在筛孔中的物料可被弹出，防止筛孔堵塞.</font>";
    }
    if (num == 2) {
        $('#dlg_Mark').dialog('setTitle', '滚筒介绍');
        document.getElementById("dlg_Mechanical_Mark").innerHTML = " <font face='黑体' size=3>滚筒: 转速分为为13 rad/min~21 rad/min，滚筒直径100cm，长度100cm处理量450kg/h;<br>&nbsp&nbsp 物料从高处下落的过程中，由于受到阻碍，本身具有一定的惯性，因此会有不同的运动趋势，当落料位置与滚筒中心不重合，由于滚筒的原理是根据物料密度不同利用重力作用分选出不可利用的重质量物料，对于重质物料，在滚筒表面胶皮的弹性作用下，反弹力较强，这样可以直接落入重质输料皮带，而轻质物料，反弹力较小，在滚筒转动摩擦力带动下，会落入另一侧的轻质物料输料皮带，滚筒的转速成为影响物料分选效率的重要因素. </font>";

    }
    if (num == 3) {
        $('#dlg_Mark').dialog('setTitle', '风机介绍');
        document.getElementById("dlg_Mechanical_Mark").innerHTML = "<font face='黑体' size=3>风机:不同密度的城市生活垃圾颗粒在空气中运动时，所受阻力的大小是不一样的.<br>&nbsp&nbsp 因此，不同颗粒在空气中自由下落的速度也是不同的。颗粒的密度越大，沉降速度就越大，反之则小。风机的风速较低的时候，一些轻质物料可能无法从混合物料中分离出去，达不到破坏结合力的极限，影响轻质物料的分离；当风机的转速过高的时候，由于部分的重质的物料可能被高热值的轻质物料携带到风流中，从而也会影响分选效率，改变风机的风速，分选效果有着显著的变化.</font> ";

    }
}






function RollerMenu() {
   // $('#dlg_5').dialog('open');
    $('#dlg_Mark').dialog('open'); //打开介绍对话框
    Setdlg_Mark(2); //设置介绍对话框
    //alert(SeachObj(m_VarGlobal.GoodsList, "t_Rollplug"));
    var m_obj = Global_SeachObj("t_Roller");
   
    if (m_obj) {
       
       // m_VarGlobal.m_Controls.center = m_obj.position;

        m_oldCameraPos.x = 4;
        m_oldCameraPos.y = -214;
        m_oldCameraPos.z = 1268;
       
        m_InterNumCamera = setInterval(moveCamera, 90, 0);
        //alert(m_obj.userData.m_Animation_Radian)
        m_obj.userData.m_Animation_Radian.Clear_SetInterval();
    }
}
function WindMenu() {
   // $('#dlg_6').dialog('open');
    $('#dlg_Mark').dialog('open'); //打开介绍对话框
    Setdlg_Mark(3); //设置介绍对话框
    //alert(SeachObj(m_VarGlobal.m_BaseSence.m_dis, "t_Roller"));
    var m_obj = Global_SeachObj("tWind");

    if (m_obj) {
        //m_VarGlobal.m_Controls.center = m_obj.position;

        m_oldCameraPos.x = -344;
        m_oldCameraPos.y = 89;
        m_oldCameraPos.z = 12;
       //ss alert(444);
        m_InterNumCamera = setInterval(moveCamera, 90, 0);
        //alert(m_obj.userData.m_Animation_Radian)
        m_obj.userData.m_Animation_Radian.Clear_SetInterval();
    }
}

function RollerWindspeedMove(pos) {//风速设置

    var m_obj = SeachObj(m_VarGlobal.m_BaseSence.m_dis, "tWind");
    if (m_obj) {
        m_WindspeedNum = pos;

       // m_obj.position.x += pos - 6;


    }
}
function RollerMove(pos) {//滚筒移动
  
    var m_obj = SeachObj(m_VarGlobal.m_BaseSence.m_dis, "t_Roller");
    if (m_obj) {
        m_RollerAlignNum = pos;
        m_obj.position.x += pos - 6;
       

    }
}


function RollplugAlign(num) {//滚塞角度
    var m_obj = SeachObj(m_VarGlobal.m_BaseSence.m_dis, "t_Rollplug");

    if (m_obj) {
        m_obj.rotateZ(Num_Radian(num - m_RollplugAlignNum));
        m_RollplugAlignNum += num - m_RollplugAlignNum;

    }

}

function RollplugSpeed(num) {//滚塞速度
    var m_obj = SeachObj(m_VarGlobal.m_BaseSence.m_dis, "t_Rollplug");

    if (m_obj) {
        m_obj.userData.m_Animation_Radian.Clear_SetInterval();
        m_RollplugSpeedNum = num;
      
        m_obj.userData.m_Animation_Radian.ReSeachNode(m_obj, "x", num);

    }

}
function RollerSpeed(num) {//滚筒速度
    var m_obj = SeachObj(m_VarGlobal.m_BaseSence.m_dis, "t_Roller");

    if (m_obj) {
        m_obj.userData.m_Animation_Radian.Clear_SetInterval();
        m_RollerSpeedNum = num;
        m_obj.userData.m_Animation_Radian.ReSeachNode(m_obj, "x", num);

    }

}
function moveCamera(part) {

    clearInterval(m_InterNumCamera);



    var m_px = ((m_VarGlobal.m_Controls.object.position.x) - (m_oldCameraPos.x)) / 10
    var m_py = ((m_VarGlobal.m_Controls.object.position.y) - (m_oldCameraPos.y)) / 10;
    var m_pz = ((m_VarGlobal.m_Controls.object.position.z) - (m_oldCameraPos.z)) / 10;

    m_VarGlobal.m_Controls.object.position.x -= m_px;
    m_VarGlobal.m_Controls.object.position.y -= m_py;
    m_VarGlobal.m_Controls.object.position.z -= m_pz;
    m_VarGlobal.m_Controls.update();




    if (part >= 10) {
        m_VarGlobal.m_Controls.object.position.copy(m_oldCameraPos);
        m_VarGlobal.m_Controls.update();
        return;
    }
    m_InterNumCamera = setInterval(moveCamera, 100, part + 1)

}