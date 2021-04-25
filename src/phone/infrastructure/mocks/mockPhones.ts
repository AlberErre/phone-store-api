import { ImageUrlType, Phone } from "../../domain/Phone";

export const mockPhones: Phone[] = [
  {
    brand: "Apple",
    name: "iPhone 12 5G 64GB",
    description:
      "Este nuevo iPhone no está dentro ni de la Generación Z. Es tan moderno, que aún están averiguando de dónde viene… ¿Del espacio? Tiene un procesador Apple A14, capaz de ofrecer un 16% más de rendimiento. Además, tiene incorporado el modo Smart Data, que equilibra tus datos mejor que la dieta mediterránea para que tenga más autonomía. Pero ahora vamos con lo fuerte: su diseño mega moderno digno de salir en el Vogue. Compuesto por una carcasa de aluminio de calidad aeroespacial y la cubierta frontal Ceramic Shield, que, gracias a un nuevo proceso de cristalización a alta temperatura, multiplica por cuatro su resistencia a las caídas. Además de resistencia al agua y al polvo. Es decir, en idioma humano significa que te lo vas a poder llevar a todos los lugares como si fuera un Todoterreno, pero ocupando menos: 6,1” y una resolución de 2.532 x 1.170 píxeles de resolución (460 ppp).",
    image: {
      url:
        "https://allzone.es/595899-large_default/smartphones-iphone-12-256gb-verde-appi12256green.jpg",
      type: ImageUrlType.PNG,
    },
    color: "#0D8F2D",
    price: 937,
    colorDescription: "Verde",
  },

  {
    brand: "Samsung",
    name: "Samsung Galaxy A12 64GB Azul",
    description:
      "Se abre el telón ¡y aparecen las 4 cámaras del Samsung Galaxy A12! Pero no solo eso, también entran a escena la pantalla LCD IPS de 6,5 pulgadas, la batería de 5.000 mAh bien cargada para darlo todo en el escenario y el pequeño jack de audio de 3.5mm. Os recordamos que ha pasado por vestuario y viene con el sistema operativo Android 10 bajo la capa de personalización One UI.",
    image: {
      url:
        "https://allzone.es/636935-large_default/samsung-s21-g996-5g-dual-sim-8gb-ram-256gb-plata.jpg",
      type: ImageUrlType.PNG,
    },
    color: "#0431B4",
    price: 786.76,
    colorDescription: "Azul",
  },

  {
    brand: "Xiaomi",
    name: "Xiaomi Redmi Note 9T 5G 128GB",
    description:
      "Con el procesador MediaTek Dimensity 800U, los 4GB de RAM y los 128GB de almacenamiento que tiene el Xiaomi Redmi 9T podrías sacarte el doctorado, ¡y hasta un master en el extranjero! Y  si quieres seguir aprendiendo, siempre puedes dedicarte a la fotografía y practicar con su cámara de alta resolución con sensor principal de 48MP y una delantera con 13 MP.",
    image: {
      url:
        "https://allzone.es/727150-large_default/xiaomi-mi-11-5g-dual-sim-8256gb-midnight-gray-eu.jpg",
      type: ImageUrlType.PNG,
    },
    color: "#4C2882",
    price: 732.75,
    colorDescription: "Morado",
  },
];
