<template>
  <header>
    <!-- Start top bar -->
    <div class="topbar-area fix hidden-xs">
      <div class="container">
        <div class="row">
          <div class=" col-md-6 col-sm-6">
            <div class="topbar-left">
              <p>Welcome Our Cleaning Services</p>
            </div>
          </div>
          <div class="col-md-6 col-sm-6">
            <div class="quote-button">
              <nuxt-link to="/#" class="quote-btn">Book Now</nuxt-link>
            </div>
            <div class="topbar-right">
              <ul>
                <li><a href="#"><i class="fa fa-skype"></i></a></li>
                <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                <li><a href="#"><i class="fa fa-google"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End top bar -->
    <!-- header-area start -->
    <div class="header-middle-area hidden-xs">
      <div class="container">
        <div class="row">
          <!-- logo start -->
          <div class="col-md-5 col-sm-3">
            <div class="logo">
              <!-- Brand -->
              <a class="navbar-brand page-scroll sticky-logo" href="index.html">
                <img src="img/logo/logo.png" alt="">
              </a>
            </div>
          </div>
          <!-- logo end -->
          <div class="col-md-7 col-sm-9">
            <div class="header-middle-link">
              <div class="header-info">
                <div class="header-icon">
                  <i class="icon icon-phone-handset"></i>
                </div>
                <div class="header-info-text">
                  <span class="info-first">Phone</span>
                  <span class="info-simple">+1313-4535434</span>
                </div>
              </div>
              <div class="header-info">
                <div class="header-icon">
                  <i class="icon icon-envelope"></i>
                </div>
                <div class="header-info-text">
                  <span class="info-first">Email</span>
                  <span class="info-simple">info@cleanservic.com</span>
                </div>
              </div>
              <div class="header-info">
                <div class="header-icon">
                  <i class="icon icon-map-marker"></i>
                </div>
                <div class="header-info-text">
                  <span class="info-first">Location</span>
                  <span class="info-simple">House-34,22/2 avenue</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End middle bar -->
    <div id="sticker"  :class="`header-area header-2 hidden-xs ${sticky ? 'stick' : '' }`">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <!-- mainmenu start -->
            <nav class="navbar navbar-default">
              <div class="collapse navbar-collapse" id="navbar-example">
                <div class="main-menu">
                  <ul class="nav navbar-nav navbar-right">
                    <li><a class="pagess" href="/">Home</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/">Home 01</nuxt-link></li>
                        <li><nuxt-link to="/index-2">Home 02</nuxt-link></li>
                        <li><nuxt-link to="/index-3">Home 03</nuxt-link></li>
                        <li><nuxt-link to="/index-4">Home 04</nuxt-link></li>
                      </ul>
                    </li>
                    <li><a class="pagess" href="#">About us</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/about">About us</nuxt-link></li>
                        <li><nuxt-link to="/team">Team</nuxt-link></li>
                        <li><nuxt-link to="/review">Review</nuxt-link></li>
                        <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
                        <li><nuxt-link to="/error">Error</nuxt-link></li>
                      </ul>
                    </li>
                    <li><a class="pagess" href="#">Services</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/services">Services</nuxt-link></li>
                        <li><nuxt-link to="/single-service">Single Services</nuxt-link></li>
                      </ul>
                    </li>
                    <li><a class="pagess" href="#">Projects</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/project-4">Project 4 Column</nuxt-link></li>
                        <li><nuxt-link to="/project-3">Project 3 Column</nuxt-link></li>
                        <li><nuxt-link to="/project-2">Project 2 Column</nuxt-link></li>
                        <li><nuxt-link to="/single-project">Single Project</nuxt-link></li>
                      </ul>
                    </li>
                    <li><a class="pagess" href="#">Blog</a>
                      <ul class="sub-menu">
                        <li><nuxt-link to="/blog-grid-2">Blog 2 grid</nuxt-link></li>
                        <li><nuxt-link to="/blog-grid-3">Blog 3 column</nuxt-link></li>
                        <li><nuxt-link to="/blog-grid-1">Blog Sidebar</nuxt-link></li>
                        <li><nuxt-link to="/blog-details">Blog Details</nuxt-link></li>
                      </ul>
                    </li>
                    <li><nuxt-link to="/contact">contacts</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </nav>
            <!-- mainmenu end -->
            <div @click="searchToogle = !searchToogle" class="header-right-link">
              <!-- search option start -->
              <form action="#">
                <div  :style="`display: ${searchToogle ? 'block' : ''}`" class="search-option">
                  <input type="text" placeholder="Search...">
                  <button class="button" type="submit"><i class="fa fa-search"></i></button>
                </div>
                <a class="main-search" href="#"><i class="fa fa-search"></i></a>
              </form>
              <!-- search option end -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- header-area end -->
    <!-- mobile-menu-area start -->
    <div class="mobile-menu-area hidden-lg hidden-md hidden-sm">
      <div class="container mean-container">
        <div class="row">
          <div class="col-md-12">
            <div class="mobile-menu">
              <div class="logo">
                <nuxt-link to="/"><img src="img/logo/logo.png" alt="" /></nuxt-link>
              </div>
              <div class="mean-bar">
                <nav id="dropdown" class="mean-nav">
                  <a @click="mobileToogle = !mobileToogle" href="#nav" class="meanmenu-reveal"><span></span><span></span><span></span></a>
                  <ul :style="`display: ${mobileToogle ? 'block' : 'none'}`">
                    <li><a @click="submenToogle = !submenToogle" class="pagess" href="#">Home</a>
                      <ul class="sub-menu" :style="`display: ${submenToogle ? 'block' : 'none'}`">
                        <li><nuxt-link to="/">Home 01</nuxt-link></li>
                        <li><nuxt-link to="/index-2">Home 02</nuxt-link></li>
                        <li><nuxt-link to="/index-3">Home 03</nuxt-link></li>
                        <li><nuxt-link to="/index-4">Home 04</nuxt-link></li>
                        <a class="mean-expand " href="#" style="font-size: 18px">+</a>
                      </ul>
                    </li>
                    <li><a  @click="menuAboutToogle = !menuAboutToogle" class="pagess" href="#">About us</a>
                      <ul class="sub-menu" :style="`display: ${menuAboutToogle ? 'block' : 'none'}`">
                        <li><nuxt-link to="/about">About us</nuxt-link></li>
                        <li><nuxt-link to="/team">Team</nuxt-link></li>
                        <li><nuxt-link to="/review">Review</nuxt-link></li>
                        <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
                        <li><nuxt-link to="/error">Error</nuxt-link></li>
                        <a class="mean-expand" href="#" style="font-size: 18px">+</a>
                      </ul>
                    </li>
                    <li><a @click="menuServiceToogle = !menuServiceToogle" class="pagess" href="#">Services</a>
                      <ul class="sub-menu" :style="`display: ${menuServiceToogle ? 'block' : 'none'}`">
                        <li><nuxt-link to="/services">Services</nuxt-link></li>
                        <li><nuxt-link to="/single-service">Single Services</nuxt-link></li>
                        <a class="mean-expand" href="#" style="font-size: 18px">+</a>
                      </ul>
                    </li>
                    <li><a @click="menuProjectToogle = !menuProjectToogle" class="pagess" href="#">Projects</a>
                      <ul class="sub-menu" :style="`display: ${menuProjectToogle ? 'block' : 'none'}`">
                        <li><nuxt-link to="/project-4">Project 4 Column</nuxt-link></li>
                        <li><nuxt-link to="/project-3">Project 3 Column</nuxt-link></li>
                        <li><nuxt-link to="/project-2">Project 2 Column</nuxt-link></li>
                        <li><nuxt-link to="/single-project">Single Project</nuxt-link></li>
                        <a class="mean-expand" href="#" style="font-size: 18px">+</a>
                      </ul>
                    </li>
                    <li><a @click="menuBlogToogle = !menuBlogToogle" class="pagess" href="#">Blog</a>
                      <ul class="sub-menu"  :style="`display: ${menuBlogToogle ? 'block' : 'none'}`">
                        <li><nuxt-link to="/blog-grid-2">Blog 2 grid</nuxt-link></li>
                        <li><nuxt-link to="/blog-grid-3">Blog 3 column</nuxt-link></li>
                        <li><nuxt-link to="/blog-grid-1">Blog Sidebar</nuxt-link></li>
                        <li><nuxt-link to="/blog-details">Blog Details</nuxt-link></li>
                        <a class="mean-expand" href="#" style="font-size: 18px">+</a>
                      </ul>
                    </li>
                  <li><nuxt-link to="/contact">contacts</nuxt-link></li>
                </ul>
              </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile-menu-area end -->
  </header>
</template>

<script>
    export default {
        name: "HeaderTwo",
      data() {
        return {
          sticky: false,
          mobileToogle : false,
          searchToogle :false,
          submenToogle :false,
          menuAboutToogle :false,
          menuServiceToogle :false,
          menuProjectToogle :false,
          menuBlogToogle :false,
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);

      },
      methods: {

        handleScroll(){
          if ( window.scrollY > 100 ){
            this.sticky = true
          }
          else if ( window.scrollY < 100 ) {
            this.sticky = false
          }
        },


      }
    }
</script>

<style scoped>

</style>
