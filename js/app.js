const galleryContainer = document.getElementById("gallery");


const changeToFigure = gallery => {
    const images = gallery.getElementsByTagName("img");
    const arrayImages = Array.prototype.slice.call(images);
    arrayImages.forEach(function (img) {
        const imgSRC = img.getAttribute("src");
        const imgALT = img.getAttribute("alt");
        var figTemplate = `<figure class="col-8 offset-4"><img src=${imgSRC} class="img-responsive" heigh="300px" width="300px"></img><figcaption>${imgALT}</figcaption></figure>`;
        img.outerHTML = figTemplate;
    });
};
changeToFigure(galleryContainer);