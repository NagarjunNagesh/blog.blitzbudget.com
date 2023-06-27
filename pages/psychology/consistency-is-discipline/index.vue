<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" style="background-image: url('img/psychology/consistency-is-discipline.jpg')">
            </div>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">{{ pageTitle }}</h2>
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
            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="button-container">
                                <audio controls color="primary">
                                    <source :src="audioPath" type="audio/mpeg">
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
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
                                I held the belief that discipline was synonymous with obedience. This
                                perception led me to develop a negative connotation associated with discipline.
                                <br>
                                <br>
                                When we think of individuals in the military, we often describe them as disciplined. We see
                                them as organized and adhering to strict schedules, regardless of how they feel. This sense
                                of discipline is often accompanied by a feeling of thoughtlessness.
                                <br>
                                <br>
                                However, my perspective on discipline changed when I encountered the teachings of Jordan
                                Peterson. He reshaped my understanding of discipline, aligning it with the ideas expressed
                                by visionaries like Bill Gates and Steve Jobs in their interviews.
                                <br>
                                <br>
                                Discipline, I now realize, is about focus. It is the unwavering dedication and passion to
                                achieve a specific goal. True focus requires discipline. It involves setting our sights on a
                                singular objective and moving forward despite any doubts or criticisms from others. Passion
                                also plays a vital role by providing the drive to persevere, undeterred by the doubts of
                                those around us. It allows us to maintain our focus and keep pushing forward, regardless of
                                the obstacles we encounter.
                                <br>
                                <br>
                                This combination of focus, discipline, and passion is what propels us towards our
                                destination. Along the way, as Jordan Peterson mentions in his lectures, we may encounter
                                new information that causes us to adjust our goals slightly. It's not the initial goal that
                                matters most, but rather our willingness to adapt and continue pushing forward until we
                                achieve what truly matters in the face of adversity.
                                <br>
                                <br>
                                When we discover something we are truly passionate about, something that revitalizes our
                                existence and brings meaning to our lives, we can identify it as true passion. This passion
                                fuels our drive and allows us to persevere, finding fulfillment even in the midst of
                                challenges. It's akin to witnessing a mother with her newborn in Western nations—despite the
                                exhaustion and challenges, there's a smile on her face like never before.
                                <br>
                                <br>
                                This is what I call relentless passion. It gives profound meaning to our existence. When
                                coupled with focus, discipline, the willingness to adapt, and the ability to let go of what
                                doesn't serve us, it paves the way for success, regardless of our circumstances.
                                <br>
                                <br>
                                Life is thrust upon us without the ability to choose our mothers, fathers, or the
                                circumstances we are born into. Yet, we can be certain that our actions and choices will
                                leave an impact on the world in one way or another. That much is assured.
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
    components: {
        Card,
        InfoSection,
        Badge,
        Comment,
        [Button.name]: Button,
        [Checkbox.name]: Checkbox,
        OtherBlogs
    },
    head() {
        return {
            title: this.pageTitle
        }
    },
    data() {
        return {
            pageTitle: 'Consistency is Discipline',
            audioPath: "https://audio.blitzbudget.com/psychology/consistency-is-discipline.mp3",
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
<style></style>
