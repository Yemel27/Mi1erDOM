setTimeout(function() {
  var h1 = document.createElement("h1");
  
  h1.textContent = "Modificando el DOM";
  
  var color = Math.random() < 0.5 ? "red" : "green";
  h1.style.color = color;
  
  var p = document.createElement("p");
  
  p.textContent = "Lorem Ipsum";
  
  p.className = "estilo-de-fuente";
  
  document.body.appendChild(h1);
  document.body.appendChild(p);
}, 3000);
