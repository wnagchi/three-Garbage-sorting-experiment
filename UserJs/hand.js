var m_TrashObj;
function SelectExperiment() {
   
    var m_radio=document.getElementsByName('Fruit')
    for (var i = 0; i < m_radio.length; i++) {
        if (m_radio[i].checked) {
            m_VarGlobal.m_Mouse.m_ExperiStep = m_radio[i].value;
           
        }

    }
   // $('#dlg_2').dialog('close');
    if (m_VarGlobal.m_Mouse.m_ExperiStep == 1) {
        alert("开始空桶称重")
    }
    if (m_VarGlobal.m_Mouse.m_ExperiStep == 2) {
        alert("开始分拣垃圾")
    }
    if (m_VarGlobal.m_Mouse.m_ExperiStep == 3) {
        alert("开始垃圾称重")
    }

}

function Set_ToolWeigth(str) {
    
    var m_radio = document.getElementsByName('Tool_Weight');

     m_radio[0].value = str + "kg";

}
function Set_AllToolWeigth(obj) {

    var m_radio = document.getElementsByName('Tool_Weight');
    var m_cname = obj.name;
    m_TrashObj = obj;
    //alert(m_VarGlobal.m_WasteList[m_cname]);
    m_cname = m_cname.substring(m_cname.indexOf("Trash_") + 6);
   // alert(m_cname)
   // alert(obj.userData.m_info[2] + m_VarGlobal.m_WasteList[m_cname].m_Weigth);
    //   m_radio[0].value = Number(obj.userData.m_info[2]) + Number(m_VarGlobal.m_WasteList[m_cname].m_Weigth ) + "kg";
    //alert(obj.userData.m_info[2])
    var m_weight = Number(obj.userData.m_info[2]) + Number(m_VarGlobal.m_WasteList[m_cname].m_Weigth); //求出重量
   
    m_weight = m_weight.toFixed(2);
  
   // alert(m_weight);
    //var m_weight =  Number(m_VarGlobal.m_WasteList[m_cname].m_Weigth); //去皮
    //计算重量图片
    var str = m_weight.toString();
    var m_SStr = "";
    for (var i = 0; i < str.length; i++) {
        var m_char = str.substring(i, i + 1);
        // alert(m_char);
        if (m_char == '.') {
            m_char = 'p';
        }
        m_SStr += "<li style='width: 14px;height: 22px; margin-top: 7px;'><img src='mode/biaopan/" + m_char + "_03.png'></li>";

    }
    document.getElementById('Id_Tool_Weight').innerHTML = m_SStr;
    showpound(m_weight)
}
function Set_AllToolWeigthNum(num) {  

    //    var m_radio = document.getElementsByName('Tool_Weight');
    //    var m_cname = obj.name;

    //    m_cname = m_cname.substring(m_cname.indexOf("Trash_") + 6);
    //    //alert(m_cname);
    //   // alert(obj.userData.m_info[2] + m_VarGlobal.m_WasteList[m_cname].m_Weigth);
    //    //   m_radio[0].value = Number(obj.userData.m_info[2]) + Number(m_VarGlobal.m_WasteList[m_cname].m_Weigth ) + "kg";
    //    var m_weight = Number(obj.userData.m_info[2]) + Number(m_VarGlobal.m_WasteList[m_cname].m_Weigth);
   
    var str = num.toString();
    var m_SStr = "";
    for (var i = 0; i < str.length; i++) {
        var m_char = str.substring(i, i+1);
         //alert(m_char);
        if (m_char == '.') {
            m_char = 'p';
        }
        m_SStr += "<li style='width: 14px;height: 22px; margin-top: 7px;'><img src='mode/biaopan/" + m_char + "_03.png'></li>";

    }

   document.getElementById('Id_Tool_Weight').innerHTML = m_SStr;
  


}
function Set_AllToolWeigthStart() {  //开关

    //    var m_radio = document.getElementsByName('Tool_Weight');
    //    var m_cname = obj.name;

    //    m_cname = m_cname.substring(m_cname.indexOf("Trash_") + 6);
    //    //alert(m_cname);
    //   // alert(obj.userData.m_info[2] + m_VarGlobal.m_WasteList[m_cname].m_Weigth);
    //    //   m_radio[0].value = Number(obj.userData.m_info[2]) + Number(m_VarGlobal.m_WasteList[m_cname].m_Weigth ) + "kg";
    //    var m_weight = Number(obj.userData.m_info[2]) + Number(m_VarGlobal.m_WasteList[m_cname].m_Weigth);

    var str = "00.00";
    var m_SStr = "";
    for (var i = 0; i < str.length; i++) {
        var m_char = str.substring(i, i + 1);
       // alert(m_char);
        if (m_char == '.') {
            m_char = 'p';
        }
        m_SStr += "<li style='width: 14px;height: 22px; margin-top: 7px;'><img src='mode/biaopan/" + m_char + "_03.png'></li>";

    }
    document.getElementById('Id_Tool_Weight').innerHTML = m_SStr;
    document.getElementById('Id_Tool_pound').innerHTML = m_SStr;

}
var m_qupi = 0;
function Set_WeightShow() {
    if (m_TrashObj) {
       
        var m_cname = m_TrashObj.name;

        m_cname = m_cname.substring(m_cname.indexOf("Trash_") + 6);
        m_VarGlobal.m_WasteList[m_cname].m_flag = 1;
        //alert(m_TrashObj.userData.m_info[2]);
        if (m_VarGlobal.m_Mouse.m_ExperiStep == 1) {
            document.getElementById("td_Trash" + m_cname).innerText = m_TrashObj.userData.m_info[2] + "kg";
        } else if (m_VarGlobal.m_Mouse.m_ExperiStep == 3) {
            if (m_qupi == 1) {
                document.getElementById("td_grabage" + m_cname).innerText = m_VarGlobal.m_WasteList[m_cname].m_Weigth + "kg";
            } else if (m_qupi == 0) {
                document.getElementById("td_grabage" + m_cname).innerText = Number(m_TrashObj.userData.m_info[2]) + Number(m_VarGlobal.m_WasteList[m_cname].m_Weigth) + "kg";
            }
           
        }
    }
    m_qupi = 0;
}
function Set_AllToolNum() {  //去皮

    if (m_TrashObj) {
        var m_cname = m_TrashObj.name;

        m_cname = m_cname.substring(m_cname.indexOf("Trash_") + 6);
        var m_weight = Number(m_VarGlobal.m_WasteList[m_cname].m_Weigth);

        m_weight = m_weight.toFixed(2);
        var str = m_weight.toString();
        var m_SStr = "";
        for (var i = 0; i < str.length; i++) {
            var m_char = str.substring(i, i + 1);
            //alert(m_char);
            if (m_char == '.') {
                m_char = 'p';
            }
            m_SStr += "<li style='width: 14px;height: 22px; margin-top: 7px;'><img src='mode/biaopan/" + m_char + "_03.png'></li>";

        }
        document.getElementById('Id_Tool_Weight').innerHTML = m_SStr;


        showpound(m_weight);
        m_qupi = 1;
    }


}
function showpound(m_pound) {
   
    m_pound *= 2.205
    m_pound = m_pound.toFixed(2);
    var str1 = m_pound.toString();
    var m_SStr1 = "";
    for (var i = 0; i < str1.length; i++) {
        var m_char1 = str1.substring(i, i + 1);
        //alert(m_char);
        if (m_char1 == '.') {
            m_char1 = 'p';
        }
        m_SStr1 += "<li style='width: 14px;height: 22px; margin-top: 7px;'><img src='mode/biaopan/" + m_char1 + "_03.png'></li>";

    }
   // alert(m_SStr1)
    document.getElementById('Id_Tool_pound').innerHTML = m_SStr1;
}