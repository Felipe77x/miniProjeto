const array = [];
const json = localStorage.getItem("usuarios");
let usuarios = JSON.parse(json) || array;

function criarUsuario(event) {
  event.preventDefault();

  const nome = document.querySelector("#nomesobrenome").value;
  const email = document.querySelector("#email").value;
  const telefone = document.querySelector("#telefone").value;
  const mensagem = document.querySelector("#mensagem").value;

  const usuario = {
    nome: nome,
    email: email,
    telefone: telefone,
    mensagem: mensagem,
  };

  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  renderizarUsuarios();
  document.getElementById("formularioUsuario").reset();
}

function excluirUsuario(index) {
  usuarios.splice(index, 1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  renderizarUsuarios();
}

function editarUsuario(index) {
  const usuario = usuarios[index];
  document.querySelector("#nomesobrenome").value = usuario.nome;
  document.querySelector("#email").value = usuario.email;
  document.querySelector("#telefone").value = usuario.telefone;
  document.querySelector("#mensagem").value = usuario.mensagem;
  usuarios.splice(index, 1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  renderizarUsuarios();
}

function renderizarUsuarios() {
  const listaUsuarios = document.getElementById("listaUsuarios");
  listaUsuarios.innerHTML = "";

  usuarios.forEach((usuario, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${usuario.nome} - ${usuario.email} - ${usuario.telefone} - ${usuario.mensagem}</span>
      <button onclick="editarUsuario(${index})">Editar</button>
      <button onclick="excluirUsuario(${index})">Excluir</button>`;
    listaUsuarios.appendChild(li);
  });
}

renderizarUsuarios();

const formulario = document.querySelector("#formularioUsuario");
formulario.addEventListener("submit", criarUsuario);