const fileInput=document.getElementById("foto");
const imageOutput=document.getElementById("foto-perfil");
const quitarFil=document.getElementById("quitarFil");

// Muestra la imagen predeterminada al cargar la página
window.onload=()=>{
    imageOutput.src="perfil.jpg"; 
    quitarFil.style.display="inline"; 
};

fileInput.addEventListener("change", ()=>{
    const file=fileInput.files[0];
    if (file){
        const reader=new FileReader();
        reader.onload=(e) =>{
            imageOutput.src=e.target.result;
            imageOutput.style.display="block"; 
            quitarFil.style.display="inline";
        };
        reader.onerror=(err) =>{
            console.error("Error al leer el archivo:", err);
            alert("Ocurrió un error al leer el archivo.");
        };
        reader.readAsDataURL(file);
    }
});

// Función para eliminar la imagen
quitarFil.addEventListener("click", () =>{
    imageOutput.src="perfil.jpg"; 
    imageOutput.style.display="block"; 
    fileInput.value=" "; 
    quitarFil.style.display="inline"; 
});

function editPerfil(){
    const title=prompt("Ingrese su nuevo título:", document.getElementById("title").innerText);
    const descrip=prompt("Ingrese su nueva descripción:", document.getElementById("descrip").innerText);
    if (title) document.getElementById("title").innerText=title;
    if (descrip) document.getElementById("descrip").innerText=descrip;
}

function agregarAcademic(){
    const input=document.getElementById("academica-input");
    const value=input.value.trim();
    if (value) {
        const li=document.createElement("li");
        li.innerText=value;
        li.appendChild(crearBotElim(li));
        document.getElementById("historia-academica").appendChild(li);
        input.value=' '; 
    }
}

function agregarLab(){
    const input=document.getElementById("laboral-input");
    const value=input.value.trim();
    if (value){
        const li=document.createElement("li");
        li.innerText=value;
        li.appendChild(crearBotElim(li));
        document.getElementById("historia-laboral").appendChild(li);
        input.value=' ';
    }
}

function agregarHab(){
    const input=document.getElementById("habilidades-input");
    const value=input.value.trim();
    if (value){
        const li=document.createElement("li");
        li.innerText=value;
        li.appendChild(crearBotElim(li));
        document.getElementById("habilidades").appendChild(li);
        input.value=' ';
    }
}

function quitarFil(button){
    const li=button.parentElement; 
    li.remove(); 
}

function crearBotElim(listItem){
    const button=document.createElement("button");
    button.innerText="Eliminar";
    button.onclick=function(){
        listItem.remove(); 
    };
    return button;
}
