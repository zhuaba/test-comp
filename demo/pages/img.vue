<style lang="scss">
#img {
  .card {
    position: relative;
    width: 320px;
    height: 200px;
    background-image: url('https://i2.hdslb.com/bfs/archive/3626f3bb3d5e783a8d3f1cc7f39441199010c72c.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>

<template>
  <div id="img">
    <div class="card">
      <VImg
        :lazy="false"
        src="https://i0.hdslb.com/bfs/article/654d8b848a09ba45655893cecddc5aa09f97c111.png"
        width="320"
        height="200"
      />
    </div>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>6</p>
    <p>5</p>
    <p>4</p>
    <p>3</p>
    <p>2</p>
    <p>1</p>
    <p>0</p>
    <div class="card">
      <VImg
        src="http://i2.hdslb.com/bfs/archive/eb033baf984bc5c2244657f018bb9ad4d97a2480.jpg"
        width="320"
        height="200"
      />
    </div>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
  </div>
</template>

<script>
import VImg from '~/src/components/img/img'

export default {
  name: 'Img',
  components: {
    VImg
  },
  props: {},
  data() {
    return {}
  },
  head() {
    return {
      title: '图片懒加载'
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
