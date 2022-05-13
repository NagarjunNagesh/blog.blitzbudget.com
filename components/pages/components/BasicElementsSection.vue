<template>
  <div class="section section-basic" id="basic-elements">
    <div class="container">
      <h3 class="title">Basic Elements</h3>
      <h4>Buttons</h4>
      <p class="category">Pick your style</p>
      <div class="row">
        <div class="col-md-10">
          <n-button type="success">Default</n-button>
          <n-button type="success" round>Round</n-button>
          <n-button type="success" round>
            <em class="now-ui-icons ui-2_favourite-28"></em> With Icon
          </n-button>
          <n-button type="success" round icon>
            <em class="now-ui-icons ui-2_favourite-28"></em>
          </n-button>
          <n-button type="success" round simple>Simple</n-button>
        </div>
      </div>
      <p class="category">Pick your size</p>
      <div class="row">
        <div class="col-md-10">
          <n-button type="success" size="sm">Small</n-button>
          <n-button type="success">Regular</n-button>
          <n-button type="success" size="lg">Large</n-button>
        </div>
      </div>
      <p class="category">Pick your color</p>
      <div class="row">
        <div class="col-md-10">
          <n-button type="default">Default</n-button>
          <n-button type="primary">Primary</n-button>
          <n-button type="info">Info</n-button>
          <n-button type="success">Success</n-button>
          <n-button type="warning">Warning</n-button>
          <n-button type="danger">Danger</n-button>
          <n-button type="neutral">Neutral</n-button>
        </div>
      </div>
      <h4>Links</h4>
      <div class="row">
        <div class="col-md-8">
          <n-button type="default" link>Default</n-button>
          <n-button type="primary" link>Primary</n-button>
          <n-button type="info" link>Info</n-button>
          <n-button type="success" link>Success</n-button>
          <n-button type="warning" link>Warning</n-button>
          <n-button type="danger" link>Danger</n-button>
          <n-button type="neutral" link>Neutral</n-button>
        </div>
      </div>
      <!--                 social n-buttons		         -->
      <div id="social-n-buttons">
        <h4>Social n-buttons</h4>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <p class="category">Default</p>
            <n-button class="btn-twitter">
              <em class="fab fa-twitter"></em> Connect with Twitter
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <p class="category">&nbsp;</p>
            <n-button class="btn-icon btn-twitter">
              <em class="fab fa-twitter"></em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <p class="category">&nbsp;</p>
            <n-button class="btn-icon btn-round btn-twitter">
              <em class="fab fa-twitter"></em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <p class="category">Neutral</p>
            <n-button class="btn-icon btn-neutral btn-twitter">
              <em class="fab fa-twitter"></em>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <p class="category">&nbsp;</p>
            <n-button class="btn-neutral btn-twitter">
              <em class="fab fa-twitter"></em> Connect with Twitter
            </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-facebook">
              <em class="fab fa-facebook-square"></em> Share · 2.2k
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-facebook">
              <em class="fab fa-facebook"> </em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-facebook">
              <em class="fab fa-facebook"> </em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-facebook">
              <em class="fab fa-facebook-square"> </em>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-facebook">
              <em class="fab fa-facebook-square"></em> Share · 2.2k
            </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-google">
              <em class="fab fa-google"></em> Share on Google+
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-google">
              <em class="fab fa-google"> </em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-google">
              <em class="fab fa-google"> </em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-google">
              <em class="fab fa-google"> </em>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-google">
              <em class="fab fa-google"></em> Share on Google+
            </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-linkedin">
              <em class="fab fa-linkedin"></em> Connect with Linkedin
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-linkedin">
              <em class="fab fa-linkedin"></em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-linkedin">
              <em class="fab fa-linkedin"></em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-linkedin">
              <em class="fab fa-linkedin-square"></em>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-linkedin">
              <em class="fab fa-linkedin-square"></em> Connect with Linkedin
            </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-pinterest">
              <em class="fab fa-pinterest"></em> Pint it · 212
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-pinterest">
              <em class="fab fa-pinterest"></em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-pinterest">
              <em class="fab fa-pinterest"></em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-pinterest">
              <em class="fab fa-pinterest"></em>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-pinterest">
              <em class="fab fa-pinterest"></em> Pint it · 212
            </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-youtube">
              <em class="fab fa-youtube"></em> View on Youtube
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-youtube">
              <em class="fab fa-youtube"> </em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-youtube">
              <em class="fab fa-youtube"> </em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-youtube">
              <em class="fab fa-youtube"> </em>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-youtube">
              <em class="fab fa-youtube"></em> View on Youtube
            </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-tumblr">
              <em class="fab fa-tumblr-square"></em> Repost
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-tumblr">
              <em class="fab fa-tumblr"> </em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-tumblr">
              <em class="fab fa-tumblr"> </em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-tumblr">
              <em class="fab fa-tumblr-square"> </em>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-tumblr">
              <em class="fab fa-tumblr-square"></em> Repost
            </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-github">
              <em class="fab fa-github"></em> Connect with Github
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-github">
              <em class="fab fa-github"></em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-github">
              <em class="fab fa-github"></em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-github">
              <em class="fab fa-github"></em>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-github">
              <em class="fab fa-github"></em> Connect with Github
            </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-behance">
              <em class="fab fa-behance-square"></em> Follow us
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-behance">
              <em class="fab fa-behance"></em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-behance">
              <em class="fab fa-behance"></em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-behance">
              <em class="fab fa-behance"></em>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-behance">
              <em class="fab fa-behance-square"></em> Follow us
            </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-dribbble">
              <em class="fab fa-dribbble"></em> Find us on Dribble
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-dribbble">
              <em class="fab fa-dribbble"></em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-dribbble">
              <em class="fab fa-dribbble"></em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-dribbble">
              <em class="fab fa-dribbble"></em>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-dribbble">
              <em class="fab fa-dribbble"></em> Find us on Dribble
            </n-button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <n-button class="btn-reddit">
              <em class="fab fa-reddit"></em> Repost · 232
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-reddit">
              <em class="fab fa-reddit"></em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-round btn-reddit">
              <em class="fab fa-reddit"></em>
            </n-button>
          </div>
          <div class="col-md-1 col-sm-1">
            <n-button class="btn-icon btn-neutral btn-reddit">
              <em class="fab fa-reddit"></em>
            </n-button>
          </div>
          <div class="col-md-3 col-sm-4">
            <n-button class="btn-neutral btn-reddit">
              <em class="fab fa-reddit"></em> Repost · 232
            </n-button>
          </div>
        </div>
      </div>
      <!--                 end social n-buttons -->
      <div class="space-70"></div>
      <div id="inputs">
        <h4>Inputs</h4>
        <p class="category">Form Controls</p>
        <div class="row">
          <div class="col-sm-6 col-lg-3">
            <fg-input placeholder="Regular"></fg-input>
          </div>
          <div class="col-sm-6 col-lg-3">
            <fg-input value="Success" class="has-success"></fg-input>
          </div>
          <div class="col-sm-6 col-lg-3">
            <fg-input value="Error Input" class="has-danger"></fg-input>
          </div>
          <div class="col-sm-6 col-lg-3">
            <fg-input addon-left-icon="now-ui-icons users_single-02" placeholder="Left Nucleo Icon">
            </fg-input>
          </div>
          <div class="col-sm-6 col-lg-3">
            <fg-input addon-right-icon="now-ui-icons users_single-02" placeholder="Right Nucleo Icon">
            </fg-input>
          </div>
        </div>
      </div>
      <div class="space-70"></div>
      <!--                 select -->
      <div class="select">
        <div class="row">
          <div class="col-md-6">
            <div class="title">
              <h4>Customizable Select</h4>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-8 col-sm-5">
                <el-select class="select-success" v-model="singleSelect.value" placeholder="Single Option">
                  <el-option v-for="option in singleSelect.options" class="select-success" :key="option.label"
                    :value="option.value" :label="option.label">
                  </el-option>
                </el-select>
              </div>
              <div class="col-lg-6 col-md-8 col-sm-5">
                <el-select class="select-success" multiple collapse-tags placeholder="Multiple Options"
                  v-model="multiSelect.value">
                  <el-option v-for="option in multiSelect.options" class="select-success" :key="option.value"
                    :value="option.value" :label="option.label">
                  </el-option>
                </el-select>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="title">
              <h4>Dropdown & Dropup</h4>
            </div>
            <div class="row">
              <div class="col-lg-5 col-md-8">
                <drop-down>
                  <n-button slot="title" class="dropdown-toggle" type="success" data-toggle="dropdown" round>
                    Dropdown
                  </n-button>
                  <nuxt-link class="dropdown-item" to="#">Action</nuxt-link>
                  <nuxt-link class="dropdown-item" to="#">Another action</nuxt-link>
                  <nuxt-link class="dropdown-item" to="#">Something else here</nuxt-link>
                </drop-down>
              </div>
              <div class="col-lg-5 col-md-8">
                <drop-down direction="up">
                  <n-button slot="title" class="dropdown-toggle" type="success" data-toggle="dropdown" round>
                    Dropdown
                  </n-button>
                  <nuxt-link class="dropdown-item" to="#">Action</nuxt-link>
                  <nuxt-link class="dropdown-item" to="#">Another action</nuxt-link>
                  <nuxt-link class="dropdown-item" to="#">Something else here</nuxt-link>
                </drop-down>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--                 end select -->
      <div class="space-70"></div>
      <!--				 textarea/tags -->
      <div id="textareaTags">
        <div class="row">
          <div class="col-md-6">
            <div class="title">
              <h4>Textarea</h4>
            </div>
            <textarea class="form-control" name="name" rows="4" cols="80"
              placeholder="You can write your text here..."></textarea>
          </div>
          <div class="col-md-6">
            <div class="title">
              <h4>Tags</h4>
            </div>
            <el-tag :key="tag" v-for="tag in tags.dynamicTags" size="small" type="danger" :closable="true"
              :close-transition="false" @close="handleClose(tag)">
              {{ tag }}
            </el-tag>

            <input type="text" placeholder="New Tag" class="form-control input-new-tag" v-model="tags.inputValue"
              ref="saveTagInput" size="mini" @keyup.enter="handleInputConfirm" @blur="handleInputConfirm" />
          </div>
        </div>
      </div>
      <div class="space-70"></div>
      <div class="row" id="checkRadios">
        <div class="col-sm-6 col-lg-3">
          <p class="category">Checkboxes</p>
          <n-checkbox v-model="checkboxes.unchecked">Unchecked</n-checkbox>
          <n-checkbox v-model="checkboxes.checked">Checked</n-checkbox>
          <n-checkbox v-model="checkboxes.disabledUnchecked" disabled>Disabled Unchecked</n-checkbox>
          <n-checkbox v-model="checkboxes.disabledChecked" disabled>Disabled Checked</n-checkbox>
        </div>
        <div class="col-sm-6 col-lg-3">
          <p class="category">Radios</p>
          <n-radio v-model="radios.radioOn" label="1">Radio is On</n-radio>
          <n-radio v-model="radios.radioOn" label="2">Radio is Off</n-radio>

          <n-radio v-model="radios.radioOff" label="1" disabled>Disabled radio is on</n-radio>
          <n-radio v-model="radios.radioOff" label="2" disabled>Disabled radio is off</n-radio>
        </div>
        <div class="col-sm-6 col-lg-3">
          <p class="category">Toggle buttons</p>
          <n-switch v-model="switches.defaultOn"></n-switch>
          <br />
          <n-switch v-model="switches.defaultOff" on-text="ON" off-text="OFF"></n-switch>
        </div>
        <div class="col-sm-6 col-lg-3">
          <p class="category">Sliders</p>
          <slider v-model="sliders.simple"> </slider>
          <br />
          <slider v-model="sliders.rangeSlider" type="success" :connect="true">
          </slider>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Button,
  Checkbox,
  Radio,
  FormGroupInput,
  DropDown,
  Slider,
  Switch,
} from "@/components";
import { Select, Option, Tag } from "element-ui";

