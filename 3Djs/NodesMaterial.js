var NodesMaterial = function () {
    this.m_type = [];
    this.m_type.push("SkinPhong");
    this.m_type.push("PlushPhong");

   

};
NodesMaterial.prototype.init = function (obj, type, skinColor, bloodColor, specular) {
    var m_mtl = null;
    switch (type) {
        case 'SkinPhong':
            m_mtl = this.SkinPhongMaterial(skinColor, bloodColor, specular);
            break;
        case 'PlushPhong':
           
            m_mtl = this.PlushPhongMaterial(skinColor);
            break;
    }

    m_mtl.build();

    // set material
    obj.material = m_mtl;

    obj.traverse(function (child) {
        // alert(child.name);
        if (child instanceof THREE.Mesh) {


            child.material = m_mtl;




        }
    })
};
//0xaa9b7c
NodesMaterial.prototype.PlushPhongMaterial = function (ColorPhong) {
   
    var m_ColorPhong = ColorPhong || 0x8D8677;
    var mtl;
    mtl = new THREE.PhongNodeMaterial();

    var color = new THREE.ColorNode(m_ColorPhong);
    var mildness = new THREE.FloatNode(1.1);
    var fur = new THREE.FloatNode(.3);

    var posDirection = new THREE.Math1Node(new THREE.PositionNode(THREE.PositionNode.VIEW), THREE.Math1Node.NORMALIZE);
    var norDirection = new THREE.Math1Node(new THREE.NormalNode(THREE.NormalNode.VIEW), THREE.Math1Node.NORMALIZE);

    var viewZ = new THREE.Math2Node(
						posDirection,
						norDirection,
						THREE.Math2Node.DOT
					);

    // without luma correction for now
    var mildnessColor = new THREE.OperatorNode(
						color,
						mildness,
						THREE.OperatorNode.MUL
					);

    var furScale = new THREE.OperatorNode(
						viewZ,
						fur,
						THREE.OperatorNode.MUL
					);

    mtl.color = color;

    mtl.normal = new THREE.TextureNode(this.getTexture("textures/terrain/grasslight-big-nm1.jpg"));
    mtl.normalScale = furScale;
    mtl.environment = mildnessColor;
    mtl.environmentAlpha = new THREE.Math1Node(viewZ, THREE.Math1Node.INVERT);
    mtl.shininess = new THREE.FloatNode(0);

    return mtl;

}

NodesMaterial.prototype.SkinPhongMaterial = function (skinColor, bloodColor, specular) {
    var m_skinColor = skinColor || 0xFFC495;
    var m_bloodColor = bloodColor || 0x6b0602;
    var m_specular = specular || 0x2f2e2d;


    var mtl = new THREE.PhongNodeMaterial();
    var skinColor = new THREE.ColorNode(m_skinColor);
    var bloodColor = new THREE.ColorNode(m_bloodColor);
    var wrapLight = new THREE.FloatNode(1.5);
    var wrapShadow = new THREE.FloatNode(0);

    var directLight = new THREE.LightNode();

    var lightLuminance = new THREE.LuminanceNode(directLight);

    var lightWrap = new THREE.Math3Node(
						wrapShadow,
						wrapLight,
						lightLuminance,
						THREE.Math3Node.SMOOTHSTEP
					);

    var lightTransition = new THREE.OperatorNode(
						lightWrap,
						new THREE.ConstNode(THREE.ConstNode.PI2),
						THREE.OperatorNode.MUL
					);

    var wrappedLight = new THREE.Math1Node(lightTransition, THREE.Math1Node.SIN);

    var wrappedLightColor = new THREE.OperatorNode(
						wrappedLight,
						bloodColor,
						THREE.OperatorNode.MUL
					);

    var bloodArea = new THREE.Math1Node(wrappedLightColor, THREE.Math1Node.SAT);

    var totalLight = new THREE.OperatorNode(
						directLight,
						bloodArea,
						THREE.OperatorNode.ADD
					);

    mtl.color = skinColor;
    mtl.light = totalLight;

    if (name == 'skin') {

        // StandardNodeMaterial

        mtl.metalness = new THREE.FloatNode(0);
        mtl.roughness = new THREE.FloatNode(1);
        mtl.reflectivity = new THREE.FloatNode(0);
        mtl.clearCoat = new THREE.FloatNode(.2);
        mtl.clearCoatRoughness = new THREE.FloatNode(.3);
        mtl.environment = new THREE.CubeTextureNode(cubemap);

    } else {

        // PhongNodeMaterial

        mtl.specular = new THREE.ColorNode(m_specular);
        mtl.shininess = new THREE.FloatNode(15);

    }
   
    return mtl;
}

NodesMaterial.prototype.getTexture = function (path) {

    //    var textures = {
    //        brick: { url: 'textures/brick_diffuse.jpg' },
    //        grass: { url: 'textures/terrain/grasslight-big.jpg' },
    //        grassNormal: { url: 'textures/terrain/grasslight-big-nm.jpg' },
    //        decalDiffuse: { url: 'textures/decal/decal-diffuse.png' },
    //        cloud: { url: 'textures/lava/cloud.png' },
    //        tooth: { url: 'mode/upcera/上颚2.jpg' },
    //        toothNormal: { url: 'textures/terrain/grasslight-big-nm1.jpg' },
    //        floor: { url: 'textures/水泥地.jpg' },
    //        spherical: { url: 'textures/envmap.png' }
    //    };
   // var library = {};
    //    var texture = textures[name].texture;
  
    if (path) {

        texture = new THREE.TextureLoader().load(path);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;      
      //  library[texture.uuid] = texture;

    } else {
        alert("加载路径为空");
    }

    return texture;

}