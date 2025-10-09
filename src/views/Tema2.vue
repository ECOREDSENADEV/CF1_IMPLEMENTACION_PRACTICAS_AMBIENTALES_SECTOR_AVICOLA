<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Sistemas de producción avícola
    
    p.mb-5 Los sistemas de producción avícola pueden clasificarse en intensivo, semi intensivo y extensivo. A continuación se describen en detalle:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Intensivo
              p Se caracteriza porque las aves están alojadas en espacios cerrados, más conocidos como galpones tecnificados, lo cual hace necesario concentrar más aves por área. Esto busca generar mayor eficiencia en la producción. Por lo tanto, el manejo operativo de estos sistemas requiere de medidas y herramientas que garanticen el buen estado de las aves. Se deben realizar inversiones en tecnologías y cumplir con protocolos para prevenir enfermedades y proliferación de plagas.

              p Según la empresa FINCA (s.f), en sistemas de piso para gallinas ponedoras la densidad recomendada es de 7 a 9 aves/m², mientras que en pollos de engorde se recomienda una densidad de 10 a 12 aves/m².

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Semi intensivo
              p En este caso, las aves cuentan con espacios cubiertos y también al aire libre para pastoreo. El área o galpón puede construirse con materiales como malla, madera, polisombra, de tal forma que se garantice que las aves pueden estar confinadas bajo condiciones seguras. Se debe distribuir en la zona cubierta los bebederos, comederos y nidos (cuando son gallinas ponedoras).

              p En este tipo de sistemas se recomienda que en determinadas horas del día las aves salgan a pastoreo. En horas de la noche deben ser ingresadas al área cubierta.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Extensivo
              p Las aves cuentan con espacios o ambientes al aire libre, lo cual indica que se requieren mayores áreas para su producción. Es un sistema tradicional, por lo que puede encontrarse en muchas granjas donde la producción avícola se desarrolla para el autoconsumo o para abastecer a pequeñas comunidades. En este caso se requieren pocas inversiones, los espacios no cuentan con barreras ni lugares específicos para las aves.

</template>

<script>
export default {
  name: 'Tema2',
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
