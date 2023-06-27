<template>
    <div class="wrapper blog-post">
        <div class="page-header page-header-small rellax-header">
            <div class="page-header-image"
                style="background-image: url('img/psychology/when-someone-has-too-much-power-over-you.jpg')">
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
                            <h3 class="title">When someone has power over you...</h3>
                            <p>
                                they would have to know your secret and express their
                                intentions to reveal them and use that fear as a bargaining chip to force their way into
                                getting what they want. Like when someone nudges you to do something that you wouldn't
                                do otherwise and are not feeling comfortable doing it as much manipulation as directly
                                forcing you by saying if not, I will expose your secrets.
                                <br>
                                <br>
                                That is plain manipulation and it comes from a dark the need to be powerful over
                                someone. When people finally catch these people some of them know that they are doing
                                the wrong thing and thank the police for finally catching them and that they couldn't
                                stop themselves and even keep them in prison forever or they would be doing it again.
                                <br>
                                <br>
                                That dark untamed personality is scary and only comes out when we least expect it from
                                someone. Under these circumstances, while we think that we have been caught red-handed,
                                the best course of action would be to come out clean whenever possible and to seek help
                                before doing it. You know scammers do exactly that, They call you and assert their
                                authority as a person with power or gain your trust. Then get you to do something,
                                usually giving them something and then prevent you from paying attention to anything
                                else or even give you the room to think. A friend of mine was scammed and they even
                                stayed on the line when he had to travel all the way to his home to get his passport. He
                                mentioned it by message only after losing hundreds of euros to them. I just asked him to
                                cut the call and if the police come home to arrest you as a consequence we can see it
                                then and that I shall be there to bail him.
                                <br>
                                <br>
                                Life is hard man, And people play with our fears to take full advantage of it and gain
                                as much as possible. Others make you insecure about your lack of knowledge and ascertain
                                superiority of knowledge over you. If you had played DOTA or League of Legends, you
                                would know the other type of authority is to curse you for not playing good and keep
                                cursing you till the game ends. I have always wondered if only they had used that time
                                and effort to focus on the game. Maybe they could have turned the table around and won
                                the game.
                                <br>
                                <br>
                                They call you noob and whatnot! No one is born perfect and becomes a pro at anything in
                                life. It takes months for us to even learn how to walk. It takes us around 2 - 3 years
                                to learn how to efficiently play games with another kid. Of course, it is going to take
                                a few years to start being good at something and it is our responsibility to ensure that
                                we are not emotionally defeated on our way to perfection. We ourselves are learning as
                                we traverse our lives about the definition of perfection and excellence. And the more we
                                learn, the more we realize that it is almost impossible to excel at something without
                                letting others help us achieve it.
                                <br>
                                <br>
                                And we need people to make us feel good about ourselves. When they feel ecstatic about
                                what we just did. All of this is only possible if we do not subjugate, suppress and make
                                others a slave but let people grow and learn with us to become better people and live a
                                much better life in comparison to their past and only in comparison to their past and
                                anything other than that would just be unfair and irrelevant. As irrelevant as comparing
                                apples to oranges. They are not from the same tree but they fall under the same category
                                as trees. As the circumstances in which you had grown is not the same as them and
                                probably even if you grew up as neighbours the parents and the grandparents are not the
                                same. This would ensure that life would turn out to be different. And as such any
                                comparison is unnecessary and obsolete.
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
                <other-blogs :next="29" :previous="30"></other-blogs>
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
            pageTitle: 'When someone has too much power over you',
            audioPath: "https://audio.blitzbudget.com/psychology/when-someone-has-too-much-power-over-you.mp3",
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
