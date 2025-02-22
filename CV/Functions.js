const fileInput = document.getElementById("foto");
const imageOutput = document.getElementById("profile-pic");
const removeButton = document.getElementById("removeButton");

// Muestra la imagen predeterminada al cargar la página
window.onload = () => {
    imageOutput.src = "perfil.jpg"; // Cambia esto a la ruta de tu imagen predeterminada
    removeButton.style.display = "inline"; // Muestra el botón de eliminar
};

fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imageOutput.src = e.target.result;
            imageOutput.style.display = "block"; // Muestra la imagen
            removeButton.style.display = "inline"; // Muestra el botón de eliminar
        };
        reader.onerror = (err) => {
            console.error("Error al leer el archivo:", err);
            alert("Ocurrió un error al leer el archivo.");
        };
        reader.readAsDataURL(file);
    }
});

// Función para eliminar la imagen
removeButton.addEventListener("click", () => {
    imageOutput.src = "perfil.jpg"; // Restablece la imagen a la predeterminada
    imageOutput.style.display = "block"; // Asegúrate de que la imagen esté visible
    fileInput.value = ""; // Limpia el input de archivo
    removeButton.style.display = "inline"; // Mantiene el botón de eliminar visible
});

function editProfile() {
    const title = prompt("Ingrese su nuevo título:", document.getElementById("title").innerText);
    const description = prompt("Ingrese su nueva descripción:", document.getElementById("description").innerText);
    if (title) document.getElementById("title").innerText = title;
    if (description) document.getElementById("description").innerText = description;
}

function addAcademic() {
    const input = document.getElementById("academic-input");
    const value = input.value.trim();
    if (value) {
        const li = document.createElement("li");
        li.innerText = value;
        li.appendChild(createDeleteButton(li));
        document.getElementById("academic-history").appendChild(li);
        input.value = ''; // Limpia el input después de agregar
    }
}

function addWork() {
    const input = document.getElementById("work-input");
    const value = input.value.trim();
    if (value) {
        const li = document.createElement("li");
        li.innerText = value;
        li.appendChild(createDeleteButton(li));
        document.getElementById("work-history").appendChild(li);
        input.value = '';
    }
}

function addSkill() {
    const input = document.getElementById("skills-input");
    const value = input.value.trim();
    if (value) {
        const li = document.createElement("li");
        li.innerText = value;
        li.appendChild(createDeleteButton(li));
        document.getElementById("skills").appendChild(li);
        input.value = '';
    }
}

function removeItem(button) {
    const li = button.parentElement; // Obtiene el elemento <li> padre
    li.remove(); // Elimina el elemento de la lista
}

function createDeleteButton(listItem) {
    const button = document.createElement("button");
    button.innerText = "Eliminar";
    button.onclick = function() {
        listItem.remove(); // Elimina el elemento de la lista
    };
    return button;
}