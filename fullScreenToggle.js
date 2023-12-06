function copyCode() {
    var activeBtn = $('button.active').attr('id')
    if(activeBtn == 'imgBuilderBtn') {
        var selectedCode = $('#imgFinalCode').select();
    }
    else if(activeBtn == 'vidBuilderBtn') {
        var selectedCode = $('#vidFinalCode').select();
    }
    else if(activeBtn == 'btnBuilderBtn') {
        var selectedCode = $('#btnFinalCode').select();
    }
    else if(activeBtn == 'alertBuilderBtn'){
        var selectedCode = $('#alertFinalCode').select();
    }
    else if(activeBtn == 'tooltipBuilderBtn'){
        var selectedCode = $('#tooltipFinalCode').select();
    }
    else if(activeBtn == 'tableBuilderBtn'){
        generateTableCode();
        var selectedCode = $('#tableFinalCode').select();
    }
    else if(activeBtn == 'accBuilderBtn'){
        var selectedCode = $('#accFinalCode').select();
    }
    else if(activeBtn == 'readmoreBuilderBtn'){
        var selectedCode = $('#readmoreFinalCode').select();
    }
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
        console.log("@GB: snippet = ", selectedCode.val());
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
    Swal.fire({
        title: '<span class="fs-5 d-block mx-auto text-center">Code copied</span>',
        icon: 'success',
        showConfirmButton: false,
        timer: 1000 // Duration in milliseconds
      });
}
function fullScreenImgToggle() {
    if (document.fullscreenEnabled) {
        var togglePreviewVidFS = document.getElementById("togglePreviewImgFS");
        togglePreviewVidFS.addEventListener("click", function (event) {
            if (!document.fullscreenElement) {
                document.querySelector("#previewImgFS").requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }, false);
        document.addEventListener("fullscreenchange", function (event) {
            console.log(event);
            if (!document.fullscreenElement) {
                togglePreviewVidFS.innerHTML = "<i class=\"fa fa-expand-arrows-alt fa-lg\"></i>";
                $('#previewImgFS').removeClass('pt-5');
                $(togglePreviewVidFS).appendTo('#previewImgFS');
            } else {
                togglePreviewVidFS.innerHTML = "<i class=\"fa fa-compress-arrows-alt fa-lg\"></i>";
                $(togglePreviewVidFS).appendTo('#previewImgFS');
                $(togglePreviewVidFS).addClass('d-block mx-auto mt-3')
                $('#previewImgFS').addClass('pt-5');
            }
        });
        document.addEventListener("fullscreenerror", function (event) {
            console.log(event);
        });
    }
}
function fullScreenVidToggle() {
    if (document.fullscreenEnabled) {
        var togglePreviewVidFS = document.getElementById("togglePreviewVidFS");
        togglePreviewVidFS.addEventListener("click", function (event) {
            if (!document.fullscreenElement) {
                document.querySelector("#previewVidFS").requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }, false);
        document.addEventListener("fullscreenchange", function (event) {
            console.log(event);
            if (!document.fullscreenElement) {
                togglePreviewVidFS.innerHTML = "<i class=\"fa fa-expand-arrows-alt fa-lg\"></i>";
                $('#previewVidFS').removeClass('pt-5');
                $(togglePreviewVidFS).appendTo('#previewVidFS');
            } else {
                togglePreviewVidFS.innerHTML = "<i class=\"fa fa-compress-arrows-alt fa-lg\"></i>";
                $(togglePreviewVidFS).appendTo('#previewVidFS');
                $(togglePreviewVidFS).addClass('d-block mx-auto mt-3')
                $('#previewVidFS').addClass('pt-5');
            }
        });
        document.addEventListener("fullscreenerror", function (event) {
            console.log(event);
        });
    }
}
function fullScreenBtnToggle() {
    if (document.fullscreenEnabled) {
        var togglePreviewVidFS = document.getElementById("togglePreviewBtnFS");
        togglePreviewVidFS.addEventListener("click", function (event) {
            if (!document.fullscreenElement) {
                document.querySelector("#previewBtnFS").requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }, false);
        document.addEventListener("fullscreenchange", function (event) {
            console.log(event);
            if (!document.fullscreenElement) {
                togglePreviewVidFS.innerHTML = "<i class=\"fa fa-expand-arrows-alt fa-lg\"></i>";
                $('#previewBtnFS').removeClass('pt-5');
                $(togglePreviewVidFS).appendTo('#previewBtnFS');
            } else {
                togglePreviewVidFS.innerHTML = "<i class=\"fa fa-compress-arrows-alt fa-lg\"></i>";
                $(togglePreviewVidFS).appendTo('#previewBtnFS');
                $(togglePreviewVidFS).addClass('d-block mx-auto mt-3')
                $('#previewBtnFS').addClass('pt-5');
            }
        });
        document.addEventListener("fullscreenerror", function (event) {
            console.log(event);
        });
    }
}
function fullScreenAlertToggle() {
    if (document.fullscreenEnabled) {
        var togglePreviewVidFS = document.getElementById("togglePreviewAlertFS");
        togglePreviewVidFS.addEventListener("click", function (event) {
            if (!document.fullscreenElement) {
                document.querySelector("#previewAlertFS").requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }, false);
        document.addEventListener("fullscreenchange", function (event) {
            console.log(event);
            if (!document.fullscreenElement) {
                togglePreviewVidFS.innerHTML = "<i class=\"fa fa-expand-arrows-alt fa-lg\"></i>";
                $('#previewAlertFS').removeClass('pt-5');
                $(togglePreviewVidFS).appendTo('#previewAlertFS');
            } else {
                togglePreviewVidFS.innerHTML = "<i class=\"fa fa-compress-arrows-alt fa-lg\"></i>";
                $(togglePreviewVidFS).appendTo('#previewAlertFS');
                $(togglePreviewVidFS).addClass('d-block mx-auto mt-3')
                $('#previewAlertFS').addClass('pt-5');
            }
        });
        document.addEventListener("fullscreenerror", function (event) {
            console.log(event);
        });
    }
}
function fullScreenTooltipToggle() {
    if (document.fullscreenEnabled) {
        var togglePreviewTooltipFS = document.getElementById("togglePreviewTooltipFS");
        togglePreviewTooltipFS.addEventListener("click", function (event) {
            if (!document.fullscreenElement) {
                document.querySelector("#previewTooltipFS").requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }, false);
        document.addEventListener("fullscreenchange", function (event) {
            console.log(event);
            if (!document.fullscreenElement) {
                togglePreviewTooltipFS.innerHTML = "<i class=\"fa fa-expand-arrows-alt fa-lg\"></i>";
                $('#previewTooltipFS').removeClass('pt-5');
                $(togglePreviewTooltipFS).appendTo('#previewTooltipFS');
            } else {
                togglePreviewTooltipFS.innerHTML = "<i class=\"fa fa-compress-arrows-alt fa-lg\"></i>";
                $(togglePreviewTooltipFS).appendTo('#previewTooltipFS');
                $(togglePreviewTooltipFS).addClass('d-block mx-auto mt-3')
                $('#previewTooltipFS').addClass('pt-5');
            }
        });
        document.addEventListener("fullscreenerror", function (event) {
            console.log(event);
        });
    }
}
function fullScreenAccToggle() {
    if (document.fullscreenEnabled) {
        var togglePreviewAccFS = document.getElementById("togglePreviewAccFS");
        togglePreviewAccFS.addEventListener("click", function (event) {
            if (!document.fullscreenElement) {
                document.querySelector("#previewAccFS").requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }, false);
        document.addEventListener("fullscreenchange", function (event) {
            console.log(event);
            if (!document.fullscreenElement) {
                togglePreviewAccFS.innerHTML = "<i class=\"fa fa-expand-arrows-alt fa-lg\"></i>";
                $('#previewAccFS').removeClass('pt-5');
                $(togglePreviewAccFS).appendTo('#previewAccFS');
            } else {
                togglePreviewAccFS.innerHTML = "<i class=\"fa fa-compress-arrows-alt fa-lg\"></i>";
                $(togglePreviewAccFS).appendTo('#previewAccFS');
                $(togglePreviewAccFS).addClass('d-block mx-auto mt-3')
                $('#previewAccFS').addClass('pt-5');
            }
        });
        document.addEventListener("fullscreenerror", function (event) {
            console.log(event);
        });
    }
}
function fullScreenTableToggle() {
    if (document.fullscreenEnabled) {
        var togglePreviewTableFS = document.getElementById("togglePreviewTableFS");
        togglePreviewTableFS.addEventListener("click", function (event) {
            if (!document.fullscreenElement) {
                document.querySelector("#previewTableFS").requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }, false);
        document.addEventListener("fullscreenchange", function (event) {
            console.log(event);
            if (!document.fullscreenElement) {
                togglePreviewTableFS.innerHTML = "<i class=\"fa fa-expand-arrows-alt fa-lg\"></i>";
                $('#previewTableFS').removeClass('pt-5');
                $(togglePreviewTableFS).appendTo('#previewTableFS');
            } else {
                togglePreviewTableFS.innerHTML = "<i class=\"fa fa-compress-arrows-alt fa-lg\"></i>";
                $(togglePreviewTableFS).appendTo('#previewTableFS');
                $(togglePreviewTableFS).addClass('d-block mx-auto mt-3')
                $('#previewTableFS').addClass('pt-5');
            }
        });
        document.addEventListener("fullscreenerror", function (event) {
            console.log(event);
        });
    }
}
function fullScreenReadmoreToggle() {
    if (document.fullscreenEnabled) {
        var togglePreviewReadmoreFS = document.getElementById("togglePreviewReadmoreFS");
        togglePreviewReadmoreFS.addEventListener("click", function (event) {
            if (!document.fullscreenElement) {
                document.querySelector("#previewReadmoreFS").requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }, false);
        document.addEventListener("fullscreenchange", function (event) {
            console.log(event);
            if (!document.fullscreenElement) {
                togglePreviewReadmoreFS.innerHTML = "<i class=\"fa fa-expand-arrows-alt fa-lg\"></i>";
                $('#previewReadmoreFS').removeClass('pt-5');
                $(togglePreviewReadmoreFS).appendTo('#previewReadmoreFS');
            } else {
                togglePreviewReadmoreFS.innerHTML = "<i class=\"fa fa-compress-arrows-alt fa-lg\"></i>";
                $(togglePreviewReadmoreFS).appendTo('#previewReadmoreFS');
                $(togglePreviewReadmoreFS).addClass('d-block mx-auto mt-3')
                $('#previewReadmoreFS').addClass('pt-5');
            }
        });
        document.addEventListener("fullscreenerror", function (event) {
            console.log(event);
        });
    }
}