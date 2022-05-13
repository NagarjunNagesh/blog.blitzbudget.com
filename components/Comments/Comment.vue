<template>
  <div class="media">
    <nuxt-link class="pull-left" to="#pablo">
      <div class="avatar">
        <slot name="avatar">
          <img class="media-object img-raised" alt="Tim Picture" :src="avatar" />
        </slot>
      </div>
    </nuxt-link>
    <div class="media-body">
      <h5 class="media-heading">
        <slot name="author">
          {{ author }}
        </slot>
        <slot name="date">
          <small class="text-muted">&middot; {{ date }}</small>
        </slot>
      </h5>
      <slot name="comment">
        <span v-html="comment"></span>
      </slot>

      <div class="media-footer">
        <slot name="actions"> </slot>
      </div>
      <div>
        <slot name="replies">
          <comment v-for="comment in replies" :key="comment.author" :author="comment.author" :avatar="comment.avatar"
            :date="comment.date" :comment="comment.comment" :replies="comment.replies">
            <template slot="actions">
              <el-tooltip content="Reply To Comment" placement="top">
                <nuxt-link to="#pablo" class="btn btn-success btn-neutral pull-right">
                  <em class="now-ui-icons ui-1_send"></em> Reply
                </nuxt-link>
              </el-tooltip>
              <nuxt-link to="#pablo" :class="{ 'btn-default': !comment.liked }" class="btn btn-neutral pull-right">
                <em class="now-ui-icons ui-2_favourite-28"></em>
                {{ comment.likes }}
              </nuxt-link>
            </template>
          </comment>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import { Tooltip } from "element-ui";
export default {
  name: "comment",
  components: {
    [Tooltip.name]: Tooltip,
  },
  props: {
    avatar: {
      type: [String, Object],
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
    comment: {
      type: String,
      default: "",
    },
    replies: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style>
</style>
