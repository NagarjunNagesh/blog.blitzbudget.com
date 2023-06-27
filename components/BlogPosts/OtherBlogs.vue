<template>
    <div class="container">
        <div class="col-md-12">
            <h2 class="title text-center">Similar Stories</h2>
            <br />
            <div class="blogs-1" id="blogs-1">
                <div class="row">
                    <div class="col-md-10 ml-auto mr-auto">
                        <card type="blog" plain>
                            <template slot="raw-content">
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="card-image">
                                            <img class="img img-raised rounded" :src="blogposts[next].image.src"
                                                :alt="blogposts[next].image.alt" />
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <h6 class="category text-info">{{ blogposts[next].tag }}</h6>
                                        <h3 class="card-title">
                                            <nuxt-link :to="blogposts[next].url">{{ blogposts[next].title }}
                                            </nuxt-link>
                                        </h3>
                                        <p class="card-description">
                                            {{ blogposts[next].description }}....
                                        </p>
                                        <p class="author">
                                            by
                                            <strong>Nagarjun Nagesh</strong> , {{ blogposts[next].date }}
                                        </p>
                                    </div>
                                </div>
                            </template>
                        </card>
                        <card type="blog" plain>
                            <div class="row">
                                <div class="col-md-7">
                                    <h6 class="category text-danger">
                                        <em class="now-ui-icons now-ui-icons media-2_sound-wave"></em>
                                        {{ blogposts[previous].tag }}
                                    </h6>
                                    <h3 class="card-title">
                                        <nuxt-link :to="blogposts[previous].url">{{ blogposts[previous].title }}
                                        </nuxt-link>
                                    </h3>
                                    <p class="card-description">
                                        {{ blogposts[previous].description }}.....
                                    </p>
                                    <p class="author">
                                        by
                                        <strong>Nagarjun Nagesh</strong>, {{ blogposts[previous].date }}
                                    </p>
                                </div>
                                <div class="col-md-5">
                                    <div class="card-image">
                                        <img class="img img-raised rounded" :src="blogposts[previous].image.src"
                                            :alt="blogposts[previous].image.alt" />
                                    </div>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
