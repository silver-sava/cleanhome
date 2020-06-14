<template>
  <div class="page-area">
    <div class="breadcumb-overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="breadcrumb">
            <div class="section-headline white-headline text-center">
              <h3>{{pageTitle}}</h3>
            </div>
            <ul>
              <li class="home-bread">Home</li>
              <li>{{bannerTitle}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PageBanner",
      props: {
        pageTitle: {
          type: String
        },
        bannerTitle: {
          type: String
        }
      },
    }
</script>

<style scoped>

</style>
