<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>

      <el-upload
        class="avatar-uploader"
        action=""
        :show-file-list="false"
        :http-request="httpRequest">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <div>
        <div v-if="imageUrl">imageUrl: {{imageUrl}}</div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'hello',
  data () {
    return {
      cloud_name: 'dzvnon9el',
      upload_preset: 'ajsjcjub',
      msg: 'Simple Img Uploader Using cloudinary & axios & Vue',
      imageUrl: '',
    }
  },
  methods: {
    httpRequest(req){
      let formData = new FormData();
      formData.append('file', req.file);
      formData.append('upload_preset', this.upload_preset);

      axios({
        url: `https://api.cloudinary.com/v1_1/${this.cloud_name}/image/upload`,
        method: 'POST',
        headers: {
            'Content-Type': undefined,
            'X-Requested-With': 'XMLHttpRequest'
        },
        data: formData,
      }).then( (res) => {
        if (res.status === 200){
          console.log('upload sucsess', res);
          this.imageUrl = res.data.url;
        }
        else{
          console.info('oops, something went wrong', res);
        }
      }).catch( (err) => {
        console.error(err);
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.avatar-uploader .el-upload {
    border: 1px dashed black;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
