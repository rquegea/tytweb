export type ProjectCategory =
  | "t&tech"
  | "t&trade"
  | "t&events"
  | "t&team"
  | "t&tailor"

export interface ProjectMeta {
  id: string
  title: string
  subtitle?: string
  category: ProjectCategory
  coverImage: string // path under public/
  images?: string[]
  action?: string
  updatedAt?: string // ISO date
}

export const CATEGORIES: ProjectCategory[] = [
  "t&tech",
  "t&trade",
  "t&events",
  "t&team",
  "t&tailor",
]

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}+/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}

export function projectPathParts(project: ProjectMeta): {
  category: ProjectCategory
  slug: string
} {
  return { category: project.category, slug: slugify(project.title) }
}

export const projectsData: ProjectMeta[] = [
  {
    id: "moet-goya-window",
    title: "Moët & Chandon — Escaparate El Corte Inglés Goya",
    category: "t&trade",
    subtitle:
      "Moët & Chandon confía en nosotros para dar una visibilidad y notoriedad al producto acorde al público objetivo, ajustando la visibilidad a los requerimientos en las instalaciones del establecimiento escaparate de El Corte Inglés de Goya en Madrid. Este escaparate tenía sus dificultades para poder realizar una implementación adecuada ya que tanto el espacio para acceder como para trabajar era muy limitado y los elementos a implementar eran muy complejos, pese a ello se consiguió un excelente posicionamiento del producto en la tienda impactando al consumidor.",
    action:
      "El proyecto se inició con el análisis de las necesidades del cliente aplicando los manuales de estilo de la marca al espacio destinado a la exposición. Se propuso un  diseño disruptivo, adaptado a las dimensiones del espacio, creando un gran impacto en el consumidor. Para ello se llevó a cabo la proyección de los diversos elementos de la campaña dentro del espacio mediante renders 3D hiperrealista. De esta forma la marca era visualmente consciente de todos los detalles de la implementación desde el principio. Una herramienta visual que ayuda al cliente a estudiar con certeza todos los elementos tanto de manera global como apreciar el mínimo detalle de diseño. Pero T&T no sólo diseñó los elementos de la campaña si no que fue la encargada de la producción de todos los elementos, interiores y exteriores, como también su implementación.",
    coverImage: "/projects/t&trade/moet-escaparate-01.jpg",
    images: [
      "/projects/t&trade/moet-escaparate-02.jpg",
      "/projects/t&trade/moet-escaparate-03.jpg",
      "/projects/t&trade/moet-escaparate-04.jpg",
      "/projects/t&trade/moet-escaparate-05.jpg",
      "/projects/t&trade/moet-escaparate-06.jpg",
    ],
    updatedAt: "2025-01-10",
  },
  {
    id: "lotus-teambuilding",
    title: "Lotus — Evento de Teambuilding",
    category: "t&events",
    subtitle:
      "El cliente Lotus, del cual somos la agencia oficial de sus convenciones, nos pidió organizar un evento de teambuilding para fomentar la cohesión del equipo, la creatividad y el compromiso del equipo. Objetivos del Evento: Fomentar la colaboración y la comunicación entre los empleados. Reforzar los valores y la misión de la marca Lotus. Estimular la creatividad y la innovación. Crear un ambiente positivo y motivador.",
    action:
      "Demostramos una vez más nuestra capacidad para crear soluciones efectivas y originales para nuestros clientes, adaptándonos a sus necesidades y ofreciendo un servicio integral y personalizado.",
    coverImage: "/projects/t&events/lotus-campana-01.jpg",
    images: [
      "/projects/t&events/lotus-campana-02.jpg",
      "/projects/t&events/lotus-campana-03.jpg",
      "/projects/t&events/lotus-campana-04.jpg",
      "/projects/t&events/lotus-campana-05.jpg",
    ],
    updatedAt: "2025-01-08",
  },
  {
    id: "roc-digital-campaigns",
    title: "ROC — Campañas Digitales",
    category: "t&tech",
    subtitle:
      "La empresa internacional de cosmética y cuidado personal ROC confió en T&T para llevar a cabo diferentes comunicaciones digitales para sus redes sociales y mercados online. Nuestro equipo de diseño y creatividad se enfocó en desarrollar creatividades atractivas y potentes para cada una de las campañas, con el objetivo de destacar los productos de la marca en un mercado altamente competitivo. Utilizamos nuestra experiencia en el desarrollo de contenido visual y gráfico para crear una identidad única para cada campaña, que llamara la atención de los consumidores online y los animara a interactuar con los productos de ROC.",
    action:
      "Por otro lado, nuestro equipo de copywriting desarrolló diferentes claims para captar la atención del consumidor y persuadirlos a explorar los productos de la marca. Utilizamos nuestra experiencia en la creación de mensajes efectivos para escribir copias persuasivas y convincentes que destacaran las ventajas y beneficios de los productos de ROC. Finalmente, desarrollamos diferentes creatividades para las redes sociales oficiales de la marca y banners para potenciar las ventas en mercados online como Druni o Primor. Nos aseguramos de que cada una de las campañas estuviera en línea con la identidad visual de la marca, mientras que al mismo tiempo destacamos las características únicas de cada campaña.",
    coverImage: "/projects/t&tech/roc-campana-01.jpg",
    images: [
      "/projects/t&tech/roc-campana-02.jpg",
      "/projects/t&tech/roc-campana-03.jpg",
      "/projects/t&tech/roc-campana-04.jpg",
      "/projects/t&tech/roc-campana-05.jpg",
    ],
    updatedAt: "2025-01-05",
  },
  {
    id: "pancracio-chocolates",
    title: "Pancracio — El Corte Inglés Sanchinarro",
    category: "t&trade",
    subtitle:
      "Pancracio confía en nosotros para dar una visibilidad y notoriedad al producto acorde al público objetivo, ajustando la visibilidad a los requerimientos en las instalaciones del establecimiento escaparate de El Corte Inglés de Sanchinarro en Madrid. El cliente nos contactó con una oportunidad de implementación que requería una respuesta rápida y eficaz. Para ello, diseñamos un espacio a medida, gestionando cada fase del proceso: desde la prospección del espacio y el diseño en 3D hasta la producción de materiales, la implementación y su próxima retirada.",
    action:
      "Definimos el concepto y la dirección de arte, realizamos modelado y renders 3D para validar decisiones, coordinamos producción y logística, y ejecutamos la implementación en punto de venta con control de calidad y timing ajustado para aumentar la visibilidad del cliente.",
    coverImage: "/projects/t&trade/pancracio-01.jpg",
    images: [
      "/projects/t&trade/pancracio-02.jpg",
      "/projects/t&trade/pancracio-03.jpg",
      "/projects/t&trade/pancracio-04.jpg",
      "/projects/t&trade/pancracio-05.jpg",
      "/projects/t&trade/pancracio-06.jpg",
    ],
  },
  {
    id: "moet-gaga",
    title: "Dom Pérignon x Lady Gaga",
    category: "t&trade",
    subtitle:
      "El proyecto se inició con el análisis de las necesidades del cliente y del punto de venta. Se realizo un estudio de un diseño que llamara la atención por sí solo, ya que el espacio era grande por lo que el impacto tendría que ser mayor. Para ello se llevó a cabo la proyección de los diversos elementos de la campaña dentro del espacio mediante renders hiperrealista. De esta forma la marca era visualmente consciente de todos los detalles de la implementación desde el principio. Una herramienta visual que ayuda al cliente a estudiar con certeza todos los elementos tanto de manera global como apreciar el mínimo detalle de diseño. Pero T&T no sólo diseñó los elementos de la campaña si no que fue la encargada de la producción de todos los elementos, interiores y exteriores, así como de su implementación y desmontaje.",
    action:
      "Dirección de arte integral, desarrollo de renders hiperrealistas, producción llave en mano, coordinación logística y ejecución en tienda con control de calidad para maximizar el impacto visual de la marca.",
    coverImage: "/projects/t&trade/moet-gaga-01.jpg",
    images: [
      "/projects/t&trade/moet-gaga-02.jpg",
      "/projects/t&trade/moet-gaga-03.jpg",
      "/projects/t&trade/moet-gaga-04.jpg",
      "/projects/t&trade/moet-gaga-05.jpg",
    ],
  },
  {
    id: "ps-days-of-play",
    title: "Sony PlayStation — Days of Play",
    category: "t&trade",
    subtitle:
      "Implementación en punto de venta para la campaña Days of Play, con desarrollo de elementos promocionales, stoppers, cabeceras y visual merchandising alineado al guideline de PlayStation. Coordinamos producción, logística e instalación para múltiples tiendas con tiempos ajustados.",
    action:
      "Diseño de materiales retail, fabricación y despliegue nacional; control de calidad, auditoría fotográfica y reposición durante campaña para maximizar conversión y visibilidad de marca.",
    coverImage: "/projects/t&trade/ps-days-of-play-01.jpg",
    images: [
      "/projects/t&trade/ps-days-of-play-02.jpg",
      "/projects/t&trade/ps-days-of-play-03.jpg",
      "/projects/t&trade/ps-days-of-play-04.jpg",
      "/projects/t&trade/ps-days-of-play-05.jpg",
    ],
  },
  {
    id: "prime-welcome-pack",
    title: "PRIME — Welcome Pack",
    category: "t&tailor",
    subtitle:
      "Para dar a conocer este producto en España, desarrollamos el concepto y diseño del welcome pack. Con el objetivo de captar la atención, creamos un packaging innovador cuyo interior se elevaba para destacar el producto. Desde T&T, también nos encargamos de la distribución y logística.",
    action:
      "Lanzamiento de producto: desarrollo, producción y logística del welcome pack. Coordinamos proveedores, control de calidad, embalaje y distribución nacional para cumplir timings exigentes y garantizar una experiencia de unboxing memorable.",
    coverImage: "/projects/t&tailor/prime-01.jpg",
    images: [
      "/projects/t&tailor/prime-02.jpg",
      "/projects/t&tailor/prime-03.jpg",
      "/projects/t&tailor/prime-04.jpg",
      "/projects/t&tailor/prime-05.jpg",
    ],
  },
  {
    id: "barcelo-nevalia-trade",
    title: "Ron Barceló Nevalia",
    category: "t&trade",
    subtitle:
      "Ron Barceló Nevalia es el festival más icónico del invierno, una experiencia única que celebra la filosofía \"Liadas Apreski\" de la marca de Ron BARCELO. Cada año, miles de personas disfrutan de la música, la nieve y la fiesta en un escenario paradisíaco. Pero ¿cómo trasladar esa esencia al punto de venta y generar visibilidad del producto y la marca?\n\nLOS RESULTADOS OBTENIDOS FUERON LOS SIGUIENTES:\n\n1. Mejora de la relación con los distribuidores y los responsables de los supermercados por la calidad y profesionalidad del servicio.\n\n2. Refuerzo de la imagen de Ron Barceló como una marca innovadora, divertida y cercana a su público.\n\n3. Logramos mayor visibilidad de la marca con la implementación en 9 puntos entre Madrid y otras ciudades de España.\n\nDemostramos  una vez más nuestra capacidad para crear soluciones efectivas y originales para nuestros clientes, adaptándonos a sus necesidades y ofreciendo un servicio integral y personalizado.",
    action:
      "Activación en retail: concepto, diseño de materiales, producción, logística e implementación coordinada en múltiples PDV para maximizar la visibilidad de marca y la consistencia de ejecución.",
    coverImage: "/projects/t&trade/barcelo-nevalia-01.jpg",
    images: [
      "/projects/t&trade/barcelo-nevalia-02.jpg",
      "/projects/t&trade/barcelo-nevalia-03.jpg",
      "/projects/t&trade/barcelo-nevalia-04.jpg",
      "/projects/t&trade/barcelo-nevalia-05.jpg",
    ],
  },
  {
    id: "ruinart-rooftop",
    title: "Ruinart — Roof Top Palacio de los Duques",
    category: "t&events",
    subtitle:
      "Nos ocupamos de la transformación integral de la barra y contrabarra para la marca de prestigio Ruinart en el Roof Top de uno de los hoteles más prestigiosos de Madrid, Hotel Palacio de los Duques. Reemplazamos elementos deteriorados por diseños personalizados y realizados a medida, usando materiales de alta resistencia al sol, frío y lluvia con acabados de lujo para reflejar la excelencia de la marca.",
    action:
      "Proyecto llave en mano: diseño, selección de materiales premium, fabricación a medida, instalación in situ y mantenimiento preventivo para garantizar durabilidad y coherencia con la imagen de la maison.",
    coverImage: "/projects/t&events/ruinart-01.jpg",
    images: [
      "/projects/t&events/ruinart-02.jpg",
      "/projects/t&events/ruinart-03.jpg",
      "/projects/t&events/ruinart-04.jpg",
      "/projects/t&events/ruinart-05.jpg",
    ],
  },
  {
    id: "kelloggs-online-events",
    title: "Kellogg's x Sinacio",
    category: "t&events",
    subtitle:
      "En el año de la pandemia de la COVID-19, la empresa multinacional Kellogg’s se propuso mantener a sus empleados motivados y comprometidos, a pesar de las restricciones sanitarias y la distancia social. Para lograrlo, optaron por organizar diversas actividades en formato online, como la cena de Navidad o el reencuentro en la oficina. En este contexto, Truco y Trufa creó diferentes soluciones para garantizar que el equipo de Kellogg's pudiera participar en eventos dinámicos y entretenidos, sin comprometer su seguridad y salud.",
    action:
      "Producción integral de eventos virtuales: guionización, conducción con talento (SINACIO), dinámicas interactivas y kits personalizados (Kit COVID) para reforzar engagement y retorno emocional de marca.",
    coverImage: "/projects/t&events/kelloggs-01.jpg",
    images: [
      "/projects/t&events/kelloggs-02.jpg",
      "/projects/t&events/kelloggs-03.jpg",
      "/projects/t&events/kelloggs-04.jpg",
      "/projects/t&events/kelloggs-05.jpg",
    ],
  },
  {
    id: "moet-pharrell",
    title: "Moët & Chandon x Pharrell",
    category: "t&trade",
    subtitle:
      "Diseño de varios elementos para dar visibilidad a la colaboración de Moët & Chandon con Michael Pharrell proponiendo una decoración en parte del mobiliario del Club del Gourmet en varios centros de El Corte Inglés en varias ciudades.",
    action:
      "Desarrollo creativo y producción de in‑store decor premium (vinilos, displays y señalética), coordinación con Club del Gourmet, logística multicentro e instalación con control de calidad para asegurar consistencia de marca.",
    coverImage: "/projects/t&trade/moet-pharrell-01.jpg",
    images: [
      "/projects/t&trade/moet-pharrell-02.jpg",
      "/projects/t&trade/moet-pharrell-03.jpg",
      "/projects/t&trade/moet-pharrell-04.jpg",
      "/projects/t&trade/moet-pharrell-05.jpg",
    ],
  },
  {
    id: "campofrio-snakin-cube",
    title: "Campofrío — Snakin Mini Fuet",
    category: "t&trade",
    subtitle:
      "Campofrío nos contactó con el propósito de darle visibilidad a su formato cubo de mini fuet de Snakin. El objetivo era buscar emplazamientos adicionales en categorías afines al producto. El elemento a desarrollar tenía que tener una durabilidad en el punto de venta superior a la de un periodo promocional y la reposición tenía que ser sencilla.",
    action:
      "Acciones: diseñamos una tira versátil para posicionar el producto en categorías afines sin ocupar espacio del lineal, fabricada en plástico reciclado y alta resistencia, con impresión de gran calidad para destacar atributos organolépticos e impulsar la compra por impulso. Resultados: mayor visibilidad, potenciación del formato de mayor gramaje, aumento de reconocimiento de marca y crecimiento de ventas.",
    coverImage: "/projects/t&trade/campofrio-01.jpg",
    images: [
      "/projects/t&trade/campofrio-02.jpg",
      "/projects/t&trade/campofrio-03.jpg",
    ],
  },
]

export function findProjectBySlug(category: string, slug: string): ProjectMeta | undefined {
  if (!CATEGORIES.includes(category as ProjectCategory)) return undefined
  return projectsData.find((p) => p.category === (category as ProjectCategory) && slugify(p.title) === slug)
}

export function getProjectsByCategory(category: string): ProjectMeta[] {
  if (!CATEGORIES.includes(category as ProjectCategory)) return []
  return projectsData.filter((p) => p.category === (category as ProjectCategory))
}

export function getAllCategoryParams() {
  return CATEGORIES.map((c) => ({ category: c }))
}

export function getAllProjectParams() {
  return projectsData.map((p) => ({ category: p.category, slug: slugify(p.title) }))
}


