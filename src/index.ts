import "./styles.css";


//let btnValidar = document.getElementById("btnValidar");

//let usuarioPP: string = document.getElementById("usuario");
let usuarioPP: string = prompt ("Ingrese su Usuario");

//let passwordPP: string = document.getElementById("password");
let passwordPP: string = prompt ("Ingrese su Clve");

//btnValidar.addEventListener("click", () => {
  let usuariook: string = "Jose";
  let passwordok: string = "Daroca";
  let usuarioIngresado: string = usuarioPP;
  let passwordIngresado: string = passwordPP;
  if (usuariook === usuarioIngresado && passwordok === passwordIngresado) {
    console.log("Su usuario y password ingresados coinciden");
  } else {
    console.log("Alguno de los datos ingresados son incorrectos");
  }
});
