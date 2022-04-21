<template>
  <q-page class="bg-green">
    <q-tab-panels
          v-model="tabsDr.$state.tabsDrawerSet"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
          class="bg-green"
        >
          <q-tab-panel name="mails"  >
            <div class="text-h4 q-mb-md">Mails</div>
            <p>Mails</p>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h4 q-mb-md">Alarms</div>
            <p>Alarms</p>
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h4 q-mb-md">Movies</div>
            <p>Movies</p>
          </q-tab-panel>
    </q-tab-panels>

    <q-footer v-if="$q.screen.lt.sm">
        <q-tabs
          v-model="tabsDr.$state.tabsDrawerSet"
          no-caps
          class="bg-black shadow-2 text-teal"
          active-color="white"
          dense
        >
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>
      </q-footer>
  </q-page>
</template>

<script setup>
import { tabsDrawer } from 'src/stores/tabs';

const tabsDr = tabsDrawer();
</script>
