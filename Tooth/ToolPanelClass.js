var ToolPanelClass = function () {

};
var ToothPanel_Top = function () { //派生类
    ToolPanelClass.call(this);


};
ToothPanel_Top.prototype = Object.create(ToolPanelClass.prototype);
ToothPanel_Top.prototype.OnSelObj = function (obj, point, num) {
    //  alert("ToothPanel_Top:" + obj.name + "|" + point.x + "|" + point.y + "|" + point.z);
    var m_name = obj.name;
    if (obj.name == "font_1" || m_name.indexOf("t_Rollplug") != -1) {
        RollplugMenu();
    } else if (obj.name == "font_2" || m_name.indexOf("t_Roller") != -1) {

        RollerMenu();
    } else if (obj.name == "font_3" || m_name.indexOf("tWind") != -1) {
        WindMenu();
    } else if (obj.name == "font_0") {
        // WindMenu();
        var m_obj = Global_SeachObj("Psarticle_0")
        m_VarGlobal.m_ToothPanel_Top.SetArrow(m_obj.visible);
    }
}
ToothPanel_Top.prototype.SetArrow = function (type) {
    var m_obj = m_VarGlobal.m_BaseSence.m_dis;

 
    m_obj.traverse(function (child) {
        var m_name = child.name;
        if (m_name.indexOf("Psarticle_") != -1) {

            child.visible = !type;


        }
    })
}