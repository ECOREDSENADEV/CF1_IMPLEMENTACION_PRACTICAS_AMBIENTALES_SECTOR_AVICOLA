<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Impactos ambientales generados en las actividades del sector avícola',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> comprender  los aspectos prácticos relacionados con la identificación y valoración de impactos ambientales del sector avícola.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de la herramienta <em>Layer</em> en la ventana <em>Board</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Establecer medidas de manejo preventivo, de mitigación o compensación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar el consumo de agua en procesos productivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Garantizar mayor producción intensiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el uso de bioseguridad en las granjas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'La Resolución 3651 de 2014 establece',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los criterios de bienestar animal en plantas de beneficio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Requisitos para certificación de granjas avícolas bioseguras de postura y levante.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El uso racional de bolsas plásticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La reglamentación del servicio público de aseo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Qué medio ambiental se afecta principalmente con el consumo de agua en limpieza de galpones',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Suelo',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aire',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Agua',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fauna',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué se entiende por aspecto ambiental según la norma ISO 14001:2015?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El efecto positivo o negativo generado en el medio ambiente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El elemento de una actividad que puede interactuar con el medio ambiente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El cambio en las características del suelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El impacto sobre la fauna silvestre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes es una característica de los impactos ambientales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Intensidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Rentabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Productividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comercialización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Un ejemplo de impacto ambiental en el recurso aire en el sector avícola es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminución de recarga de acuíferos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incremento en la concentración de amoníaco.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Fragmentación de cobertura vegetal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fabricación de maquinaria para beneficio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Según la metodología de Conesa Fernández, un impacto con valor superior a 75 se considera:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Compatible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Moderado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Severo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crítico.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué acción del sector avícola puede generar emisiones de contaminantes atmosféricos y olores ofensivos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transporte de insumos y productos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Clasificación de pollitos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso de nidos en gallinas ponedoras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Escaldado de patas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes es un impacto ambiental asociado al recurso suelo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambio en la concentración de amoníaco.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminución de la oferta hídrica pecuaria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cambio en las características físicas y biológicas del suelo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fragmentación de la cobertura vegetal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Dentro de los requisitos de bioseguridad establecidos en la Resolución 3651 de 2014, se encuentra:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener distancia mínima de 500 m respecto a otras granjas avícolas o porcinas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar las cercas perimetrales en granjas avícolas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar la densidad de aves por m² en galpones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir la ventilación natural por mecánica obligatoriamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
