<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Proceso productivo agrícola

    .row.mb-5.align-items-center
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-2.p-4(data-aos="fade-left")
          p Los procesos productivos en el sector avícola se centran en la producción de pollos de engorde y gallinas ponedoras, ofreciendo al mercado carne y huevos, productos fundamentales de la canasta familiar. Este sistema comprende un conjunto de acciones planeadas que requieren la intervención tanto de personal capacitado como de recursos materiales especializados, todo orientado a cumplir con criterios productivos, sanitarios, ambientales, técnicos y económicos (Cano y Vásquez, 2024).
          p.mb-0 Según sus características productivas y el tipo de impacto ambiental que generan, los procesos avícolas se clasifican en tres grandes grupos:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Granjas de material genético 
              p Son la base genética del sistema avícola, encargadas de producir los huevos fértiles que serán incubados para originar las líneas comerciales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Granjas comerciales
              p Se dividen en dos tipos: gallinas ponedoras de huevo de mesa y pollos de engorde. Estas granjas están orientadas a la producción directa para el consumo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Incubadoras y plantas de beneficio de aves
              p Las incubadoras gestionan la eclosión de los huevos fértiles, mientras que las plantas de beneficio se encargan del procesamiento y distribución de las aves listas para el consumo.
    
    p.mb-5 Estos procesos forman parte de una cadena integral, como se presenta en la siguiente figura:

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Procesos avícolas

    figure
      img.mb-2(src="@/assets/curso/tema1/5.svg", data-aos="zoom-in", alt="El diagrama resume los procesos avícolas como abuelas o reproductoras, granjas comerciales de gallinas ponedoras y de pollo de engorde, incubadoras y plantas de beneficio de aves.")
      figcaption Nota. Guía Ambiental Subsector Avícola (FENAVI y MADS, 2014)
    
    separador
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5.py-4
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Granjas
          
        p.mb-5 El sistema avícola industrial se divide en tres tipos de granjas, cada una con procesos específicos según el propósito productivo: granjas abuelas o reproductoras, granjas de gallinas ponedoras para huevo de mesa y granjas de pollo de engorde.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Granjas abuelas (reproductoras)

        p.mb-5 Las granjas abuelas constituyen el punto de partida del sistema productivo. Estas aves son importadas desde casas genéticas especializadas y dan origen a las aves reproductoras comerciales. Durante su ciclo:

        .row.justify-content-center
          .col-lg-10
            .bg-color-3.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/6.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Las aves reciben vacunación tanto en la incubadora como en la granja.
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Se inicia un proceso de levante que dura entre 18 y 20 semanas.
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Posteriormente, comienza la producción de huevos fértiles, con un ciclo promedio de 61 semanas.
                      li.mb-3.d-flex
                        i.fa-solid.fa-circle-check.bg-color-5
                        p.mb-0 Al finalizar el ciclo, las aves son descartadas y la granja se prepara nuevamente (alistamiento).
    
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Granjas de gallinas ponedoras (huevo de mesa)
    
    .row.mb-5.align-items-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") En las granjas de ponedoras, las aves son alojadas sobre piso, en áreas que deben contar con nidos adecuados. La recolección de los huevos puede realizarse de manera manual o automática. Este tipo de producción extiende su ciclo hasta la semana 80, tras lo cual las gallinas también son descartadas.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Granjas de pollo de engorde
    
    .row.mb-5.align-items-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Las granjas de pollo de engorde reciben las aves con un día de nacidas. Estas son vacunadas según el plan sanitario diseñado por un veterinario. Se alojan sobre piso cubierto con viruta de madera o cascarilla de arroz. El ciclo de engorde es corto, con una duración de entre 38 y 42 días, al cabo del cual los pollos son llevados a planta de beneficio.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Fases del proceso productivo en las granjas avícolas
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5.py-4
        p.mb-5 La siguiente tabla resume las fases del proceso, diferenciando los tiempos de producción por tipo de granja:

        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Fases del proceso productivo en las granjas avícolas
        
        .tabla-a.color-acento-contenido.mb-5.pst
          table
            thead
              tr
                th.bg-color-6 Fase
                th.bg-color-6 Granjas abuelas/reproductoras
                th.bg-color-6 Granjas ponedoras
                th.bg-color-6 Granjas de pollo de engorde
            tbody.bg-color-sintesis
              tr
                td Recepción
                td Líneas genéticas abuelas
                td Pollitas de un día
                td Pollitos de un día
              tr
                td Vacunación
                td Incubadora y granja
                td Según plan sanitario
                td Según plan sanitario
              tr
                td Levante
                td 18 a 20 semanas
                td 18 a 20 semanas
                td —
              tr
                td Producción
                td Semana 21 a 61
                td Semana 21 a 80
                td 38 a 42 días
              tr
                td Final del ciclo
                td Gallinas de descarte
                td Gallinas de descarte
                td Pollo para beneficio

        separador
        
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.2	Incubadoras
    
    p.mb-5 La producción de huevos fértiles generada en las granjas abuelas y reproductoras es trasladada a las incubadoras, instalaciones diseñadas específicamente para garantizar el correcto desarrollo embrionario hasta el nacimiento del pollito.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/9.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 El proceso de incubación se realiza bajo condiciones ambientales estrictamente controladas. Los huevos son colocados en bandejas a una temperatura constante de 37 °C, lo que evita que el embrión se adhiera a la cáscara. A los 18 días, los huevos se trasladan a las nacederas, y a los 21 días ocurre la eclosión. Una vez nacen los pollitos, se realiza la clasificación por sexo y calidad, seguida de la vacunación. Finalmente, los pollitos son despachados hacia las granjas de ponedoras o de pollo de engorde, según su línea genética.
    
    p.mb-5 Las fases del proceso en incubadoras se describen a continuación:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center.p-lg-5
          .col-lg-9.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
                h4.text-center.mb-4 Recepción de huevo fértil
                p.text-center Ingreso del huevo procedente de granjas abuelas o reproductoras.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
                h4.text-center.mb-4 Clasificación
                p.text-center Revisión inicial de los huevos para descartar los que no cumplen condiciones.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
                h4.text-center.mb-4 Incubación
                p.text-center Huevos colocados en bandejas a 37 °C durante aproximadamente 18 días.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
                h4.text-center.mb-4 Traslado a nacederas
                p.text-center Día 18: los huevos se llevan a una cámara especial para eclosión.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
                h4.text-center.mb-4 Nacimiento
                p.text-center Día 21: nacimiento de los pollitos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
                h4.text-center.mb-4 Clasificación por sexo y calidad
                p.text-center Separación de machos y hembras; evaluación del estado de los pollitos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
                h4.text-center.mb-4 Vacunación
                p.text-center Aplicación de vacunas según plan sanitario.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
                h4.text-center.mb-4 Despacho
                p.text-center Envío de los pollitos a granjas de ponedoras o de engorde.
    
          .col-lg-3.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/10.png', alt='')

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Plantas de beneficio
    
    .row.mb-5.align-items-center
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-2.p-4(data-aos="fade-left")
          p Las plantas de beneficio son instalaciones especializadas donde se realiza el procesamiento de las aves en pie, transformándolas en carne en canal o despresada para su comercialización.
          p Este proceso debe cumplir estrictos requisitos sanitarios y ambientales, los cuales aplican desde el ingreso de las aves, durante el sacrificio, y hasta la recepción del producto terminado en los cuartos fríos, previo a su despacho al mercado.
    
    p.mb-5 El flujo de trabajo en las plantas de beneficio incluye diversas etapas que garantizan la calidad e inocuidad del producto final, como se detalla a continuación:

    .titulo-sexto.color-acento-contenido
      h5 Figura 2.
      span Proceso de beneficio de aves

    figure
      img.mb-2(src="@/assets/curso/tema1/20.svg", data-aos="zoom-in", alt="Diagrama del proceso de beneficio de aves que incluye etapas como recepción, insensibilización, degüello, escaldado, pelado, corte de patas, evisceración, preenfriamiento, enfriamiento, empaque y lavado de la planta. ")



    
 
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
