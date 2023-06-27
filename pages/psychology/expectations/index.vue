<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" style="background-image: url('img/psychology/expectations.jpg')"></div>
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
                            <h3 class="title">I have heard this phrase while living in India...</h3>
                            <p>
                                a million times
                                <br>
                                <br>
                            </p>
                            <blockquote>
                                <p class="blockquote blockquote-success">“expectations will lead to disappointments”
                                </p>
                            </blockquote>
                            <p>
                                <br>
                                <br>
                                and that somehow resonated with me sometimes during the thirty years of my life and I
                                started to believe that that might actually be true. And if I want to put a label to it
                                it would be Cynicism.
                                <br>
                                <br>
                                I should not expect a lot from others or expect an outcome so much that not having the
                                outcome disappoints me. This resonates with me in the sense that I should be able to
                                protect myself from negative emotions due to the possibility of not obtaining the
                                outcome by not anticipating an outcome or by not expecting something from others.
                                <br>
                                <br>
                                All that seems good but only to a certain degree. If I do not expect an outcome then I
                                do not see a foreseeable exciting outcome in the near future, which might also mean that
                                my motivation to keep moving forward towards that outcome is destroyed along with “Not
                                Expecting”.
                                <br>
                                <br>
                                To counter this phrase I have also heard the following sentence.
                                <br>
                                <br>
                            </p>
                            <blockquote>
                                <p class="blockquote blockquote-success">“Give your best, prepare for the worst and
                                    expect the best”
                                </p>
                            </blockquote>
                            <p>
                                <br>
                                <br>
                                I had tried to use these two statements combined to try and achieve something that I
                                really wanted to achieve in life and it had ensured that the possibility of achieving is
                                maximized while minimizing the disappointment that might come from not being able to achieve
                                the goal.
                                <br>
                                <br>
                                Applying this in practice, I have also misunderstood it as not having been excited about
                                the possible outcome of my effort but holding it down and toning it down until I
                                achieve it.
                                <br>
                                <br>
                                This ensured that I did not feel disappointed but I also ensured that I did not feel
                                positive emotions to the degree to which I would want it. It suppressed all emotions to
                                an equal degree regardless.
                                <br>
                                <br>
                                That is a bad place to be. We are beings driven by emotions. I think I had to own that
                                first. Emotions are there to guide me and I would use them to my advantage.
                                <br>
                                <br>
                                I had to master myself and my emotions to guide me to achieve what I want to achieve
                                with the maximum extent of experiencing life’s ups and downs as I navigate through it.
                                <br>
                                <br>
                            </p>
                            <blockquote>
                                <p class="blockquote blockquote-success">“All actions are selfish actions”
                                </p>
                            </blockquote>
                            <p>
                                <br>
                                <br>
                                I had to own the above sentence as well. I will do a selfless action to help somebody in
                                need if I do not know and mentally experience the pain and suffering of the other person
                                while being in their shoes and truly wanted to avoid the pain for this other being.
                                <br>
                                <br>
                                And that somehow makes me feel good about myself. I do not know why, but it does. That
                                feeling is sometimes what people crave. If doing that makes you feel extremely
                                miserable, I guarantee you that neither I nor anyone would be doing it. That is how
                                selfless action serves us.
                                <br>
                                <br>
                                I guess as Jordan Peterson says, “the selfless action of sharing is saving for the future
                                by giving a pound of the current food source to ensure that they might do the same in the
                                future when they hunt something,” though those were not his exact words. That’s how I
                                understood it.
                                <br>
                                <br>
                                I guess that brings us back to emotions. All actions can disappoint us, and we should
                                never let ourselves convince ourselves that no action is the best course of action or no
                                plan is the best course through life because something worse than disappointment is not
                                being excited about your future.
                                <br>
                                <br>
                                That is a true killer of joy. What is there to live for if we truly do not believe our
                                future self will be better off than our current self?!
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
            pageTitle: 'Expectations',
            audioPath: "https://audio.blitzbudget.com/psychology/expectations.mp3",
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
