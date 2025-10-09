<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5.py-4
        p.mb-5 La avicultura es uno de los sectores productivos más importantes en Colombia, tanto por su aporte a la seguridad alimentaria como por su impacto económico y social. Sin embargo, las actividades que la componen generan diversos efectos sobre el medio ambiente, lo que plantea la necesidad de analizar y gestionar dichos impactos de forma adecuada. En este contexto, se reconoce la importancia de integrar la producción avícola con principios de sostenibilidad que permitan mantener la competitividad del sector y, al mismo tiempo, proteger los recursos naturales.

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p.mb-0 El componente formativo: Evaluación de impactos ambientales en los procesos productivos avícolas,  se centra en identificar, describir y valorar los aspectos e impactos ambientales generados en las diferentes etapas del sistema avícola. Para ello, se revisan los procesos de granjas, incubadoras y plantas de beneficio, junto con las metodologías que permiten establecer la magnitud y significancia de los impactos. Este enfoque busca dotar a los estudiantes de herramientas técnicas que les permitan analizar de manera crítica las interacciones entre la producción avícola y el entorno.
        
        .row.mb-5
          .col-lg-2.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/2.svg", data-aos="zoom-in")
          .col-lg-10.order-lg-1
            .bg-color-1.p-4(data-aos="fade-left")
              p.mb-0 Finalmente, se destaca que este aprendizaje no solo se limita a la teoría, sino que prepara a los futuros profesionales para aplicar medidas de manejo ambiental de tipo preventivo, correctivo, de mitigación o compensación en escenarios reales. Así, el sector avícola puede avanzar hacia modelos productivos más responsables y sostenibles, alineados con la normativa ambiental vigente y con el compromiso de garantizar el bienestar animal, la bioseguridad y la conservación de los recursos naturales.



</template>

<script>
export default {
  name: 'Introduccion',
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
