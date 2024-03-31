importStylesheets(["css/root.css"]);
widgets.construct('div'), addClasses(widget, ['s-container', 's-display-topmiddle', 's-padding-32', 's-card-4', 's-round-xlarge', 's-animate-opacity', 's-border', 'calculator']), css(widget, 'width: 300px; transition: 1s; margin-top: 10px'), render($('layout'), widget);
widgets.construct('header'), html(widget, `
    <div class="s-xlarge s-bolder"><marquee>${app.name}</marquee></div>
    <span class="s-button s-ripple s-round-xxlarge s-border s-bolder">Mode</span>
`), addClasses(widget, ['s-margin-bottom', 's-center']), render($('.calculator'), widget);
insertBefore($('header div'), "X", "<i class='s-xxlarge'>");
insertAfter($('header div'), "X", "</i>");
widgets.construct('div'), addClasses(widget, ['s-padding', 's-padding-16', 's-xlarge', 'screen']), html(widget, 0), css(widget, 'overflow:auto; background:black; color: white;'), render($('.calculator'), widget);
$btns = ['C', 'Del', '(', ')', '7', '8', '9', '*', '4', '5', '6', '/', '1', '2', '3', '-', "0", '.', '+', '='];
widgets.construct('div'), addClasses(widget, ['s-content', 's-center', 's-row', 's-border-top', 'btn-row']), render($('.calculator'), widget);
widgets.constructMultiple('button', 4), renderAll($$('.calculator > div')[1], widget);
clones($('.calculator'), $$('.calculator > div')[1], 4);
loop($$('.btn-row button'), () => {
    attrib($$('.btn-row button')[i], 'key', $btns[i]);
    html($$('.btn-row button')[i], `<p>${$btns[i]}</p>`), addClasses($$('.btn-row button')[i], ['s-btn', 's-col', 's3', 's-ripple', 's-hover-red']);
});
function b(e) {
    rangeSelect(2, 18, () => {
        $k = attrib(e.currentTarget, 'key');
        switch($k) {
            case "C":
                html($('.screen'), '0');
                break;
            case $btns[i]:
                if (html($('.screen')) != 0) {
                    pushAfter($('.screen'), $k);
                } else {
                    html($('.screen'), ''), pushAfter($('.screen'), $k);
                }
                break;
            case "=":
                if (html($('.screen')).length > 8) {
                    html($('.screen'), eval(html($('.screen'))).toExponential(2));
                } else {
                    html($('.screen'), eval(html($('.screen'))));
                }
                
        }
    })
}
loopX($$('.btn-row button'), () => click(i, () => b(event)));
// Del button
click($$('.btn-row button')[1], () => {
    (html($('.screen')).length == 1) ? html($('.screen'), 0) : html($('.screen'), html($('.screen')).substring(0, html($('.screen')).length - 1));
});
// Switch theme
click($('header span'), () => {
    toggleClass($('layout'), 's-black'), toggleClass($('.calculator'), 's-black'), toggleClass($('.screen'), 's-white');
});