<template>
  <div>
    <div>
      <!-- justify效果 -->
      <p>
        <label>姓名</label>：
        <span>王雄</span>
      </p>
      <p>
        <label>身份证</label>：
        <span>421081199210040659</span>
      </p>
    </div>

    <div>
      <!-- 滤镜效果 -->
      <img src="http://www.daqianduan.com/wp-content/uploads/2018/10/filter1.png" class="logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Css"
};
</script>

<style scoped lang="scss">
label {
  display: inline-block;
  vertical-align: top;
  min-width: 100px;
  height: 22px;
  line-height: 22px;
  // text-align-last: justify;
  text-align: justify;

  &::after {
    content: "";
    height: 0;
    width: 100%;
    display: inline-block;
    vertical-align: top;
  }
}

.logo {
  transition: all 0.2s;
  filter: grayscale(100%);

  &:hover,
  &:active {
    filter: none;
  }
}
</style>
