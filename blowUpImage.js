//Images need the class blownUpImage and there needs to be one modal on the page with imagemodal as the id for this to work
window.addEventListener('load',function(){    
    $('.imageToClick').on('click', function() {
        $('.blownUpImage').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');   
    });		
});