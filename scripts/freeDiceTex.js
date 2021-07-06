
Hooks.on('diceSoNiceReady', (dice3d) => {   
    
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
});