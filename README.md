# img-upload-vue-cloudinary

> Simple Img Uploader Using cloudinary & axios & Vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Config:

### cloudinary
- open a user in cloudinary.com
- on main page: go to 'settings' -> 'Upload' -> scroll down to 'Upload presets' section and click on 'Enabled Unsigned uploading' -> click on 'SAVE' button
- copy the name of Upload presets to 'upload_preset' data (in Hello.vue file)
- go back to dashboard and copy your cloud name to 'cloud_name' (in Hello.vue file)
- upload some cats images to test
