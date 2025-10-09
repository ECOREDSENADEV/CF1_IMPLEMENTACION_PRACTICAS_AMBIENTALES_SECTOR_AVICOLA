<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Aspectos ambientales de la producción avícola

    p.mb-5 A continuación, se presenta un video que aborda los principales aspectos ambientales asociados a las actividades del sector avícola, con el fin de identificar sus posibles impactos y promover una gestión ambiental responsable y sostenible.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    .bg-color-9.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema5/1.svg", style="max-width: 90px").mx-auto
          .col-lg
            h5.bg-color-10 Recuerde:
            p.mb-0.text-white Un aspecto ambiental es aquel que puede generar un impacto ambiental producido por una obra, proyecto o actividad. Según se define en la Norma ISO 14001:2015, es el elemento de las actividades, productos o servicios de una organización que puede interactuar con el medio ambiente.
    
    p.mb-5 A continuación, se describen los principales aspectos ambientales que se relacionan con los procesos del sector avícola:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Consumo de agua
              p <b>Medio físico (agua)</b>: uso intensivo del recurso hídrico para bebida, limpieza y refrigeración.
              h5 Alimentación
              p <b>Medio biótico (flora y fauna)</b>: uso de insumos agrícolas como maíz y concentrados, que pueden afectar la biodiversidad por prácticas intensivas de cultivo o deforestación.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Manejo de gallinaza
              p <b>Físico (suelo y agua), biótico (biota acuática)</b>: generación de residuos orgánicos que pueden contaminar fuentes hídricas y suelos si no se gestionan adecuadamente.
              h5 Limpieza y desinfección
              p <b>Físico (agua, aire), social (salud humana)</b>: uso de productos químicos que pueden afectar la calidad del agua, del aire y la salud del personal si no se aplican medidas de control.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Iluminación y ventilación
              p <b>Físico</b>: consumo energético elevado, especialmente en sistemas de producción intensiva.
              h5 Transporte
              p <b>Físico (aire), social (comunidades cercanas)</b>: emisiones por uso de combustibles fósiles, ruido y tránsito que afecta la calidad del aire y la tranquilidad de zonas rurales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Faenado y procesamiento
              p <b>Físico (suelo y agua), social (salud pública)</b>: generación de subproductos y residuos biológicos que requieren tratamiento adecuado para evitar contaminación.
              h5 Proceso en planta de sacrificio
              p <b>Físico (suelo y agua), social (salud pública), aire</b>: generación de vertimientos y emisiones que afectan la salud y los ecosistemas cercanos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Manejo de mortalidades
              p <b>Biótico (fauna), social (bienestar), aire</b>: manejo inadecuado de cadáveres puede generar olores ofensivos, atraer vectores y afectar la salud pública y animal.
              h5 Levante de pollos
              p <b>Biótico (fauna), social (bienestar), aire</b>: condiciones de manejo pueden generar emisiones, afectar el bienestar animal y la percepción de la comunidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Proceso productivo
              p <b>Biótico (fauna), social (bienestar y economía), aire</b>: contribución a la economía local, pero también se generan emisiones y expectativas comunitarias frente a la producción.




</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
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
