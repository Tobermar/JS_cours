// Créer un form pour taper les todos

// Ajouter sur le dom ce qui est tapé dans l'input à la validation du form
//monInput.value

// Supprimer  un todo lorsque l'on clique dessus (.remove())

// Stocker dans le storage la liste

// cosulter le local storage au lancement de l'application pour rajouter les todos.

const form = document.querySelector("form");

//storage part
function stotageList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour supprimer</li>`;
  }
}

getTodos();

//add element
form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<li>${item.value}</li>`;
  form.reset();
  stotageList();
});

//remove element
list.addEventListener("click", (e) => {
  //   ;
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  stotageList();
  //   e.target.remove();
});
