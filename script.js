function enviarWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const numeroTelefone = "5581999999999";

    const texto = `Olá! Meu nome é ${nome}.\n*Assunto:* ${assunto}\n*Mensagem:* ${mensagem}`;
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(texto)}`;

    window.open(urlWhatsApp, '_blank');
}
