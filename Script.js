
const nome_cadastro = document.getElementById("nome_cadastro");
const data_cadastro = document.getElementById("data_cadastro");
const pagamento_cadastro = document.getElementById("pagamento_cadastro");
const categoria_cadastro = document.getElementById("categoria_cadastro");
const valor_cadastro = document.getElementById("valor_cadastro");
const botao_add = document.getElementById("adicionar");
const tabela_despesas = document.querySelector(".resultado tbody");
const pesquisa = document.getElementById("pesquisa");
const botao_procurar = document.getElementById("procurar");
const filtros = document.querySelector(".filtro_operation");
const data_filtro = filtros.querySelector('input[type="date"]');
const pagamento_filtro = filtros.querySelectorAll("select")[0];
const categoria_filtro = filtros.querySelectorAll("select")[1];
const formulario_cadastro = document.querySelector(".formulario form");
const formulario_filtros = filtros.querySelector("form");

let despesas = [];
let proximo_id = 0;
let filtros_aplicados = {
    pesquisa: "",
    data: "",
    pagamento: "",
    categoria: ""
};

const cabecalho = document.querySelector(".resultado thead tr");

if (cabecalho && cabecalho.children.length === 3) {
    const th_acao = document.createElement("th");
    th_acao.textContent = "Ação";
    cabecalho.appendChild(th_acao);
}

function cadastro() {
    const nome = nome_cadastro.value.trim();
    const data = data_cadastro.value;
    const pagamento = pagamento_cadastro.value;
    const categoria = categoria_cadastro.value;
    const valor = Number(valor_cadastro.value);

    if (
        nome === "" ||
        data === "" ||
        pagamento === "" ||
        categoria === "" ||
        valor_cadastro.value.trim() === "" ||
        !Number.isFinite(valor) ||
        valor <= 0
    ) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    const nova_despesa = {
        id: proximo_id,
        descricao: nome,
        data: data,
        pagamento: pagamento,
        categoria: categoria,
        valor: valor,
        status: "Pendente"
    };

    proximo_id++;
    despesas.push(nova_despesa);

    visualizar_cadastro();
    atualizar_painel();

    nome_cadastro.value = "";
    data_cadastro.value = "";
    pagamento_cadastro.value = "";
    categoria_cadastro.value = "";
    valor_cadastro.value = "";
}

function visualizar_cadastro() {
    tabela_despesas.innerHTML = "";

    const texto_pesquisa = filtros_aplicados.pesquisa
        .trim()
        .toLocaleLowerCase("pt-BR");

    const data_selecionada = filtros_aplicados.data;
    const pagamento_selecionado = filtros_aplicados.pagamento;
    const categoria_selecionada = filtros_aplicados.categoria;

    const despesas_filtradas = despesas.filter(function (despesa) {
        const corresponde_nome =
            texto_pesquisa === "" ||
            despesa.descricao
                .toLocaleLowerCase("pt-BR")
                .includes(texto_pesquisa);

        const corresponde_data =
            data_selecionada === "" ||
            despesa.data === data_selecionada;

        const corresponde_pagamento =
            pagamento_selecionado === "" ||
            despesa.pagamento === pagamento_selecionado;

        const corresponde_categoria =
            categoria_selecionada === "" ||
            despesa.categoria === categoria_selecionada;

        return (
            corresponde_nome &&
            corresponde_data &&
            corresponde_pagamento &&
            corresponde_categoria
        );
    });

    despesas_filtradas.forEach(function (despesa) {
        const linha = document.createElement("tr");

        const detalhes = document.createElement("td");

        const nome_despesa = document.createElement("span");
        nome_despesa.textContent = despesa.descricao;

        const informacoes = document.createElement("div");

        const id_despesa = document.createElement("small");
        id_despesa.textContent = `ID: ${despesa.id}`;

        const data_despesa = document.createElement("small");
        data_despesa.textContent = `Data: ${despesa.data}`;

        const pagamento_despesa = document.createElement("small");
        pagamento_despesa.textContent = `Pagamento: ${despesa.pagamento}`;

        const categoria_despesa = document.createElement("small");
        categoria_despesa.textContent = `Categoria: ${despesa.categoria}`;

        informacoes.append(
            id_despesa,
            document.createElement("br"),
            data_despesa,
            document.createElement("br"),
            pagamento_despesa,
            document.createElement("br"),
            categoria_despesa
        );

        detalhes.append(
            nome_despesa,
            document.createElement("br"),
            informacoes
        );

        linha.appendChild(detalhes);

        const celula_valor = document.createElement("td");

        celula_valor.textContent = despesa.valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

        linha.appendChild(celula_valor);

        const celula_status = document.createElement("td");
        const selecao_status = document.createElement("select");

        ["Pendente", "Pago"].forEach(function (status) {
            const opcao = document.createElement("option");
            opcao.value = status;
            opcao.textContent = status;
            selecao_status.appendChild(opcao);
        });

        selecao_status.value = despesa.status;

        selecao_status.addEventListener("change", function () {
            despesa.status = selecao_status.value;
            atualizar_painel();
        });

        celula_status.appendChild(selecao_status);
        linha.appendChild(celula_status);

        const celula_acao = document.createElement("td");
        const botao_excluir = document.createElement("button");

        botao_excluir.type = "button";
        botao_excluir.textContent = "Excluir";
        botao_excluir.classList.add("botao_excluir");

        botao_excluir.addEventListener("click", function () {
            despesas = despesas.filter(function (item) {
                return item.id !== despesa.id;
            });

            visualizar_cadastro();
            atualizar_painel();
        });

        celula_acao.appendChild(botao_excluir);
        linha.appendChild(celula_acao);

        tabela_despesas.appendChild(linha);
    });
}

async function atualizar_painel() {
    const total = despesas.length;

    const quantidade_pendentes = despesas.filter(function (despesa) {
        return despesa.status === "Pendente";
    }).length;

    const quantidade_pagos = despesas.filter(function (despesa) {
        return despesa.status === "Pago";
    }).length;

    const soma_pendente = despesas
        .filter(function (despesa) {
            return despesa.status === "Pendente";
        })
        .reduce(function (soma, despesa) {
            return soma + despesa.valor;
        }, 0);

    document.querySelector(".total_despesas").textContent = total;
    document.querySelector(".pendentes").textContent = quantidade_pendentes;
    document.querySelector(".pagos").textContent = quantidade_pagos;

    document.querySelector(".valor_pendente").textContent =
        soma_pendente.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
}

function aplicar_filtros() {
    filtros_aplicados = {
        pesquisa: pesquisa.value,
        data: data_filtro.value,
        pagamento: pagamento_filtro.value,
        categoria: categoria_filtro.value
    };

    visualizar_cadastro();
}

botao_procurar.addEventListener("click", function (evento) {
    evento.preventDefault();
    aplicar_filtros();
});

formulario_filtros.addEventListener("submit", function (evento) {
    evento.preventDefault();
    aplicar_filtros();
});

formulario_cadastro.addEventListener("submit", function (evento) {
    evento.preventDefault();
    cadastro();
});

botao_add.addEventListener("click", cadastro);






