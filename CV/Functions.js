const fileInput=document.getElementById("foto");
const imageOutput=document.getElementById("foto-perfil");
const elimFoto=document.getElementById("elimFoto");

// Muestra la imagen predeterminada al cargar la página
window.onload = () =>{
    imageOutput.src = "perfil.jpg"; // Cambia esto a la ruta de tu imagen predeterminada
    elimFoto.style.display = "inline"; 
};

fileInput.addEventListener("change",() =>{
    const file= fileInput.files[0];
    if (file){
        const reader= new FileReader();
        reader.onload=(e) =>{
            imageOutput.src= e.target.result;
            imageOutput.style.display= "block"; 
            elimFoto.style.display= "inline"; 
        };
        reader.onerror= (err) =>{
            console.error("Error al leer el archivo:", err);
            alert("Ocurrió un error al leer el archivo.");
        };
        reader.readAsDataURL(file);
    }
});

// Función para eliminar la imagen
elimFoto.addEventListener("click",() =>{
    imageOutput.src= "perfil.jpg"; 
    imageOutput.style.display= "block"; 
    fileInput.value=" "; 
    elimFoto.style.display= "inline"; 
});

function editProfile(){
    const title= prompt("Ingrese su nuevo título:", document.getElementById("title").innerText);
    const descrip= prompt("Ingrese su nueva descripción:", document.getElementById("descrip").innerText);
    if (title) document.getElementById("title").innerText= title;
    if (descrip) document.getElementById("descrip").innerText= descrip;
}

function agregarAcademic(){
    const input= document.getElementById("estu-input");
    const value= input.value.trim();
    if (value){
        const li= document.createElement("li");
        li.innerText= value;
        li.appendChild(crearBotElim(li));
        document.getElementById("historia-estu").appendChild(li);
        input.value= ' '; 
    }
}

function agregarLab() {
    const input= document.getElementById("Lab-input");
    const value= input.value.trim();
    if (value){
        const li= document.createElement("li");
        li.innerText= value;
        li.appendChild(crearBotElim(li));
        document.getElementById("historia-lab").appendChild(li);
        input.value= ' ';
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
        input.value= ' ';
    }
}

function elimFil(button){
    const li= button.parentElement; 
    li.remove(); 
}

function crearBotElim(listItem){
    const button=document.createElement("button");
    button.innerText="Eliminar";
    button.onclick= function(){
        listItem.remove(); 
    };
    return button;
}
