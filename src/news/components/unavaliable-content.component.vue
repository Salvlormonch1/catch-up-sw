<script>
export default {
  name: "unavaliable-content",
  props: { errors: null }
}
</script>

<template>
  <div>
    <div><h4>Unavaliable news</h4></div>
    <div v-for="error in errors">
      <h6>{{ error }}</h6>
    </div>
  </div>
</template>