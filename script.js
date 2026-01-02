
const navegacaoPrincipal = document.getElementById('navegacao-principal');


document.addEventListener('DOMContentLoaded', (event) => {
    // --- 1. LÓGICA DE ANIMAÇÃO DO NOME ---
    function dividirNome() {
        const elementoNome = document.getElementById('nome-animado');
        
        // Se o elemento não for encontrado, a função para.
        if (!elementoNome) return; 

        const textoOriginal = elementoNome.textContent.trim();
        let novoHTML = '';
        
        // Divide o nome em <span> para animação
        textoOriginal.split('').forEach((caractere, indice) => {
            if (caractere === ' ') {
                novoHTML += '&nbsp;';
            } else {
                // Adiciona a variável CSS (--i) para o delay em cascata
                novoHTML += `<span style="--i: ${indice};">${caractere}</span>`;
            }
        });
        
        elementoNome.innerHTML = novoHTML;

        // Dispara o efeito de queda após um pequeno atraso
        setTimeout(() => {
            const letras = document.querySelectorAll('#nome-animado span');
            letras.forEach(span => {
                span.classList.add('letra-animada'); // Adiciona a classe que dispara a animação CSS
            });
        }, 500); 
    }

    // Chama a função principal de animação
    dividirNome();

    // --- 2. LÓGICA DO MENU HAMBURGER ---
    const menuToggle = document.getElementById('menu-toggle');
    const navegacaoPrincipal = document.getElementById('navegacao-principal');

    if (menuToggle && navegacaoPrincipal) {
        menuToggle.addEventListener('click', () => {
            // Alterna a classe que mostra/esconde o menu
            navegacaoPrincipal.classList.toggle('menu-aberto');
            
            // Altera o ícone (☰ para X)
            if (navegacaoPrincipal.classList.contains('menu-aberto')) {
                menuToggle.innerHTML = '✕'; 
            } else {
                menuToggle.innerHTML = '☰';
            }
        });
        
        // Opcional: Fechar o menu ao clicar em um link (navegar)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                // --- 2. LÓGICA DO MENU HAMBURGER ---
    const menuToggle = document.getElementById('menu-toggle');
    const navegacaoPrincipal = document.getElementById('navegacao-principal');

    // ⚠️ Importante: Verifica se ambos os elementos existem
    if (menuToggle && navegacaoPrincipal) {
        menuToggle.addEventListener('click', () => {
            // Alterna a classe que mostra/esconde o menu
            navegacaoPrincipal.classList.toggle('menu-aberto');
            
            // Altera o ícone (☰ para X)
            if (navegacaoPrincipal.classList.contains('menu-aberto')) {
                menuToggle.innerHTML = '✕'; 
            } else {
                menuToggle.innerHTML = '☰';
            }
        });
        
        // Fechar o menu ao clicar em um link (navegar)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navegacaoPrincipal.classList.remove('menu-aberto');
                menuToggle.innerHTML = '☰';
            });
        });
    }
                // Fechar o menu
                navegacaoPrincipal.classList.remove('menu-aberto');
                menuToggle.innerHTML = '☰';
            });
        });
    }

}); // Fim do DOMContentLoaded