<template>
  <div>
    Blog

  <div>{{counterBegin.count}}</div>

  <q-btn label="Add" @click="counter.increment()" />
  <q-btn label="Decre" @click="counter.decrement()" />

  </div>
</template>

<script setup>
import { useMeta } from 'quasar';
import { useCounterStore } from 'src/stores/counterPinia';

const metaData = {
  title: 'Blog | Let\'s Code',
  // titleTemplate: (title) => `${title} - My Website`,
  titleTemplate: (title) => `${title}`,
};

useMeta(metaData);

const counter = useCounterStore();
const counterBegin = counter.$state;
// const counterAdd = counter.actions;

</script>

<style>

</style>
