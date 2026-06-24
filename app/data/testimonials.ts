export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  text: string;
  tourName: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María García",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    location: "Madrid, España",
    rating: 5,
    text: "Una experiencia inolvidable. El tour por el Valle Sagrado superó todas mis expectativas. El guía fue increíblemente conocedor y el paisaje es simplemente mágico.",
    tourName: "Valle Sagrado Esencial",
    date: "Marzo 2026"
  },
  {
    id: "2",
    name: "Carlos Mendoza",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    location: "Ciudad de México, México",
    rating: 5,
    text: "Machu Picchu VIP vale cada centavo. El acceso prioritario y el guía privado hacen una gran diferencia. El almuerzo con vista a la montaña fue espectacular.",
    tourName: "Machu Picchu VIP",
    date: "Febrero 2026"
  },
  {
    id: "3",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    location: "Nueva York, EE.UU.",
    rating: 5,
    text: "Andes Downhill fue la experiencia más emocionante de mi vida. El equipo de seguridad era excelente y las vistas durante el descenso son algo que nunca olvidaré.",
    tourName: "Andes Downhill",
    date: "Enero 2026"
  },
  {
    id: "4",
    name: "Lucía Fernández",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    location: "Buenos Aires, Argentina",
    rating: 5,
    text: "La clase de cocina andina fue lo más destacado de mi viaje. Aprendí a hacer causa limeña y ahora la preparo en casa. El chef era muy paciente y divertido.",
    tourName: "Cocina Andina",
    date: "Diciembre 2025"
  },
  {
    id: "5",
    name: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    location: "Londres, Reino Unido",
    rating: 4,
    text: "La Laguna Humantay es impresionante. La caminata es exigente pero vale la pena. El guía fue muy atento con los que teníamos menos condición física.",
    tourName: "Laguna Humantay",
    date: "Noviembre 2025"
  },
  {
    id: "6",
    name: "Ana Lucía Romero",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    location: "Santiago, Chile",
    rating: 5,
    text: "Amazonía Explorer fue una experiencia transformadora. La convivencia con la comunidad nativa y la caminata nocturna en la selva son recuerdos que llevaré siempre.",
    tourName: "Amazonía Explorer",
    date: "Octubre 2025"
  }
];
