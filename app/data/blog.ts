export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "historia-detras-ciudadela-machu-picchu",
    title: "La historia detrás de la Ciudadela de Machu Picchu",
    excerpt: "Descubre los misterios y leyendas que envuelven a una de las siete maravillas del mundo moderno.",
    content: `Machu Picchu, cuyo nombre significa "Montaña Vieja" en quechua, es mucho más que un conjunto de ruinas incas. Es un testimonio vivo de una civilización que alcanzó niveles impresionantes de conocimiento en arquitectura, astronomía y agricultura.

Construida alrededor del año 1450 durante el apogeo del Imperio Inca, esta ciudadela fue erigida a 2,430 metros sobre el nivel del mar, en una cresta rocosa entre los picos Huayna Picchu y Machu Picchu.

El propósito exacto de Machu Picchu sigue siendo un misterio. Los arqueólogos creen que pudo haber sido un santuario religioso, una residencia real para el emperador Pachacútec, o un centro administrativo y ceremonial.

Lo que sí sabemos es que la ciudad fue construida con una precisión arquitectónica asombrosa. Los bloques de piedra, algunos de más de 50 toneladas, fueron tallados y ensamblados sin el uso de mortero, encajando perfectamente entre sí.

El redescubrimiento de Machu Picchu en 1911 por el explorador estadounidense Hiram Bingham capturó la imaginación del mundo. Desde entonces, millones de viajeros han llegado hasta aquí para maravillarse con este legado de la civilización inca.

Hoy, Machu Picchu es Patrimonio de la Humanidad por la UNESCO y una de las Nuevas Siete Maravillas del Mundo Moderno, atrayendo a viajeros de todos los rincones del planeta.`,
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=80",
    category: "Historia",
    author: "Wanderlust Travel",
    date: "15 Marzo 2026",
    readTime: "5 min"
  },
  {
    id: "2",
    slug: "guia-completa-valle-sagrado",
    title: "Guía completa del Valle Sagrado de los Incas",
    excerpt: "Todo lo que necesitas saber para explorar el corazón del imperio incaico.",
    content: `El Valle Sagrado de los Incas, ubicado en la provincia de Urubamba, es una región fértil y hermosa que fue el corazón agrícola y espiritual del Imperio Inca.

Este valle, bañado por el río Vilcanota, alberga algunos de los sitios arqueológicos más importantes del Perú, así como pueblos coloniales llenos de encanto y tradición.

Los principales atractivos del Valle Sagrado incluyen:

Pisac: Conocido por su mercado artesanal y sus impresionantes ruinas incas ubicadas en la cima de una montaña.

Ollantaytambo: Una fortaleza y centro ceremonial que jugó un papel crucial durante la resistencia inca contra los españoles.

Moray: Un conjunto de terrazas circulares concéntricas que los incas usaban como laboratorio agrícola.

Maras: Sus salineras, utilizadas desde tiempos preincaicos, crean un paisaje blanco que contrasta con el verde del valle.

La mejor época para visitar el Valle Sagrado es durante la temporada seca, de abril a octubre, cuando los días son soleados y las noches frescas.`,
    image: "https://images.unsplash.com/photo-1526392060635-9d601c43719e?w=1200&q=80",
    category: "Guías",
    author: "Wanderlust Travel",
    date: "10 Marzo 2026",
    readTime: "7 min"
  },
  {
    id: "3",
    slug: "aventura-selva-amazonica",
    title: "Aventura en la Selva Amazónica: Lo que debes saber",
    excerpt: "Consejos esenciales para tu primera expedición en la Amazonía peruana.",
    content: `La Amazonía peruana es uno de los destinos más biodiversos del planeta. Con más de 7 millones de kilómetros cuadrados de selva tropical, alberga una cantidad increíble de especies de flora y fauna.

Si estás planeando tu primera visita a la selva, aquí tienes algunos consejos esenciales:

Vacunas: Antes de viajar, asegúrate de tener tus vacunas al día. La fiebre amarilla y la hepatitis A son recomendadas.

Ropa: Lleva ropa ligera de manga larga, repelente de insectos, impermeable y botas de lluvia.

Equipo: Binoculares para avistamiento de aves, linterna frontal para caminatas nocturnas, y cámara con zoom.

Mejor época: La temporada seca (mayo a octubre) ofrece mejores condiciones para caminatas y navegación.

La Amazonía no es solo un destino, es una experiencia que transforma tu forma de ver el mundo.`,
    image: "https://images.unsplash.com/photo-1580619305218-8423a7a79b4c?w=1200&q=80",
    category: "Aventura",
    author: "Wanderlust Travel",
    date: "5 Marzo 2026",
    readTime: "6 min"
  },
  {
    id: "4",
    slug: "gastronomia-peruana",
    title: "La gastronomía peruana: Un viaje de sabores",
    excerpt: "Descubre por qué la cocina peruana es considerada una de las mejores del mundo.",
    content: `La gastronomía peruana es el resultado de una fusión única de tradiciones culinarias: las técnicas ancestrales andinas, la influencia española, la inmigración africana, china, japonesa e italiana.

Esta mezcla ha dado como resultado una de las cocinas más variadas y sabrosas del planeta, reconocida internacionalmente con premios como "Mejor Destino Culinario del Mundo" en los World Travel Awards.

Platos que no puedes dejar de probar:

Ceviche: El plato bandera del Perú. Pescado fresco marinado en limón, con cebolla roja, ají y camote.

Lomo Saltado: La máxima expresión de la cocina chifa (fusión peruano-china). Carne salteada con verduras y papas fritas.

Causa Limeña: Un pastel frío de papa amarilla relleno de pollo, atún o mariscos.

Ají de Gallina: Un guiso cremoso de pollo con ají amarillo, nueces y queso.

La experiencia gastronómica en Perú es tan importante como visitar sus sitios arqueológicos. ¡No te vayas sin hacer un tour de comida!`,
    image: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1200&q=80",
    category: "Gastronomía",
    author: "Wanderlust Travel",
    date: "28 Febrero 2026",
    readTime: "6 min"
  },
  {
    id: "5",
    slug: "consejos-viaje-cusco",
    title: "10 consejos para tu primer viaje a Cusco",
    excerpt: "Prepárate para tu aventura en la capital histórica del Perú.",
    content: `Cusco, la antigua capital del Imperio Inca, es una ciudad que combina historia, cultura y aventura en cada esquina. Aquí tienes 10 consejos para aprovechar al máximo tu visita:

1. Aclimatación: Llega un día antes y toma mate de coca para ayudar con la altitud.

2. Ropa en capas: El clima es imprevisible. Puede hacer sol, lluvia y frío en el mismo día.

3. Calzado cómodo: Las calles empedradas y las ruinas requieren zapatos resistentes.

4. Boleto Turístico: Compra el boleto que te da acceso a múltiples sitios.

5. Horarios: Muchos sitios cierran temprano. Planifica bien tu día.

6. Moneda: Lleva efectivo en soles para mercados y pequeños comercios.

7. Mercados: No te pierdas el Mercado de San Pedro para una experiencia auténtica.

8. Idioma: Aprende algunas palabras en quechua, los locales lo aprecian.

9. Seguridad: Cusco es segura, pero cuida tus pertenencias como en cualquier ciudad turística.

10. Disfruta: Tómate el tiempo para disfrutar de la ciudad, no solo las ruinas.`,
    image: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=1200&q=80",
    category: "Consejos",
    author: "Wanderlust Travel",
    date: "20 Febrero 2026",
    readTime: "4 min"
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
