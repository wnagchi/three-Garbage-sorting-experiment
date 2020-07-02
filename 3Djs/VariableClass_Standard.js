﻿var VariableClass = function () {

    //////类变量
    this.m_BaseSence = null; //基础场景类
    this.m_CtrlSence = null; //控制场景类
    this.m_BaseRender = null; //基础渲染类
    this.m_CtrlRender = null; //控制渲染类
    this.m_Camera = null; //镜头类
    this.m_Cameras = []; //镜头数组类
    this.m_Controls = null; //鼠标控制类
    this.m_CubeCamera = null//渲染立方体镜头
    this.m_Light = null; //光线类
    this.m_Mouse = null; //鼠标类
    this.m_Animation = null; //关键帧动画
    this.m_Tooth_ToolBar = null; //工具类
    this.m_ToothPanel_Top = null; //上边panel类
    this.m_Raycaster = null; //归一化射线
    this.m_Projector = null; //投影机
    this.m_SmallSence = null; //小场景
    this.m_NodesMaterial = null;//nodes材质类

    this.m_XMLWall = new Array(); //墙面数组   
    this.m_Psarticle = new Array(); //粒子数组   
    this.m_Light_child = new Array(); //光线
    this.m_LoadTotal = 0; //进度合计值
    this.m_LoadPart = 0; //进度分步值
    this.GoodsList = []; //模型可选数组


}
//渲染 函数
onRenderTick = function () {

    m_VarGlobal.m_BaseRender.m_Render.clear();
    m_VarGlobal.m_BaseRender.m_Render.setPixelRatio(window.devicePixelRatio);

    if (mixer) {


        mixer.update(clock.getDelta());



    }

    for (var i = 0; i < m_VarGlobal.m_Psarticle.length; i++) {

        m_VarGlobal.m_Psarticle[i].updata();
    }

    // m_VarGlobal.m_CubeCamera.rotation.copy(m_VarGlobal.m_Camera.m_Camera.rotation);
    m_VarGlobal.m_CubeCamera.rotation.copy(m_VarGlobal.m_Camera.m_Camera.rotation);
    m_VarGlobal.m_BaseRender.m_Render.render(m_VarGlobal.m_BaseSence.m_SceneCube, m_VarGlobal.m_CubeCamera);

    m_VarGlobal.m_BaseRender.m_Render.render(m_VarGlobal.m_BaseSence.m_Scene, m_VarGlobal.m_Camera.m_Camera);



    m_VarGlobal.m_Controls.update();
    if (m_VarGlobal.m_Mouse.m_Composer) {
        m_VarGlobal.m_Mouse.m_Composer.render();
    }
    if (m_VarGlobal.m_SmallSence) {
        m_VarGlobal.m_SmallSence.m_Renderer.render(m_VarGlobal.m_SmallSence.m_Scene, m_VarGlobal.m_SmallSence.m_Camera);
    }
  
    window.requestAnimationFrame(onRenderTick);

}
window.onresize = function () {

    m_VarGlobal.m_Camera.m_Camera.aspect = window.innerWidth / window.innerHeight;
    m_VarGlobal.m_Camera.m_Camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};
