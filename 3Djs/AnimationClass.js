var AnimationClass = function () {
    this.m_fps = 6;
    // this.animationGroup = new THREE.AnimationObjectGroup();
    this.m_animations = [];
    //   this.m_animationGroup = new THREE.AnimationObjectGroup();

    this.m_info = [];
    this.m_mixer;
    mixer = new THREE.AnimationMixer(m_VarGlobal.m_BaseSence.m_dis);
};
AnimationClass.prototype.init = function (mesh) {//老版本动画播放
    //    var m_AnimationArr = [];

    //    for (var i = 0; i < m_VarGlobal.m_XMLWall.length; i++) {

    //        var m_arr = m_VarGlobal.m_XMLWall[i];

    //        if (m_arr != "") {

    //            if (m_arr[0] == "Animation" && m_arr[1] == mesh.name) {
    //                //  if (m_arr[0] == "Animation") {

    //                if (m_arr[2] == ".position") {
    //                    var m_times = m_arr[3].split(",");
    //                    var m_position = m_arr[4].split(",");
    //                    var positionKF = new THREE.VectorKeyframeTrack(mesh.name + m_arr[2], m_times, m_position);
    //                    //  var positionKF = new THREE.VectorKeyframeTrack(m_arr[1] + m_arr[2], m_times, m_position);
    //                    m_AnimationArr.push(positionKF);
    //                } else if (m_arr[2] == ".scale") {
    //                    var m_times = m_arr[3].split(",");
    //                    var m_scale = m_arr[4].split(",");
    //                    var scaleKF = new THREE.VectorKeyframeTrack(mesh.name + m_arr[2], m_times, m_scale);
    //                    m_AnimationArr.push(scaleKF);
    //                } else if (m_arr[2] == ".material.color") {
    //                    var m_times = m_arr[3].split(",");
    //                    var m_color = m_arr[4].split(",");

    //                    var colorKF = new THREE.VectorKeyframeTrack(mesh.name + m_arr[2], m_times, m_color);
    //                    m_AnimationArr.push(colorKF);
    //                } else if (m_arr[2] == ".material.opacity") {
    //                    var m_times = m_arr[3].split(",");
    //                    var m_color = m_arr[4].split(",");
    //                    var opacityKF = new THREE.VectorKeyframeTrack(mesh.name + m_arr[2], m_times, m_color);
    //                    m_AnimationArr.push(opacityKF);
    //                } else if (m_arr[2] == ".quaternion") {
    //                    var m_rotation = mesh.rotation.clone();
    //                    var m_position = mesh.position.clone()

    //                    mesh.rotation.x = 0;
    //                    mesh.rotation.y = 0;
    //                    mesh.rotation.z = 0;

    //                    mesh.position.x = 0;
    //                    mesh.position.y = 0;
    //                    mesh.position.z = 0;


    //                    var m_times = m_arr[3].split(",");
    //                    var m_value = m_arr[4].split(",");
    //                    var m_Direction = m_arr[5].split(",");
    //                    var Axis = new THREE.Vector3(m_Direction[0], m_Direction[1], m_Direction[2]);
    //                    var m_Quaternion = [];
    //                    // alert(m_value);
    //                    for (var j = 0; j < m_value.length; j++) {
    //                        var m_angle = Num_Radian(Number(m_value[j]))
    //                        //alert(m_angle)
    //                        var qInitial = new THREE.Quaternion().setFromAxisAngle(Axis, m_angle);
    //                        qInitial.multiply(mesh.quaternion)
    //                        // alert(qInitial.x)
    //                        m_Quaternion.push(qInitial.x);
    //                        m_Quaternion.push(qInitial.y);
    //                        m_Quaternion.push(qInitial.z);
    //                        m_Quaternion.push(qInitial.w);
    //                    }
    //                    var m_qua = new THREE.Group();
    //                    m_qua.name = mesh.name + "_group";
    //                    m_qua.rotation.copy(m_rotation);
    //                    m_qua.position.copy(m_position);
    //                    //  m_qua.useQuaternion = true;
    //                    // m_qua.quaternion = mesh.quaternion;


    //                    // alert(m_AnimationArr[0].name)
    //                    //mesh.name += "_QueChild";



    //                    mesh.quaternion = new THREE.Quaternion();

    //                    Obj_Parent(mesh).remove(mesh);
    //                    m_qua.add(mesh);
    //                    Obj_Add(m_qua)

    //                    var quaternionKF = new THREE.QuaternionKeyframeTrack(mesh.name + m_arr[2], m_times, m_Quaternion);
    //                    m_AnimationArr.push(quaternionKF);



    //                }
    //            }

    //        }
    //    }
    //    for (var i = 0; i < m_AnimationArr.length; i++) {
    //        if (m_AnimationArr[i].name == mesh.name + ".quaternion") {
    //            //alert(m_AnimationArr[i].name);
    //            for (j = 0; j < m_AnimationArr.length; j++) {
    //                if (m_AnimationArr[j].name == mesh.name + ".position") {

    //                    m_AnimationArr[j].name = mesh.name + "_group.position"
    //                }
    //            }
    //        }
    //    }
    //    
    //    var clip = new THREE.AnimationClip('Action', this.m_fps, m_AnimationArr);

    //    this.m_animations.push(clip);


};
AnimationClass.prototype.initInfo = function () {
    for (var i = 0; i < m_VarGlobal.m_XMLWall.length; i++) {

        var m_arr = m_VarGlobal.m_XMLWall[i];

        if (m_arr != "") {
            if (m_arr[0] == "Animation") {
                //alert(m_arr[13]);

                var m_info = new AnimationInfo();

                m_info.name = m_arr[1];
                m_info.time = m_arr[13];
                m_info.Row = m_arr[14];
                m_info.Col = m_arr[15];
                m_info.x = m_arr[2];
                m_info.y = m_arr[3];
                m_info.z = m_arr[4];
                m_info.rx = m_arr[5];
                m_info.ry = m_arr[6];
                m_info.rz = m_arr[7];
               
                m_info.ScaleX = m_arr[8];
                m_info.ScaleY = m_arr[9];
                m_info.ScaleZ = m_arr[10];
                m_info.color = m_arr[11];

                m_info.opacity = m_arr[12];

                m_VarGlobal.m_Animation.m_info.push(m_info);
                //alert(m_info.rx);
                // alert(m_VarGlobal.m_AnimationPanelClass.m_AnimaObj.length);
                var m_obj = Global_SeachObj(m_info.name);

                if (m_obj) {
                    for (var j = 0; j < m_VarGlobal.m_AnimationPanelClass.m_AnimaObj.length; j++) {
                        if (m_obj == m_VarGlobal.m_AnimationPanelClass.m_AnimaObj[j]) {
                            break;
                        }
                    }

                    if (j >= m_VarGlobal.m_AnimationPanelClass.m_AnimaObj.length) {
                        m_VarGlobal.m_AnimationPanelClass.m_AnimaObj.push(m_obj);
                    }
                }
            }

        }
    }
    m_VarGlobal.m_Animation.Sys_Animation();
}
AnimationClass.prototype.Sys_CreateAnimation = function (m_info) {


    var m_AnimationArr = [];

    //////////////////////////////////////动画开始
    ////////////////位置动画
    var m_PTimes = [];
    var m_position = [];
    for (var i = 0; i < m_info.length; i++) {
        if (i > 0) {
            if (m_info[i].x == m_info[i - 1].x && m_info[i].y == m_info[i - 1].y && m_info[i].z == m_info[i - 1].z) {

                continue;
            }
        }
        //  alert(m_info[i].x)


        m_PTimes.push(m_info[i].Col / 10);
        m_position.push(m_info[i].x);
        m_position.push(m_info[i].y);
        m_position.push(m_info[i].z);

    }
    //alert(m_position)
    if (m_position.length > 3) {

        var positionKF = new THREE.VectorKeyframeTrack(m_info[0].name + ".position", m_PTimes, m_position);
        m_AnimationArr.push(positionKF);
    }

    ////////////////缩放动画
    var m_PTimes = [];
    var m_scale = [];
    for (var i = 0; i < m_info.length; i++) {
        if (i > 0) {
            if (m_info[i].ScaleX == m_info[i - 1].ScaleX && m_info[i].ScaleY == m_info[i - 1].ScaleY && m_info[i].ScaleZ == m_info[i - 1].ScaleZ) {
                continue;
            }
        }
        m_PTimes.push(m_info[i].Col / 10);
        m_scale.push(m_info[i].ScaleX);
        m_scale.push(m_info[i].ScaleY);
        m_scale.push(m_info[i].ScaleZ);

    }

    if (m_scale.length > 3) {

        var scaleKF = new THREE.VectorKeyframeTrack(m_info[0].name + ".scale", m_PTimes, m_scale);
        m_AnimationArr.push(scaleKF);

    }

    ////////////////颜色动画
    var m_PTimes = [];
    var m_color = [];
    for (var i = 0; i < m_info.length; i++) {
        if (i > 0) {
            if (m_info[i].color == m_info[i - 1].color) {
                continue;
            }
        }
        m_PTimes.push(m_info[i].Col / 10);
        var color = new THREE.Color(m_info[i].color)

        m_color.push(color.r.toFixed(2));
        m_color.push(color.g.toFixed(2));
        m_color.push(color.b.toFixed(2));

        //  alert(m_color)
    }


    if (m_color.length > 3) {
        // var obj = Global_SeachObj(m_info[0].name);
        var colorKF = new THREE.VectorKeyframeTrack(m_info[0].name + ".material.color", m_PTimes, m_color);

        m_AnimationArr.push(colorKF);

        // alert(m_color);

    }
    ////////////////透明动画

    var m_PTimes = [];
    var m_opacity = [];
    for (var i = 0; i < m_info.length; i++) {
        if (i > 0) {
            if (m_info[i].opacity == m_info[i - 1].opacity) {
                continue;
            }
        }
        m_PTimes.push(m_info[i].Col / 10);
        // alert(m_info[i].opacity)
        m_opacity.push(m_info[i].opacity);


    }
    // alert(m_AnimationArr.length)
    // alert(m_opacity)

    if (m_opacity.length > 1) {

        //   m_opacity = [1, 0.5];
        var obj = Global_SeachObj(m_info[0].name);
        var opacityKF = new THREE.VectorKeyframeTrack(m_info[0].name + ".material.opacity", m_PTimes, m_opacity);

        obj.traverse(function (child) {

            if (child instanceof THREE.Mesh) {

                var opacityKF = new THREE.VectorKeyframeTrack(child.name + ".material.opacity", m_PTimes, m_opacity);
                m_AnimationArr.push(opacityKF);

            }
        })

        //  alert(m_AnimationArr.length);
        m_AnimationArr.push(opacityKF);
    }
    //////////////////////////////////////////   旋转动画

    var obj = Global_SeachObj(m_info[0].name);
    var m_rotation = obj.rotation.clone();
    var m_position = obj.position.clone()
    // alert(obj.quaternion.x)
    obj.rotation.x = 0; // Num_Radian(Number(m_info[0].rx.toFixed(2)));
    obj.rotation.y = 0; // Num_Radian(Number(m_info[0].ry.toFixed(2)));
    obj.rotation.z = 0; // Num_Radian(Number(m_info[0].rz.toFixed(2)));

    obj.position.x = 0;
    obj.position.y = 0;
    obj.position.z = 0;
    var m_PTimes = [];
    var m_value = [];
    var m_Quaternion = [];
    //return;

    for (var i = 0; i < m_info.length; i++) {

        if (i > 0) {

            if (m_info[i].rx == m_info[i - 1].rx) {
                continue;
            }
        }

        m_PTimes.push(m_info[i].Col / 10);
        //  alert(Number(m_info[i].rx.toFixed(2)))
        var m_angle = Num_Radian(Number(m_info[i].rx.toFixed(2)))
        var Axis = new THREE.Vector3(1, 0, 0);
        var qInitial = new THREE.Quaternion().setFromAxisAngle(Axis, m_angle);




        qInitial.multiply(obj.quaternion);

        m_Quaternion.push(qInitial.x);
        m_Quaternion.push(qInitial.y);
        m_Quaternion.push(qInitial.z);
        m_Quaternion.push(qInitial.w);


    }




    if (m_Quaternion.length > 4) {

        // alert(obj.name + "_groupQX.quaternion")
        var m_quaQx = new THREE.Group();
        m_quaQx.name = obj.name + "_groupQX";
        
        if (!Global_SeachObj(m_quaQx.name)) {
            Obj_Parent(obj).remove(obj);
            m_quaQx.add(obj);
           // m_quaQx.rotation.x = Num_Radian(Number(m_info[0].rx.toFixed(2)));
            Obj_Add(m_quaQx);
        }
        // alert(m_PTimes)
        var quaternionKF = new THREE.QuaternionKeyframeTrack(obj.name + ".quaternion", m_PTimes, m_Quaternion);
        m_AnimationArr.push(quaternionKF);
       
        // obj.rotation.x = Num_Radian(Number(m_info[0].rx.toFixed(2)));
        m_quaQx.position.x = m_info[0].x;
        m_quaQx.position.y = m_info[0].y;
        m_quaQx.position.z = m_info[0].z;
        m_quaQx.rotation.x = Num_Radian(Number(m_info[0].rx.toFixed(2)));
        m_quaQx.rotation.y = Num_Radian(Number(m_info[0].ry.toFixed(2)));
        m_quaQx.rotation.z = Num_Radian(Number(m_info[0].rz.toFixed(2)));

        // obj.rotation.z = 0;// Num_Radian(Number(m_info[0].rz.toFixed(2)));


    } else {
        //   m_quaQx.rotation.x = Num_Radian(Number(m_info[0].rx.toFixed(2)));
    }
    //    /////////////////////////////////////////////////////////////////////
    var m_PTimes = [];
    var m_Quaternion = [];
    for (var i = 0; i < m_info.length; i++) {
        if (i > 0) {
            if (m_info[i].ry == m_info[i - 1].ry) {
                continue;
            }
        }
        m_PTimes.push(m_info[i].Col / 10);
        var m_angle = Num_Radian(Number(m_info[i].ry.toFixed(2)))
        var Axis = new THREE.Vector3(0, 1, 0);
        var qInitial = new THREE.Quaternion().setFromAxisAngle(Axis, m_angle);



        qInitial.multiply(obj.quaternion);
        m_Quaternion.push(qInitial.x);
        m_Quaternion.push(qInitial.y);
        m_Quaternion.push(qInitial.z);
        m_Quaternion.push(qInitial.w);


    }
    //    var m_quaQy = new THREE.Group();
    //    m_quaQy.name = obj.name + "_groupQY";
    //    if (!Global_SeachObj(m_quaQy.name)) {
    //        var m_groupobj = Global_SeachObj(m_quaQx.name);
    //        Obj_Parent(m_groupobj).remove(m_groupobj);
    //        m_quaQy.rotation.y = Num_Radian(Number(m_info[0].ry.toFixed(2)));
    //        m_quaQy.add(m_groupobj);
    //        Obj_Add(m_quaQy);
    //    }

    if (m_Quaternion.length > 4) {

        var quaternionKF = new THREE.QuaternionKeyframeTrack(obj.name + ".quaternion", m_PTimes, m_Quaternion);
        m_AnimationArr.push(quaternionKF);
        //        obj.rotation.x = Num_Radian(Number(m_info[0].rx.toFixed(2)));
        //        obj.rotation.z = Num_Radian(Number(m_info[0].rz.toFixed(2)));
        // obj.rotation.z = 0;
        // obj.rotation.y = 0;
        //        m_quaQx.rotation.x = Num_Radian(Number(m_info[0].rx.toFixed(2)));
        //        m_quaQx.rotation.z = -Num_Radian(Number(m_info[0].rz.toFixed(2)));
        //        m_quaQx.rotation.y = 0;
    } else {
        // m_quaQy.rotation.y = Num_Radian(Number(m_info[0].ry.toFixed(2)));
    }

    //    //    /////////////////////////////////////////////////////////////////////
    var m_PTimes = [];
    var m_Quaternion = [];
    for (var i = 0; i < m_info.length; i++) {
        if (i > 0) {
            if (m_info[i].rz == m_info[i - 1].rz) {
                continue;
            }
        }
        m_PTimes.push(m_info[i].Col / 10);
        var m_angle = Num_Radian(Number(m_info[i].rz.toFixed(2)))
        var Axis = new THREE.Vector3(0, 0, 1);
        var qInitial = new THREE.Quaternion().setFromAxisAngle(Axis, m_angle);

        qInitial.multiply(obj.quaternion);
        m_Quaternion.push(qInitial.x);
        m_Quaternion.push(qInitial.y);
        m_Quaternion.push(qInitial.z);
        m_Quaternion.push(qInitial.w);


    }
    //    var m_quaQz = new THREE.Group();
    //    m_quaQz.name = obj.name + "_groupQZ";
    //    if (!Global_SeachObj(m_quaQz.name)) {
    //        var m_groupobj = Global_SeachObj(m_quaQy.name);
    //        Obj_Parent(m_groupobj).remove(m_groupobj);
    //        m_quaQz.rotation.z = Num_Radian(Number(m_info[0].rz.toFixed(2)));
    //        m_quaQz.add(m_groupobj);
    //        Obj_Add(m_quaQz);
    //    }

    if (m_Quaternion.length > 4) {
        var m_quaQz = new THREE.Group();
        m_quaQz.name = obj.name + "_groupQZ";

        if (!Global_SeachObj(m_quaQz.name)) {
            Obj_Parent(obj).remove(obj);
            m_quaQz.add(obj);
            // m_quaQx.rotation.x = Num_Radian(Number(m_info[0].rx.toFixed(2)));
            Obj_Add(m_quaQz);
        }
        var quaternionKF = new THREE.QuaternionKeyframeTrack(obj.name + ".quaternion", m_PTimes, m_Quaternion);
        m_AnimationArr.push(quaternionKF);

        m_quaQz.position.x = m_info[0].x;
        m_quaQz.position.y = m_info[0].y;
        m_quaQz.position.z = m_info[0].z;
        m_quaQz.rotation.x = Num_Radian(Number(m_info[0].rx.toFixed(2)));
        m_quaQz.rotation.y = Num_Radian(Number(m_info[0].ry.toFixed(2)));
        m_quaQz.rotation.z = Num_Radian(Number(m_info[0].rz.toFixed(2)));

        //        m_quaQz.rotation.x = Num_Radian(Number(m_info[0].rx.toFixed(2)));
        //        m_quaQz.rotation.y = Num_Radian(Number(m_info[0].ry.toFixed(2)));
    } else {
        //  obj.rotation.z = Num_Radian(Number(m_info[0].rz.toFixed(2)));
    }






    ////////////////////////////////////////////

    if (m_AnimationArr.length > 0) {
        var clip = new THREE.AnimationClip('Action', m_VarGlobal.m_Animation.m_fps, m_AnimationArr);

        m_VarGlobal.m_Animation.m_animations.push(clip);
        // alert(m_VarGlobal.m_Animation.m_animations.length);
    }

    //////////////////////////////////////////////////////////////////////////////
}
AnimationClass.prototype.Sys_Animation = function () {

    m_VarGlobal.m_Animation.m_animations = [];

    //    var m_infoStart = null;
    //    var m_infoEnd = null;

    var m_infoArr = [];
    ///////////////////////////////////////////整理动画数组
    var m_row = [];

    for (var i = 0; i < m_VarGlobal.m_Animation.m_info.length; i++) {//找出动画数组行
        for (var j = 0; j < m_row.length; j++) {
            if (m_VarGlobal.m_Animation.m_info[i].Row == m_row[j]) {
                break;
            }
        }
        if (j >= m_row.length) {
            m_row.push(m_VarGlobal.m_Animation.m_info[i].Row);
        }
    }
    /////////////////////////////////////////////////////////整理动画数据
    for (var j = 0; j < m_row.length; j++) {
        var m_RowInfo = [];
        for (var i = 0; i < m_VarGlobal.m_Animation.m_info.length; i++) {
            if (m_VarGlobal.m_Animation.m_info[i].Row == m_row[j]) {
                m_RowInfo.push(m_VarGlobal.m_Animation.m_info[i])
            }
        }
        m_infoArr.push(m_RowInfo);
    }
    for (var i = 0; i < m_infoArr.length; i++) {
        if (m_infoArr[i].length > 1) {
            //alert(m_infoArr[i][0].name);
            m_VarGlobal.m_Animation.Sys_CreateAnimation(m_infoArr[i]);
        }

    }
    return;
    // alert(m_info.length);




}
var AnimationInfo = function () {

    this.name = null;
    this.time = 0;
    this.Row = 0;
    this.Col = 0;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rx = 0;
    this.rx_r = 0;
    this.ry = 0;
    this.rz = 0;
    this.ScaleX = 1;
    this.ScaleY = 1;
    this.ScaleZ = 1;
    this.color = 0xffffff;
    this.opacity = 1;


};

