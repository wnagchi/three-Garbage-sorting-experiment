var EnamelObj = function () {//派生类

    ToothObj.call(this);
    this.m_Pos = new THREE.Vector3(0, 0, 0); //位置
    this.m_Sacle = new THREE.Vector3(1, 1, 1); //缩放
    this.m_Rotate = new THREE.Vector3(45, 0, 0); //旋转

};

EnamelObj.prototype = Object.create(ToothObj.prototype);

EnamelObj.prototype.initTooth = function (json) {//初始化创建，json参数///圆柱
    this.arr_geometry = new THREE.Geometry(); //存储点数组
    this.arr_mr = new Array(); //存储半径数组
    this.m_r = json.init.Tooth[0]; //半径
    this.m_h = json.init.Tooth[1]; //行高
    this.m_JMax = json.init.Tooth[2]; //行数
    this.m_IMax = json.init.Tooth[3]; //列数
    this.m_Pos = new THREE.Vector3(json.init.Tooth[6][0], json.init.Tooth[6][1], json.init.Tooth[6][2]); //位置
    this.m_Sacle = new THREE.Vector3(json.init.Tooth[7][0], json.init.Tooth[7][1], json.init.Tooth[7][2]); //缩放
    this.m_Rotate = new THREE.Vector3(json.init.Tooth[8][0], json.init.Tooth[8][1], json.init.Tooth[8][2]); //旋转
    for (var j = 0; j < this.m_JMax; j++) {//创建圆柱
        var m_jr = this.m_r;
        this.arr_mr.push(m_jr);
        for (var r_i = 0; r_i < json.init.r.length; r_i++) {//设置半径
            this.Row_r(json.init.r[r_i][0], json.init.r[r_i][1]);
        }
        m_jr = this.arr_mr[j];
        for (var i = 0; i < this.m_IMax + 1; i++) {
            var m_pos = new THREE.Vector3(0, 0, 0);
            m_pos.x = (m_jr) * Math.sin(Num_Radian((i / this.m_IMax) * 360));
            m_pos.y = -j * this.m_h;
            m_pos.z = (m_jr) * Math.cos(Num_Radian((i / this.m_IMax) * 360));
            this.arr_geometry.vertices.push(m_pos);
        }
    }
    this.CreateFaces(json.init.Tooth[4], json.init.Tooth[5]); //创建面
    for (var row_i = 0; row_i < json.init.row.length; row_i++) {//移动行
        this.MoveLine_row(json.init.row[row_i][0], json.init.row[row_i][1], json.init.row[row_i][2], json.init.row[row_i][3], json.init.row[row_i][4], json.init.row[row_i][5]);
    }
    for (var col_i = 0; col_i < json.init.col.length; col_i++) {//移动列
        this.MoveLine_col(json.init.col[col_i][0], json.init.col[col_i][1], json.init.col[col_i][2], json.init.col[col_i][3], json.init.col[col_i][4], json.init.col[col_i][5]);
    }
    for (var point_i = 0; point_i < json.init.point.length; point_i++) {//移动点
        this.pointNumCode(json.init.point[point_i][0], json.init.point[point_i][1], json.init.point[point_i][2], json.init.point[point_i][3], json.init.point[point_i][4], json.init.point[point_i][5], json.init.point[point_i][6]);
    }
    for (var face_i = 0; face_i < json.init.face.length; face_i++) {//移动面
        this.MoveFace(json.init.face[face_i][0], json.init.face[face_i][1], json.init.face[face_i][2], json.init.face[face_i][3], json.init.face[face_i][4], json.init.face[face_i][5]);
    }

    ////////////////////移动////////////////////
    //this.pointNumCode(0, 0, 0, 0, 0);//计算点编号移动



    //////////////////显示与隐藏////////////////////
    //this.VisibleFace(true);//显示隐藏面
    //this.RemoveFace();//移除面
   // this.ShowLine(); //显示线
    //this.RemoveLine()//移除线
    //this.ShowCode(0, 4); //显示点编号
    ////////////////////位置缩放旋转////////////////////
    this.SetPostion(this.m_Pos);
    this.SetSacle(this.m_Sacle);

    this.SetRotate(this.m_Rotate);
    this.m_face.geometry.computeVertexNormals();

   // this.m_face.visible = false;


}
//this.pointNumCode(1, 0, 0, 0, 0);
//this.pointNumCode(1, 1, 0, 0, 0);
//this.pointNumCode(1, 2, 0, 0, 0);
//this.pointNumCode(1, 3, 0, 0, 0);
//this.pointNumCode(1, 4, 0, 0, 0);
//this.pointNumCode(1, 5, 0, 0, 0);
//this.pointNumCode(1, 6, 0, 0, 0);
//this.pointNumCode(1, 7, 0, 0, 0);
//this.pointNumCode(1, 8, 0, 0, 0);
//this.pointNumCode(1, 9, 0, 0, 0);
//this.pointNumCode(1, 10, 0, 0, 0);
//this.pointNumCode(1, 11, 0, 0, 0);
//this.pointNumCode(1, 12, 0, 0, 0);
//this.pointNumCode(1, 13, 0, 0, 0);
//this.pointNumCode(1, 14, 0, 0, 0);
//this.pointNumCode(1, 15, 0, 0, 0);
//this.pointNumCode(1, 16, 0, 0, 0);
//this.pointNumCode(1, 17, 0, 0, 0);
//this.pointNumCode(1, 18, 0, 0, 0);
//this.pointNumCode(1, 19, 0, 0, 0);
//this.pointNumCode(1, 20, 0, 0, 0);
//this.pointNumCode(1, 21, 0, 0, 0);
//this.pointNumCode(1, 22, 0, 0, 0);
//this.pointNumCode(1, 23, 0, 0, 0);
//this.pointNumCode(1, 24, 0, 0, 0);
//this.pointNumCode(1, 25, 0, 0, 0);
//this.pointNumCode(1, 26, 0, 0, 0);
//this.pointNumCode(1, 27, 0, 0, 0);
//this.pointNumCode(1, 28, 0, 0, 0);
//this.pointNumCode(1, 29, 0, 0, 0);
//this.pointNumCode(1, 30, 0, 0, 0);
//this.pointNumCode(1, 31, 0, 0, 0);
//this.pointNumCode(1, 32, 0, 0, 0);
//this.pointNumCode(1, 33, 0, 0, 0);
//this.pointNumCode(1, 34, 0, 0, 0);
//this.pointNumCode(1, 35, 0, 0, 0);
//this.pointNumCode(1, 36, 0, 0, 0);
//this.pointNumCode(1, 37, 0, 0, 0);
//this.pointNumCode(1, 38, 0, 0, 0);
//this.pointNumCode(1, 39, 0, 0, 0);
//this.pointNumCode(1, 40, 0, 0, 0);
//this.pointNumCode(1, 41, 0, 0, 0);
//this.pointNumCode(1, 42, 0, 0, 0);
//this.pointNumCode(1, 43, 0, 0, 0);
//this.pointNumCode(1, 44, 0, 0, 0);
//this.pointNumCode(1, 45, 0, 0, 0);
//this.pointNumCode(1, 46, 0, 0, 0);
//this.pointNumCode(1, 47, 0, 0, 0);
//this.pointNumCode(1, 48, 0, 0, 0);
//this.pointNumCode(1, 49, 0, 0, 0);
//this.pointNumCode(1, 50, 0, 0, 0);
//this.pointNumCode(1, 51, 0, 0, 0);
//this.pointNumCode(1, 52, 0, 0, 0);
//this.pointNumCode(1, 53, 0, 0, 0);
//this.pointNumCode(1, 54, 0, 0, 0);
//this.pointNumCode(1, 55, 0, 0, 0);
//this.pointNumCode(1, 56, 0, 0, 0);
//this.pointNumCode(1, 57, 0, 0, 0);
//this.pointNumCode(1, 58, 0, 0, 0);
//this.pointNumCode(1, 59, 0, 0, 0);
//this.pointNumCode(1, 60, 0, 0, 0);
//this.pointNumCode(1, 61, 0, 0, 0);
//this.pointNumCode(1, 62, 0, 0, 0);
//this.pointNumCode(1, 63, 0, 0, 0);
//this.pointNumCode(1, 64, 0, 0, 0);


