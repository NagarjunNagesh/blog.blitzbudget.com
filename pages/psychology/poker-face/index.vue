<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" style="background-image: url('img/psychology/poker-face.jpg')"></div>
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
                            <h3 class="title">When in difficult situations we are forced to...</h3>
                            <p>
                                have difficult conversations with other
                                human beings and that would be a part of human social necessity.
                                <br>
                                <br>
                                We think of a lot of things before even confronting that person with difficult questions
                                like do I really value this relationship enough to point out that we are going astray
                                and we have to get back to the old synchronous path or it could be that you are forced
                                to speak with a person who is directly denigrating you or working against what you aimed
                                at.
                                <br>
                                <br>
                                These are the times when people show their real faces through action. But the precursor
                                to all of this is how they take it when you confront them with those difficult
                                situations, the most dangerous face is the poker face. It could mean among many things
                                that that person doesn’t care, doesn’t want to look vulnerable so carefully choosing to
                                hide emotions but nothing good is going to come out of that spot where they would know
                                more about you and you are left confused as to how that person has taken it.
                                <br>
                                <br>
                                We can all get confirmation about how they actually feel about it by waiting to see
                                exactly how they act it out and react to the world differently with the new information
                                that you had provided them with. That is the only way to find out their true intentions.
                                <br>
                                <br>
                                One thing is definitely for sure, they do not want to connect with you and find you to
                                be working directly against their intentions and aims so they prefer to have a poker
                                face to try and hide those thoughts and intentions.
                                <br>
                                <br>
                                Remember the times when you just confront the other person with their faults and they
                                not only take it with a smiling face but act upon it strenuously to ensure that they do
                                not affect you in that way.
                                <br>
                                <br>
                                Not mentioning their intentions directly to other people's faces for me is an act of
                                cowardice wrapped in the preface of being nice to other human beings. There are times to
                                be nice to everyone but being nice had to be aligned with our trusted version of self.
                                There is no use faking it.
                                <br>
                                <br>
                                We all fake it only when we know that there are never going to be any future
                                interactions with them later on. So there is no use to build a strong bond of
                                relationship with them and always keeping it ambiguous. But for other more important
                                ones, there is no use keeping things ambiguous I suppose, it only fogs your real
                                intention.
                                <br>
                                <br>
                                Unless it is precisely what, then that is a different story altogether.
                                <br>
                                <br>
                                I and my wife were having difficult conversations with someone whom my wife considers
                                important, at time moment the other person would have a poker face and just listen to
                                the conversation. It was a time when I am consciously trying to understand more about
                                human psychology and hence paid immense attention to that conversation. The other person
                                made a painstaking effort to not let any emotions out but it was pretty clear to me that
                                the poker face was to hide the negative emotions or stop its leak.
                                <br>
                                <br>
                                It could also be because of the genuine acceptance of that situation despite
                                understanding exactly what my wife meant it is also equally hurting when confronted with
                                the truth. The truth is harder to swallow when confronted. It was surprising to me that
                                a human experience is possible where we feel offended when the truth is told blankly to
                                our faces. I am pretty sure we can all work on our delivery of that speech and it is
                                mostly in the delivery of speech which people find offending but not the truth itself
                                which was another learning curve from that conversation.
                                <br>
                                <br>
                                However frustrating and painful. We have to ensure that the message reaches the other
                                person with the exact intention and emotion that we intend to be reached, filtering out
                                our frustration in this particular instance. Then I guess the poker face could have very
                                well been avoided and probably could have connected with that other person deeply.
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
            pageTitle: 'Poker Face',
            audioPath: "https://audio.blitzbudget.com/psychology/poker-face.mp3",
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
