<style lang="scss">
#field {
  background-color: #f6f6f6;
  min-height: 100vh;

  .title {
    margin: 0;
    padding: 35px 15px 15px;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
  }
}
</style>

<template>
  <div id="field">
    <p class="title">普通的用法</p>
    <VField v-model="input_1" />
    <p class="title">去掉 close 按钮</p>
    <VField v-model="input_2" :close="false">
      <VField v-model="input_2" :close="false" />
    </VField>
    <p class="title">左边添加内容</p>
    <VField v-model="input_3">
      <template slot="before"> 验证码 </template>
    </VField>
    <p class="title">右边添加内容</p>
    <VField v-model="input_4">
      <template slot="after"> 尾巴 </template>
    </VField>
    <p class="title">添加分割线</p>
    <VField v-model="input_5" before-line after-line>
      <template slot="before"> 验证码 </template>
      <template slot="after"> 尾巴 </template>
    </VField>
    <p class="title">error状态（大于6个字符）</p>
    <VField v-model="input_6" :error="error_6" />
    <p class="title">自定义 input attr</p>
    <VField
      v-model="input_7"
      :attr="{
        type: 'password',
        maxLength: 16,
        placeholder: '请输入密码'
      }"
    />
    <p class="title">textarea</p>
    <VField v-model="input_8" :min-row="4" :max-row="5" :max-len="100">
      <template slot="before"> 验证码 </template>
      <template slot="after"> 尾巴 </template>
    </VField>
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import VField from '~/src/components/field/field'

export default {
  name: 'Field',
  components: {
    VField
  },
  data() {
    return {
      input_1: '',
      input_2: '',
      input_3: '',
      input_4: '',
      input_5: '',
      input_6: '',
      error_6: 0,
      input_7: '',
      input_8: ''
    }
  },
  head() {
    return {
      title: '输入框'
    }
  },
  watch: {
    input_6(val) {
      if (val.length > 6) {
        this.error_6++
      }
    }
  }
}
</script>
