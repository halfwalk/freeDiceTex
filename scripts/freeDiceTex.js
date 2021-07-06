
Hooks.on('diceSoNiceReady', (dice3d) => {   
   
  dice3d.addTexture("trGlass2", {
    name: "Transparent Glass 2",
    composite: "overlay",
    source: "modules/freeDiceTex/graphics/dice/2.webp",
	bump: "modules/freeDiceTex/graphics/dice/2_bump.webp"
  });
  
  
    dice3d.addTexture("lake", {
    name: "Lake",
    composite: "multiply",
    source: "modules/freeDiceTex/graphics/dice/lake.png"
  })
  .then(() => {
  dice3d.addColorset({
	name: 'Day at the Lake',
	description: "A day at Lake Michigan",
	category: "FreeDiceTex",
	foreground: '#288fcc',
	background: '#288fcc', 
	outline: 'white',
	edge: '#288fcc',
	texture: 'lake',
	material: 'plastic',
  font: "Pacifico"},"default");
  });
  
  dice3d.addTexture("blum1", {
    name: "Blum1",
    composite: "source-over",
    source: "modules/freeDiceTex/graphics/dice/blum.png",
	bump: "modules/freeDiceTex/graphics/dice/blum_bump.png"
  });
  
   dice3d.addTexture("blum2", {
    name: "Blum2",
    composite: "source-over",
    source: "modules/freeDiceTex/graphics/dice/blum2.png",
	bump: "modules/freeDiceTex/graphics/dice/blum2_bump.png"
  });
});