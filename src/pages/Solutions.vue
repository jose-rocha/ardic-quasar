<template >
  <q-page class="bg-secondary" @mouseover="storeHide.hideDropdownShow = false">
    <span class="text-white">Soluções</span>
  </q-page>
</template>

<script setup>
import { useStoreHideDropdown } from 'src/stores/hideDropdown';

const store = useStoreHideDropdown();
const storeHide = store.$state;

import { useMeta } from 'quasar';
// import { ref } from 'vue';

const metaData = {
  title: 'Let\'s Code',
  // titleTemplate: (title) => `${title} - My Website`,
  titleTemplate: (title) => `${title}`,
};

useMeta(metaData);

</script>

<style>

</style>
