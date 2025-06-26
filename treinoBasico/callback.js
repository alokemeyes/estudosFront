// Call back

const { error } = require("console");
const { response } = require("express");

const foiSucesso = () => {
  console.log("Deu bom");
};

const deuErro = () => {
  console.log("Deu ruim");
};

const comprarPao = (deuBao, deuRuim) => {
  if (Math.floor(Math.random() * 10) % 2) {
    deuBao();
  } else {
    deuRuim();
  }
};

const comprarPaoAssinc = () => new Promise(comprarPao);
/*comprarPaoAssinc()
  .then(() => {
    console.log("Chegou o pao");
  })
  .catch(() => {
    console.log("Não tinha pão");
  });*/

//fetch

 fetch("https://randomuser.me/api/").then(response => {
  console.log(response)
 }).catch(error => {
  console.log(error)
 })

//axios

const axios = require("axios");
const pegarUsuario = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
pegarUsuario();
