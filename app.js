setTimeout(function() {
  // Paso 1: Crea un elemento h1
  var h1 = document.createElement("h1");
  
  // Asigna el texto "Modificando el DOM" al h1
  h1.textContent = "Modificando el DOM";
  
  // Paso 2: Asigna un color de texto al h1 (rojo o verde)
  var color = Math.random() < 0.5 ? "red" : "green";
  h1.style.color = color;
  
  // Paso 3: Crea un elemento p
  var p = document.createElement("p");
  
  // Asigna un texto Lorem Ipsum al p
  p.textContent = "Lorem Ipsum";
  
  // Paso 4: Asigna una clase al p para aplicar un estilo de fuente distinto
  p.className = "estilo-de-fuente";
  
  // Agrega el h1 y el p al DOM
  document.body.appendChild(h1);
  document.body.appendChild(p);
}, 3000);
