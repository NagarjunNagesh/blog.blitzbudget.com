<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                style="background-image: url('img/psychology/can-the-need-to-be-perfect-stop-you-from-achieving-your-dreams.jpg')">
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
                            <h3 class="title">Such a Simple Question Can Be Answered...</h3>
                            <p>
                                With a simple "yes," but it would mean nothing without a much-deserving explanation.
                                <br>
                                <br>
                                To be perfect, it is necessary to fail. Without failure, there is no possibility of
                                perfection. So why is the fear of the need to be perfect stopping you from doing what you
                                want to do?
                                <br>
                                <br>
                                Is it just an excuse to not do things? You have to be the one answering the question, man.
                                It could be anything. Ask yourself truly why am I afraid of imperfection? Why am I so afraid
                                to fail? Why am I so convinced that I deserve to achieve yet paralyzed by the fear of
                                imperfection?
                                <br>
                                <br>
                                An answer would arise from your soul. It truly knows the root cause even if you have
                                tyrannized your subconscious into submission, it is ever so tolerant with you and gives you
                                an answer every time you ask for it with an insulting intention of knowing the right answer.
                                <br>
                                <br>
                                Have you ever been surprised by yourself? They are the times when your subconscious had done
                                something, and you realize it afterward.
                                <br>
                                <br>
                                It is so powerful, man! It comes out in different forms during different stages. When I am
                                truly hungry, I get consumed with another personality.
                                <br>
                                <br>
                                My wife tells me that I am a much ruder person when I am "hangry" and that I almost always
                                disagree when I am "hangry."
                                <br>
                                <br>
                                No wonder, man. I thought my personality was my personality, and there is nothing that can
                                truly change my personality. Turns out that there are sub-personalities within us that pop
                                out of us then and then to surprise us, and we are not even aware of it.
                                <br>
                                <br>
                                Once we are aware of it, we can do something to ensure that the negative effects of that
                                personality are minimized but never completely get rid of that personality.
                                <br>
                                <br>
                                I am not even sure if we can ever truly get rid of being "hangry" when we haven't eaten for
                                say a day or two or even three. I think it alters our mood and perception as a whole.
                                <br>
                                <br>
                                Research says we can hear and see better after a few days of fasting. But it is us that let
                                ourselves be consumed by the "hangry" personality. But I think we also needed that energy in
                                the past to motivate us to hunt or scavenge for food.
                                <br>
                                <br>
                                We are not perfect in any sense of the imagination. Well, to rephrase, our personality has
                                many sub-personalities which are a natural phenomenon that does not fit your definition of
                                perfection.
                                <br>
                                <br>
                                So in that sense, the sense of perfection can be questioned. What is being perfect? Is it
                                just a random arbitrary state you want something to be or yourself to be?
                                <br>
                                <br>
                                If so, why? Did your parents or society train you to be expectant of perfection? When
                                society itself is evolving every day and changes its perception of perfection, aren't you
                                confused by the definition of perfection?
                                <br>
                                <br>
                                If neither society nor yourself knows what perfection is, and you just keep pushing the
                                definition of perfection in some arbitrary direction, why do you feel compelled to be
                                perfect the first time when you try something?
                                <br>
                                <br>
                                Is that expectation from yourself to be perfect keeping you from achieving or even trying to
                                achieve what you want to achieve?
                                <br>
                                <br>
                                Then all you have to do is set perfection as an ultimate goal that you would one day achieve
                                and just start.
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
                <other-blogs :next="5" :previous="6"></other-blogs>
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
            pageTitle: 'Can the need to be perfect stop you from achieving your dreams?',
            audioPath: "https://audio.blitzbudget.com/psychology/an-enemy-with-multiple-faces.mp3",
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
