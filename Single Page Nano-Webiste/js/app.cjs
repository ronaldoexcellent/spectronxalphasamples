importStylesheets(["css/root.css"]);
// Create layout
layout.create();
// Add header content
html($('header'), `
    <div>
        <span class="bars"><i class="fa fa-bars"></i></span>
        <span class="app-id">${app.name}</span>
    </div>
`);
// Add class to nav
addClass($('nav'), "nav");
// Move nav to div in header
render($('header div'), $('.nav'));
// Create links
$links = ['Home', 'Features', "Products", 'Contacts', 'About'];
$link_icon = ['fa fa-home', 'fa fa-gear', "fa fa-download", 'fa fa-message', 'fa fa-info-circle'];
widgets.constructMultiple('a', $links.length);
renderAll($('.nav'), widget);
loop($links, ()=>{
    html($$('.nav a')[i], `<i class="${$link_icon[i]} s-hide-large"></i> <span class="s-hide-medium">${$links[i]}</span>`);
});
// Create pages {in main} & assign functions to links
function title(e) {
    html($('title'), `${app.name} - ${attrib(e.currentTarget, "key")}`);
}
var link = $$('.nav a');
loop($links, ()=>{
    widgets.construct('section');
    attrib(widget, 'id', $links[i].toLowerCase());
    addClass(widget, 'pages');
    render($('main'), widget);
    widgets.construct($links[i].toLowerCase()),
    render($$('main section')[i], widget);
    attrib(link[i], "key", $links[i]);
    click(link[i], () => {
        removeClass($('.nav-mobile'), "s-show-small");
        title(event);
    });
    attrib(link[i], "href", `#${$links[i].toLowerCase()}`);
});
// Aside contents
html($('aside'), `
    <a class="fa fa-phone" href="tel:+2349114349748">  <span class="s-hide-small s-hide-medium s-large">Call</span></a><br>    
    <a class="fa fa-envelope" href="sms:+2349114349748">  <span class="s-hide-small s-hide-medium  s-large">Text</span></a><br>
    <a class="fab fa-facebook" href="https://www.facebook.com/spectronx.developer">  <span class="s-hide-small s-hide-medium  s-large">Facebook</span></a><br>
    <a class="fab fa-facebook-messenger" href="https://m.me/spectronx.developer">  <span class="s-hide-small s-hide-medium s-large">Messenger</span></a><br>
    <a class="fab fa-twitter" href="https://www.twitter.com/ronaldoexcel">  <span class="s-hide-small s-hide-medium s-large">Twitter</span></a><br>
    <a class="fab fa-instagram" href="https://www.instagram.com/ronaldo.excellent">  <span class="s-hide-small s-hide-medium s-large">Instagram</span></a><br>
    <a class="fab fa-linkedin" href="https://www.linkedin.com/in/ronaldinhoexcellent1212">  <span class="s-hide-small s-hide-medium s-large">LinkedIn</span></a><br>
    <a class="fab fa-github" href="https://www.github.com/ronaldoexcellent">  <span class="s-hide-small s-hide-medium s-large">Github</span></a><br>
    <a class="fab fa-google" href="mailto:ronaldinhoexcellent@gmail.com">  <span class="s-hide-small s-hide-medium s-large">Email</span></a><br>
    <a class="fa fa-message s-large close-side" title="Leave me a message">  <span class="s-hide-small s-hide-medium">Chat</span></a>
`);
// Footer contents
html($('footer'), app.footnote());
// Styling
// Hide layout scrollbar
css($('layout'), "overflow:hidden");
// Header
addClasses($('header'), ["s-top", "s-white"]);
css($('header'), "font-family: 'Playfair Display'; transition: 1s");
scroll($('main'), () => {
    if ($('main').scrollTop > 200) {
        addClass($('header'), "s-black");
    } else {
        removeClass($('header'), "s-black"); 
    }
});
addClasses($('header div'), ["s-bar", "s-card"]);
(!$('.bars')) ? null : addClasses($('.bars'), ["s-button", "s-btn", "s-ripple", "s-right", "nav-open", "s-hide", "s-show-small", "s-padding-16", "s-medium"]), click($('.nav-open'), () => {
    addClass($('.nav-mobile'), "s-show-small"), css($('.overlay'), "display:block");
});
addClasses($('.app-id'), ["s-bar-item", "s-button", "s-wide", "s-padding", "s-xlarge"]);
click($('.app-id'), () => window.location.href = "#home");
addClasses($('.nav'), ["s-right", "s-hide-small"]);
loopX($$('.nav a'), () => addClasses(i, ["s-btn", "s-button", "s-ripple", "s-bar-item", "s-padding-16"]));
// Second Nav {Sidebar} & Transparent Background {Overlay}
cloneAfter($('header'), $('.nav'));
replaceClass($$('nav')[1], "nav", "nav-mobile");
var sNav = $('.nav-mobile');
replaceClasses(sNav, ["s-right", "s-hide-small"], ["s-sidebar", "s-bar-block", "s-white", "s-card", "s-animate-left", "s-card-4", "s-hide"]);
widgets.construct('div'), addClasses(widget, ["overlay", "s-overlay", "s-hide-large", "s-hide-medium", "s-animate-opacity"]), click(widget, () => {removeClass($('.nav-mobile'), "s-show-small"), css($('.overlay'), "display:none")}), renderAfter($('.nav-mobile'), widget);
loopX($$('.nav-mobile a'), () => click(i, () => {removeClass($('.nav-mobile'), "s-show-small"), css($('.overlay'), "display:none")}));
// Close-nav button (x) for second nav
widgets.construct('span'), html(widget, "&times;"), addClasses(widget, ["s-right", "s-display-topright", "s-button", "s-ripple", "s-large", "s-padding"]), click(widget, () => {
    removeClass($('.nav-mobile'), "s-show-small"), css($('.overlay'), "display:none");
}), render($('.nav-mobile'), widget);
// Logo
widgets.construct('div'), html(widget, `<img src="${app.logo}" style="height: 100px; width: 100px;">`), addClasses(widget, ["s-padding", "s-card", "s-container", "s-center"]), renderFirstPlace($('.nav-mobile'), widget);
css($('.nav-mobile a'), "margin-top: 20px");
// Modify <main>
addClasses($('main'), ["s-display-container", "s-black"]);
css($('main'), "width: 100%; height: 100%; overflow-y:scroll; scroll-behavior: smooth;");
// Home
// Typewrite class "repeate" on home, use setTimeout() function to force it.
setTimeout(()=>typewrite($('.repeate'), text($('.repeate')), ['white'], "true", 300));
// Aside
addClasses($('aside'), ["s-display-bottomright", "s-margin-right"]);
// Hide line breaks for medium and small screens
loopX($$('aside br'), () => addClasses(i, ["s-hide-medium", "s-hide-small"]));
//css($('aside span'), 'margin-bottom: 3px');
loopX($$('aside a'), () => addClasses(i, ["s-btn", "s-button", "s-padding-16", "s-xlarge", "s-white", "s-hover-opacity", "s-round-xxlarge", "s-border", "s-border-black", "s-animate-bottom"]));
rangeSelect(0, 8, () => addClasses($$('aside a')[i], ["s-hide"])); 
replaceClasses($('.close-side'), ["s-white", "s-border-black", "s-animate-bottom"], ["s-black", "s-border-white", "s-animate-top"]);
click($('.close-side'), () => {
    rangeSelect(0, 8, () => toggleClass($$('aside a')[i], 's-hide'));
    if ($('aside .s-hide')) {
        replaceClass($('.close-side'), 'fa-times', 'fa-message');
    } else {
        replaceClass($('.close-side'), 'fa-message', 'fa-times');
    }
});
// Footer
addClasses($('footer'), ["s-container", "s-white", "s-padding-24", "s-large", "s-center"]);
css($('footer'), "width: 100%;");
// Render footer to main
render($('main'), $('footer'));
// Load the app
loadApp();