function botao() {
  const cidade = document.querySelector("input").value;
  buscarCidade(cidade);
}

function colocarDadosNaTela(dados) {
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.main.temp;
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".texto-previsao").innerHTML =
    dados.weather[0].description;
  document.querySelector(".umidade").innerHTML =
    "Umidade" + dados.main.humidity + "%";
  document.querySelector(
    ".img-previsao"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
  console.log(dados);
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());
  colocarDadosNaTela(dados);
}

const key = "73cdb5907e8b809c8663af3c4d88cfa7";
