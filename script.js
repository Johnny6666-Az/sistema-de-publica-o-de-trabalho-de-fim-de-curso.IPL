function publishPost() {
    const titleInput = document.getElementById('titleInput');
    const contentInput = document.getElementById('contentInput');
    const postsList = document.getElementById('postsList');

    if (titleInput.value === '' || contentInput.value === '') {
        alert("Por favor, preencha o título e o conteúdo!");
        return;
    }

    // Obter data atual em 2025
    const now = new Date();
    const dateFormatted = now.toLocaleDateString('pt-BR') + ' às ' + now.toLocaleTimeString('pt-BR');

    // Criar o elemento do post
    const postDiv = document.createElement('div');
    postDiv.classList.add('post-card');

    postDiv.innerHTML = `
        <h3>${titleInput.value}</h3>
        <small>Publicado em: ${dateFormatted}</small>
        <p>${contentInput.value}</p>
        <hr>
    `;

    // Adicionar ao topo do feed
    postsList.prepend(postDiv);

    // Limpar os campos
    titleInput.value = '';
    contentInput.value = '';
}

