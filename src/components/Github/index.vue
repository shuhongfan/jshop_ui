<template>
  <div>
    <svg-icon icon-class="github" @click="click" />
  </div>
</template>

<script>
export default {
  name: 'Github',
  methods: {
    click() {
      window.open('https://gitee.com/ithubin/jshop-backend-front.git', '_blank')
    }
  }
}
</script>
