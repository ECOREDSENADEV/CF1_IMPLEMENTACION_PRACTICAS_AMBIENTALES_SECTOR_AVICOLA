export default {
  global: {
    Name:
      'Evaluación de impactos ambientales en los procesos productivos avícolas.',
    Description:
      'Este componente describe las características de los procesos productivos desarrollados en el sector avícola y sus aspectos e impactos asociados, posteriormente se identifican y se describen los métodos que pueden aplicarse para valorar dichos impactos, buscando establecer la significancia o magnitud en relación a los procesos inherentes al sector avícola, siendo esto la base para luego establecer las medidas de manejo ambiental de tipo preventivo, de mitigación o compensación para establecer los correspondientes controles en pro de desarrollar las actividades de manera sostenible. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Proceso productivo agrícola	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Granjas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Incubadoras',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Plantas de beneficio',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistemas de producción avícola',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Marco legal sobre manejo ambiental en avicultura',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Bioseguridad y sostenibilidad en sistemas productivos avícolas	',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Aspectos ambientales de la producción avícola	',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Impactos ambientales en el sector avícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Determinación de componentes ambientales afectado',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Características de los impactos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Nombres de los impactos',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Metodología de valoración de impactos ambientales',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Marco legal sobre manejo ambiental en avicultura',
      referencia:
        'Fondo Nacional Avícola y Federación Nacional de Avicultores de Colombia (2024). Todo lo que debe saber sobre la normativa ambiental en el sector avícola.',
      tipo: 'Cartilla',
      link:
        'https://fenavi.org/publicaciones-programa-ambiental/todo-lo-que-debe-saber-sobre-la-normativa-ambiental-en-el-sector-avicola/ ',
    },
    {
      tema: 'Marco legal sobre manejo ambiental en avicultura',
      referencia:
        'Instituto Colombiano Agropecuario. (2014, noviembre 13). Resolución 3651 de 2014, por medio de la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras de postura y/o levante y se dictan otras disposiciones. Diario Oficial de Colombia.',
      tipo: 'Resolución',
      link:
        'https://www.ica.gov.co/getattachment/b8cb4efd-a1b4-409e-a11d-c81b91f59025/2014R3651.aspx ',
    },
    {
      tema: 'Impactos ambientales en el sector avícola',
      referencia:
        'Cortes, M. (2025). Matriz evaluación de impactos ambientales',
      tipo: 'Excel ',
      link: 'Adjunto ',
    },
  ],
  glosario: [
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas sanitarias y preventivas que se aplican en una granja o planta de sacrificio para evitar la entrada y propagación de agentes infecciosos (como virus, bacterias o parásitos) que pueden causar enfermedades en las aves.',
    },
    {
      termino: 'Degüello',
      significado:
        'corte del cuello del ave para cortar los vasos sanguíneos principales, como las carótidas y las yugulares, con el fin de provocar la muerte y extraer la mayor cantidad de sangre posible del cuerpo del ave.',
    },
    {
      termino: 'Evisceración',
      significado:
        'proceso de extracción de las vísceras o órganos internos (como los intestinos, hígado, corazón y pulmones) de la cavidad corporal de un ave después del desplume y el degollado, y antes de la inspección sanitaria final y el procesamiento para el consumo.',
    },
    {
      termino: 'Escaldado',
      significado:
        'proceso de sumergir las canales de aves en agua caliente o vapor para aflojar las plumas y facilitar su eliminación en la fase de desplumado.',
    },
    {
      termino: 'Granja abuelas',
      significado:
        'granja donde se encuentran las aves reproductoras de alta calidad usadas para crear la siguiente generación de aves comerciales.',
    },
    {
      termino: 'Gallinaza',
      significado:
        'residuos generados de la explotación de aves de postura y/o levante que incluye excretas, plumas, cama y restos de la alimentación de las aves.',
    },
    {
      termino: 'Granja avícola',
      significado:
        'establecimiento que en el desarrollo de sus actividades tiene inmersos procesos productivos relacionados con el sector avícola.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'cambio generado sobre los componentes ambientales producto de las actividades asociadas al sector avícola.',
    },
    {
      termino: 'Valoración de impacto ambiental',
      significado:
        'evaluación de los impactos ambientales mediante cierta metodología, la cual permite determinar la importancia de dichos impactos en relación a los componentes afectados o beneficiados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arboleda, J. (2005). Manual para la evaluación de impacto ambiental de proyectos, obras o actividades. Empresas Públicas de Medellín.',
      link: '',
    },
    {
      referencia:
        'Cano Betancur, A., & Vasquez Chara, W. (2024). Modelo productivo para incrementar la productividad en las actividades del área Cría y Levante en una empresa Avícola de Caloto Cauca [Tesis de pregrado, Institución Universitaria Antonio José Camacho]. Repositorio Institucional -  Institución Universitaria Antonio José Camacho. ',
      link: '',
    },
    {
      referencia:
        'Federación Nacional de Avicultores de Colombia - FENAVI y Ministerio de Ambiente y Desarrollo Sostenible MADS (2014). Guía Ambiental para el Subsector Avícola. ',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/GUIA_AMBIENTAL_SUBSECTOR_AVICOLA.pdf',
    },
    {
      referencia:
        'Federación Nacional de Avicultores de Colombia - FENAVI. (2024). Todo lo que debe saber sobre la normativa ambiental en el sector avícola. https://fenavi.org/publicaciones-programa-ambiental/',
      link:
        'todo-lo-que-debe-saber-sobre-la-normativa-ambiental-en-el-sector-avicola/',
    },
    {
      referencia:
        'FINCA. (s.f.). Manejo eficiente de los espacios en la avicultura. ',
      link:
        'https://www.finca.co/noticias/manejo-eficiente-de-los-espacios-en-la-avicultura-clave-para-el-bienestar-y-la-produccion',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2014, noviembre 13). Resolución 3651 de 2014, por medio de la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras de postura y/o levante y se dictan otras disposiciones. Diario Oficial de Colombia.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization (ISO). (2015). ISO 14001:2015 Environmental management systems — Requirements with guidance for use. ISO.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2019, diciembre 26). Resolución 2184 de 2019, por la cual se unifica a nivel nacional tres colores para la gestión de residuos. Diario Oficial de Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2021). Listado de impactos ambientales específicos. ',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2022/04/Listado-de-Impactos-Ambientales-Especificos-2021-V.4.pdf ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
