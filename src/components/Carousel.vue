<template>
  <!-- <div class="q-pa-md bg-red"> -->
  <div
  class="flex column items-center"
  :class="$q.screen.lt.sm ? '' : 'q-mx-xl'"
  >
  <div class="teste"></div>
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      infinite
      padding
      arrows
      height="130px"
      class="full-width"
      style="width:42.1em;"
      :autoplay="autoplay"
    >
      <q-carousel-slide :name="1" class="column no-wrap" v-if="!$q.screen.lt.sm">
        <div class="row fit items-center no-wrap">
          <q-img v-for="(imageCarousel, index) in imagesCarouselOne" :key="index"
          class="rounded-borders full-height" :src="imageCarousel.src" :fit="fit" />
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="2" class="column no-wrap" v-if="!$q.screen.lt.sm">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img v-for="(imageCarousel, index) in imagesCarouselTwo" :key="index"
          class="rounded-borders full-height" :src="imageCarousel.src" fit="contain"/>
        </div>
      </q-carousel-slide>

      <!-- Mobile -->

      <q-carousel-slide :name="1" class="column no-wrap" v-if="$q.screen.lt.sm">
        <div class="row fit items-center no-wrap">
          <q-img class="rounded-borders full-height"
            v-for="(imgModified, index) in imgModifiedsOne" :key="index"
            :src="imgModified.src" fit="contain" />
          <!-- <q-img class="rounded-borders full-height" :src="PowerAutomate" fit="contain"/>
          <q-img class="rounded-borders full-height" :src="PowerBi" fit="contain" /> -->
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="2" class="column no-wrap" v-if="$q.screen.lt.sm">
        <div class="row fit items-center no-wrap">
          <q-img class="rounded-borders full-height"
            v-for="(imgModified, index) in imgModifiedsTwo" :key="index"
            :src="imgModified.src" fit="contain"/>
          <!-- <q-img class="rounded-borders full-height" :src="Sharepoint" fit="contain"/>
          <q-img class="rounded-borders full-height" :src="Tableau" fit="contain"/> -->
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="3" class="column no-wrap" v-if="$q.screen.lt.sm">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded-borders full-height" :src="Talend" fit="contain"/>
          <q-img class="rounded-borders full-height" :src="UiPath" fit="contain"/>
        </div>
      </q-carousel-slide>

      <!-- <q-carousel-slide :name="4" class="column no-wrap" v-if="$q.screen.lt.sm">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
        </div>
      </q-carousel-slide> -->

    </q-carousel>
  </div>
</template>

<script >
import { ref, defineComponent } from 'vue';
import PowerAppsSrc from 'src/assets/carrousel/PowerApps.png';
import PowerAutomateSrc from 'src/assets/carrousel/PowerAutomate.png';
import PowerBiSrc from 'src/assets/carrousel/PowerBi.png';
import PowerVirtualSrc from 'src/assets/carrousel/powerVirtual.png';
import SharepointSrc from 'src/assets/carrousel/Sharepoint.png';
import TableauSrc from 'src/assets/carrousel/Tableau.png';
import TalendSrc from 'src/assets/carrousel/Talend.png';
import UiPathSrc from 'src/assets/carrousel/UiPath.png';

export default defineComponent({
  name: 'carosueL',
  setup() {
    const imagesCarouselOneModifiedOne = [
      { src: PowerAppsSrc },
      { src: PowerAutomateSrc },
      { src: PowerBiSrc },
      { src: PowerVirtualSrc },
    ];
    const imagesCarouselOneModifiedTwo = [
      { src: SharepointSrc },
      { src: TableauSrc },
      { src: TalendSrc },
      { src: UiPathSrc },
    ];

    const imgModifiedsOne = imagesCarouselOneModifiedOne.filter((img) => {
      if (!img.src.includes(PowerVirtualSrc)) {
        return img;
      }
      return !imagesCarouselOneModifiedOne[imagesCarouselOneModifiedOne.length - 1];
    });

    const imgModifiedsTwo = imagesCarouselOneModifiedTwo.filter((img) => {
      if (!img.src.includes(UiPathSrc)) {
        return img;
      }
      return !imagesCarouselOneModifiedTwo[imagesCarouselOneModifiedTwo.length - 1];
    });

    // console.log(imgModifieds);

    return {
      imgModifiedsOne,
      imgModifiedsTwo,
      PowerApps: PowerAppsSrc,
      PowerAutomate: PowerAutomateSrc,
      PowerBi: PowerBiSrc,
      PowerVirtual: PowerVirtualSrc,
      Sharepoint: SharepointSrc,
      Tableau: TableauSrc,
      Talend: TalendSrc,
      UiPath: UiPathSrc,

      slide: ref(1),
      autoplay: ref(true),
      fit: 'contain',
      imagesCarouselOne: [
        { src: PowerAppsSrc },
        { src: PowerAutomateSrc },
        { src: PowerBiSrc },
        { src: PowerVirtualSrc },
      ],
      imagesCarouselTwo: [
        { src: SharepointSrc },
        { src: TableauSrc },
        { src: TalendSrc },
        { src: UiPathSrc },
      ],
    };
  },
});
</script>
