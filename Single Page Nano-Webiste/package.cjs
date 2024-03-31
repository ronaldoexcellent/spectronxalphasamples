// Package/App Data
// App root
const app = {
    name : "SpectronX",

    author : "Ronaldo Excellent",

    logo : document.querySelector('application').getAttribute('logo'),

    theme : "",

    mode : "",

    projectStart : "7th December, 2023",

    projectEnd : "9th December, 2023 >>> Low Consistency"
};

// App Components
const elements = ["home", "features", "products", "examples", "contacts", "about"];

const components = {
    home : `
        <attrib class="s-container"></attrib>
        <div class="s-container s-black s-padding-24 s-text-white" style="line-height: 3; background-position: center; background-size: cover; background-image: url('files/images/bg.jpg'); width: 100%; margin-top: 20px">
            <span class="s-jumbo s-hide-small s-hide-medium">Start something that matters</span><br>
            <span class="s-xxlarge s-hide-large">Start something that matters</span><br>
            <span class="s-large repeate">Stop wasting valuable time with projects that just isn't you</span>!<br>
            <p><a href="#about" class="s-button s-white s-padding-large s-large s-margin-top s-opacity s-hover-opacity-off s-animate-bottom">Learn more and start today</a></p>
        </div>
    `,
    features : `
        <attrib class="s-container"></attrib>
        <div style="margin-top: 30px">
            <div class="s-container s-black s-padding-24 s-large" style="width:100%; text-align: justify;">
                <h1>Features:</h1>
                <h2 class="s-wide s-animate-right">What is SpectronX?</h2><hr>
                SpectronX, developed by Ronaldo Excellent (RX7), is a web frontend development framework, for designing, programming and manipulating the visible aspects & components of a website/web application, and it was also created for solving complex problems.
            </div>
            <div class="s-container s-center s-white s-padding-24" style="width:100%; text-align: justify;">
                <h2 class="s-wide s-animate-right">SpectronX is unique for its...</h2><hr>
                <div class="s-third">
                    <div class="s-hover-shadow s-round-xxlarge s-padding-32 s-margin s-black s-hover-white">
                        <span class="fa fa-bolt s-jumbo" style="height: 90px"></span>
                        <br>
                        <span class="s-large">Speed</span>
                        <div></div>
                    </div>
                </div>
                <div class="s-third">
                    <div class="s-hover-shadow s-round-xxlarge s-padding-32 s-margin s-black s-hover-white">
                        <span class="fa fa-thumbs-up
                        s-jumbo" style="height: 90px"></span>
                        <span class="fa fa-star
                        s-xlarge"></span>
                        <br>
                        <span class="s-large">Reliability</span>
                    </div>
                </div>
                <div class="s-third">
                    <div class="s-hover-shadow s-round-xxlarge s-padding-32 s-margin s-black s-hover-white">
                        <span class="fa fa-bezier-curve s-jumbo" style="height: 90px"></span>
                        <br>
                        <span class="s-large">Flexibility</span>
                    </div>
                </div>
                
            </div>
            <div class="s-container s-rol s-black s-padding-24" style="width:100%; text-align: justify;">
                <h3 class="s-wide s-animate-fade s-center">SpectronX is composed two(2) categories of prewritten code:</h3><hr>
                <ul class="s-large">
                    <li>CSS Framework (Extract from W3.css, and modified) - For quick design.</li><br>
                    <li>JavaScript Framework - For quick programming, UI manipulation</li>
                </ul>
                <h4 class="s-wide s-animate-fade s-center"><u>Templates</u></h4>
                <div class="s-large">
                    With SpectronX, you can build web templates for future projects either with the combination of HTML5 (with CSS3) & JavaScript.
                </div>
            </div>
            <div class="s-container s-white s-animate-bottom s-padding-24">
                <h3 class="s-center s-black"><marquee>SpectronX can let you:</marquee></h3>
                <ul class="s-ul s-large s-animate-bottom">
                    <li>Write less & build frontend projects/client-side programs faster.</li>
                    <li>Build web based puzzle games.</li>
                    <li>design websites with HTML5 & classes with its CSS framework (modified W3.CSS).</li>
                    <li>Store relevant/reusable app data.</li>
                    <li>Bind meta data on single lines of code.</li>
                    <li>Build reusable app components for multiple pages with custom elements, using both HTML5 standard code & JavaScript-SpectronX functions.</li>
                    <li>Build reponsive, mobile-friendly & reactive websites easier & faster, etc.</li>
                </ul>
            </div>
        </div>
    `,
    products : `
        <attrib class="s-container"></attrib>
        <div style="margin-top: 50px;">
            <h1 class="s-padding">Products:</h1>
            <details>
                <examples></examples>
                <summary class="s-btn s-green s-ripple s-xlarge s-margin-bottom s-hover-blue" style="border-top-right-radius: 30px; border-bottom-right-radius: 30px;">See Examples</summary>
            </details><br><br>
            <a onclick="html($('main'), \`<h1 class='s-display-middle s-wide s-text-white'>Thanks for Downloading!<br><br><a class='s-white s-button s-ripple s-padding s-hover-black s-large' href='index.html'>Go Back</a></h1>\`)" class="s-btn s-green s-ripple s-xlarge s-hover-blue" style="border-top-right-radius: 30px;" href="files/downloads/SpectronX.zip">Download Framework</a>
        </div>
    `,
    examples : `
        <br class="s-hide s-show-small">
        <a onclick="html($('main'), \`<h1 class='s-display-middle s-wide s-text-white'>Thanks for Downloading!<br><br><a class='s-white s-button s-ripple s-padding s-hover-black s-large' href='index.html'>Go Back</a></h1>\`)" class="s-margin-left s-purple s-button s-ripple s-padding s-round-large s-large" href="files/downloads/simplecalculator.zip">Simple Calulator.zip</a><br class="s-hide s-show-small"><br class="s-hide s-show-small">
        <a onclick="html($('main'), \`<h1 class='s-display-middle s-wide s-text-white'>Thanks for Downloading!<br><br><a class='s-white s-button s-ripple s-padding s-hover-black s-large' href='index.html'>Go Back</a></h1>\`)" class="s-margin-left s-purple s-button s-ripple s-padding s-round-large s-large" href="files/downloads/singlepagewebsite.zip">Single Page Website.zip</a>
    `,
    contacts : `
        <attrib class="s-container"></attrib>
        <div style="margin-top: 50px">
            <h1 class="s-padding">Contacts:</h1>
            <div class="s-row s-leftbar s-border-red">
                <div class="s-col m1 s-padding">
                    <a class="fa fa-phone s-xxlarge"></a>
                </div>
                <div class="s-half s-padding">
                    <a href="tel:+2349114349748" class="s-hover-blue">+234 9114349748</a>
                </div>
            </div>
            <div class="s-row s-leftbar s-border-green">
                <div class="s-col m1 s-padding">
                    <a class="fa fa-envelope s-xxlarge"></a>
                </div>
                <div class="s-half s-padding">
                    <a href="sms:+2349114349748" class="s-hover-blue">+234 9114349748</a>
                </div>
            </div>
            <div class="s-row s-leftbar s-border-blue">
                <div class="s-col m1 s-padding">
                    <a class="fab fa-facebook s-xxlarge"></a>
                </div>
                <div class="s-half s-padding">
                    <a href="https://www.facebook.com/spectronx.developer" class="s-hover-blue">/spectronx.developer</a><br>
                    <a href="https://www.facebook.com/ronaldinhoexcellent" class="s-hover-blue">/ronaldinhoexcellent</a>
                </div>
            </div>
            <div class="s-row s-leftbar s-border-yellow">
                <div class="s-col m1 s-padding">
                    <a class="fab fa-facebook-messenger s-xxlarge"></a>
                </div>
                <div class="s-half s-padding">
                    <a href="https://m.me/spectronx.developer" class="s-hover-blue">m.me/spectronx.developer</a><br>
                    <a href="https://m.me/ronaldinhoexcellent" class="s-hover-blue">m.me/ronaldinhoexcellent</a>
                </div>
            </div>
            <div class="s-row s-leftbar s-border-grey">
                <div class="s-col m1 s-padding">
                    <a class="fab fa-twitter s-xxlarge"></a>
                </div>
                <div class="s-half s-padding">
                    <a href="https://www.twitter.com/ronaldoexcel" class="s-hover-blue">@ronaldoexcel</a>
                </div>
            </div>
            <div class="s-row s-leftbar s-border-black">
                <div class="s-col m1 s-padding">
                    <a class="fab fa-instagram s-xxlarge"></a>
                </div>
                <div class="s-half s-padding">
                    <a href="https://www.instagram.com/ronaldo.excellent" class="s-hover-blue">@ronaldo.excellent</a>
                </div>
            </div>
            <div class="s-row s-leftbar s-border-red">
                <div class="s-col m1 s-padding">
                    <a class="fab fa-linkedin s-xxlarge"></a>
                </div>
                <div class="s-half s-padding">
                    <a href="https://www.linkedin.com/in/ronaldinhoexcellent1212" class="s-hover-blue">in/ronaldinhoexcellent1212</a>
                </div>
            </div>
            <div class="s-row s-leftbar s-border-green">
                <div class="s-col m1 s-padding">
                    <a class="fab fa-github s-xxlarge"></a>
                </div>
                <div class="s-half s-padding">
                    <a href="https://www.github.com/ronaldoexcellent" class="s-hover-blue">/ronaldoexcellent</a>
                </div>
            </div>
            <div class="s-row s-leftbar s-border-yellow">
                <div class="s-col m1 s-padding">
                    <a class="fab fa-google s-xxlarge"></a>
                </div>
                <div class="s-half s-padding">
                    <a href="mailto:ronaldinhoexcellent@gmail.com" class="s-hover-blue">@ronaldinhoexcellent</a>
                </div>
            </div>
        </div>
    `,
    about : `
        <attrib class="s-container"></attrib>
        <div style="margin-top: 50px">
            <div class="s-white s-container s-white s-animate-left s-padding-24" style="transition: .5s; text-align:justify;">
                <h1>About:</h1>
                <h2>History & Breakthrough >>><hr class="s-border-black"></h2>
                In the year 2022, I upgraded my ability to solve web frontend problems and even wrote my first web game <a href="https://spellingbee1.vercel.app">(https://spellingbee1.vercel.app)</a>. Then I made few other games, because making websites was a bit boring. Then making more apps and games no longer became a major objective. I was still unsatisfied and wanted to do more than just writing apps and games. I thought of what I could create as a programmer that would help/benefit other programmers, then I thought of creating a very little library. I started having real visions of building it, writing real time problem solving pieces of code. After a few months, I decided to remake it and make it more complex, consisting of functions and some extra features that lets you bind and call application data and even external variables whenever and wherever you need them. I also added some special code to help solve some special problems, especially in the area of design and functionality. The former (nano-sized) library, now a full frontend development framework is finally ready. 
            </div>
            <div class="s-black s-container s-white s-animate-left s-padding-24" style="transition: .5s; text-align:justify">
                <h2>My Goal >>><hr class="s-border-white"></h2>
                My goal had always been to alter the way we write & use code from HTML5, to JavaScript. I finally did it. Yeah, I achieved my goal and provided faster ways to write to write code and to solve complex problems.
            </div>
        </div>
    `
};