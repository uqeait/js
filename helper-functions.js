window.addEventListener('load',function(){
    //Initialise all tooltips
               var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
               var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                   return new bootstrap.Tooltip(tooltipTriggerEl)                   
               });
    //Add a go to bookmarks link next to the bookmark this page link
                var currentLocation = window.location.href;
                var bookmarkSlice = currentLocation.slice(32,65);
                var bookmarkURL = 'window.open(\'/courses'+bookmarkSlice+'/bookmarks/\',\'_blank\')';
                $('.bookmark-button-wrapper').append('<button class="btn btn-link gotobookmarksbtn" onclick=""><span class="bookmark-text">Go to bookmarks <i class="fa-solid fa-external-link-square"></i></button>')
                $('.gotobookmarksbtn').attr('onclick',bookmarkURL);  
                var formLinkCount = $('.bugOrSuggestion').length
                if(formLinkCount <= 0){
                    var formsLink = 'window.open(\'https://forms.office.com/r/5kNvhxasnB\')';
                $('.bookmark-button-wrapper').append('<button class="btn btn-link bugOrSuggestion" onclick=""><span class="bookmark-text">Go to bug/suggestion form <span class="fa-solid fa-bug"></span></span></button>')
                $('.bugOrSuggestion').attr('onclick',formsLink);
                }
                else{
                    console.log('Form link already present')
                }         
    //Ensure all functions also happen again when a user navigates to the next or previous unit page.
    //Always duplicate any function that needs to happen on loading of a page to be inside the function that follows.
               $('button.seq_other').on('click', function(event){
                var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                    return new bootstrap.Tooltip(tooltipTriggerEl)
                });
                var bookmarkCount = $('.bookmark-text').length
                var formLinkCount = $('.bugOrSuggestion').length
                if(formLinkCount <= 0){
                    var formsLink = 'window.open(\'https://forms.office.com/r/5kNvhxasnB\')';
                $('.bookmark-button-wrapper').append('<button class="btn btn-link bugOrSuggestion" onclick=""><span class="bookmark-text">Go to bug/suggestion form <span class="fa-solid fa-bug"></span></span></button>')
                $('.bugOrSuggestion').attr('onclick',formsLink);
                }
                else{
                    console.log('Form link already present')
                }
                if(bookmarkCount <= 1){
                var currentLocation = window.location.href;
                var bookmarkSlice = currentLocation.slice(32,65);
                var bookmarkURL = 'window.open(\'/courses'+bookmarkSlice+'/bookmarks/\',\'_blank\')';
                $('.bookmark-button-wrapper').append('<button class="btn btn-link gotobookmarksbtn" onclick=""><span class="bookmark-text">Go to bookmarks <span class="fa-solid fa-external-link-square"></span></span></button>')
                $('.gotobookmarksbtn').attr('onclick',bookmarkURL);
                }
                else{
                    console.log('Go to bookmarks already present');
                }
            });
            $('a[data-bs-toggle="collapse"]').on('click', function(){
                 if($('a[data-bs-toggle="collapse"] i').hasClass('fa-angle-down') || $('a[data-bs-toggle="collapse"] i').hasClass('fa-angle-up') == true){
                     $(this).children().toggleClass('fa-angle-down fa-angle-up');
                    }
                    else if($('a[data-bs-toggle="collapse"] i').hasClass('fa-plus') || $('a[data-bs-toggle="collapse"] i').hasClass('fa-mines') == true){
                         $(this).children().toggleClass('fa-plus fa-minus');
                        }
                        else if($('a[data-bs-toggle="collapse"] i').hasClass('fa-chevron-down') || $('a[data-bs-toggle="collapse"] i').hasClass('fa-chevron-up') == true){
                             $(this).children().toggleClass('fa-chevron-down fa-chevron-up');
                            }
                            else if($('a[data-bs-toggle="collapse"] i').hasClass('fa-caret-down') || $('a[data-bs-toggle="collapse"] i').hasClass('fa-caret-up') == true){
                                 $(this).children().toggleClass('fa-caret-down fa-caret-up');
                                }
                            });
                        });