<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                style="background-image: url('img/psychology/why-should-you-not-punish-good-behavior.jpg')">
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
                            <h3 class="title">Who wants to punish good behaviour?..</h3>
                            <p>
                                I certainly don't want to punish good behaviour man.
                                It blew me away when I first found it out from Jordan Peterson. How many of us punish
                                our partners for good behaviour man? I certainly did.
                                <br>
                                <br>
                                Punishment is one of the best behavioural trainers there is at our disposal to ensure
                                that we keep moulding other people's interactions with us. Guess what? We punish good
                                behaviour all the freaking time and we don't even realize it and when they stop that
                                behaviour we are left to wonder don't they love us anymore? Maybe because it has been
                                years together and the love has just become mundane and is being taken for granted.
                                <br>
                                <br>
                                Well, It does take an immense amount of learning to ensure that you consciously do not
                                take other people's efforts for granted not when they are working one and half hours or
                                more to just expect a few loving words from you acknowledging the effort and the love
                                that it shows. Man, it is so important not just for the loved ones but for every single
                                relationship to sustain.
                                <br>
                                <br>
                                When someone is continually adapting their behaviour and interaction you are obliged to
                                respond and at least acknowledge that you are seeing them change and how you feel about
                                it. Like I always say I fail the most at this. It took me turning 28 years and bumping
                                into Jordan Peterson's "12 Rules for Life" book to finally integrate this part of the
                                behaviour into my soul.
                                <br>
                                <br>
                                We are all changing slowly moving somewhere. What we see, and who we are with, ensure
                                that we are affected by them in one way or another. If you develop a stronger
                                personality then you stay as an anchor in that friend group and keep everything together
                                as long as your strength sustains it. Sometimes the cycle of life just breaks the
                                friendship and leaves you alone only wanting to make a new friend group altogether.
                                <br>
                                <br>
                                Life Bitch! It's wonderful and does hit you with a bang when you least expect it. Ensure
                                that you make use of that opportunity and gain whatever it is that you are not
                                participating in a Zero-sum game. When it does hit you you need your loved one by your
                                side, We possibly cannot navigate our lives alone and emerge out of it as billionaires.
                                I use money because it has been the single biggest indicator of success in our country.
                                But it need not be. you define your success parameters and it need not necessarily be
                                the one everyone agrees with.
                                <br>
                                <br>
                                Ensure it constructively takes you up and leaves you feeling accomplished. That's the
                                dopamine that I am talking about. Even taking drugs leaves you with that feeling, But
                                you cannot replicate that behaviour over a span of 10 years and emerge better out of it.
                                It takes you deep into hell where you cannot even think about getting back up again to
                                the level that you were before you started it.
                                <br>
                                <br>
                                Trust me we will all reach hell if we punish good behaviour. The worst thing in life is
                                suffering alone and no one wanting to share the burden. We will all be faced with
                                situations where we do not know how to get out and someone who loves us might just make
                                it manageable while you are finding a way out.
                                <br>
                                <br>
                                We are always moving towards and simultaneously away from where we want to reach and we
                                do not want to be. It takes a lot of conscious effort to find out the alter our actions
                                and words when there are unintended consequences to our words or actions.
                                <br>
                                <br>
                                We overestimate our ability and underestimate other people's talents because we have too
                                much input from our senses and too little knowledge about other people's perceptions. We
                                are always bound to keep learning about others as they learn what they like and dislike.
                                In that journey punishing good behaviour would only make people less of what you want
                                them to be and more of the person you hate. Only to find out that you do not like them
                                after repeating this behaviour for years.
                                <br>
                                <br>
                                There are already forces other than yourself influencing people and this one behaviour
                                would just be the deal breaker between a long-term healthy relationship and an unhappy
                                relationship where you find yourself stuck after 10 years. So! Don't punish other
                                people's good behaviours.
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
                <other-blogs :next="32" :previous="33"></other-blogs>
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
            pageTitle: 'Why should you not punish good behavior?',
            audioPath: "https://audio.blitzbudget.com/psychology/why-should-you-not-punish-good-behavior.mp3",
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