function SetCenterRotateX(obj, point, angle) {
  
    var geometry = new THREE.BoxGeometry(10, 10, 10); // Create a 20 by 20 by 20 cube.	  
    m_material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
  //  alert(222);
    var m_testobj = new THREE.Mesh(geometry, m_material);
    //   Obj_Add(m_testobj);
 //   m_dis.add(m_testobj);
    var m_r = obj.position.z - point.z;

    var m_z = m_r * Math.cos(Num_Radian(angle));
    var m_y = m_r * Math.sin(Num_Radian(angle));
    
    obj.position.z = m_z;

    obj.position.y = m_y;
    obj.rotateX(Num_Radian(-angle));
 //   alert(333);
    /// alert(m_z);
}
function strToHexCharCode(str) {
    if (str === "")
        return "";
    var hexCharCode = [];
    hexCharCode.push("0x");
    for (var i = 0; i < str.length; i++) {
        hexCharCode.push((str.charCodeAt(i)).toString(16));
    }
    return hexCharCode.join("");
}
function Obj_ChildSelMaterial(obj, flag) {
    //  var m_Material = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });

    obj.traverse(function (child) {

        if (child instanceof THREE.Mesh) {

           
            // child.material = m_Material;
            var m_color = child.material.color.getHexString();
           // alert(m_color);
            m_color = '0x' + hexToReverse(m_color);
            // alert(m_color);
            child.material.color.setHex(m_color);

            var m_color = child.material.ambient.getHexString();
            m_color = '0x' + hexToReverse(m_color);
            child.material.ambient.setHex(m_color);


            var m_color = child.material.emissive.getHexString();
            m_color = '0x' + hexToReverse(m_color);
            child.material.emissive.setHex(m_color);

            var m_color = child.material.specular.getHexString();
            m_color = '0x' + hexToReverse(m_color);
            child.material.specular.setHex(m_color);


        }
    })
}
function hexToReverse(h) {//hex反色  h颜色 string 类型
    var r = 0, g = 0, b = 0;
    r = 255 - parseInt(h[0], 16) * 16 - parseInt(h[1], 16);
    g = 255 - parseInt(h[2], 16) * 16 - parseInt(h[3], 16);
    b = 255 - parseInt(h[4], 16) * 16 - parseInt(h[5], 16);
    return (r < 16 ? "0" + r.toString(16).toUpperCase() : r.toString(16).toUpperCase()) + (g < 16 ? "0" + g.toString(16).toUpperCase() : g.toString(16).toUpperCase()) + (b < 16 ? "0" + b.toString(16).toUpperCase() : b.toString(16).toUpperCase());
}
//弧度 函数
function SeachObj(obj, na) {

    for (var i = 0; i < obj.children.length; i++) {
        //alert("1:" + obj.children[i].name)
        if (obj.children[i].name == na) {
            return obj.children[i];
        }
    }
    return null;
}
function Global_SeachObj(na, obj) {

    var m_obj = (obj !== undefined) ? obj : m_VarGlobal.m_BaseSence.m_dis;
   
    var m_child = null;
    m_obj.traverse(function (child) {
    
        if (child.name == na) {
           
            m_child = child;
            return;

        }
    })
  
    return m_child;
}
function Num_Radian(num) {

    return num * (Math.PI / 180)
}
function Radian_Num(num) {

    return (num * 180) / Math.PI;
}
function Obj_Add(Obj) {
    //alert(m_VarGlobal.m_BaseSence.m_dis)

    m_VarGlobal.m_BaseSence.m_dis.add(Obj);
}
function Obj_DisParent(Obj) {

    //m_VarGlobal.m_BaseSence.m_dis.add(Obj);
  //  alert(Obj.parent.name)
    if (Obj.parent.name == "Sys_Sence") {
        return Obj;
    } else {
        return Obj_DisParent(Obj.parent)
    }


}
function Obj_Parent(Obj) {

    

    return Obj.parent;
    

}
function Obj_ChildMaterial(obj, url) {
    
      obj.traverse(function (child) {
                var m_ImageObj = new Image_JPG();
                m_ImageObj.load(url);
                if (child instanceof THREE.Mesh) {
                    child.geometry.computeBoundingBox();


                  //   child.material = m_Material;

                    var texture = m_ImageObj.texture;
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                    texture.repeat.set(1, 1);
                    child.material.map = texture;
                }
            })
           
}
function Set_OrbitControls(Orbit,arr) {



    if (arr[15] >= 0) {
        Orbit.minDistance = arr[15];
    }
    if (arr[16] >= 0) {
        Orbit.maxDistance = arr[16];
    }
    if (arr[13] >= 0) {
        Orbit.minPolarAngle = Num_Radian(arr[13]);
    }
    if (arr[14] >= 0) {
        Orbit.maxPolarAngle = Num_Radian(arr[14]);
    }


    
}

function Load_total() {
    var m_total = 0;
    for (var i = 0; i < m_VarGlobal.m_XMLWall.length; i++) {
        if (m_VarGlobal.m_XMLWall[i] != "") {

            var m_arr = m_VarGlobal.m_XMLWall[i];

            if (m_arr[0] == "init") {
                if (m_arr[8] != "") {
                    m_total++;
                } 
                if (m_arr[9] != "") {
                    m_total++;
                } 
                if (m_arr[10] != "") {
                    m_total++;
                } 
                if (m_arr[11] != "") {
                    m_total++;
                }  
                if (m_arr[12] != "") {
                    m_total++;
                } 
                if (m_arr[13] != "") {
                    m_total++;
                }

            }
           
            if (m_arr[0] == "Pic" || m_arr[0] == "Wall" || m_arr[0] == "Cylinder" || m_arr[0] == "Floor" || m_arr[0] == "Mode") {
               if (m_arr[11] != "") {
                    m_total++;
                } 
            }
            
            if (m_arr[0] == "Psarticle") {
                if (m_arr[14] != "") {
               
                    m_total++;
                }
            } 
             if (m_arr[0] == "Mode") {
                if (m_arr[12] != "") {
                    
                    m_total++;
                }
            }

        }
    }
    return m_total;
}
function Set_Loading(name,type) {
    m_VarGlobal.m_LoadPart++;
  //  alert(m_VarGlobal.m_LoadPart / m_VarGlobal.m_LoadTotal)
   
    iframe_loading_name.window.draw(m_VarGlobal.m_LoadPart / m_VarGlobal.m_LoadTotal,name,type);
}
function jspost(URL, data, type, name) {//js 提交form表单数据
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


    var opt = document.createElement("textarea");

    opt.name = 'filename';

    opt.value = name;
    // alert(opt.value)
    temp.appendChild(opt);

    document.body.appendChild(temp);

    temp.submit();
    return temp;
}