<template>
  <div class="cards">
    <div class="container">
      <div class="title">
        <h3>
          <small>Pricing Cards</small>
        </h3>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <card type="pricing">
            <h6 class="category">Alpha Pack</h6>
            <div class="icon icon-success">
              <em class="now-ui-icons objects_diamond"></em>
            </div>
            <h3 class="card-title">$67</h3>
            <p class="card-description">
              This is good if your company size is between 100 and 299
              employees.
            </p>
            <nuxt-link to="#pablo" class="btn btn-success btn-round">Add to Cart</nuxt-link>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="pricing" color="green">
            <h1 class="card-title">$40</h1>
            <ul>
              <li>
                <em class="now-ui-icons ui-1_check text-success"></em> Unlimited
                MB
              </li>
              <li>
                <em class="now-ui-icons ui-1_check text-success"></em> Unlimited
                emails
              </li>
              <li>
                <em class="now-ui-icons ui-1_check text-success"></em> Unlimited
                Databases
              </li>
              <li>
                <em class="now-ui-icons ui-1_check text-success"></em> Full
                Support
              </li>
            </ul>
            <n-button type="neutral" disabled round>
              <span class="text-success">Current Plan</span>
            </n-button>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="pricing" class="card-background" style="background-image: url('img/project12.jpg')">
            <h6 class="category">Professional</h6>
            <div class="icon icon-success">
              <em class="now-ui-icons objects_spaceship"></em>
            </div>
            <h2 class="card-title">$67</h2>
            <p class="card-description">
              This is good if you are a freelancer of photographer.
            </p>
            <n-button type="success" round> Sign Up </n-button>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="pricing">
            <h6 class="category">Starter</h6>
            <h1 class="card-title">
              <small>$</small>
              10
            </h1>
            <ul>
              <li>
                <em class="now-ui-icons ui-1_check text-success"></em> 1000 MB
              </li>
              <li>
                <em class="now-ui-icons ui-1_simple-remove text-danger"></em> 3
                email
              </li>
              <li>
                <em class="now-ui-icons ui-1_simple-remove text-danger"></em> 5
                Databases
              </li>
              <li>
                <em class="now-ui-icons ui-1_simple-remove text-danger"></em> No
                Support
              </li>
            </ul>
            <n-button type="success" round> Register </n-button>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button } from "@/components";

export default {
  components: {
    Card,
    [Button.name]: Button,
  },
};
</script>
<style>
</style>
