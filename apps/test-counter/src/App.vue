<script setup lang="ts">
import { ACounter, ACounterInc, ACounterDec } from "@assembleable-ui/a-counter";
</script>

<template>
  <main>
    <h1>
      hello acounter
    </h1>
    <ACounter :initial-value="100" v-slot="slotProps">
      <ACounterInc :delta="20">+20</ACounterInc>
      <span>{{ slotProps.count }}</span>
      <ACounterDec :delta="30">-30</ACounterDec>
    </ACounter>
    <hr>
    <section>
      <ACounter :initial-value="200" >
        <ACounterInc as="i"></ACounterInc>
      </ACounter>
    </section>
  </main>
</template>

