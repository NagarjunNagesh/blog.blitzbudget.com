<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image" style="background-image: url('img/psychology/can-you-be-vulnerable.jpg')">
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
                            <h3 class="title">It's a very broad question...</h3>
                            <p>But it requires an elaborated answer. Some people strongly think that vulnerability is a
                                weakness and do not show it. Strength is something that ought to be shown, but
                                vulnerabilities should be hidden.</p>
                            <p>If the wrong people were to find out your vulnerabilities, they can exploit them and use that
                                vulnerability against you. The above statement is simply true. I would want to show my
                                strengths to a stranger and try to hide my vulnerabilities. It is dangerous to show them all
                                the time. People can misunderstand it as a weakness. But the mere act of being charming is,
                                in and of itself, vulnerable. You open yourself up in front of others and are welcoming.</p>
                            <p>Vulnerability is extremely powerful when used appropriately. I would say hide your
                                vulnerabilities with strangers and just be vulnerable with everyone else. You only have more
                                to gain. There is no possibility of connecting with anyone without being vulnerable, and the
                                possibility is forever closed if we close ourselves up just because we think someone might
                                see the deepest part of ourselves and judge us.</p>
                            <p>We might be worried for a lot of reasons, right? I hardly follow my own advice. Here I am
                                opening myself up in front of everyone, writing something. I used to worry about it all the
                                time. What if someone criticizes the way I think and sees the deepest part of me and does
                                not like that part? I might find myself feeling helpless because here I am opening up, and I
                                do not know anything about them. They might even show up at my home and take everything away
                                from me, that which I hold dearest, and possibly leave me on the streets.</p>
                            <p>Living in a developed country has its benefits. I would even do the same thing back in India.
                                I think it is reasonable to say that even in India, it is fairly safe if you have a heart of
                                steel. People can sometimes be relentless and too harshly critical there. I think it is
                                possible because of the competition and the population. It is truly a zero-sum game where
                                people cannot afford to let someone simply grow, see, and be happy. They have to ensure that
                                they sabotage it.</p>
                            <p>You can just feel it in your heart when you speak with people like that. You have an intense
                                dislike, and you would just feel uncomfortable sharing information with them. Follow your
                                heart and do as it demands. Nowadays, I am calmer about it as the fear of being vulnerable
                                is only an impediment to my creativity and prevents me from writing a book in this case.</p>
                            <p>When Jordan Peterson says that he has been heavily scrutinized and attacked in the public
                                space for having an opinion, he is not joking. I think he is underplaying it and not being
                                honest about just how much backlash he is enduring. He is like a good manager protecting us
                                from shit and just giving us what we need. I can see it on his face nowadays, the stress of
                                it all. I know much of it is caused by his deteriorating health and all.</p>
                            <p>Still, here he was being vulnerable and posting information on social media and YouTube. He
                                even dared to enter the political space to try and prevent the free speech of Canada from
                                being taken away. The constitution now demands that a certain population be addressed
                                appropriately. It is demanded by the constitution. I don't know. I do not have sufficient
                                knowledge about it to challenge such a huge debate. So let us stick with what we know.</p>
                            <p>I feel like every human being is just capable of writing down their experiences if they
                                choose to and sharing them with the entire world. If they dare to choose it, they are making
                                themselves vulnerable just by doing it. Today, it is simply impossible to not be vulnerable
                                when we are creating something, even in a private space.</p>
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
                <other-blogs :next="2" :previous="3"></other-blogs>
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
            pageTitle: 'Can you be Vulnerable?',
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
