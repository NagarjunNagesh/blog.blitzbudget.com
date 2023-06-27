<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                style="background-image: url('img/psychology/learn-to-let-go-of-the-need-to-control.jpg')"></div>
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
                            <h3 class="title">We are often held responsible for the words...</h3>
                            <p>
                                that we sputter. That is a reasonable
                                expectation from us. If only we could all do what we had promised or keep all the New
                                Years' resolutions then we would never have to say the same new year's resolution ever
                                again.
                                <br>
                                <br>
                                One thing is saying them out aloud and another thing is actually keeping your word. This
                                happens in verbal agreements as well. Most often with your partner. You can torture them
                                and remind them that they had promised and are not keeping their word but what good
                                would it do if it is not organic. Meaning, if it doesn’t naturally come from them.
                                <br>
                                <br>
                                Don’t be upset, just let go! I am sure you will live and they will too. This is what
                                will happen if you let go! They will be grateful for that. Remember that and May try to
                                keep their word better the next time. Or the next time you don’t keep your word just
                                because you do t feel like it. They will let it go as well.
                                <br>
                                <br>
                                Peace is the most important part of any relationship, full-stop. Without peace and
                                tranquillity, there is no room for love. Love is subtle in a relationship that’s
                                supposed to last a lifetime. It is not as strong as it was in the initial years. As
                                such, it has to be allowed to arise out of slumber. It won’t if all you are doing is
                                keeping everybody on the edge by calculating everything they said to you every goddamn
                                time.
                                <br>
                                <br>
                                It’s stressful man and not only that, it is not a good practice. You will stress
                                yourself out as well. Let's go and see what happens. Only good will come out of it.
                                <br>
                                <br>
                                At the same time, be responsible and do not let others take your niceness for granted.
                                If they do it more often then return their deeds back to them, if they get hurt remind
                                them what they did to you, I know that’s evil. Which is why you have to sit and talk
                                with them before doing that. Only if it does not work, try this one as a last resort.
                                <br>
                                <br>
                                If they still don’t care then I am sorry to say it but you are less important to them.
                                You are in a relationship that is bound to get you hurt. A strong relationship is built
                                on vulnerability and openness. Only then trust is earned. With trust, you can fail in
                                front of them and not look stupid not look strong and be naked. Yet they will love you
                                and they should love your naked vulnerable self as you are!! Which is exactly the person
                                that you should fall for.
                                <br>
                                <br>
                                Don’t fool yourself with any other partner. It’s just not worth it. Every human being is
                                different and as such, every relationship is different in its own regard. There are some
                                common elements though that we all can agree upon, we do not keep our words 100% of the
                                time. It could be 99% or less but it can never be 100%.
                                <br>
                                <br>
                                It is exactly this flaw in is that also makes us creative. Imagine a person who has that
                                much control over his own body, mind and soul. There is no room for expression only room
                                for discipline. The subconscious is suppressed throughout the day and the only time it
                                has some room for expression is when you sleep and only in the subtlest of ways like
                                dreaming.
                                <br>
                                <br>
                                That freedom that we give ourselves should also be given to others to relieve them of
                                their verbal promises now and then. Still choosing to forgive them and move on from
                                that. That is the true expression of love. That is the true expression of freedom in a
                                relationship.
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
            pageTitle: 'Learn to let go of the need to control',
            audioPath: "https://audio.blitzbudget.com/psychology/learn-to-let-go-of-the-need-to-control.mp3",
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
