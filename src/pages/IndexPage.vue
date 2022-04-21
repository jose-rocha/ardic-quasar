<template>
  <q-page class="flex column" @mouseover="storeHide.hideDropdownShow = false" >
    <ResponsiveImage/>

    <div class="flex  justify-center  full-width" >
      <h4
        class="tw"
        :class="$q.screen.gt.xs ? 'text-center ' : 'text-center  no-margin q-pa- '"
        :style="$q.screen.gt.xs ? 'max-width:58%; ' : ''">
        <!-- {{writer}} -->
      </h4>
    </div>

    <Carousel />

    <div v-if="$q.screen.gt.xs" class="full-width q-mt-sm" >
      <!-- <q-responsive :ratio="aspect"> -->
        <q-img
          alt="Ardic Technology logo"
          :src="DashFull"
          fit="contain"

        />

        <div class="flex full-width justify-center q-my-lg" >
          <h4 class="text-center no-margin">
            Tudo o que sua empresa precisa em um só lugar.
          </h4>
        </div>
    </div>

    <!-- Mobile -->
    <div v-if="!$q.screen.gt.xs" class="full-width q-mt-sm" >
      <!-- <q-responsive :ratio="aspect"> -->
        <q-img
          alt="Ardic Technology logo"
          :src="DashMobile"
          fit="contain"

        />
      <!-- </q-responsive> -->

        <div class="flex full-width q-my-lg" >
          <h4 class="text-center no-margin">
            Tudo o que sua empresa precisa em um só lugar.
          </h4>
        </div>
    </div>
    <q-page-scroller position="bottom-right" :scroll-offset="400" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>
  </q-page>
</template>

<script setup >
import { useStoreHideDropdown } from 'src/stores/hideDropdown';
import { useMeta } from 'quasar';
import { onMounted } from 'vue';
import Typewriter from 't-writer.js';
import DashFull from 'src/assets/DashFull.png';
import DashMobile from 'src/assets/DashMobile.png';
import Carousel from '../components/Carousel.vue';
import ResponsiveImage from '../components/ResponsiveImage.vue';

const metaData = {
  title: 'Let\'s Code Home',
  // titleTemplate: (title) => `${title} - My Website`,
  titleTemplate: (title) => `${title}`,
};

useMeta(metaData);

const store = useStoreHideDropdown();
const storeHide = store.$state;

onMounted(() => {
  const target = document.querySelector('.tw');

  // console.log(target);

  const writer = new Typewriter(target, {
    loop: true,
    typeColor: '#A1A7E2',
  });

  writer
    .type('Conectando empresas às novas tecnologias digitais.')
    .rest(500)
    .start();
});
</script>
