<template>
  <div class="quote-area area-padding parallax-bg">
    <div class="container ">
      <div class="row">
        <div class="col-md-12 col-sm-12 ">
          <div class="row">
            <div class="quate-details">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="sub-head">
                  <h4>Request a  <span class="color">Call back</span></h4>
                  <p>Lorem ipsum dolor sit amet conse adipis elit Assumenda repud eum veniam optio modi sit explicabo nisi magnam quibusdam.</p>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="quote-locate">
                  <div class="quote-icon">
                    <i class="icon icon-map-marker"></i>
                    <span class="info-first">House-34,22/2 avenue</span>
                    <span class="info-simple">London, United Kingdom</span>
                  </div>
                  <div class="quote-icon">
                    <i class="icon icon-phone"></i>
                    <span class="info-first">+013 654 43245</span>
                    <span class="info-simple">info@cleaningss.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="row">
                <form id="contactForm" method="POST" action="contact.php" class="contact-form">
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <input type="text" id="name" class="form-control" placeholder="Name" required data-error="Please enter your name">
                    <div class="help-block with-errors"></div>
                    <input type="email" class="email form-control" id="email" placeholder="Email" required data-error="Please enter your email">
                    <div class="help-block with-errors"></div>
                    <input type="number" class="form-control" id="phone" placeholder="phone number" required data-error="Please enter your Phone number">
                    <div class="help-block with-errors"></div>
                    <select>
                      <option value="position">Apartment Cleaning</option>
                      <option value="position">Commercial Cleaning</option>
                      <option value="position">Residential Cleaning</option>
                      <option value="position">Carpet Cleaning</option>
                      <option value="position">Window Cleaning</option>
                      <option value="position">After Renovation</option>
                      <option value="position">Maid Services</option>
                    </select>
                    <div class="help-block with-errors"></div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <textarea id="message" rows="7" placeholder="Massage" class="form-control" required data-error="Write your message"></textarea>
                    <div class="help-block with-errors"></div>
                    <button type="submit" id="submit" class="quote-btn">Submit</button>
                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                    <div class="clearfix"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Quote"
    }
</script>

<style scoped>

</style>
