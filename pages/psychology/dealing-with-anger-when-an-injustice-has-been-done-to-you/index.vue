<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" style="background-image: url('img/psychology/dealing-with-anger-when-an-injustice-has-been-done-to-you.jpg')"></div>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">Dealing with anger when an injustice has been done to you</h2>
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
                            <h3 class="title">That is often the hardest to control...</h3>
                            <p>
                                at least personally. I am forced to deal with the
                                immediacy of dealing with that and correcting it. When a false accusation has been made
                                effectively making you the bad person then you immediately know that an injustice has
                                been done towards you, or do you??
                                <br>
                                <br>
                                It is easy to assume that, but then ask yourself what is it that you could have done to
                                prevent yourself from being in that situation in the first place. If there is something
                                that you indeed was seduced into doing that you would otherwise not do then someone
                                knows to manipulate you into doing the things that you do not want to do under normal
                                circumstance but would do if certain emotions or certain situations were triggered.
                                <br>
                                <br>
                                If you could no longer find anything that you could have done to improve the situation
                                and are absolutely convinced that the other person is bitching about you and their
                                perception of you is not negative that using the word negative seems to be an
                                understatement then, by all means, move away from that person or group, learn from that
                                experience. Do not in any way learn to go inwards and become an introvert again., If
                                that is the conclusion then it is your insecurity that is being triggered and almost
                                always that is often the scenario during which you would stop connecting with others and
                                curl up and sleep during the night.
                                <br>
                                <br>
                                Act as you would normally act but learn to identify manipulative people faster and
                                filter them out of your relationship faster so you do not have to go through that shitty
                                experience again. By all means, you have one purpose in goal, protect yourself and your
                                loved ones so that you can grow and move towards the goal pointed towards the good,
                                towards improvement.
                                <br>
                                <br>
                                More often than not I get frustrated or angry when this information filter through and I
                                find myself wanting to correct that injustice and take action. Anger as such is a weird
                                negative emotion that forces us to take action immediately often having dire
                                consequences as a result which you would not otherwise have done under normal
                                circumstances.
                                <br>
                                <br>
                                Work on that emotion, do not control your anger. that often bottles up and becomes
                                stressed. redirect that energy into something else. Let it out in some other way.
                                because when you bottle it up you would often find yourself more irritable or snapping
                                at someone. Those are signs of bottling up negative emotions, time to spend some time
                                with yourself and find out why you are feeling what you are feeling and start organizing
                                those thoughts, The best way that I found out was to take a piece of paper, isolate
                                yourself from other circumstances and start writing without filter what ever is on your
                                mind. and if it is too provocative. just burn it afterwards. But that outlet is divine.
                                You would often find yourself relieved of a burden. That is the key sign that you are no
                                longer captivated by an emotion. That emotion has a subpersonality which would is now
                                used to get yourself more organized. Because writing is the most curative way of doing
                                or even spending time alone with yourself and sorting through the mess. or even by
                                punching stuff, I mean punching bags, not actual people who triggered those emotions.
                                <br>
                                <br>
                                And next time do better.
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
