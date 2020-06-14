<template>
  <div class="project-area project-column-4 area-padding">
    <div class="container">
      <div class="row">
        <!-- Start Portfolio -page -->
        <div class="awesome-project fix">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="awesome-menu text-center">
              <ul class="project-menu">
                <li><a  class="active" data-filter="*" >All</a></li>
                <li><a  data-filter=".residential">Residential Cleaning</a></li>
                <li><a  data-filter=".commercial">Commercial Cleaning</a></li>
                <li><a  data-filter=".apartment">Apartment Cleaning</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="project-content" >
          <div class="row m-0">
            <!-- single-awesome-project start -->
            <div class=" mix residential p-0 ">
              <div class="project-single all-padding commercial">
                <div class="single-awesome-project">
                  <div class="awesome-img">
                    <a class="venobox" data-gall="myGallery" href="img/project/1.jpg">
                      <img src="img/project/1.jpg" alt="" />
                      <div class="add-actions text-center">
                        <div class="project-dec">
                          <h4>Nice project</h4>
                          <span>Commercial</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- single-awesome-project end -->
            <!-- single-awesome-project start -->
            <div class=" mix commercial p-0">
              <div class="project-single all-padding residential">
                <div class="single-awesome-project">
                  <div class="awesome-img">
                    <a class="venobox" data-gall="myGallery" href="img/project/2.jpg">
                      <img src="img/project/2.jpg" alt="" />
                      <div class="add-actions text-center">
                        <div class="project-dec">
                          <h4>Nice project</h4>
                          <span>Residential</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- single-awesome-project end -->
            <!-- single-awesome-project start -->
            <div class=" mix apartment p-0">
              <div class="project-single all-padding residential">
                <div class="single-awesome-project">
                  <div class="awesome-img">
                    <a class="venobox" data-gall="myGallery" href="img/project/3.jpg">
                      <img src="img/project/3.jpg" alt="" />
                      <div class="add-actions text-center">
                        <div class="project-dec">
                          <h4>Nice project</h4>
                          <span>Residential</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- single-awesome-project end -->
            <!-- single-awesome-project start -->
            <div class=" mix commercial p-0">
              <div class="project-single all-padding apartment">
                <div class="single-awesome-project">
                  <div class="awesome-img">
                    <a class="venobox" data-gall="myGallery" href="img/project/4.jpg">
                      <img src="img/project/4.jpg" alt="" />
                      <div class="add-actions text-center">
                        <div class="project-dec">
                          <h4>Nice project</h4>
                          <span>Apartment</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- single-awesome-project end -->
            <!-- single-awesome-project start -->
            <div class=" mix residential p-0">
              <div class="project-single all-padding commercial">
                <div class="single-awesome-project">
                  <div class="awesome-img">
                    <a class="venobox" data-gall="myGallery" href="img/project/5.jpg">
                      <img src="img/project/5.jpg" alt="" />
                      <div class="add-actions text-center">
                        <div class="project-dec">
                          <h4>Nice project</h4>
                          <span>commercial</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- single-awesome-project end -->
            <!-- single-awesome-project start -->
            <div class=" mix apartment p-0">
              <div class="project-single all-padding apartment">
                <div class="single-awesome-project">
                  <div class="awesome-img">
                    <a class="venobox" data-gall="myGallery" href="img/project/6.jpg">
                      <img src="img/project/6.jpg" alt="" />
                      <div class="add-actions text-center">
                        <div class="project-dec">
                          <h4>Nice project</h4>
                          <span>Apartment</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <!-- End main content -->
  </div>
</template>

<script>
    export default {
        name: "Projects",
      mounted(){
        var containerEl = document.querySelector('.project-content');
        var mixer = mixitup(containerEl);
      }
    }
</script>

<style scoped>

</style>
