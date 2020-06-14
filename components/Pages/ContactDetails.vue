<template>
  <div class="contact-page area-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-12">
          <div class="contact-head">
            <h3>Request a  <span class="color">Contact us</span></h3>
            <p>ConsultExprts  The universal acceptance of bitcoin has given a tremendous opportunity for merchants to do crossborder transactions instantly and at reduced cost.</p>
            <div class="project-share">
              <h5>Our Social Link :</h5>
              <ul class="project-social">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-google"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- End contact icon -->
        <div class="col-md-6 col-sm-6 col-xs-12">
          <div class="contact-form">
            <div class="row">
              <form id="contactForm" method="POST" action="contact.php" class="contact-form">
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <input type="text" id="name" class="form-control" placeholder="Name" required data-error="Please enter your name">
                  <div class="help-block with-errors"></div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-12">
                  <input type="email" class="email form-control" id="eemail" placeholder="Email" required data-error="Please enter your email">
                  <div class="help-block with-errors"></div>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <input type="text" id="msg_subject" class="form-control" placeholder="Subject" required data-error="Please enter your message subject">
                  <div class="help-block with-errors"></div>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12">
                  <textarea id="message" rows="7" placeholder="Massage" class="form-control" required data-error="Write your message"></textarea>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                  <button type="submit" id="submit" class="contact-btn">Submit</button>
                  <div id="msgSubmit" class="h3 text-center hidden"></div>
                  <div class="clearfix"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- End contact Form -->
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ContactDetails"
    }
</script>

<style scoped>

</style>
