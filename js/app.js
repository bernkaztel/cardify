const galleryContainer = document.getElementById("gallery");

//Funcion para cambiar a figure
const changeToFigure = gallery => {
    //Creamos colección de imagenes
    const images = gallery.getElementsByTagName("img");
    //Convertir a Array
    const arrayImages = Array.prototype.slice.call(images);
    arrayImages.forEach(function (img) {
        //Tomar atributos
        const imgSRC = img.getAttribute("src");
        const imgALT = img.getAttribute("alt");
        //Crear plantilla
        var figTemplate = `<figure class="col-8 offset-4"><img src=${imgSRC} class="img-responsive" heigh="300px" width="300px"></img><figcaption>${imgALT}</figcaption></figure>`;
        //Reemplazar plantilla
        img.outerHTML = figTemplate;
    });
};
//Llamando función
changeToFigure(galleryContainer);