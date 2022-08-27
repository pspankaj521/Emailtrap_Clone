let data = [
    [
        {     image:"https://cdn-icons-png.flaticon.com/128/356/356076.png",
            name: 'Rado Georgiev',
            twitter_link: '@Rado_g',
            message: 'One thing we started using recently is @Mailtrap for our dev & staging environments. We were previously either turning email sending entirely off for staging or running SES + whitelist.',
            date: '1:32 PM - Jan 06, 2021',
            profile: 'https://twitter.com/Rado_g',
            post: 'https://twitter.com/Rado_g/status/1214147850013163520'
        },
        {
            image:"https://cdn-icons-png.flaticon.com/128/356/356076.png",
            name: 'Mr. Glass',
            twitter_link: '@MisterGlass',
            message: 'Shout out to @Mailtrap, hands down the best way to handle mail sending in local/test environments.',
            date: '11:43 PM - May 21, 2020',
            profile: 'https://twitter.com/MisterGlass',
            post: 'https://twitter.com/MisterGlass/status/1263571221020581888'
        }
    ],
    [
        {     image:"https://cdn-icons-png.flaticon.com/128/356/356076.png",
            name: 'Mr. Glass',
            twitter_link: '@MisterGlass',
            message: 'Shout out to @Mailtrap, hands down the best way to handle mail sending in local/test environments.',
            date: '11:43 PM - May 21, 2020',
            profile: 'https://twitter.com/MisterGlass',
            post: 'https://twitter.com/MisterGlass/status/1263571221020581888'
        },
        {     image:"https://cdn-icons-png.flaticon.com/128/356/356076.png",
            name: 'Alessandro Rodi',
            twitter_link: '@coorasse',
            message: 'I love @Mailtrap. It removes all the asshole of configuring email servers in test environments. Great service! Is totally worth your money!',
            date: '1:15 PM - Oct 20, 2020',
            profile: 'https://twitter.com/coorasse',
            post: 'https://twitter.com/coorasse/status/1318496092762374144'
        },
    ],
    [
        {     image:"https://cdn-icons-png.flaticon.com/128/356/356076.png",
            name: 'Alessandro Rodi',
            twitter_link: '@coorasse',
            message: 'I love @Mailtrap. It removes all the asshole of configuring email servers in test environments. Great service! Is totally worth your money!',
            date: '1:15 PM - Oct 20, 2020',
            profile: 'https://twitter.com/coorasse',
            post: 'https://twitter.com/coorasse/status/1318496092762374144'
        },
        {
            image:"https://cdn-icons-png.flaticon.com/128/356/356076.png",
            name: 'DeveloperMitch',
            twitter_link: '@mitchellfinlay',
            message: 'After all these years of web development, how have I only JUST started using @Mailtrap. I had heard about it, but never got round to using it. An awesome way of testing emails.',
            date: '1:25 PM - Nov 07, 2020',
            profile: 'https://twitter.com/mitchellfinlay',
            post: 'https://twitter.com/mitchellfinlay/status/1325036527823572993'
        },
    ],
    [
        {    image:"https://cdn-icons-png.flaticon.com/128/356/356076.png",
            name: 'DeveloperMitch',
            twitter_link: '@mitchellfinlay',
            message: 'After all these years of web development, how have I only JUST started using @Mailtrap. I had heard about it, but never got round to using it. An awesome way of testing emails.',
            date: '1:25 PM - Nov 07, 2020',
            profile: 'https://twitter.com/mitchellfinlay',
            post: 'https://twitter.com/mitchellfinlay/status/1325036527823572993'
        },
        {    image:"https://cdn-icons-png.flaticon.com/128/356/356076.png",
            name: 'Joshua Anderton',
            twitter_link: '@joshuaanderton',
            message: 'Just signed up for @Mailtrap and I’m loving it. So easy to set up. Provides so much peace of mind. Ahh just love it.',
            date: '7:38 PM - Jan 13, 2021',
            profile: 'https://twitter.com/joshuaanderton',
            post: 'https://twitter.com/gettingtoramen/status/1349410404217221120'
        },
    ],
    [
        {    image:"https://cdn-icons-png.flaticon.com/128/356/356076.png",
            name: 'Joshua Anderton',
            twitter_link: '@joshuaanderton',
            message: 'Just signed up for @Mailtrap and I’m loving it. So easy to set up. Provides so much peace of mind. Ahh just love it.',
            date: '7:38 PM - Jan 13, 2021',
            profile: 'https://twitter.com/joshuaanderton',
            post: 'https://twitter.com/gettingtoramen/status/1349410404217221120'
        },
        {     image:"https://cdn-icons-png.flaticon.com/128/356/356076.png",
            name: 'Doug Black Jr',
            twitter_link: '@dougblackjr',
            message: 'Can we all agree @Mailtrap is a gift to developers everywhere? It just works SO easily out of the box!!!!',
            date: '9:45 PM - Aug 11, 2020',
            profile: 'https://twitter.com/dougblackjr',
            post: 'https://twitter.com/dougblackjr/status/1293257227042783232'
        }
    ],
    [
        {    image:"https://cdn-icons-png.flaticon.com/128/356/356076.png",
            name: 'Doug Black Jr',
            twitter_link: '@dougblackjr',
            message: 'Can we all agree @Mailtrap is a gift to developers everywhere? It just works SO easily out of the box!!!!',
            date: '9:45 PM - Aug 11, 2020',
            profile: 'https://twitter.com/dougblackjr',
            post: 'https://twitter.com/dougblackjr/status/1293257227042783232'
        },
        {     image:"https://cdn-icons-png.flaticon.com/128/356/356076.png",
            name: 'Rado Georgiev',
            twitter_link: '@Rado_g',
            message: 'One thing we started using recently is @Mailtrap for our dev & staging environments. We were previously either turning email sending entirely off for staging or running SES + whitelist.',
            date: '1:32 PM - Jan 06, 2021',
            profile: 'https://twitter.com/Rado_g',
            post: 'https://twitter.com/Rado_g/status/1214147850013163520'
        }
    ]
];

let i = 0;
let disp1 = document.getElementById('disp1');
let disp2 = document.getElementById('disp2');

function append(e, disp) {
    disp.innerHTML = null;
    let img=document.createElement('img')
    img.src=e.image;
    let row1 = document.createElement('div');
    let h3 = document.createElement('h2');
    let a = document.createElement('a');
    h3.innerText = e.name;
    h3.style.color = "#202c45";

    a.href = e.profile;
    a.target = '_blank';
    a.setAttribute('class', 'linkTag');

    a.innerText = e.twitter_link;
    row1.append(h3, a);
    row1.style.display = 'flex';
    row1.style.gap = '20px';
    row1.style.alignItems = 'center';
    // row1.style.marginTop = '40px';

    let row2 = document.createElement('div');
    let para = document.createElement('p');
    para.innerText = e.message;
    para.style.fontSize = '18px';
    row2.append(para);

    let row3 = document.createElement('div');
    let alast = document.createElement('a');
    alast.innerText = e.date;
    alast.href = e.post;
    alast.target = '_blank';

    row3.append(alast);
    alast.setAttribute('class', 'linkTag');

    disp.append(img,row1, row2, row3);
}

function reverse() {
    i--;
    i = linkFun(i);
}

function forward() {
    i++;
    i = linkFun(i);
}

function linkFun(i) {
    console.log('Hi');
    if (i < 0) {
        i = data.length - 1;
    }
    else if (i === data.length) {
        i = 0;
    }

    append(data[i][0], disp1);
    append(data[i][1], disp2);
    return i;
}

linkFun(0);