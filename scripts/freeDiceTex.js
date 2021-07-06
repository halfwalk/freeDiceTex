
Hooks.on('diceSoNiceReady', (dice3d) => {   
   
  dice3d.addTexture("trGlass2", {
    name: "Transparent Glass 2",
    composite: "overlay",
    source: "modules/lordudice/graphics/dice/2.webp",
	bump: "modules/lordudice/graphics/dice/2bump.webp"
	
});