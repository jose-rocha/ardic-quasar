<template>
  <q-page class="bg-secondary" @mouseover="storeHide.hideDropdownShow = false">
    <span class="text-white">Contato</span>

      <div class="text-white">{{counterAdd.count}}</div>
  </q-page>
</template>

<script setup>
import { useMeta } from 'quasar';
import { useStoreHideDropdown } from 'src/stores/hideDropdown';
import { useCounterStore } from 'src/stores/counterPinia';

const store = useStoreHideDropdown();
const storeHide = store.$state;

const metaData = {
  title: 'Contato',
  // titleTemplate: (title) => `${title} - My Website`,
  titleTemplate: (title) => `${title}`,
};

useMeta(metaData);

const counter = useCounterStore();
const counterAdd = counter.$state;

</script>

<style>

</style>
