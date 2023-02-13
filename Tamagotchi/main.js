const mascotaAburrida =
  "https://previews.123rf.com/images/cthoman/cthoman1507/cthoman150704430/42875177-una-ilustraci%C3%B3n-de-dibujos-animados-de-un-pez-de-colores-que-parece-aburrida-.jpg";

const mascotaFeliz =
  "https://previews.123rf.com/images/cthoman/cthoman1507/cthoman150704219/42873645-un-ejemplo-de-la-historieta-de-un-goldfish-feliz-y-sonriente-.jpg";

const mascotaTriste =
  "https://previews.123rf.com/images/cthoman/cthoman1507/cthoman150704288/42874409-una-ilustraci%C3%B3n-de-dibujos-animados-de-un-pez-de-colores-tristes-y-llorando-.jpg";

const mascotaMuerta =
  "https://st.depositphotos.com/1354412/2830/v/450/depositphotos_28304491-stock-illustration-fish-bones-skeleton-cartoon-character.jpg";

const empezar = document.getElementById("empezar");
const alimentar = document.getElementById("alimentar");
const jugar = document.getElementById("jugar");
const dormir = document.getElementById("dormir");
const mascota = document.getElementById("mascota");
const progresoH = document.getElementById("progreso-hambre");
const progresoD = document.getElementById("progreso-diversion");
const progresoS = document.getElementById("progreso-sueño");
const progresoV = document.getElementById("progreso-vida");

empezar.addEventListener("click", () => {
  setInterval(() => {
    reducirBarra(progresoH, 15);
    reducirBarra(progresoD, 10);
    reducirBarra(progresoS, 10);
  }, 1000);
});

const reducirBarra = (htmlElement, reducirPx) => {
  let width = Number(htmlElement.style.width.replace("px", ""));
  if (width > 0) {
    width = width - reducirPx;
    if (width < 0) {
      width = 0;
    }
    htmlElement.style.width = `${width}px`;

    cambiarColor(htmlElement);
  }
  if (width == 0) {
    reducirVida(htmlElement);
  }
};

alimentar.addEventListener("click", () => {
  agregarBarra(progresoH);
});

jugar.addEventListener("click", () => {
  agregarBarra(progresoD);
});

dormir.addEventListener("click", () => {
  agregarBarra(progresoS);
});

const agregarBarra = (htmlElement) => {
  let width = Number(htmlElement.style.width.replace("px", ""));
  width = width + 10;
  if (width > 200) {
    width = 200;
  }
  htmlElement.style.width = `${width}px`;
};

const cambiarColor = (htmlElement) => {
  const width = Number(htmlElement.style.width.replace("px", ""));
  if (width >= 50 && width <= 100) {
    htmlElement.style.backgroundColor = "yellow";
  } else if (width < 50 && width > 0) {
    htmlElement.style.backgroundColor = "red";
  } else {
    htmlElement.style.backgroundColor = "green";
  }
};

const cambiarImagen = () => {
  const widthV = Number(progresoV.style.width.replace("px", ""));
  if (widthV >= 50 && widthV <= 100) {
    mascota.src = mascotaAburrida;
  } else if (widthV < 50 && widthV > 0) {
    mascota.src = mascotaTriste;
  } else if (widthV == 0) {
    mascota.src = mascotaMuerta;
  } else {
    mascota.src = mascotaFeliz;
  }
};

const reducirVida = (htmlElement) => {
  let width = Number(htmlElement.style.width.replace("px", ""));
  let widthV = Number(progresoV.style.width.replace("px", ""));

  if (width == 0 && widthV > 0) {
    widthV = widthV - 5;
  }
  progresoV.style.width = `${widthV}px`;
  cambiarColor(progresoV);
  cambiarImagen();
};