import initParallax from "@/utils/initParallax";
export default {
    name: "blog-posts",
    layout: "default",
    props: ["next", "previous"],
    components: {
        Card,
        [Button.name]: Button,
        [FormGroupInput.name]: FormGroupInput,
    },
    head() {
        return {
            title: this.pageTitle
        }
    },
    data() {
        return {
            year: new Date().getFullYear(),
            blogposts: [
                {
                    "image": {
                        "src": "img/psychology/an-enemy-with-multiple-faces.jpg",
                        "alt": "An enemy with multiple faces"
                    },
                    "url": "/psychology/an-enemy-with-multiple-faces",
                    "title": "An enemy with multiple faces",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "Sometimes I think about nature, and evolution and wonder how fruitfully we were all designed. So delicate that a virus can kill millions of us yet intelligent enough that if we maintain a healthy, body and soul we can reach the stars."
                },
                {
                    "image": {
                        "src": "img/psychology/change-your-personality-if-it-doesnt-serve-you.jpg",
                        "alt": "Change your personality if it doesn’t serve you"
                    },
                    "url": "/psychology/change-your-personality-if-it-doesnt-serve-you",
                    "title": "Change your personality if it doesn’t serve you",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "Can you imagine a particular aspect that defines who you are or have some personality traits that you can rely on during the worst of your times and that is how people see you and expect that behaviour in times of need?"
                },
                {
                    "image": {
                        "src": "img/psychology/consistency-is-discipline.jpg",
                        "alt": "Consistency is Discipline"
                    },
                    "url": "/psychology/consistency-is-discipline",
                    "title": "Consistency is Discipline",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "For most of my childhood life, I thought that discipline equals obedience and I almost had a negative connotation attached to it as a result of it."
                },
                {
                    "image": {
                        "src": "img/psychology/dealing-with-anger-when-an-injustice-has-been-done-to-you.jpg",
                        "alt": "Dealing with anger when an injustice has been done to you"
                    },
                    "url": "/psychology/dealing-with-anger-when-an-injustice-has-been-done-to-you",
                    "title": "Dealing with anger when an injustice has been done to you",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "That is often the hardest to control at least personally. I am forced to deal with the immediacy of dealing with that and correcting it. When a false accusation has been made effectively making you the bad person then you immediately know that an injustice has been done towards you, or do you??"
                },
                {
                    "image": {
                        "src": "img/psychology/expectations.jpg",
                        "alt": "Expectations"
                    },
                    "url": "/psychology/expectations",
                    "title": "Expectations",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "I have heard this phrase while living in India a million times. “expectations will lead to disappointments”. and that somehow resonated with me sometimes during the thirty years of my life and I started to believe that that might actually be true."
                },
                {
                    "image": {
                        "src": "img/psychology/how-to-channel-emotions-to-be-more-productive.jpg",
                        "alt": "How to channel emotions to be more productive?"
                    },
                    "url": "/psychology/how-to-channel-emotions-to-be-more-productive",
                    "title": "How to channel emotions to be more productive?",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "I’ve personally struggled with this a lot After consuming tonnes of personal self-improvement content. I finally came to the conclusion that I have been passionate about what I do and just keep pushing."
                },
                {
                    "image": {
                        "src": "img/psychology/how-to-know-when-you-are-being-manipulated.jpg",
                        "alt": "How to know when you are being manipulated?"
                    },
                    "url": "/psychology/how-to-know-when-you-are-being-manipulated",
                    "title": "How to know when you are being manipulated?",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "It is so easy to say that you should move away from bad people and try to focus only on surrounding yourself with good people. Guess what, I was more times in a more manipulative relationship than most of you guys and I"
                },
                {
                    "image": {
                        "src": "img/psychology/identity.jpg",
                        "alt": "Identity"
                    },
                    "url": "/psychology/identity",
                    "title": "Identity",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "I am writing this because most of us cannot afford to screw up in life. And screwing up would mean we lose the only possible way to redeem ourselves and that would essentially mean that we had lost "
                },
                {
                    "image": {
                        "src": "img/psychology/impersonation-syndrome.jpg",
                        "alt": "Impersonation Syndrome"
                    },
                    "url": "/psychology/impersonation-syndrome",
                    "title": "Impersonation Syndrome",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "The path to an enduring future comes from understanding that you are insufficient because there is still suffering in your world, knowing what could be done to alleviate that suffering"
                },
                {
                    "image": {
                        "src": "img/psychology/insecurites.jpg",
                        "alt": "Insecurites"
                    },
                    "url": "/psychology/insecurites",
                    "title": "Insecurites",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "Now that’s a dangerous one. We all seem to have them but sometimes it’s so intrinsic that one might not even notice that at times we seek validation from outside to cure our insecurities without even realizing we are having them."
                },
                {
                    "image": {
                        "src": "img/psychology/learn-to-let-go-of-the-need-to-control.jpg",
                        "alt": "Learn to let go of the need to control"
                    },
                    "url": "/psychology/learn-to-let-go-of-the-need-to-control",
                    "title": "Learn to let go of the need to control",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "We are often held responsible for the words that we sputter. That is a reasonable expectation from us. If only we could all do what we had promised or keep all the New Years' resolutions"
                },
                {
                    "image": {
                        "src": "img/psychology/poker-face.jpg",
                        "alt": "Poker Face"
                    },
                    "url": "/psychology/poker-face",
                    "title": "Poker Face",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "When in difficult situations we are forced to have difficult conversations with other human beings and that would be a part of human social necessity."
                },
                {
                    "image": {
                        "src": "img/psychology/self-worth.jpg",
                        "alt": "Self worth"
                    },
                    "url": "/psychology/self-worth",
                    "title": "Self worth",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "The self-confidence with which some people carry themselves has always made me wonder if they were faking it. I knew that I had it once but lost it after coming to Spain and searching for it outside."
                },
                {
                    "image": {
                        "src": "img/psychology/the-art-of-deception.jpg",
                        "alt": "The art of Deception"
                    },
                    "url": "/psychology/the-art-of-deception",
                    "title": "The art of Deception",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "When someone lies to you, it is a subtle way of warping the truth and seeing if you buy it or not. Imagine if you had bought into that idea of warped truth. It means that you cannot see through their deception."
                },
                {
                    "image": {
                        "src": "img/psychology/the-importance-of-routine.jpg",
                        "alt": "The importance of routine"
                    },
                    "url": "/psychology/the-importance-of-routine",
                    "title": "The importance of routine",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "Lately, we have been 24-hour fasting on alternate days and that required our lives to be organized in such a way that it had never been required ever before."
                },
                {
                    "image": {
                        "src": "img/psychology/the-physiology-of-feeling-motivated.jpg",
                        "alt": "The physiology of feeling motivated"
                    },
                    "url": "/psychology/the-physiology-of-feeling-motivated",
                    "title": "The physiology of feeling motivated",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "I've seen people attribute motivating people to some kind of an undesired attribute to go after but I really think feeling motivated is a precursor to taking action towards your goal."
                },
                {
                    "image": {
                        "src": "img/psychology/the-ways-desire-express-themselves.jpg",
                        "alt": "The ways Desire express themselves"
                    },
                    "url": "/psychology/the-ways-desire-express-themselves",
                    "title": "The ways Desire express themselves",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "I have recently been admiring the forms that desire takes and how they manifest themselves differently in different sorts of people."
                },
                {
                    "image": {
                        "src": "img/psychology/what-you-believe-yourself-to-be-is-the-one-you-will-be.jpg",
                        "alt": "What you believe yourself to be is the one you will be"
                    },
                    "url": "/psychology/what-you-believe-yourself-to-be-is-the-one-you-will-be",
                    "title": "What you believe yourself to be is the one you will be",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "What you believe yourself to be is the one you will be in the future. There is no denying it. What others say about you should have no power over you. It only has power when there is doubt."
                },
                {
                    "image": {
                        "src": "img/psychology/why-i-couldnt-keep-up-with-my-new-years-resolution.jpg",
                        "alt": "Why I couldn’t keep up with my New Years resolution?"
                    },
                    "url": "/psychology/why-i-couldnt-keep-up-with-my-new-years-resolution",
                    "title": "Why I couldn’t keep up with my New Years resolution?",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "Video games!! They were an integral part of my life from my childhood. I started playing the games in the era of Prince of Persia. How many of you guys have played it? I used to play a lot of it. Actually, I played a lot of games, Dangerous Dave, Contra, Shooting duck"
                },
                {
                    "image": {
                        "src": "img/psychology/why-we-all-suffer.jpg",
                        "alt": "Why we all suffer?"
                    },
                    "url": "/psychology/why-we-all-suffer",
                    "title": "Why we all suffer?",
                    "tag": "Psychology",
                    "date": "Jan 03, 2023",
                    "description": "There is an inherent sense of suffering that encompasses all our living beings. Bogged down by the circumstances without which we could live freely without restrictions and achieve what we had dreamed of achieving."
                },
                {
                    "image": {
                        "src": "img/psychology/can-you-be-vulnerable.jpg",
                        "alt": "Can you be Vulnerable?"
                    },
                    "url": "/psychology/can-you-be-vulnerable",
                    "title": "Can you be Vulnerable?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "It's a very broad question but requires an elaborated answer. Some people strongly think that vulnerability is a weakness and do not show it.Strength is something that ought to be shown but vulnerabilities should be hidden."
                },
                {
                    "image": {
                        "src": "img/psychology/the-emptiness-in-your-soul-when-your-are-on-your-way-to-achieve-your-goal.jpg",
                        "alt": "The emptiness in your soul when your are on your way to achieve your goal"
                    },
                    "url": "/psychology/can-you-be-vulnerable",
                    "title": "The emptiness in your soul when your are on your way to achieve your goal",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Sometimes what I had faced when trying to achieve something is that I have truly exhausted every cell in my body emotionally and I just do not have enough to give."
                },
                {
                    "image": {
                        "src": "img/psychology/is-competence-the-most-important-trait-for-success.jpg",
                        "alt": "Is competence the most important trait for success?"
                    },
                    "url": "/psychology/is-competence-the-most-important-trait-for-success",
                    "title": "Is competence the most important trait for success?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Competence, Google says it’s the ability to do something successfully and efficiently. By far the most necessary default skill set required to be able to shine at anything in life but does that by default mean that you are competing with everyone else who is working with you for example?"
                },
                {
                    "image": {
                        "src": "img/psychology/should-you-be-grateful-despite-your-circumstances.jpg",
                        "alt": "Should you be grateful despite your circumstances?"
                    },
                    "url": "/psychology/should-you-be-grateful-despite-your-circumstances",
                    "title": "Should you be grateful despite your circumstances?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "The short answer to that question is yes. It is not just a requirement but life demands that from you despite your circumstances. I could be less fortunate than maybe half of the entire population on earth. It is only when we compare ourselves with someone else or something else."
                },
                {
                    "image": {
                        "src": "img/psychology/do-you-need-people-to-support-your-endeavor.jpg",
                        "alt": "Do you need people to support your endeavor?"
                    },
                    "url": "/psychology/do-you-need-people-to-support-your-endeavor",
                    "title": "Do you need people to support your endeavor?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Just don’t expect to be supported when you start doing something. I don’t know people just criticize you from the start man! You just have to do something out of the ordinary to get criticized by your parents or your loved ones."
                },
                {
                    "image": {
                        "src": "img/psychology/is-the-fear-of-criticism-holding-you-back.jpg",
                        "alt": "Is the fear of criticism holding you back?"
                    },
                    "url": "/psychology/is-the-fear-of-criticism-holding-you-back",
                    "title": "Is the fear of criticism holding you back?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Just reminds me of the videos that I saw the other where Uncle Roger criticized Gordon Ramsay about making a dish! It’s Gordon Ramsay man! He gets criticized for making a dish. It was so good to watch man!! And so damn funny!"
                },
                {
                    "image": {
                        "src": "img/psychology/should-you-forgive.jpg",
                        "alt": "Should you forgive?"
                    },
                    "url": "/psychology/should-you-forgive",
                    "title": "Should you forgive?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "What happens after you untangle a lot of your past? Sometimes you find out that a lot of bad things had happened to you and some of those people were responsible for that. But life is just not about bad people and good people. It is never clean."
                },
                {
                    "image": {
                        "src": "img/psychology/should-you-untangle-your-past.jpg",
                        "alt": "Should you untangle your past?"
                    },
                    "url": "/psychology/should-you-untangle-your-past",
                    "title": "Should you untangle your past?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Since when are we talking about relationships and how is this relevant to the success or the goal towards which I a moving? Like it or not, we are all constrained by our past and how we see ourselves through the mirror of our past."
                },
                {
                    "image": {
                        "src": "img/psychology/should-you-reduce-a-person-to-their-sub-personality.jpg",
                        "alt": "Should you reduce a person to their sub personality?"
                    },
                    "url": "/psychology/should-you-reduce-a-person-to-their-sub-personality",
                    "title": "Should you reduce a person to their sub personality?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "What do I mean by that? I mean when someone is staring at you. Are they being mean to you and making you feel uncomfortable? When someone like you and gives you a seductive flare and you start to like it do you reduce that person to a charming person? Even though it is a positive reduction of their personality it is still a reduction, right?"
                },
                {
                    "image": {
                        "src": "img/psychology/why-is-life-so-unfair.jpg",
                        "alt": "Why is life so unfair?"
                    },
                    "url": "/psychology/why-is-life-so-unfair",
                    "title": "Why is life so unfair?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Why is there evil in this world? There is so much going on in life that sometimes we think what’s the point of so much suffering. Sometimes there is so much deliberate suffering enforced upon us simply by life itself or mostly by other humans that it is possibly not bearable at all."
                },
                {
                    "image": {
                        "src": "img/psychology/why-should-you-just-get-started.jpg",
                        "alt": "Why should you just get started?"
                    },
                    "url": "/psychology/why-should-you-just-get-started",
                    "title": "Why should you just get started?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "The need to just get started with whatever it is that you think is the next step in your life cannot be over-emphasized. Whatever it is that you need to do just get started preparing today no matter how imperfect. Just start. Even if you daily to achieve the goal that you had initially planned. It will just be worth it man! The journey of trying to achieve something that you wanted. And I have one more thing to say about failure."
                },
                {
                    "image": {
                        "src": "img/psychology/can-the-need-to-be-perfect-stop-you-from-achieving-your-dreams.jpg",
                        "alt": "Can the need to be perfect stop you from achieving your dreams?"
                    },
                    "url": "/psychology/can-the-need to-be-perfect-stop-you-from-achieving-your-dreams",
                    "title": "Can the need to be perfect stop you from achieving your dreams?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Such a simple question can be answered with a simple “yea” but it would mean nothing without a much deserving explanation. To be perfect, it is necessary to fail. Without failure, there is no possibility of perfection. So why is the fear of the need to be perfect stopping you from doing what you want to do?"
                },
                {
                    "image": {
                        "src": "img/psychology/believing-in-yourself-when-no-one-else-is.jpg",
                        "alt": "Believing in yourself when no one else is"
                    },
                    "url": "/psychology/believing-in-yourself-when-no-one-else-is",
                    "title": "Believing in yourself when no one else is",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "That single factor in itself is more than sufficient to push to significantly forward in life provided that your goal is something constructive and noble (for a lack of a better term)."
                },
                {
                    "image": {
                        "src": "img/psychology/should-you-give-importance-to-getting-wealthy.jpg",
                        "alt": "Should you give importance to getting wealthy?"
                    },
                    "url": "/psychology/should-you-give-importance-to-getting-wealthy",
                    "title": "Should you give importance to getting wealthy?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Like it or not! Without money, you will most likely starve to death if you are not in one of the most fortunate countries which provides social security. Damn, money is so much more important in the US, only because there is no Social Security, Honestly removing the Social Security made money the only thing in the bucket. That is honestly too much man!!"
                },
                {
                    "image": {
                        "src": "img/psychology/success-can-be-attained-with-the-right-social-circle.jpg",
                        "alt": "Success can be attained with the right social circle"
                    },
                    "url": "/psychology/success-can-be-attained-with-the-right-social-circle",
                    "title": "Success can be attained with the right social circle",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Often we are born in a place where we feel like a lot of other people around us are wealthy. There are 8 billion people in the world now and nearly 3 billion people are from India and China alone."
                },
                {
                    "image": {
                        "src": "img/psychology/your-immediate-social-circumstances-also-constrains-you.jpg",
                        "alt": "Your immediate social circumstances also constrains you"
                    },
                    "url": "/psychology/your-immediate-social-circumstances-also-constrains-you",
                    "title": "Your immediate social circumstances also constrains you",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "What I had seen a lot of people do is say that they want to achieve something in life. I truly believe that they want to achieve the things they say that they want to achieve but at the same time, they have a different conflicting part inside of them that is preventing them to achieve exactly that goal."
                },
                {
                    "image": {
                        "src": "img/psychology/handle-your-fear-of-failure.jpg",
                        "alt": "Handle your Fear of Failure"
                    },
                    "url": "/psychology/handle-your-fear-of-failure",
                    "title": "Handle your Fear of Failure",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Perfection is the number one enemy of the current generation. We see Instagram and Facebook where people have a perfect life and we are forced to move towards that perfect or we feel shitty about our current."
                },
                {
                    "image": {
                        "src": "img/psychology/what-is-holding-you-down-from-success.jpg",
                        "alt": "What is holding you down from success?"
                    },
                    "url": "/psychology/what-is-holding-you-down-from-success",
                    "title": "What is holding you down from success?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Let us define success first. It is a place where you want to go, however, you want to go. It need not be a perfect and fixed place. It could be a place where you see yourself going."
                },
                {
                    "image": {
                        "src": "img/psychology/ideologies-the-way-you-think-affects-your-life-style.jpg",
                        "alt": "Ideologies: The way you think affects your life style"
                    },
                    "url": "/psychology/ideologies-the-way-you-think-affects-your-lifestyle",
                    "title": "Ideologies: The way you think affects your life style",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "That brings us to ideologies. Unfortunately, the way we think about something also seems to affect our ability to earn. These are the ideological constraints that we impose upon ourselves because we feel like we are a part of some group identity."
                },
                {
                    "image": {
                        "src": "img/psychology/whats-the-point-of-pushing-too-hard-towards-success.jpg",
                        "alt": "What’s the point of pushing too hard towards success?"
                    },
                    "url": "/psychology/whats-the-point-of-pushing-too-hard-towards-success",
                    "title": "What’s the point of pushing too hard towards success?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Is it not worth it to just strive for the balance in life where no one is pushing too hard and Maybe we are in the middle class staying comfortable where we are at and growing in a very slow phase?"
                },
                {
                    "image": {
                        "src": "img/psychology/stressed-overworked-exhausted-and-broke.jpg",
                        "alt": "Stressed, Overworked, Exhausted and Broke"
                    },
                    "url": "/psychology/stressed-overworked-exhausted-and-broke",
                    "title": "Stressed, Overworked, Exhausted and Broke",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Seems like a horrible combination but this will exactly be the outcome when you try to do something that does not make you happy. Our circumstances around us play an increasingly predominant role in ensuring what we could be focused on and what we want to spend our time on. What happens when cannot spend our time with our loved ones and are denied holidays to go on a much-needed vacation but are asked to work or quit the job."
                },
                {
                    "image": {
                        "src": "img/psychology/the-force-that-destroys-fear-like-wild-fire.jpg",
                        "alt": "The force that destroys fear like wild fire"
                    },
                    "url": "/psychology/the-force-that-destroys-fear-like-wild-fire",
                    "title": "The force that destroys fear like wild fire",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "The opposite of fear is courage, right? When people ask you to be courageous despite the fear what they truly mean is that you would have been willing to channel your fear into paying more attention and factoring in that being ignorant about danger is what causes fear."
                },
                {
                    "image": {
                        "src": "img/psychology/what-if-you-are-your-own-worst-enemy.jpg",
                        "alt": "What if you are your own worst enemy?"
                    },
                    "url": "/psychology/what-if-you-are-your-own-worst-enemy",
                    "title": "What if you are your own worst enemy?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "People are sometimes their own worst enemy man. We are complicated enough that we do not understand what we want, let alone strive to achieve it. We have to put ourselves together before even trying to have an audacious dream. Most of the time when we try to achieve a goal we will find out that we are our own worst enemy and a Putin also lives inside us."
                },
                {
                    "image": {
                        "src": "img/psychology/treat-others-in-a-way-you-yourself-would-like-to-be-treated.jpg",
                        "alt": "Treat others in a way you yourself would like to be treated"
                    },
                    "url": "/psychology/treat-others-in-a-way-you-yourself-would-like-to-be-treated",
                    "title": "Treat others in a way you yourself would like to be treated",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "How we all treat each other is the one way we would decide how society is structured. Imagine a society where no one trusts no one and the next opportunity that you would get you to betray someone if they are strangers to obtain something in life."
                },
                {
                    "image": {
                        "src": "img/psychology/harry-potter/harry.jpg",
                        "alt": "Harry Potter: Harry"
                    },
                    "url": "/psychology/harry-potter/harry",
                    "title": "Harry Potter: Harry",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "An interesting character to choose, first he is a small kid who is orphaned due to an accident which killed their parents and lives with his aunt and uncle until he is eligible to enter Hogwarts."
                },
                {
                    "image": {
                        "src": "img/psychology/harry-potter/lord-voldemort.jpg",
                        "alt": "Harry Potter: Lord Voldemort"
                    },
                    "url": "/psychology/harry-potter/lord-voldemort",
                    "title": "Harry Potter: Lord Voldemort",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "The Dark Lord was also an orphan like Harry Potter. He had to grow up in an orphanage which he hated from his core. Before becoming the Dark Lord, Lord Voldemort was a little tormented boy in an orphanage who was addressed as Tom Riddle. Two people are separated by time and tragedy but one takes it in a negative way and goes down to hell (Tom Riddle) and the other generally takes it in a positive direction (Harry Potter), thereby having a lot of people voluntarily helping him even though, he was just an ordinary person hit by a tragedy."
                },
                {
                    "image": {
                        "src": "img/psychology/self-consciousness.jpg",
                        "alt": "Self consciousness"
                    },
                    "url": "/psychology/self-consciousness",
                    "title": "Self consciousness",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Being self-conscious is necessary. We need to know where we are, how we look and be conscious of how we are doing what we are doing. That is a bare minimum expected out of every human being and we all seem to do it pretty well in my estimation."
                },
                {
                    "image": {
                        "src": "img/psychology/when-someone-has-too-much-power-over-you.jpg",
                        "alt": "When someone has too much power over you"
                    },
                    "url": "/psychology/when-someone-has-too-much-power-over-you",
                    "title": "When someone has too much power over you",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "When someone has power over you they would have to know your secret and express their intentions to reveal them and use that fear as a bargaining chip to force their way into getting what they want. Like when someone nudges you to do something that you wouldn't do otherwise and are not feeling comfortable doing it as much manipulation as directly forcing you by saying if not, I will expose your secrets."
                },
                {
                    "image": {
                        "src": "img/psychology/being-harmless.jpg",
                        "alt": "Being harmless"
                    },
                    "url": "/psychology/being-harmless",
                    "title": "Being harmless",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Not being the doer of injustice and harm might be seen as being incapable of doing it. And certain people are definitely incapable of doing it. Have you seen that bullies target the smallest and weakest among us? it is because despite being small they choose not to retaliate. That weakness in ourselves and the want to be good to other people is what is seen and can eventually be used to take away something that you hold precious from those who can do it."
                },
                {
                    "image": {
                        "src": "img/psychology/what-should-you-do-if-you-are-just-not-motivated-in-life.jpg",
                        "alt": "What should you do if you are just not motivated in life?"
                    },
                    "url": "/psychology/what-should-you-do-if-you-are-just-not-motivated-in-life",
                    "title": "What should you do if you are just not motivated in life?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "I was surprised by the formulation of this question. I was just surprised that I could formulate this question. Anyway! Let’s move on! I simply have a lot to say about a lot of things. I mostly do not understand where all of this is coming from and all I know is it just keeps me going. When I write I can forget about everything that is happening around me and just start pouring my heart out into writing this blog or book or whatever!"
                },
                {
                    "image": {
                        "src": "img/psychology/greed-power-and-inequality.jpg",
                        "alt": "Greed, Power and Inequality"
                    },
                    "url": "/psychology/greed-power-and-inequality",
                    "title": "Greed, Power and Inequality",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Too much of anything is just bad! Every god damn thing in moderation. Emotions man! It's a complicated world, where we can find people who have completely shut their emotions and simply live their lives planning for everything and preventing their emotions from surfacing as much as possible to the ones that are over-emotional and could not control what they feel, how they feel and when they feel it."
                },
                {
                    "image": {
                        "src": "img/psychology/are-you-not-thinking-big-enough.jpg",
                        "alt": "Are you not thinking big enough?"
                    },
                    "url": "/psychology/are-you-not-thinking-big-enough",
                    "title": "Are you not thinking big enough?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "The biggest constraint keeping us down is our knowledge. As Grant Cardone says, Knowledge is power! But wrong knowledge is the opposite of it. It is what keeps us all bogged down from achieving what we want to achieve but just can't how much ever effort we put in to. The one thing that made me think it is way too much is when Grant Cardone said that it took him thirty years of constant effort to become rich for him to be able to achieve what he wanted to in the end it seems."
                },
                {
                    "image": {
                        "src": "img/psychology/why-should-you-not-punish-good-behavior.jpg",
                        "alt": "Why should you not punish good behavior?"
                    },
                    "url": "/psychology/why-should-you-not-punish-good-behavior",
                    "title": "Why should you not punish good behavior?",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Who wants to punish good behaviour. I certainly don't want to punish good behaviour man. It blew me away when I first found it out from Jordan Peterson. How many of us punish our partners for good behaviour man? I certainly did."
                },
                {
                    "image": {
                        "src": "img/psychology/betrayal-vengeance-and-injustice.jpg",
                        "alt": "Betrayal, Vengeance and Injustice"
                    },
                    "url": "/psychology/betrayal-vengeance-and-injustice",
                    "title": "Betrayal, Vengeance and Injustice",
                    "tag": "Psychology",
                    "date": "June 26, 2022",
                    "description": "Betrayal is the act of slowly gaining your trust and stabbing you in the back. There is no salvation for betrayal. People get betrayed all the time. When we went to Majorca for a trip. I and my wife were playing on the beach without any regard for others around us and how they might see us. It was just us and how we felt."
                },
            ]
        };
    },
    mounted() {
        initParallax();
    },
};
</script>
<style></style>
