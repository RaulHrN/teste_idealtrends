const carouselImages = [
    { src: '../src/assets/images/image_1.jpg', alt: 'Imagem 1', description: "florest", title: "Lorem ipsum dolor sit amet" },
    { src: '../src/assets/images/image_2.jpg', alt: 'Imagem 2', description: "florest", title: "Lorem ipsum dolor sit amet" },
    { src: '../src/assets/images/image_3.jpg', alt: 'Imagem 3', description: "florest", title: "Lorem ipsum dolor sit amet" },
];

const HomePage = `
    <main>
        <section id="carousel-section">
            <article class="splide carousel-main">
                <div class="splide__track">
                    <ul class="splide__list">
                        ${carouselImages.map(image => `
                            <li class="splide__slide">
                                <img src="${image.src}" alt="${image.alt}" description="${image.description}">
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </article>
        </section>

        <section id="info-section">
            <article class="info-article">
                <title class="article-title">Info Section Title</title>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit lacus eu elit porta, ac imperdiet orci malesuada. Suspendisse potenti. Sed bibendum ornare suscipit. Duis sagittis, erat quis commodo finibus, dolor magna consequat magna, at commodo leo velit eu nibh. Mauris leo tortor, molestie et quam eget, feugiat vehicula eros. Cras tempus ut nibh nec elementum. Praesent interdum vulputate finibus. Nunc mattis purus id condimentum auctor. Nulla et finibus libero. Nullam pretium finibus tincidunt. Praesent consequat felis et dui viverra, id faucibus nunc viverra. Fusce nec ante sit amet lacus rhoncus molestie. Proin sem enim, viverra sed feugiat eu, congue in lacus.
                </p>
                <p>
                Proin auctor fringilla varius. Vivamus eget ex urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent nunc lorem, imperdiet ut ante vel, sagittis molestie nisl. Cras tempus convallis erat sed ornare. Integer non sapien euismod, feugiat elit quis, cursus ex. Fusce iaculis sollicitudin interdum. Vivamus ac dui volutpat, laoreet urna eu, vehicula ante. Ut viverra mi eu magna mattis euismod. Mauris volutpat bibendum erat, nec semper lectus tristique nec. Suspendisse eget aliquet dui. Nullam a euismod est, vel tristique nisl. Duis ac euismod eros, ac ullamcorper urna. Etiam aliquam malesuada nulla, quis tincidunt tellus fringilla sed. Vivamus id ornare justo.
                </p>
            </article>
            <figure class="info-image">
                <img src="../src/assets/images/image_1.jpg" alt="Imagem 1">
            </figure>
        </section>

        <section id="blog-section">
            <title class="article-title">Blog Section Title</title>
            <article class="splide carousel-blog">
                <div class="splide__track">
                    <ul class="splide__list">
                        ${carouselImages.map(image => `
                            <li class="splide__slide">
                                <img src="${image.src}" alt="${image.alt}" description="${image.description}">
                                <p>${image.title}</p>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </article>
        </section>
    </main>
`;

// Splide
function initSplide() {
    // Inicializa o primeiro carrossel
    new Splide('.carousel-main', {
        type: 'loop',
        perPage: 2,
        perMove: 1,
        autoplay: true,
        pagination: false,
        arrows: false,
        gap: '1rem',
        breakpoints: {
            768: {
                perPage: 1,
            },
        }
    }).mount();

    // Inicializa o segundo carrossel
    new Splide('.carousel-blog', {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        autoplay: true,
        pagination: false,
        arrows: false,
        gap: '1rem',
        breakpoints: {
            768: {
                perPage: 1,
            },
        }
    }).mount();
}

export { HomePage, initSplide };
