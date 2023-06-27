<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" style="background-image: url('img/psychology/should-you-forgive.jpg')"></div>
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
                            <h3 class="title">What happens after you untangle...</h3>
                            <p> a lot of your past? Sometimes you find out that a lot of
                                bad things had happened to you and some of those people were responsible for that. But
                                life is just not about bad people and good people. It is never clean.
                                <br>
                                <br>
                                Good people do bad things all the time most often they are called mistakes. They didn’t
                                think straight when they were doing it but after having done what they had done, they
                                hid the truth and as a result, were not punished for their sins.
                                <br>
                                <br>
                                How many of us know people who got away with hurting us unscathed ?? Sometimes we feel
                                life is so unjust and want to be the bringer of justice and just punish them however we
                                see fit to ensure that the justice is duly provided right ??
                                <br>
                                <br>
                                But life doesn’t work like that. Maybe they are the ones with more power and May be even
                                more money. And they can’t be touched. Or it is just that you have less social power and
                                they have a good social image and no one would believe you even if you told the whole
                                world the truth.
                                <br>
                                <br>
                                Or you don’t even want to talk about what happened to you and don’t even want to think
                                about it.
                                <br>
                                <br>
                                How can you even think about forgiving someone if something that you don’t even want to
                                remember has happened to you! You can’t man! You just can’t.
                                <br>
                                <br>
                                I remembered that a 70 + year old man was charged with child harassment back when he was
                                working as a coach in a school in London. He molested a lot of kids and traumatized
                                them. He just walked into a coming metro station and took his life.
                                <br>
                                <br>
                                We can’t even forgive ourselves for what we had done and sometimes it is so horrible
                                that we take our lives over it. That’s your soul feeling ashamed of doing what you had
                                done and truly understanding what had done to somebody.
                                <br>
                                <br>
                                Or maybe it could have even been a selfish desire to not repent but to just take your
                                life and ensure that you do not suffer. Who knows man! You can’t ask a dead human being.
                                <br>
                                <br>
                                Anyway! Taking his own life seemed a bit too much of a punishment, to be honest. In any
                                case, that human being thought he deserved it and did it anyway.
                                <br>
                                <br>
                                Sometimes when you are pushed to a corner in life and left with no choice but to take
                                your own life. You just take your own life when you think that is the best option there
                                is to life. You just take your life’s
                                <br>
                                <br>
                                I never want to be in that position in life. Do you know what I fear the most? Like
                                Adele sings in “I Drink Wine”
                                <br>
                                <br>
                                “How come we've both become a version
                                Of a person, we don't even like?”
                                <br>
                                <br>
                                After being on autopilot for a while, It would be hard for me to wake up suddenly
                                finding myself a little bit uglier, broke and without any loved ones by my side and
                                having done terrible things to people around me and I don’t know how I would cope with
                                that.
                                <br>
                                <br>
                                It’s just a horrible thought but I hope that if I ever reach that place I can forgive
                                myself and truly accept what I had done to myself and move on. I am sure it would just
                                be the hardest thing that I had ever done. Ever by far!
                                <br>
                                <br>
                                I would still try man! Everybody deserves to be forgiven first by themselves before they
                                can get what they truly wanted. There is truly no moving on if you hadn’t forgiven your
                                sins.
                                <br>
                                <br>
                                I do not mean forgive yourself and then just move on. It only applies in the above
                                context right? You can’t kill someone and forgive yourself for the sin and move on
                                right?
                                <br>
                                <br>
                                It doesn’t matter in that instance. You know even if you get away with murder. Like the
                                Dostoevsky novels, you still have to live with yourself.
                                <br>
                                <br>
                                If you are truly a horrible person and continue killing more people. You would either
                                end up in jail or killed. That’s the only possible scenario unless you are Stalin or
                                Mao.
                                <br>
                                <br>
                                In any case, there is a possibility to truly move with our life and aim high even after
                                we’ve done some horrible things in life, I believe and to do that in some instances we
                                might have to forgive someone or even ourselves.
                                <br>
                                <br>
                                If you are in that bucket, this piece of text is truly for you.
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
            pageTitle: 'Should you forgive?',
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
