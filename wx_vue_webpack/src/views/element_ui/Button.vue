<template>
  <div>
    <h1>button</h1>
    <hr>
    <h3>type</h3>
    <el-button>button</el-button>
    <el-button type="primary">primary</el-button>
    <el-button type="success">success</el-button>
    <el-button type="danger">danger</el-button>
    <el-button type="info">info</el-button>
    <el-button type="warning">warning</el-button>
    <hr>
    <h3>plain</h3>
    <el-button plain>plain</el-button>
    <el-button type="primary" plain>primary plain</el-button>
    <hr>
    <h3>round</h3>
    <el-button round>round</el-button>
    <hr>
    <h3>circle</h3>
    <el-button circle>circle</el-button>
    <el-button circle></el-button>
    <hr>
    <h3>icon</h3>
    <el-button icon="el-icon-search">search</el-button>
    <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    <hr>
    <h3>disabled</h3>
    <el-button disabled>disabled</el-button>
    <hr>
    <h3>text</h3>
    <el-button type="text">text button</el-button>
    <hr>
    <h3>size</h3>
    <el-button size="small">small</el-button>
    <el-button size="large">large</el-button>
  </div>
</template>

<script>
export default {
  name: 'Basic'
}
</script>

<style scoped>

</style>
