<template>
  <div
      v-if="$q.screen.gt.xs"
      class="full-width bg-primary" style="height:250px; ">
      <q-responsive :ratio="aspect">
        <q-img
          alt="Ardic Technology logo"
          :src="Logotipo"
          fit="scale-down"
        />
      </q-responsive>
    </div>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { computed } from 'vue';

import Logotipo from 'src/assets/Logotipo.png';

const $q = useQuasar();
const windowDesktop = 90 / 19;
const windowTablet = 45 / 14;
const windowMobile = 38 / 31;
const aspect = computed(() => {
  if ($q.screen.lt.sm) {
    return windowMobile;
  }
  if ($q.screen.lt.md) {
    return windowTablet;
  }

  return windowDesktop;
});
</script>
