$(document).ready(function() {
    const textos = [
        "A Opyum Squad é a mente por trás do código, transformando ideias em sistemas que fazem a diferença",
        "Criamos Sites e Landing Pages usando as melhores tecnologias do mercado, com foco total em performance, SEO e alta conversão.",
        "Transformamos códigos em impacto, com foco em inovação e performance"
    ];

    // Array de ícones com as tecnologias e suas cores, usando imagens personalizadas
    const icones = [
        [
            "<i class='fab fa-html5' style='color: #e34c26;'></i>", // HTML
            "<i class='fab fa-css3-alt' style='color: #1572b6;'></i>", // CSS
            "<i class='fab fa-js' style='color: #f7df1e;'></i>", // JavaScript
            "<img src='path/to/wordpress-icon.svg' alt='WordPress' style='width: 30px;' />", // WordPress (Imagem SVG personalizada)
            "<i class='fab fa-bootstrap' style='color: #563d7c;'></i>", // Bootstrap
            "<img src='path/to/sql-icon.svg' alt='SQL' style='width: 30px;' />" // SQL (Imagem SVG personalizada)
        ], // Slide 1
        [
            "<i class='fab fa-html5' style='color: #e34c26;'></i>", // HTML
            "<i class='fab fa-css3-alt' style='color: #1572b6;'></i>", // CSS
            "<i class='fab fa-js' style='color: #f7df1e;'></i>", // JavaScript
            "<i class='fab fa-react' style='color: #61dafb;'></i>", // React
            "<i class='fab fa-bootstrap' style='color: #563d7c;'></i>", // Bootstrap
            "<img src='path/to/sql-icon.svg' alt='SQL' style='width: 30px;' />" // SQL (Imagem SVG personalizada)
        ], // Slide 2
        [
            "<i class='fab fa-html5' style='color: #e34c26;'></i>", // HTML
            "<i class='fab fa-css3-alt' style='color: #1572b6;'></i>", // CSS
            "<i class='fab fa-js' style='color: #f7df1e;'></i>", // JavaScript
            "<i class='fab fa-python' style='color: #306998;'></i>", // Python
            "<i class='fab fa-bootstrap' style='color: #563d7c;'></i>", // Bootstrap
            "<img src='path/to/sql-icon.svg' alt='SQL' style='width: 30px;' />" // SQL (Imagem SVG personalizada)
        ] // Slide 3
    ];

    $(".header-carousel").on("changed.owl.carousel", function(event) {
        let index = event.item.index - event.relatedTarget._clones.length / 2;
        index = ((index % textos.length) + textos.length) % textos.length;

        // Atualiza o texto
        $("#header-text").fadeOut(300, function() {
            $(this).text(textos[index]).fadeIn(300);
        });

        // Troca entre as divs de texto e ícones
        if (index === 0) {
            $("#info-container").fadeIn(300);
            $(".tech-icons").fadeOut(300); // Esconde os ícones de tecnologia
        } else {
            $("#info-container").fadeOut(300); // Esconde os contadores
            $(".tech-icons").fadeIn(300).html(icones[index].join(' ')); // Insere os ícones de tecnologia
        }

        // Atualiza os contadores e textos dentro da div "info-container"
        $("#tech-row .col-sm-4").each(function(i) {
            if (index === 0) {
                $(this).find('h2').text(i === 0 ? "123" : i === 1 ? "1234" : "12345");
                $(this).find('p').html(i === 0 ? "<i class='bi bi-lightbulb-fill me-2'></i>Ideias" : i === 1 ? "<i class='bi bi-cpu-fill me-2'></i>Sistemas" : "<i class='bi bi-rocket-takeoff-fill me-2'></i>Projetos");
            } else {
                $(this).find('h2').html(icones[index][i]);
                $(this).find('p').text('');
            }
        });
    });
});