EnamelObj.prototype.initTooth_1 = function (json) {//初始化创建，json参数///平面
    this.arr_geometry = new THREE.Geometry(); //存储点数组

    this.arr_mr = new Array(); //存储半径数组
    this.m_r = json.init.Tooth[0]; //半径
    this.m_h = json.init.Tooth[1]; //行高
    this.m_JMax = json.init.Tooth[2]; //行数
    this.m_IMax = json.init.Tooth[3]; //列数
    this.m_Pos = new THREE.Vector3(json.init.Tooth[6][0], json.init.Tooth[6][1], json.init.Tooth[6][2]); //位置
    this.m_Sacle = new THREE.Vector3(json.init.Tooth[7][0], json.init.Tooth[7][1], json.init.Tooth[7][2]); //缩放
    this.m_Rotate = new THREE.Vector3(json.init.Tooth[8][0], json.init.Tooth[8][1], json.init.Tooth[8][2]); //旋转
    for (var j = 0; j < this.m_JMax; j++) {//创建平面
        var m_jr = this.m_r;
        this.arr_mr.push(m_jr);
        for (var r_i = 0; r_i < json.init.r.length; r_i++) {//设置半径
            this.Row_r(json.init.r[r_i][0], json.init.r[r_i][1]);
        }
        m_jr = this.arr_mr[j];
        for (var i = 0; i < this.m_IMax + 1; i++) {
            var m_pos = new THREE.Vector3(0, 0, 0);
            m_pos.x = m_jr * i;
            m_pos.y = 0;
            m_pos.z = -j * this.m_h;
            this.arr_geometry.vertices.push(m_pos);
        }
    }
    this.CreateFaces_1(json.init.Tooth[4], json.init.Tooth[5]); //创建面
    for (var row_i = 0; row_i < json.init.row.length; row_i++) {//移动行
        this.MoveLine_row(json.init.row[row_i][0], json.init.row[row_i][1], json.init.row[row_i][2], json.init.row[row_i][3], json.init.row[row_i][4], json.init.row[row_i][5]);
    }
    for (var col_i = 0; col_i < json.init.col.length; col_i++) {//移动列
        this.MoveLine_col(json.init.col[col_i][0], json.init.col[col_i][1], json.init.col[col_i][2], json.init.col[col_i][3], json.init.col[col_i][4], json.init.col[col_i][5]);
    }
    for (var point_i = 0; point_i < json.init.point.length; point_i++) {//移动点
        this.pointNumCode(json.init.point[point_i][0], json.init.point[point_i][1], json.init.point[point_i][2], json.init.point[point_i][3], json.init.point[point_i][4], json.init.point[point_i][5], json.init.point[point_i][6]);
    }
    for (var face_i = 0; face_i < json.init.face.length; face_i++) {//移动面
        this.MoveFace(json.init.face[face_i][0], json.init.face[face_i][1], json.init.face[face_i][2], json.init.face[face_i][3], json.init.face[face_i][4], json.init.face[face_i][5]);
    }
    ////////////////////移动////////////////////
    //this.pointNumCode(0, 0, 0, 0, 0);//计算点编号移动

    //////////////////显示与隐藏////////////////////
    //this.VisibleFace(true);//显示隐藏面
    //this.RemoveFace();//移除面
    //this.ShowLine(); //显示线
    //this.RemoveLine()//移除线
    //this.ShowCode(0, 2); //显示点编号
    ////////////////////位置缩放旋转////////////////////
    this.SetPostion(this.m_Pos);
    this.SetSacle(this.m_Sacle);
   
    this.SetRotate(this.m_Rotate);
   
    var m_obj = SeachObj(m_VarGlobal.m_BaseSence.m_dis, "face_test");
    m_obj.geometry.mergeVertices(); //去掉重复点
    var m_objlength = m_obj.geometry.vertices.length


    this.m_face.visible = false;

    SetObjMatrix(m_obj, this.m_face)
   

  //  CreateObj(m_obj, this.m_face);




}
function SetObjMatrix(obj_1, obj_2) {//设置json模型变换 obj_1 模型1 obj_2 模型2
    obj_2.geometry.mergeVertices(); //去掉重复点
    var m_matrix = obj_2.matrix; //变换参数 elements是16位数组[]
    m_matrix.elements[12] = -38;//x 位置
    m_matrix.elements[13] = 0.5; //有y 位置
    m_matrix.elements[14] = 47; //z 位置
    obj_2.geometry.applyMatrix(m_matrix)



    var m_matrix1 = obj_1.matrix;
  
    m_matrix1.elements[13] = 0;
   
    obj_1.geometry.applyMatrix(m_matrix1)

}
function CreateObj(obj_1, obj_2) {//创建新模型 obj_1 模型1 obj_2 模型2
    var geometry = new THREE.Geometry();
    var m_Materials = new m_VarGlobal.m_BaseSence.m_BaseMaterial.PhongInfoMaterial("code_0010");
  
    var m_tobj = new THREE.Mesh(geometry, m_Materials);
   

    m_tobj.geometry.mergeMesh(obj_1);//添加模型1

    m_tobj.geometry.mergeMesh(obj_2); //添加模型2
   
    testface(m_tobj.geometry,obj_1.geometry, obj_2.geometry)

    Obj_Add(m_tobj);
 
    m_tobj.geometry.computeVertexNormals();//渲染材质
}
function testface(geometry, geometry1, geometry2) {//建立新模型面 geometry 新模型点  geometry1 模型1点 geometry2 模型2点 
    geometry.faces = [];
    var m_codenum = 389;//圆柱模型faces点长度
    var m_IMax = 64; //圆柱模型行点长度
        var m_num = 455; //圆柱模型点长度

        for (var i = 0; i < geometry1.faces.length; i++) {//添加圆柱面
            var face = new THREE.Face3(geometry1.faces[i].a, geometry1.faces[i].b, geometry1.faces[i].c);
            geometry.faces.push(face);
        }

    for (var i = m_codenum; i < geometry.vertices.length; i++) {//增加连接面
        if (i + (m_IMax + 1) >= geometry.vertices.length) {
            break;
        }
        if (i < m_codenum + 4) {


            var face = new THREE.Face3(i + m_IMax + 7, i - m_codenum + 1, i - m_codenum);

            geometry.faces.push(face);

            var face = new THREE.Face3(i + m_IMax + 7, i + m_IMax + 8, i - m_codenum + 1);
            geometry.faces.push(face);

        }

    }
    for (var i = 0; i < geometry2.faces.length; i++) {//添加牙面
        var face = new THREE.Face3(geometry2.faces[i].c += m_num, geometry2.faces[i].b += m_num, geometry2.faces[i].a += m_num);
        geometry.faces.push(face);
    }

}
