<style lang="scss">
#uploader {
  padding: 20px;
}
</style>

<template>
  <div id="uploader">
    <VUploader
      ref="uploader"
      v-model="value"
      :auto="false"
      :accept="['jpg', 'png']"
      :limit="9"
      bucket="qa"
      @change="handleChange"
    >
      <!--
      <template #list="{ list }">
        <ul>
          <li v-for="item in list">
            {{ item.id }}
          </li>
        </ul>
      </template>
      <template #action>
        <button>点击选择图片</button>
      </template>
      -->
    </VUploader>
    <button @click="handleUpload">点击上传</button>
  </div>
</template>

<script>
import VUploader from '~/src/components/uploader/uploader'

export default {
  name: 'Uploader',
  components: {
    VUploader
  },
  data() {
    return {
      value: 'http://img0.imgtn.bdimg.com/it/u=2235996255,1580499741&fm=26&gp=0.jpg'
    }
  },
  head() {
    return {
      title: '图片上传'
    }
  },
  methods: {
    handleUpload() {
      this.$refs.uploader.upload()
    },
    handleChange() {}
  }
}
</script>