export default {
  components: {
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [Radio.name]: Radio,
    [FormGroupInput.name]: FormGroupInput,
    [Switch.name]: Switch,
    [Select.name]: Select,
    [Option.name]: Option,
    [DropDown.name]: DropDown,
    [Tag.name]: Tag,
    Slider,
  },
  data() {
    return {
      singleSelect: {
        value: "",
        options: [
          {
            value: "1",
            label: "Foobar",
          },
          {
            value: "2",
            label: "Is great",
          },
        ],
      },
      multiSelect: {
        value: "",
        options: [
          {
            value: "2",
            label: "Paris",
          },
          {
            value: "3",
            label: "Bucharest",
          },
          {
            value: "4",
            label: "Rome",
          },
          {
            value: "5",
            label: "New York",
          },
          {
            value: "6",
            label: "Miami",
          },
          {
            value: "7",
            label: "Piatra Neamt",
          },
          {
            value: "8",
            label: "Paris",
          },
          {
            value: "9",
            label: "Bucharest",
          },
          {
            value: "10",
            label: "Rome",
          },
          {
            value: "11",
            label: "New York",
          },
          {
            value: "12",
            label: "Miami",
          },
          {
            value: "13",
            label: "Piatra Neamt",
          },
          {
            value: "14",
            label: "Paris",
          },
          {
            value: "15",
            label: "Bucharest",
          },
          {
            value: "16",
            label: "Rome",
          },
          {
            value: "17",
            label: "New York",
          },
          {
            value: "18",
            label: "Miami",
          },
          {
            value: "19",
            label: "Piatra Neamt",
          },
        ],
      },
      tags: {
        dynamicTags: ["Tag 1", "Tag 2", "Tag 3"],
        inputVisible: false,
        inputValue: "",
      },
      radios: {
        radioOn: "2",
        radioOff: "2",
      },
      checkboxes: {
        unchecked: false,
        checked: true,
        disabledUnchecked: false,
        disabledChecked: true,
      },
      switches: {
        defaultOn: true,
        defaultOff: false,
      },
      sliders: {
        simple: 30,
        rangeSlider: [20, 60],
      },
    };
  },
  methods: {
    handleClose(tag) {
      this.tags.dynamicTags.splice(this.tags.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.tags.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.tags.inputValue;
      if (inputValue) {
        this.tags.dynamicTags.push(inputValue);
      }
      this.tags.inputVisible = false;
      this.tags.inputValue = "";
    },
  },
};
</script>
<style>
</style>
