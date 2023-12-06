document.addEventListener("click", function(event) { /*JS required for the collapsible items*/
})

window.addEventListener('load',function(){
 /*Initialise all tooltips*/
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            });
            $('.htmlToCopy').after('<button type="button" class="w-75 d-block mx-auto btn btn-primary copybutton my-3"><span style="color: var(--bs-bg-color) !important" class="fa fa-clipboard" aria-hidden="true"></span>&nbsp;Copy code</button>');
            $('.copybutton').on('click', function(event) {
                var btn = $(this);
                var btnHtml = $(this).html();
                var snippet = btn.prev().html().slice(11,-12); //this removes the outer div and whitespace the html is wrapped in to leave just the relevant html.
                console.log("@GB: snippet = ", snippet); 
                copyTextToClipboard(snippet);
                btn.html('<span style="color: var(--bs-bg-color) !important" class="fa fa-check"></span> Code copied');
                window.setTimeout(function() {
                    btn.html(btnHtml);
                }, 3000);
            });
            $('button.seq_other').on('click', function(event){
                $('.htmlToCopy').after('<button type="button" class="w-75 d-block mx-auto btn btn-primary copybutton my-3"><span style="color: var(--bs-bg-color) !important" class="fa fa-clipboard" aria-hidden="true"></span>&nbsp;Copy code</button>');
                    $('.copybutton').on('click', function(event) {
                        var btn = $(this);
                        var btnHtml = $(this).html();
                        var snippet = btn.prev().html().slice(11,-12); //this removes the outer div and whitespace the html is wrapped in to leave just the relevant html.
                        console.log("@GB: snippet = ", snippet); 
                        copyTextToClipboard(snippet);
                        btn.html('<span style="color: var(--bs-bg-color) !important" class="fa fa-check"></span> Code copied');
                        window.setTimeout(function() {
                            btn.html(btnHtml);
                        }, 3000);
                    });
                    var coll = $('.coll-btn');
                    var i;
                    for (i = 0; i < coll.length; i++) {
                        coll[i].addEventListener("click", function(){
                            $(this).toggleClass("coll-active");
                            $(this).children().toggleClass('fa-angle-down fa-angle-up');
                            var content = $(this).parent().next();
                            if (content.css('max-height') != '0px'){
                                content.css('max-height', '0px');
                            } else {
                                content.css('max-height', '100%');
                            }
                        });
                    };
                });
                    /*Newer version of copy to clipboard*/
                    function copyTextToClipboard(text) {
                        if (!navigator.clipboard) {
                            fallbackCopyTextToClipboard(text);
                            return;
                        }
                        navigator.clipboard.writeText(text).then(function() {
                            
                        }, function(err) {
               
                        });
                    }
                    /*Traditional version of copy to clipboard that works as a fallback*/
                    function fallbackCopyTextToClipboard(text) {
                        var textArea = document.createElement("textarea");
                        textArea.value = text;
                        document.body.appendChild(textArea);
                        textArea.select();
                        try {
                            var successful = document.execCommand('copy');
                            var msg = successful ? 'successful' : 'unsuccessful';
                            console.log('Fallback: Copying text command was ' + msg);
                        } catch (err) {
                            console.error('Fallback: Oops, unable to copy', err);
                        }
                        document.body.removeChild(textArea);
                    }
                    /*Copy code function. Button in the HTML has an onclick trigger that runs this. Only way I got it to work in LearnX.*/
                    var coll = $('.coll-btn');
                    var i;
                    for (i = 0; i < coll.length; i++) {
                        coll[i].addEventListener("click", function() {
                            $(this).toggleClass("coll-active");
                            $(this).children().toggleClass('fa-angle-down fa-angle-up');
                            var content = $(this).parent().next();
                            if (content.css('max-height') != '0px'){
                                content.css('max-height', '0px');
                            } else {
                                content.css('max-height', '100%');
                            }
                        });
                    };
                    /*Code to alternate icons on collapse buttons on click*/
                    $('button[data-bs-toggle="collapse"]').on('click', function(){
                        $(this).children().toggleClass('fa-plus fa-minus');
                        $(this).children().toggleClass('fa-angle-down fa-angle-up');
                        $(this).children().toggleClass('fa-caret-down fa-caret-up');
                    });
                    /*Code to close offcanvas jump to menu once a link is clicked*/
                    $('.offcanvas-body a').on('click', function() {
                        setTimeout(function(){
                          $(".offcanvas").removeClass("show");
                          setTimeout(function () {
                            $("button#openJumpToMenu").trigger("click");
                          }, 500);
                        },800);
                      });
                });