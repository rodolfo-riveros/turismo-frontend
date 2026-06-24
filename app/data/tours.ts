export interface Tour {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  story: string;
  highlights: string[];
  duration: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  currency: string;
  images: string[];
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  maxCapacity: number;
  category: string[];
}

export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
}

export const tours: Tour[] = [
  {
    id: "1",
    slug: "valle-sagrado",
    title: "Valle Sagrado Esencial",
    subtitle: "Descubre la magia de los Incas en un recorrido inolvidable",
    description: "Sumérgete en un viaje de dos días por el corazón del Valle Sagrado de los Incas. Visitarás mercados tradicionales, ruinas milenarias y disfrutarás de la gastronomía local en un entorno natural impresionante.",
    story: "Cuenta la leyenda que el Valle Sagrado fue el lugar elegido por los antiguos incas para conectar con la naturaleza y los dioses. Cada piedra, cada montaña, guarda historias de un imperio que supo vivir en armonía con su entorno. Hoy, tú puedes ser parte de esa historia.",
    highlights: [
      "Mercado de Pisac con artesanías locales",
      "Ruinas de Ollantaytambo",
      "Almuerzo tradicional andino",
      "Visita a comunidades locales",
      "Vistas panorámicas del valle"
    ],
    duration: "2 días / 1 noche",
    location: "Cusco, Perú",
    rating: 4.8,
    reviewCount: 234,
    price: 189,
    currency: "USD",
    images: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=80",
      "https://images.unsplash.com/photo-1526392060635-9d601c43719e?w=1200&q=80",
      "https://images.unsplash.com/photo-1580619305218-8423a7a79b4c?w=1200&q=80",
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1200&q=80"
    ],
    itinerary: [
      { time: "7:00 AM", title: "Recojo del hotel", description: "Nuestro guía pasará por ti para iniciar la aventura." },
      { time: "8:30 AM", title: "Mercado de Pisac", description: "Explora el colorido mercado artesanal y conoce a los artesanos locales." },
      { time: "10:30 AM", title: "Ruinas de Pisac", description: "Recorrido guiado por las terrazas y templos incas." },
      { time: "12:30 PM", title: "Almuerzo tradicional", description: "Degusta un bufet con lo mejor de la cocina andina." },
      { time: "2:30 PM", title: "Ollantaytambo", description: "Visita a la fortaleza inca y sus impresionantes andenes." },
      { time: "5:00 PM", title: "Retorno al hotel", description: "Traslado de regreso para descansar." }
    ],
    inclusions: [
      "Transporte privado",
      "Guía profesional bilingüe",
      "Entradas a todos los sitios",
      "Almuerzo tradicional",
      "Agua embotellada",
      "Seguro de viaje"
    ],
    exclusions: [
      "Desayunos",
      "Cenas",
      "Gastos personales",
      "Propinas"
    ],
    maxCapacity: 15,
    category: ["Cultura", "Aventura", "Historia"]
  },
  {
    id: "2",
    slug: "machu-picchu-vip",
    title: "Machu Picchu VIP",
    subtitle: "La experiencia más exclusiva en la ciudad perdida de los Incas",
    description: "Accede a Machu Picchu con todos los privilegios. Disfruta de un tour privado con guía especializado, acceso prioritario y una experiencia gastronómica única con vista a la montaña sagrada.",
    story: "Construida en el siglo XV y redescubierta en 1911, Machu Picchu es mucho más que ruinas. Es un testimonio de la ingeniería y la cosmovisión inca. Nuestro tour VIP te permite conectar con este legado de una manera íntima y exclusiva.",
    highlights: [
      "Acceso prioritario sin filas",
      "Guía privado arqueólogo",
      "Almuerzo gourmet con vista",
      "Transporte de lujo ida y vuelta",
      "Fotografías profesionales"
    ],
    duration: "1 día",
    location: "Cusco, Perú",
    rating: 4.9,
    reviewCount: 189,
    price: 450,
    currency: "USD",
    images: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=80",
      "https://images.unsplash.com/photo-1526392060635-9d601c43719e?w=1200&q=80",
      "https://images.unsplash.com/photo-1580619305218-8423a7a79b4c?w=1200&q=80",
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1200&q=80"
    ],
    itinerary: [
      { time: "4:00 AM", title: "Recojo del hotel", description: "Traslado privado a la estación de tren." },
      { time: "5:30 AM", title: "Tren panorámico", description: "Viaje en tren con ventanas panorámicas y desayuno a bordo." },
      { time: "8:00 AM", title: "Llegada a Machu Picchu", description: "Acceso prioritario con tu guía privado." },
      { time: "10:00 AM", title: "Tour guiado completo", description: "Recorrido detallado por todos los sectores." },
      { time: "1:00 PM", title: "Almuerzo exclusivo", description: "En el restaurante Sanctuary Lodge." },
      { time: "3:00 PM", title: "Tiempo libre", description: "Explora por tu cuenta o toma fotos." }
    ],
    inclusions: [
      "Transporte privado hotel-estación",
      "Tren turístico ida y vuelta",
      "Bus de subida y bajada",
      "Entrada a Machu Picchu",
      "Guía privado arqueólogo",
      "Almuerzo gourmet",
      "Seguro de viaje integral"
    ],
    exclusions: [
      "Huayna Picchu o Montaña",
      "Cenas",
      "Gastos personales"
    ],
    maxCapacity: 8,
    category: ["Lujo", "Cultura", "Historia"]
  },
  {
    id: "3",
    slug: "andes-downhill",
    title: "Andes Downhill",
    subtitle: "Aventura extrema en bicicleta por los Andes peruanos",
    description: "Para los amantes de la adrenalina. Desciende más de 3,000 metros en bicicleta por la carretera más peligrosa del mundo, rodeado de paisajes andinos de ensueño.",
    story: "La ruta del Abra Málaga, conocida como la 'carretera de la muerte', es hoy un desafío para los aventureros. Este descenso en bicicleta de montaña te lleva desde los 4,300 msnm hasta los 1,200 msnm, atravesando nubes y paisajes que quitan el aliento.",
    highlights: [
      "Descenso de 3,000 metros",
      "Bicicletas de montaña profesionales",
      "Equipo de seguridad completo",
      "Guías expertos en ciclismo",
      "Fotografías aéreas con dron"
    ],
    duration: "1 día",
    location: "Cusco, Perú",
    rating: 4.7,
    reviewCount: 156,
    price: 120,
    currency: "USD",
    images: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=80",
      "https://images.unsplash.com/photo-1526392060635-9d601c43719e?w=1200&q=80",
      "https://images.unsplash.com/photo-1580619305218-8423a7a79b4c?w=1200&q=80",
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1200&q=80"
    ],
    itinerary: [
      { time: "6:00 AM", title: "Recojo del hotel", description: "Te recogemos con todo el equipo listo." },
      { time: "8:00 AM", title: "Preparación y briefing", description: "Charla de seguridad y ajuste de bicicletas." },
      { time: "9:00 AM", title: "Inicio del descenso", description: "Desde el Abra Málaga, comenzamos el descenso." },
      { time: "11:00 AM", title: "Parada panorámica", description: "Descanso con vista al valle y fotos." },
      { time: "1:00 PM", title: "Almuerzo en ruta", description: "Comida tradicional en un pueblo local." },
      { time: "4:00 PM", title: "Llegada a Santa María", description: "Fin del descenso. Retorno a Cusco." }
    ],
    inclusions: [
      "Bicicleta de montaña profesional",
      "Casco, rodilleras y guantes",
      "Guía especializado",
      "Transporte de retorno",
      "Almuerzo",
      "Fotografías con dron",
      "Seguro de accidentes"
    ],
    exclusions: [
      "Ropa técnica (se puede rentar)",
      "Gastos personales",
      "Propinas"
    ],
    maxCapacity: 12,
    category: ["Aventura", "Deportes", "Extremo"]
  },
  {
    id: "4",
    slug: "amazonia-explorer",
    title: "Amazonía Explorer",
    subtitle: "Expedición de 3 días por la selva amazónica peruana",
    description: "Vive la experiencia más auténtica en la Amazonía peruana. Navega por el río Madre de Dios, avista fauna silvestre y convive con comunidades nativas.",
    story: "La Amazonía es el pulmón del mundo y el hogar de miles de especies. En esta expedición, te adentrarás en la selva virgen guiado por expertos locales que conocen cada sonido, cada rastro y cada secreto de este ecosistema único.",
    highlights: [
      "Navegación por el río Madre de Dios",
      "Avistamiento de monos y guacamayos",
      "Caminata nocturna en la selva",
      "Visita a comunidad nativa",
      "Canopy y tirolesa"
    ],
    duration: "3 días / 2 noches",
    location: "Puerto Maldonado, Perú",
    rating: 4.6,
    reviewCount: 198,
    price: 320,
    currency: "USD",
    images: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=80",
      "https://images.unsplash.com/photo-1526392060635-9d601c43719e?w=1200&q=80",
      "https://images.unsplash.com/photo-1580619305218-8423a7a79b4c?w=1200&q=80",
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1200&q=80"
    ],
    itinerary: [
      { time: "8:00 AM", title: "Recepción en Puerto Maldonado", description: "Traslado al lodge en la selva." },
      { time: "10:00 AM", title: "Caminata de introducción", description: "Primer contacto con la flora y fauna." },
      { time: "2:00 PM", title: "Navegación en canoa", description: "Exploración del río y lagunas." },
      { time: "6:00 PM", title: "Caminata nocturna", description: "Descubre la selva de noche." }
    ],
    inclusions: [
      "Traslados desde aeropuerto",
      "Alojamiento en lodge",
      "Todas las comidas",
      "Guía naturalista",
      "Equipo de navegación",
      "Botas de lluvia"
    ],
    exclusions: [
      "Vuelos a Puerto Maldonado",
      "Bebidas alcohólicas",
      "Gastos personales"
    ],
    maxCapacity: 16,
    category: ["Naturaleza", "Aventura", "Ecoturismo"]
  },
  {
    id: "5",
    slug: "cocina-andina",
    title: "Cocina Andina",
    subtitle: "Taller de cocina tradicional peruana en el corazón de Cusco",
    description: "Aprende los secretos de la gastronomía peruana de la mano de chefs locales. Visita el mercado, selecciona ingredientes frescos y cocina platos tradicionales.",
    story: "La cocina peruana es una fusión de culturas y sabores. Este taller te lleva desde el mercado hasta la mesa, enseñándote a preparar ceviche, lomo saltado y el clásico causa limeña.",
    highlights: [
      "Visita guiada al mercado de San Pedro",
      "Clase de cocina con chef local",
      "Preparación de 3 platos",
      "Maridaje con bebidas tradicionales",
      "Recetario digital"
    ],
    duration: "Medio día",
    location: "Cusco, Perú",
    rating: 4.9,
    reviewCount: 312,
    price: 75,
    currency: "USD",
    images: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=80",
      "https://images.unsplash.com/photo-1526392060635-9d601c43719e?w=1200&q=80",
      "https://images.unsplash.com/photo-1580619305218-8423a7a79b4c?w=1200&q=80",
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1200&q=80"
    ],
    itinerary: [
      { time: "9:00 AM", title: "Mercado de San Pedro", description: "Compra de ingredientes frescos." },
      { time: "10:30 AM", title: "Inicio de la clase", description: "Preparación de entrada y plato principal." },
      { time: "12:30 PM", title: "Degustación", description: "Disfruta de lo que cocinaste." },
      { time: "2:00 PM", title: "Postre y cierre", description: "Preparación de un postre tradicional." }
    ],
    inclusions: [
      "Todos los ingredientes",
      "Chef instructor",
      "Bebidas tradicionales",
      "Recetario digital",
      "Certificado de participación"
    ],
    exclusions: [
      "Transporte al punto de encuentro",
      "Propinas"
    ],
    maxCapacity: 10,
    category: ["Gastronomía", "Cultura"]
  },
  {
    id: "6",
    slug: "laguna-humantay",
    title: "Laguna Humantay",
    subtitle: "Trekking a la laguna turquesa más bella de los Andes",
    description: "Una caminata de dificultad moderada que te lleva a una de las lagunas más espectaculares del Perú. Aguas turquesas rodeadas de picos nevados.",
    story: "Los antiguos peruanos consideraban esta laguna un lugar sagrado. Sus aguas color turquesa, alimentadas por el deshielo del nevado Humantay, crean un paisaje de ensueño que parece sacado de un cuadro.",
    highlights: [
      "Laguna de color turquesa intenso",
      "Vistas del nevado Humantay",
      "Caminata por paisajes andinos",
      "Guía de alta montaña",
      "Fotografías panorámicas"
    ],
    duration: "1 día",
    location: "Cusco, Perú",
    rating: 4.7,
    reviewCount: 267,
    price: 85,
    currency: "USD",
    images: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=80",
      "https://images.unsplash.com/photo-1526392060635-9d601c43719e?w=1200&q=80",
      "https://images.unsplash.com/photo-1580619305218-8423a7a79b4c?w=1200&q=80",
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1200&q=80"
    ],
    itinerary: [
      { time: "4:30 AM", title: "Recojo del hotel", description: "Salida temprana hacia Mollepata." },
      { time: "6:00 AM", title: "Desayuno en Mollepata", description: "Desayuno ligero antes de la caminata." },
      { time: "7:00 AM", title: "Inicio del trekking", description: "Ascenso de 2 horas hacia la laguna." },
      { time: "9:30 AM", title: "Llegada a la laguna", description: "Tiempo libre para fotos y meditación." },
      { time: "11:30 AM", title: "Retorno", description: "Descenso de regreso a Mollepata." }
    ],
    inclusions: [
      "Transporte ida y vuelta",
      "Guía de alta montaña",
      "Desayuno y almuerzo",
      "Bastones de trekking",
      "Botiquín de primeros auxilios",
      "Oxígeno portátil"
    ],
    exclusions: [
      "Ropa técnica",
      "Gastos personales",
      "Propinas"
    ],
    maxCapacity: 20,
    category: ["Naturaleza", "Aventura", "Trekking"]
  }
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find(t => t.slug === slug);
}

export function getToursByCategory(category: string): Tour[] {
  return tours.filter(t => t.category.includes(category));
}
