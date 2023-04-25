AFRAME.registerComponent("wire-fence", {
    init: function () {
      //starting x position
      posX = -20;
      //starting z-position
      posZ = 85;
  
      for (var i = 0; i < 10; i++) {
        //create wire-fence entity
        var wireFence1 = document.createElement("a-entity");
        
  
        //set x, y and z position
        posX = posX + 5;
        posY = 2.5;
        posZ = posZ - 10;
  
        //scale 
        var scale = { x: 2, y: 2, z: 2 };
  
        //set the id
        wireFence1.setAttribute("id", "wireFence1" + i);
        
        //set the position
        wireFence1.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        
        //set the scale
        wireFence1.setAttribute("scale", scale);
       
        //set the model
        wireFence1.setAttribute(
          "gltf-model",
          "./models/barbed_wire_fence/scene.gltf"
        );
  
//set the physics body
wireFence1.setAttribute("static-body", {});
       
var sceneEl = document.querySelector("#scene");
//attach the entity to the scene
sceneEl.appendChild(wireFence1);


}
},
});




 //boxes
//UPDATE the component code here
AFRAME.registerComponent("boxes", {
  schema: {
    height: { type: "number", default: 3 },
    width: { type: "number", default: 3 },
    depth: { type: "number", default: 3 },
  },
  init: function () {
    //keep the loop counter very less if the scene is not loading
    for (var i = 0; i < 20; i++) {

      var box = document.createElement("a-entity");
      box.setAttribute("id", "box" + i); 

      //set position attribute
      posX = Math.random()*200 -100;
      posY = 1.5;
      posZ =Math.random()*200 -100;

      

      //set geometry attribute
      

      //set material attribute
      

      // set static-body attribute
     

      //append the box to the scene
      
    }
  },
});


  

        