var AnimationPanelClass = function () {
    this.m_ShowAnimationFlag = 0;
    this.m_selPoint = [];
    // this.init();
    this.m_AnimationLength = 60;
    this.m_AnimaObj = [];
    this.m_SelObj = null;
    this.m_clipAction = [];
};
AnimationPanelClass.prototype.OnClickDelelte = function (row) {

    var name = document.getElementById("Anima_name_" + row).innerHTML;
    if (confirm("确认删除选择动画图层(" + name + ")") == true) {


        for (var i = 0; i < m_VarGlobal.m_Animation.m_info.length; i++) {//找出动画数组行
            if (m_VarGlobal.m_Animation.m_info[i].name == name) {
                m_VarGlobal.m_Animation.m_info.splice(i, 1);
                i--;
            }
        }
        for (var i = 0; i < m_VarGlobal.m_AnimationPanelClass.m_AnimaObj.length; i++) {//找出动画数组行
            if (m_VarGlobal.m_AnimationPanelClass.m_AnimaObj[i].name == name) {
                m_VarGlobal.m_AnimationPanelClass.m_AnimaObj.splice(i, 1);
                i--;
            }
        }
        m_VarGlobal.m_Animation.Sys_Animation();

        m_VarGlobal.m_AnimationPanelClass.init();
        for (var i = 0; i < m_VarGlobal.m_AnimationPanelClass.m_clipAction.length; i++) {
            m_VarGlobal.m_AnimationPanelClass.m_clipAction[i].stop();
        }
        m_VarGlobal.m_AnimationPanelClass.m_clipAction = [];
    }
}
AnimationPanelClass.prototype.SetGridRow = function (point1, point2) {
    document.getElementById("" + point1[0] + point1[1]).style.background = "#dddd00";
    for (var i = point1[1] + 1; i < point2[1]; i++) {
        document.getElementById("" + point1[0] + i).style.background = "#888800";
    }
    // document.getElementById("" + point2[0] + point2[1]).style.background = "#008800";
}
AnimationPanelClass.prototype.SeachGridRow = function (row, point) {

    var m_arr = [];

    for (var i = 0; i < point.length; i++) {//清除连接效果
        if (point[i].Row == row) {
            m_arr.push([point[i].Row, point[i].Col]);
        }
    }

    for (var i = 0; i <= this.m_AnimationLength * 10 + 9; i++) {
        if (i % 10 == 0) {
            document.getElementById("" + row + i).style.background = "#888888";
        } else {
            document.getElementById("" + row + i).style.background = "#ffffff";
        }
    }
    for (var i = 0; i < m_arr.length; i++) {
        //alert(i);
        document.getElementById("" + m_arr[i][0] + m_arr[i][1]).style.background = "#dddd00";
        if (m_arr[i + 1]) {
            m_VarGlobal.m_AnimationPanelClass.SetGridRow(m_arr[i], m_arr[i + 1]);
        }
    }
}
AnimationPanelClass.prototype.OnClickDel = function (obj, row, col) {


    var m_info = m_VarGlobal.m_Animation.m_info;

    for (var i = 0; i < m_info.length; i++) {//取消选择

        if (m_info[i].Row == row && m_info[i].Col == col) {
            // alert(row + "|" + col / 10);
            //  var obj = Global_SeachObj("Import_face.zlf");
            if (confirm("确认删除选择动画(" + obj.name + "-" + col / 10 + "秒)") == true) {


                if (m_info[i].Col % 10 == 0) {
                    document.getElementById("" + row + col).style.background = "#888888";
                } else {
                    document.getElementById("" + row + col).style.background = "#ffffff";
                }
                m_VarGlobal.m_Animation.m_info.splice(i, 1);
                m_VarGlobal.m_Animation.Sys_Animation();
                m_VarGlobal.m_AnimationPanelClass.SeachGridRow(row, m_info);

            }
            return false;
        }
    }
    return true

    // m_VarGlobal.m_AnimationPanelClass.m_selPoint.push(m_arr);
}
AnimationPanelClass.prototype.ObjectInit = function (obj) {///设置动画模型初始状态

    for (var i = 0; i < m_VarGlobal.m_Animation.m_info.length; i++) {

        if (m_VarGlobal.m_Animation.m_info[i].name == obj.name) {


            var m_info = m_VarGlobal.m_Animation.m_info[i];

            obj.position.x = m_info.x;
            obj.position.y = m_info.y;
            obj.position.z = m_info.z;
            obj.rotation.x = m_info.rx;
            obj.rotation.y = m_info.ry;
            obj.rotation.z = m_info.rz;

            obj.scale.x = m_info.ScaleX;
            obj.scale.y = m_info.ScaleY;
            obj.scale.z = m_info.ScaleZ;
            var m_color = m_info.color;


            obj.material.color = new THREE.Color(m_color);

            obj.material.opacity = m_info.opacity;
            obj.traverse(function (child) {
                // alert(child.name);
                if (child instanceof THREE.Mesh) {
                    child.material.color = obj.material.color;
                    child.material.opacity = obj.material.opacity;

                }
            })
            break;
        }
    }

}
AnimationPanelClass.prototype.ConnectAnimation = function (m_info) {

    for (var i = 0; i < m_VarGlobal.m_Animation.m_info.length; i++) {//动画连接效果

        if (m_VarGlobal.m_Animation.m_info[i].Row == m_info.Row && m_VarGlobal.m_Animation.m_info[i].Col < m_info.Col) {
            // alert(123);
            var m_start = [m_VarGlobal.m_Animation.m_info[i].Row, m_VarGlobal.m_Animation.m_info[i].Col];
            var m_arr = [m_info.Row, m_info.Col]
            m_VarGlobal.m_AnimationPanelClass.SetGridRow(m_start, m_arr);
        }
    }

    document.getElementById("" + m_VarGlobal.m_GuiClass.m_AnimationRow + m_VarGlobal.m_GuiClass.m_AnimationCol).style.background = "#dddd00";

    m_VarGlobal.m_Animation.Sys_Animation();
}
AnimationPanelClass.prototype.OnClickTime = function (row, col) {

    if (row == 0) {
        return;
    }
    //  var m_arr = [row, col];

    var name = document.getElementById("Anima_name_" + row).innerHTML;

    var obj = Global_SeachObj(name);
    m_VarGlobal.m_AnimationPanelClass.m_SelObj = obj;
    if (!obj) {
        m_VarGlobal.m_Error.Info('NullObj');
        return;
    }
    if (!isChinese(obj.name)) {
        alert("模型名中有汉字,不能生产动画");
        return;
    }
    var m_delflag = m_VarGlobal.m_AnimationPanelClass.OnClickDel(obj, row, col)
    if (!m_delflag) {
        return;
    }



    m_VarGlobal.m_GuiClass.SetInitAnimation(obj, row, col);

    m_VarGlobal.m_GuiClass.m_Animation.open();
    document.getElementById("" + row + col).style.background = "#008800";


}
AnimationPanelClass.prototype.OnAddLayer = function () {//添加动画图层
    // alert(333);
    if (!m_VarGlobal.m_Mouse.m_SelOldObject) {
        // alert("未选择模型");

        m_VarGlobal.m_Error.Info('NullObj');

        return;
    }
    var m_obj = m_VarGlobal.m_Mouse.m_SelOldObject;

    m_VarGlobal.m_AnimationPanelClass.m_AnimaObj.push(m_obj);
    m_VarGlobal.m_AnimationPanelClass.init();

}
AnimationPanelClass.prototype.OnPlayLayer = function (row) {//播放动画 row 图层编号
    //alert(num);
    //    alert(m_VarGlobal.m_Animation.m_animations);


    if (document.getElementById("play_button_" + row).innerHTML == "播放") {
        document.getElementById("play_button_" + row).innerHTML = "停止";

        var name = document.getElementById("Anima_name_" + row).innerHTML;
        for (var i = 0; i < m_VarGlobal.m_Animation.m_animations.length; i++) {//播放动画


            //alert(m_VarGlobal.m_Animation.m_animations[i].tracks[0].name);
            if (row == 0) {
                var clipAction = mixer.clipAction(m_VarGlobal.m_Animation.m_animations[i]);
                clipAction.play();
                m_VarGlobal.m_AnimationPanelClass.m_clipAction.push(clipAction);

            } else {
                for (var j = 0; j < m_VarGlobal.m_Animation.m_animations[i].tracks.length; j++) {
                    var m_name = m_VarGlobal.m_Animation.m_animations[i].tracks[j].name;

                    if (m_name.indexOf(name) != -1) {

                        var clipAction = mixer.clipAction(m_VarGlobal.m_Animation.m_animations[i]);

                        clipAction.play();
                        m_VarGlobal.m_AnimationPanelClass.m_clipAction.push(clipAction);
                    }
                }


            }
        }
    } else {
        document.getElementById("play_button_" + row).innerHTML = "播放";
        for (var i = 0; i < m_VarGlobal.m_AnimationPanelClass.m_clipAction.length; i++) {
            m_VarGlobal.m_AnimationPanelClass.m_clipAction[i].stop();

        }
        // var m_obj = Global_SeachObj("Tube001");

        // alert(m_obj.material.opacity);
        m_VarGlobal.m_AnimationPanelClass.m_clipAction = [];

        for (var j = 0; j < m_VarGlobal.m_AnimationPanelClass.m_AnimaObj.length; j++) {//检测材质透明度 非法值
            var obj = m_VarGlobal.m_AnimationPanelClass.m_AnimaObj[j];
            if (!obj.material.opacity) {
                var m_opacity = 1;
                for (var i = 0; i < m_VarGlobal.m_Animation.m_info.length; i++) {
                    if (obj.name == m_VarGlobal.m_Animation.m_info[i].name) {

                        m_opacity = m_VarGlobal.m_Animation.m_info[i].opacity;
                        break;
                    }
                }

                obj.material.opacity = m_opacity;
                obj.traverse(function (child) {
                    // alert(child.name);
                    if (child instanceof THREE.Mesh) {
                        //   child.material.color = obj.material.color;
                        child.material.opacity = m_opacity;

                    }
                })
            }
            //alert(m_obj.material.opacity);
        }

    }







    // clipAction.stop();
}
AnimationPanelClass.prototype.init = function () {


    if (m_VarGlobal.m_AnimationPanelClass.m_ShowAnimationFlag) {

        document.getElementById("Div_Animation").style.display = "";
        var m_str = "<table border=1>";
        ///////////标题
        m_str += "<tr ><td><div id='Anima_name_0' style='width:180px;overflow:auto;'>模型名称</div></td><td><div style='width:30px;overflow:auto;' Onclick='m_VarGlobal.m_AnimationPanelClass.OnPlayLayer(0)'><a id='play_button_0' href='#'>播放</a></div></td><td><div style='width:30px;overflow:auto;' Onclick='m_VarGlobal.m_AnimationPanelClass.OnAddLayer()'><a href='#'>添加</a></div></td>";
        for (var i = 0; i <= this.m_AnimationLength * 10 + 9; i++) {


            if (i % 10 == 0) {
                m_str += "<td  style=' background-color:#888888;' Onclick='m_VarGlobal.m_AnimationPanelClass.OnClickTime(0," + i + ")' >";

                m_str += "<div style='width:15px;'>" + (i / 10) + "</div>";
            } else {
                m_str += "<td  style='width:15px; background-color:#eeeeee;' Onclick='m_VarGlobal.m_AnimationPanelClass.OnClickTime(0," + i + ")'>";
                m_str += "<div style='width:15px;'></div>";
            }
            m_str += "</td>";
        }
        m_str += "</tr>";
        m_str += "</table>";
        m_str += "<table border=1>";
        ///////////内容
        for (var j = 0; j < m_VarGlobal.m_AnimationPanelClass.m_AnimaObj.length; j++) {

            m_str += "<tr ><td><div id='Anima_name_" + (j + 1) + "' style='width:180px;'>" + m_VarGlobal.m_AnimationPanelClass.m_AnimaObj[j].name + "</div></td><td><div  style='width:30px;overflow:auto;' Onclick='m_VarGlobal.m_AnimationPanelClass.OnPlayLayer(" + (j + 1) + ")'><a id='play_button_" + (j + 1) + "' href='#'>播放</a></div></td><td><div style='width:30px;overflow:auto;'><a Onclick='m_VarGlobal.m_AnimationPanelClass.OnClickDelelte(" + (j + 1) + ")'>删除</a></div></td>";
            for (var i = 0; i <= this.m_AnimationLength * 10 + 9; i++) {


                if (i % 10 == 0) {
                    m_str += "<td id='" + (j + 1) + i + "' width='15px' style=' background-color:#888888;' Onclick='m_VarGlobal.m_AnimationPanelClass.OnClickTime(" + (j + 1) + "," + i + ")' >";
                    m_str += "<div style='width:15px;'>" + (i / 10) + "</div>";
                } else {
                    m_str += "<td id='" + (j + 1) + i + "' width='15px' style=' background-color:#ffffff;' Onclick='m_VarGlobal.m_AnimationPanelClass.OnClickTime(" + (j + 1) + "," + i + ")'>";
                    m_str += "<div style='width:15px;'></div>";
                }

                m_str += "</td>";
            }

            m_str += "</tr>";
        }

        m_str += "</table>";

        document.getElementById("Div_Animation").innerHTML = m_str;


    } else {
        document.getElementById("Div_Animation").style.display = "none";
    }

    //document.getElementById("Div_Save").innerHTML = "<iframe src='admin\\XMLFile\\FileList.aspx?filetype=" + type + "' width='900' height='700'></iframe>";
    m_VarGlobal.m_AnimationPanelClass.initGrid();
}
AnimationPanelClass.prototype.initGrid = function () {
    var m_infoArr = [];
    ///////////////////////////////////////////整理动画数组
    var m_row = [];

    for (var i = 0; i < m_VarGlobal.m_Animation.m_info.length; i++) {//找出动画数组行
        for (var j = 0; j < m_row.length; j++) {
            if (m_VarGlobal.m_Animation.m_info[i].Row == m_row[j]) {
                break;
            }
        }
        if (j >= m_row.length) {
            m_row.push(m_VarGlobal.m_Animation.m_info[i].Row);
        }
    }
    // alert(m_row);
    /////////////////////////////////////////////////////////整理动画数据
    for (var j = 0; j < m_row.length; j++) {
        var m_RowInfo = [];
        for (var i = 0; i < m_VarGlobal.m_Animation.m_info.length; i++) {
            if (m_VarGlobal.m_Animation.m_info[i].Row == m_row[j]) {
                m_RowInfo.push([m_VarGlobal.m_Animation.m_info[i].Row, m_VarGlobal.m_Animation.m_info[i].Col])
            }
        }
        m_infoArr.push(m_RowInfo);
    }
    for (var i = 0; i < m_infoArr.length; i++) {

        var m_arr = m_infoArr[i];
        for (var j = 0; j < m_arr.length; j++) {
            //   alert(m_arr[j]);

            var m_end = [m_arr[j][0], m_arr[j][1]];
            if (j > 0) {
                var m_start = [m_arr[j - 1][0], m_arr[j - 1][1]];
                m_VarGlobal.m_AnimationPanelClass.SetGridRow(m_start, m_end);
            }
            document.getElementById("" + m_arr[j][0] + m_arr[j][1]).style.background = "#dddd00";
        }



    }

}