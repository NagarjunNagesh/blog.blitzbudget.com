<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" style="background-image: url('img/psychology/self-consciousness.jpg')"></div>
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
                            <h3 class="title">Being self-conscious is necessary...</h3>
                            <p> We need to know where we are, how we look and be
                                conscious of how we are doing what we are doing.
                                <br>
                                <br>
                                That is a bare minimum expected out of every human being and we all seem to do it pretty
                                well in my estimation.
                                <br>
                                <br>
                                But what prevents us from being our full expression of ourselves also seems to be
                                exactly that. When we are self-conscious that everyone is watching us the eerie
                                uncomfortable feeling that we that arises from the bottom of the stomach is also what is
                                preventing us from doing something stupid.
                                <br>
                                <br>
                                That circuitry can be used to suppress you from expressing yourself In front of an
                                intimidating crowd for the fear of portraying yourself as an idiot.
                                <br>
                                <br>
                                Or it could even be used in circumstances where we prevent ourselves from expressing any
                                emotions and where we just try to be extremely professional.
                                <br>
                                <br>
                                Being professional does not mean not being emotional. It took me a long time to
                                understand that integrating emotions into the profession far outweighs the benefit of
                                not being emotional at work.
                                <br>
                                <br>
                                It however does not mean that we can cry and act as if we cannot manage our emotions.
                                <br>
                                <br>
                                It was really hard to let go, maybe because I am an introvert and expressing emotions to
                                colleagues and strangers just feels foreign, however, I was not born this way. I used to
                                be the polar opposite of this character. Something changed after I was betrayed and
                                cheated by people who I felt loved me. Only to know they never had.
                                <br>
                                <br>
                                Then I closed up completely and prevented myself from being too expressive. That came
                                from the fear of not wanting to go through what I had to go through. I was depressed
                                continuously for like 6 months. Not to the extreme that I didn’t want to get out of bed
                                but to the extent that I hated having any meaningful relationship and spent a lot of
                                time alone and with nature.
                                <br>
                                <br>
                                Being with nature somehow felt peaceful and curative. And after what I felt like a very
                                long time, I could see people for who they were. At least I thought I did and started
                                judging them for their authenticity of wanting to connect with me or my wife.
                                <br>
                                <br>
                                It prevented me from having a lot of friends and even at instances when they used to
                                talk for hours, I was just listening and observing the whole room. Seeing people and
                                their expressions and trying to figure out what was going through their minds. Coming to
                                think of it, it was all to prevent myself from getting too attached to the wrong people
                                in life. I had to develop this self-consciousness.
                                <br>
                                <br>
                                Soon it crawled into every aspect of my life and I felt like I didn’t want to speak. A
                                normal conversation just felt like a waste of time. I felt like I knew that given enough
                                time they would all leave anyway and what is the point in trying to make a connection if
                                that was eventual.
                                <br>
                                <br>
                                All the while I was not living my life. Judging people and having figured out the
                                reality of it was fine but not choosing to live in the moment and experience what people
                                were experiencing was just too steal a price to pay for this. Slowly after consuming
                                Jordan Peterson's content over the course of one and half years I started to change.
                                Started to let go of all the futile backlogs that I had gathered and tried to be a
                                person who would be loved and started to become vulnerable.
                                <br>
                                <br>
                                All of that came from a different place now. I slowly started to help people when they
                                asked me for something with the full intention of trying to help them achieve what they
                                wanted to if they let me.
                                <br>
                                <br>
                                All of these made me much more satisfied than before. I started to express a lot of how
                                I felt and put myself out there in front of people. I started to speak the truth about
                                everything that I felt about people.
                                <br>
                                <br>
                                I truly think I have successfully transitioned to become a better person by letting go
                                of being too self-conscious and being true to myself and only speaking the truth.
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
                <other-blogs :next="14" :previous="15"></other-blogs>
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
            pageTitle: 'Self consciousness',
            audioPath: "https://audio.blitzbudget.com/psychology/self-consciousness.mp3",
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
