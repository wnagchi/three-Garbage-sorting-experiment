
var ToolClass = function () {

    this.m_Selobj = null;
    this.m_Selobj_wireframe = null;
};
var Tooth_ToolBar = function () { //派生类
    ToolClass.call(this);


};
Tooth_ToolBar.prototype = Object.create(ToolClass.prototype);

Tooth_ToolBar.prototype.OnSelObj = function (obj, point, num) {


    //    if (m_VarGlobal.m_Tooth_ToolBar.m_Selobj) {
    //       
    //        m_VarGlobal.m_SmallSence.m_Scene.remove(m_VarGlobal.m_Tooth_ToolBar.m_Selobj);

    //    }

    //    if (m_VarGlobal.m_Tooth_ToolBar.m_Selobj_wireframe) {

    //        m_VarGlobal.m_SmallSence.m_Scene.remove(m_VarGlobal.m_Tooth_ToolBar.m_Selobj_wireframe);
    //    }
    m_VarGlobal.m_Tooth_ToolBar.clear();
    m_VarGlobal.m_Tooth_ToolBar.m_Selobj = obj.clone();


    m_VarGlobal.m_Tooth_ToolBar.m_Selobj.position.x = -60;
    m_VarGlobal.m_Tooth_ToolBar.m_Selobj.name = "Small_obj";
    m_VarGlobal.m_SmallSence.m_Scene.add(m_VarGlobal.m_Tooth_ToolBar.m_Selobj);


    m_VarGlobal.m_Tooth_ToolBar.m_Selobj_wireframe = obj.clone();
    m_VarGlobal.m_Tooth_ToolBar.m_Selobj_wireframe.name = "Small_wireframe";


    var m_Materials = null;
    if (m_VarGlobal.m_Tooth_ToolBar.m_Selobj_wireframe.material) {
        var m_Materials = m_VarGlobal.m_Tooth_ToolBar.m_Selobj_wireframe.material.clone();
    } else {
        var m_Materials = new m_VarGlobal.m_BaseSence.m_BaseMaterial.PhongInfoMaterial("code_0010");
    }

    m_Materials.wireframe = true;

    m_VarGlobal.m_Tooth_ToolBar.m_Selobj_wireframe.position.x = 60;
    m_VarGlobal.m_Tooth_ToolBar.m_Selobj_wireframe.material = m_Materials;
    m_VarGlobal.m_SmallSence.m_Scene.add(m_VarGlobal.m_Tooth_ToolBar.m_Selobj_wireframe);

}

Tooth_ToolBar.prototype.clear = function () {

    if (m_VarGlobal.m_Tooth_ToolBar.m_Selobj) {

        m_VarGlobal.m_SmallSence.m_Scene.remove(m_VarGlobal.m_Tooth_ToolBar.m_Selobj);

    }

    if (m_VarGlobal.m_Tooth_ToolBar.m_Selobj_wireframe) {

        m_VarGlobal.m_SmallSence.m_Scene.remove(m_VarGlobal.m_Tooth_ToolBar.m_Selobj_wireframe);
    }
}