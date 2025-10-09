<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Impactos ambientales en el sector avícola
    
    .row.mb-5.align-items-center
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/1.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-2.p-5(data-aos="fade-left")
          p Un impacto ambiental es el cambio positivo o negativo que genera una obra, proyecto o actividad, en este caso hace referencia a los efectos que generan las diferentes actividades asociadas al sector avícola en los componentes ambientales (agua, suelo, aire, paisaje, flora, fauna, socioeconómico, entre otros). 
    
    separador
    
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Determinación de componentes ambientales afectados
    
    p.mb-5 Para lograr identificar y valorar los impactos ambientales existen diferentes metodologías, sin embargo, es importante que previo a la identificación de los impactos se establezca la relación entre los componentes ambientales y las acciones que los pueden generar, esto puede realizarse mediante una matriz cualitativa, tal como se describe en el siguiente ejemplo:

    .tarjeta.color-primario.bg-color-9.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema6/2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.bg-color-10 Componentes ambientales
              p.text-white Se invita a leer el documento Componentes ambientales, donde se aborda la identificación de los factores físicos, bióticos y sociales que pueden verse influenciados por las actividades del sector avícola.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    separador
    
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Características de los impactos
    
    p.mb-5 Para lograr una correcta identificación de los impactos ambientales, es fundamental considerar que estos presentan una serie de características específicas. Estas permiten evaluar con mayor precisión la naturaleza, magnitud y consecuencias de cada impacto sobre los distintos factores del medio ambiente.
    
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        SlyderF(columnas="col-12 col-lg-4")
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema6/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
            h4.text-center.mb-4 Clase
            p.text-center Hace referencia al beneficio o perjuicio que se genera sobre los diferentes factores ambientales.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema6/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
            h4.text-center.mb-4 Intensidad
            p.text-center Indica la incidencia de la acción del impacto sobre los componentes y factores ambientales.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema6/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
            h4.text-center.mb-4 Extensión
            p.text-center Corresponde al área de afectación del impacto. Puede ser puntual, local, regional, nacional o global.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema6/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
            h4.text-center.mb-4 Momento
            p.text-center Se refiere al tiempo que transcurre entre la acción que genera el impacto y su manifestación. Se valora como inmediato, a corto, mediano o largo plazo.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema6/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
            h4.text-center.mb-4 Persistencia o duración
            p.text-center Tiempo que puede permanecer el impacto desde su aparición hasta que el medio retorna a sus condiciones iniciales. Puede ser fugaz, temporal o permanente.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema6/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
            h4.text-center.mb-4 Reversibilidad
            p.text-center Capacidad del factor ambiental de recuperarse de forma natural después del impacto, sin intervención humana.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema6/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
            h4.text-center.mb-4 Recuperabilidad
            p.text-center Capacidad del factor de recuperarse, pero requiere la intervención del ser humano tras el impacto.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema6/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
            h4.text-center.mb-4 Interacción de los efectos
            p.text-center Forma en la que se manifiestan las consecuencias del impacto, considerando su vinculación con otros efectos o acciones.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema6/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-5
            h4.text-center.mb-4 Periodicidad
            p.text-center Frecuencia con la que se presenta el impacto. Puede ser intermitente o continuo.

        separador
        
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.3 Nombres de los impactos
    
    p.mb-5 Para determinar el nombre del impacto se recomienda que contenga una palabra o verbo que indique el sentido del cambio, como, por ejemplo: contaminación, mejoramiento, deterioro, incremento, reducción, pérdida, ganancia, entre otros (Arboleda, 2005). Para tomar como referencia algunos nombres de impactos puede tomar como referencia el listado de impactos ambientales específicos definido por el Ministerio de Ambiente y Desarrollo Sostenible (2021). Algunos de los impactos que pueden tomarse como referencia son los siguientes:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema6/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Agua
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Disminución de la recarga de acuíferos
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Pérdida de nacimientos de agua
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Deterioro en las características físico químicas de las aguas superficiales
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Incremento de la demanda bioquímica de oxigeno
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Incremento o disminución de la oferta hídrica para uso pecuario
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Incremento o disminución del consumo de agua
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Contaminación de fuente hídrica receptora
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema6/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Suelo
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Cambio en las características biológicas del suelo 
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Cambio en las características físicas del suelo  
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Cambio en las características microbiológicas del suelo
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Incremento o disminución del pH del suelo
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema6/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Aire
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Incremento o disminución de la presión sonora
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Cambio en la concentración de los contaminantes generadores de olores ofensivos
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Incremento o disminución de la concentración de amoniaco
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema6/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Flora y Fauna
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Fragmentación de la cobertura vegetal  
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Fragmentación de ecosistemas
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Incremento o disminución de la diversidad de flora
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Cambio en la cadena trófica
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Cambio en la composición de las especies de fauna
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Cambio en la estructura de las especies de fauna
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema6/16.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Medio socioeconómico
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Cambio en la ocupación del territorio
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Conflictos entre actores (públicos y privados)
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Conflictos por el uso del agua
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Cambio en la dinámica del empleo
                li.mb-2.d-flex
                  i.fa-solid.fa-circle-right.bg-color-7
                  p.mb-0 Cambio en las condiciones para el desarrollo de las actividades económicas  
    
    separador
    
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Metodología de valoración de impactos ambientales
    
    .row.mb-5.align-items-center
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/17.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-2.p-5(data-aos="fade-left")
          p Existen diversas metodologías para la evaluación de impactos ambientales, cada una con enfoques específicos que permiten al evaluador categorizar los impactos según su clase (positivos o negativos) y su significancia frente a los efectos generados por una actividad o conjunto de acciones.

    p.mb-5 En este caso, se describe la metodología de Conesa Fernández, que permite valorar impactos ambientales mediante una serie de criterios estandarizados, asignando valores específicos a cada uno de ellos. Esta metodología facilita una evaluación objetiva y comparativa entre impactos, y se basa en los siguientes parámetros y rangos de valoración:

    .row.justify-content-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Criterios de valoración matriz Conesa Fernández Simplificada
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5.py-4
        .row.justify-content-center.mb-5
          .col-lg-10
            .tabla-a.color-acento-contenido.pst 
              table
                caption Nota. Arboleda (2005). Manual de evaluación de impacto ambiental de proyectos, obras o actividades.
                thead
                  tr
                    th.bg-color-6 Criterio
                    th.bg-color-6 Símbolo
                    th.bg-color-6 Significado
                tbody.bg-color-sintesis
                  tr
                    th Signo
                    td +/-
                    td Hace alusión al carácter benéfico (+) o perjudicial (-) de las distintas acciones que van a actuar sobre los distintos factores considerados
                  tr
                    th Intensidad
                    td IN
                    td Grado de incidencia de la acción sobre el factor en el ámbito específico en el que actúa. Varía entre 1 y 12, siendo 12 la expresión de la destrucción total del factor en el área en la que se produce el efecto y 1 una mínimo afectación.
                  tr
                    th Extensión
                    td EX
                    td Área de influencia teórica del impacto en relación con el entorno de la actividad (% de área, respecto al entorno, en que se manifiesta el efecto). Si la acción produce un efecto muy localizado, se considera que el impacto tiene un carácter puntual (1). Si, por el contrario, el impacto no admite una ubicación precisa del entorno de la actividad, teniendo una influencia generalizada en todo él, el impacto será Total (8).
                  tr
                    th Momento
                    td Mo
                    td Alude al tiempo entre la aparición de la acción que produce el impacto y el comienzo de las afectaciones sobre el factor considerado. Si el tiempo transcurrido es nulo, el momento será Inmediato, y si es inferior a un año, Corto plazo, asignándole en ambos casos un valor de cuatro (4). Si es un período de tiempo mayor a cinco años, Largo Plazo (1).
                  tr
                    th Persistencia
                    td PE
                    td Tiempo que permanecerá el efecto desde su aparición y, a partir del cual el factor afectado retornaría a las condiciones iniciales previas a la acción por los medios naturales o mediante la introducción de medidas correctoras.
                  tr
                    th Reversibilidad
                    td Rv
                    td Se refiere a la posibilidad de reconstrucción del factor afectado, es decir, la posibilidad de retornar a las condiciones iniciales previas a la acción, por medios naturales, una vez aquel deje de actuar sobre el medio.
                  tr
                    th Recuperabilidad
                    td Mc
                    td Se refiere a la posibilidad de reconstrucción, total o parcial, del factor afectado, es decir, la posibilidad de retornar a las condiciones iniciales previas a la acción, por medio de la intervención humana. Cuando el efecto es irrecuperable (alteración imposible de reparar, tanto por la acción natural, como por la humana) le asignamos el valor de ocho (8). En caso de ser irrecuperable, pero existe la posibilidad de introducir medidas compensatorias, el valor adoptado será cuatro (4).
                  tr
                    th Sinergia
                    td Si
                    td Este atributo contempla el reforzamiento de dos o más efectos simples. La componente total de la manifestación de los efectos simples, provocados por acciones que actúan simultáneamente, es superior a la que cabría de esperar cuando las acciones que las provocan actúan de manera independiente, no simultánea.
                  tr
                    th Acumulación
                    td Ac
                    td Este atributo da idea del incremento progresivo de la manifestación del efecto cuando persiste de forma continuada o reiterada la acción que lo genera. Cuando una acción no produce efectos acumulativos (acumulación simple), el efecto se valora como uno (1); si el efecto producido es acumulativo el valor se incrementa a cuatro (4).
                  tr
                    th Efecto
                    td Ef
                    td Este atributo se refiere a la relación causa-efecto, o sea, a la forma de manifestación del efecto sobre un factor, como consecuencia de una acción. Puede ser directo o primario, siendo en este caso la repercusión de la acción consecuencia directa de ésta, o indirecto o secundario.
                  tr
                    th Periodicidad
                    td Pr
                    td Se refiere a la regularidad de manifestación del efecto, bien sea de manera cíclica o recurrente (efecto periódico), de forma impredecible en el tiempo (efecto irregular) o constante en el tiempo (efecto continuo)
    
    .row.justify-content-center.mb-5
      .col-lg-10
        div.bg-color-2.p-2.p-lg-4
          p <b>Importancia del impacto ambiental</b>: cada uno de los criterios se evalúa y califica de acuerdo con los rangos establecidos, y posteriormente se determina la importancia (I) de las consecuencias ambientales del impacto, aplicando el siguiente algoritmo.
          .row.justify-content-center
            .col-xl-6
              h4.bg-color-6.text-center.p-2.p-lg-3 I = (3IN+2EX+MO+PE+RV+SI+AC+EF+PR+MC)
          h5.text-center Donde:
          .row.justify-content-center
            .col-lg-8
              p.text-center <b>IN</b>: Intensidad  <b>EX</b>: Extensión  <b>MO</b>: Momento   <b>PE</b>: Persistencia  <b>RV</b>: Reversibilidad   <b>SI</b>: Sinergia  <b>AC</b>: Acumulación   <b>EF</b>: Efecto  <b>PR</b>: Periodicidad   <b>MC</b>: Recuperabilidad 

    p.mb-5 Los rangos para el cálculo de la importancia del impacto se resumen en la siguiente tabla:

    .row.justify-content-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Rangos para el cálculo de la importancia ambiental (método Conesa)
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5.py-4
        .row.justify-content-center.mb-5
          .col-lg-10    
            .tabla-a.color-acento-contenido.pst 
              table
                caption Nota.  Arboleda (2005). Manual de evaluación de impacto ambiental de proyectos, obras o actividades 
                thead
                  tr
                    th.bg-color-6 Criterio
                    th.bg-color-6 Categoría / Condición
                    th.bg-color-6 Calificación (Rango)
                tbody.bg-color-sintesis
                  tr
                    th(rowspan="2") Naturaleza
                    td Impacto benéfico
                    td +
                  tr
                    td Impacto perjudicial
                    td –
                  tr
                    th Intensidad (IN)
                    td Baja / Media / Alta / Muy alta / Total
                    td 1 / 2 / 4 / 8 / 12
                  tr
                    th Extensión (EX)
                    td Puntual / Parcial / Extensa / Total / Crítica
                    td 1 / 2 / 4 / 8 / 12
                  tr
                    th Momento (MO)
                    td Largo plazo / Medio plazo / Inmediato / Crítico
                    td 1 / 2 / 4 / 8
                  tr
                    th Persistencia (PE)
                    td Fugaz / Temporal / Permanente
                    td 1 / 2 / 4
                  tr
                    th Reversibilidad (RV)
                    td Corto plazo / Medio plazo / Irreversible
                    td 1 / 2 / 4
                  tr
                    th Recuperabilidad (MC)
                    td Recuperable inmediato / Medio plazo / Mitigable / Irrecuperable
                    td 1 / 2 / 4 / 8
                  tr
                    th Sinergia (SI)
                    td Sin sinergismo / Sinérgico / Muy sinérgico
                    td 1 / 2 / 4
                  tr
                    th Acumulación (AC)
                    td Simple / Acumulativo
                    td 1 / 4
                  tr
                    th Efecto (EF)
                    td Indirecto (secundario) / Directo
                    td 1 / 4
                  tr
                    th Periodicidad (PR)
                    td Irregular / Periódico / Continuo
                    td 1 / 2 / 4

    .row.justify-content-center.mb-5
      .col-lg-10
        div.bg-color-2.p-5
          h5 Ejemplo:
          p Si un impacto tiene los siguientes valores:
          h5 IN = 4  EX = 2  MO = 4  PE = 2  RV = 2  SI = 1  AC = 4  EF = 4  PR = 2  MC = 2 
          p Entonces la importancia se calcula así:
          h5 I = (3x4) + (2x2) + 4 + 2 + 2 + 1 + 4 + 4 + 2 + 2 = 12 + 4 + 4 + 2 + 2 + 1 + 4 + 4 + 2 + 2 = 37
    
    p.mb-5 Se debe interpretar dicho valor según la siguiente escala de significancia, que clasifica el impacto ambiental de acuerdo con su severidad.

    .row.justify-content-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Categorías del valor de importancia (I) de un impacto ambiental
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5.py-4
        .row.justify-content-center.mb-5
          .col-lg-10    
            .tabla-a.color-acento-contenido.pst 
              table
                thead
                  tr
                    th.bg-color-6 Valor de Importancia (I)
                    th.bg-color-6 Categoría de Significancia
                    th.bg-color-6 Interpretación
                tbody.bg-color-sintesis
                  tr
                    th Menor a 25
                    td Irrelevante o compatible
                    td No representa amenaza significativa al ambiente.
                  tr
                    th Entre 25 y 50
                    td Moderado
                    td Puede requerir seguimiento y medidas de control.
                  tr
                    th Entre 50 y 75
                    td Severo
                    td Representa una afectación considerable; se requieren acciones correctivas.
                  tr
                    th Mayor a 75
                    td Crítico
                    td Impacto grave; exige medidas de mitigación, compensación o reubicación.

        p.mb-5 La importancia total (I) puede oscilar entre 13 y 100 unidades, dependiendo de los valores asignados a cada uno de los criterios de evaluación.

</template>

<script>
export default {
  name: 'Tema6',
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
