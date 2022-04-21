<template>
  <q-page class="bg-secondary" @mouseover="storeHide.hideDropdownShow = false">
    <span class="text-white">LGPD</span>
  </q-page>
</template>

<script setup>
import { useMeta } from 'quasar';
import { useStoreHideDropdown } from 'src/stores/hideDropdown';

const store = useStoreHideDropdown();
const storeHide = store.$state;

const metaData = {
  title: 'Processos Seletivos',
  // titleTemplate: (title) => `${title} - My Website`,
  titleTemplate: (title) => `${title}`,
};

useMeta(metaData);
</script>

<style>

</style>
