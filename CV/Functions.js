const fileInput=document.getElementById("foto"); //Seleccionar archivo
const imageOutput=document.getElementById("foto-perfil"); //Se muestra la foto del perfil
const elimFoto=document.getElementById("elimFoto"); //Eliminar foto

// Muestra la imagen 
window.onload=() =>{
    imageOutput.src= "perfil.jpg"; //Cambia la ruta de la foto
    elimFoto.style.display= "none"; //Sólo funciona el botón cuando se elige una foto diferente a la de la carpeta
};

fileInput.addEventListener("change",() =>{
    const file= fileInput.files[0]; //Llama el archivo de la foto
    if (file){
        const reader= new FileReader(); //Lee el archivo del equipo
        reader.onload=(e) =>{
            imageOutput.src= e.target.result;
            imageOutput.style.display= "block"; 
            elimFoto.style.display= "inline"; 
        };
        reader.onerror=(err) =>{
            console.error("Error al leer el archivo:", err);
            alert("Ocurrió un error al leer el archivo."); //Mostrar un mensaje de alerta si no se lee el archivo seleccionado
        };
        reader.readAsDataURL(file); //Pasa el archivo a una URL para verlo
    }
});

//Eliminar la imagen
elimFoto.addEventListener("click",() =>{
    imageOutput.src= "perfil.jpg"; //Vuelve a la foto de la carpeta al eliminar una diferente
    imageOutput.style.display= "block"; 
    fileInput.value=" "; 
    elimFoto.style.display="inline"; 
});

function editarPerfil(){
    const title= prompt("Ingrese su nuevo título:", document.getElementById("title").innerText); //Pide y cambia el title y la descripción si el usuario escribe algo diferente
    const descrip= prompt("Ingrese su nueva descripción:", document.getElementById("descrip").innerText); //title y descrip son valores predeterminados
    if (title) document.getElementById("title").innerText= title; //No se cambian title ni descrip si no se ingresan valores diferentes
    if (descrip) document.getElementById("descrip").innerText= descrip;
}

function agregarAcademic(){
    const input= document.getElementById("estu-input");
    const value= input.value.trim(); //No recibe vacío
    if (value){
        const li= document.createElement("li");
        li.innerText= value;
        li.appendChild(crearBotElim(li)); //Coloca el botón de agregar dentro del <li>
        document.getElementById("historia-estu").appendChild(li); //Inserta el texto en el <li>
        input.value= " "; //Coloca el espacio en blanco para seguir ingresando
    }
}

function agregarLab() {
    const input= document.getElementById("Lab-input");
    const value= input.value.trim();
    if (value){
        const li= document.createElement("li");
        li.innerText=value;
        li.appendChild(crearBotElim(li));
        document.getElementById("historia-lab").appendChild(li);
        input.value= " ";
    }
}

function agregarHab(){
    const input= document.getElementById("Hab-input");
    const value= input.value.trim();
    if (value){
        const li= document.createElement("li");
        li.innerText= value;
        li.appendChild(crearBotElim(li));
        document.getElementById("habs").appendChild(li);
        input.value=" ";
    }
}

function crearBotElim(listItem){ //Crea un botón para eliminar
    const button=document.createElement("button");
    button.innerText="Eliminar";
    button.onclick= function(){ 
        listItem.remove(); //Al hacer click se elimina el elemento
    };
    return button; //Devuelve el botón
}

function elimFil(button){ 
    const li= button.parentElement; //Llama el elemento padre
    li.remove(); //Elimina el elemento
}
