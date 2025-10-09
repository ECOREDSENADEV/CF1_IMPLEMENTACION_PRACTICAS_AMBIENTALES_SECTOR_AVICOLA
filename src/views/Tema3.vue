<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Marco legal sobre manejo ambiental en avicultura
    
    .row.mb-5.align-items-center
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-2.p-4(data-aos="fade-left")
          p En la gestión ambiental del sector avícola, es fundamental cumplir con una serie de normas ambientales y sanitarias que regulan el uso de recursos, el manejo de residuos, la protección del suelo, del aire y del agua, así como las condiciones sanitarias de producción. Estas normativas forman parte del marco legal colombiano y están dirigidas a garantizar la sostenibilidad del sistema productivo avícola. A continuación, se relacionan las principales disposiciones vigentes, clasificadas según el recurso o aspecto ambiental regulado:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-8")
      div(titulo="Legislación marco")
        ul.lista-ul--color.ms-5
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Decreto 2811 de 1974</b>. Código nacional de los recursos naturales.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Ley 9 de 1979</b>. Código sanitario nacional.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Ley 99 de 1993</b>. Crea el Ministerio del Ambiente, organiza el SINA y dicta otras disposiciones.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Ley 1333 de 2009</b>. Establece el procedimiento sancionatorio ambiental.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Resolución 3642 de 2013</b>. Requisitos para registro de productores, granjas avícolas bioseguras, plantas de incubación y venta de material genético aviar.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Resolución 3651 de 2014</b>. Requisitos para certificación de granjas avícolas bioseguras de postura y/o levante.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Decreto 1076 de 2015</b>. Decreto único sector ambiente y desarrollo sostenible. 
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Resolución 1515 de 2015</b>. Define criterios para el Registro Sanitario de Predio Avícola.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Resolución 18426 de 2025</b>. Listado de enfermedades, infecciones e infestaciones bajo control oficial, de declaración obligatoria y vigilancia especial.
      div(titulo="Recurso hídrico")
        ul.lista-ul--color.ms-5
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Ley 373 de 1997</b>. Programa de uso eficiente y ahorro del agua.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Decreto 155 de 2004</b>. Reglamenta tasas por utilización de aguas.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Decreto 3930 de 2010</b>. Reglamenta usos del agua y residuos líquidos.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Resolución 631 de 2015</b>. Parámetros y límites máximos en vertimientos puntuales a cuerpos de agua y alcantarillado público.
      div(titulo="Residuos")
        ul.lista-ul--color.ms-5
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Resolución 1362 de 2007</b>. Registro de Generadores de Residuos o Desechos Peligrosos.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Decreto 2981 de 2013</b>. Reglamenta la prestación del servicio público de aseo.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Decreto 351 de 2014</b>. Reglamenta la gestión integral de los residuos generados en salud y otras actividades.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Resolución 668 de 2016</b>. Reglamenta el uso racional de bolsas plásticas.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Resolución 2184 de 2019</b>. Unifica a nivel nacional tres colores para la gestión de residuos.
      div(titulo="Aire")
        ul.lista-ul--color.ms-5
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Resolución 601 de 2006</b>. Norma de calidad del aire o nivel de inmisión.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Resolución 909 de 2008</b>. Normas y estándares de emisión de contaminantes por fuentes fijas.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Resolución 1541 de 2013</b>. Niveles permisibles de calidad del aire, procedimiento de evaluación y olores ofensivos.
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Resolución 2087 de 2014</b>. Protocolo de monitoreo, control y vigilancia de olores ofensivos.
      div(titulo="Suelo")
        ul.lista-ul--color.ms-5
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Ley 388 de 2007</b>. Ordenamiento Territorial (modifica Ley 9 de 1989 y Ley 3 de 1991).
          li.mb-0.d-flex
            i.fa-solid.fa-circle-right.bg-color-7
            p.mb-0 <b>Decreto 3600 de 2007</b>. Reglamenta disposiciones de las Leyes 99 de 1993 y 388 de 1997 sobre ordenamiento del suelo rural y actuaciones urbanísticas de parcelación y edificación.

</template>

<script>
export default {
  name: 'Tema3',
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
