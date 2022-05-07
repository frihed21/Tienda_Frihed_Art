function camposCorrectos({ tipo, precio }) {
    if (tipo == "" || tipo.trim() == "") {
      Swal.fire({
        title: "Error!",
        text: "El tipo de producto no puede estar vacio",
        imageUrl: "https://i.pinimg.com/236x/29/63/4a/29634a99ea76e89d6dd6bbdc15b7de08--monsters-inc-university-disney-marvel.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
      return false;
    }
    if (precio == "" || precio.trim() == "") {
      Swal.fire({
        title: "Error!",
        text: "El tamaño de producto no puede estar vacio",
        imageUrl: "https://i.pinimg.com/236x/29/63/4a/29634a99ea76e89d6dd6bbdc15b7de08--monsters-inc-university-disney-marvel.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
      return false;
    }
    return true;
  }
  