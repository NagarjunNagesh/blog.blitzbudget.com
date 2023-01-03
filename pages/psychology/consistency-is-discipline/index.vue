<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" style="background-image: url('img/psychology/consistency-is-discipline.jpg')"></div>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">Consistency is Discipline</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="button-container">
                            <nuxt-link to="#article" class="btn btn-success btn-round btn-lg">
                                <em class="now-ui-icons text_align-left"></em> Read Article
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section" id="article">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 ml-auto mr-auto">
                            <h3 class="title">For most of my childhood life, I thought...</h3>
                            <p>
                                that discipline equals obedience and I almost
                                had a negative connotation attached to it as a result of it.
                                <br>
                                <br>
                                When someone goes to the military they are disciplined. In the sense that they become
                                more organized and start doing things at the same time every day no matter what they
                                feel. There is a feeling of thoughtlessness attached to it.
                                <br>
                                <br>
                                It took Jordan Peterson to change the way I think about discipline now. The way I see
                                discipline now is the way bill gates and Steve Jobs have made it mentioned in their
                                interviews.
                                <br>
                                <br>
                                It was the focus! The focus and the passion to make it happen. There is no focus without
                                discipline. Focus is aiming at one thing and moving forward irrespective of what others
                                might say. And the role passion plays is equally important in the sense that we are not
                                deterred when people doubt us and hence we keep the focus on where we want to go and
                                keep pushing no matter what!
                                <br>
                                <br>
                                That is what will help us reach our destination. And on the way, Jordan says in his
                                lectures that we will get new information and slightly change our goals. And that it is
                                not your initial goal that you set that matters but the willingness to adapt and yet
                                keep pushing until you reach the goal that truly matters in the face of adversity.
                                <br>
                                <br>
                                If you find something that you are passionate about. Something that revitalizes your
                                existence and gives meaning to you and helps others around you directly or indirectly we
                                can call that passion. It will enable you to keep pushing and yet make you happy
                                irrespective. It is like seeing a mother to a newborn in the western nations, they look
                                absolutely devastated and destroyed yet there is a smile on their face that you had
                                never ever seen before.
                                <br>
                                <br>
                                That’s what I call relentless passion, it truly gives meaning to existence. Such a
                                passion coupled with focus, discipline, willingness to adapt, and ditch what fails will
                                make one successful no matter what regardless of one’s circumstances.
                                <br>
                                <br>
                                The thrownness of life when we do not choose our mothers, fathers, circumstances, our
                                country yet we can be sure that will leave an impact on the world in one way or another.
                                that is assured!
                                <br>
                                <br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section section-blog-info">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 ml-auto mr-auto">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="blog-tags">
                                        Tags:
                                        <span class="label label-success">Psychology</span>
                                    </div>
                                </div>
                                <div class="col-md-6"></div>
                            </div>
                            <hr />
                            <card type="profile" plain>
                                <template slot="raw-content">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="card-avatar">
                                                <nuxt-link to="#pablo">
                                                    <img class="img img-raised" src="img/authors/nagarjun.jpg"
                                                        alt="author" />
                                                </nuxt-link>
                                                <div class="ripple-container"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <h4 class="card-title">Nagarjun Nagesh</h4>
                                            <p class="description">
                                                I've been trying to articulate psychology and its impact
                                                on us where we are conscious of it or not.
                                            </p>
                                        </div>
                                        <div class="col-md-2">
                                            <button type="button" class="btn btn-default pull-right btn-round">
                                                Follow
                                            </button>
                                        </div>
                                    </div>
                                </template>
                            </card>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section">
                <other-blogs :next="16" :previous="17"></other-blogs>
            </div>
        </div>
    </div>
</template>
<script>
import {
    Card,
    Button,
    Comment,
    Badge,
    InfoSection,
    Checkbox,
} from "@/components";
import initParallax from "@/utils/initParallax";
import OtherBlogs from "../../../components/BlogPosts/OtherBlogs.vue";
export default {
    name: "blog-post",
    head: {
        title: 'Should you forgive?',
    },
    components: {
        Card,
        InfoSection,
        Badge,
        Comment,
        [Button.name]: Button,
        [Checkbox.name]: Checkbox,
        OtherBlogs
    },
    data() {
        return {
            form: {
                comment: "",
            },
            comments: [],
        };
    },
    mounted() {
        initParallax();
    },
};
</script>
<style>

</style>
