$(function () {
    $("#navbar").load("./module/header.html");

//第一層帶入
    $("#page-content").load("indexMain.html");
    $("#indexMain").addClass("active-top");

    //第一層架構
     $('.border').click(function(){
         $(".border").removeClass("active-top");

         $(this).addClass("active-top");
         var select=$(this).attr("value");
         $("#page-content").load(select+".html");
    });


    //第二層架構
    $("#indexMain-sec").addClass("active-sec");
    $('.border-sec').click(function () {
        $(".border-sec").removeClass("active-sec");
        //$(".sub-ul").hide();
        $(this).addClass("active-sec");
        var select = $(this).attr("value");
        $("#page-content").load(select + ".html");
        //$(this).find('.sub-ul').show();
//            $(this).find('.sub-ul li:first-child').addClass("sub-active");
    });


});


//$(".container_manage").load("backstage_purview.html");
//$("#backstage_purview").addClass("active");
//
//
//$('.border').click(function(){
//    $(".border").removeClass("active");
//    $(".sub-ul").hide();
////            $(".sub-ul li").removeClass("sub-active");
////            $(this).find(".sub-ul>li").removeClass("sub-active");
//    $(this).addClass("active");
//    var select=$(this).attr("value");
//    $(".container_manage").load(select+".html");
//    $(this).find('.sub-ul').show();
////            $(this).find('.sub-ul li:first-child').addClass("sub-active");
//});


// Run on window load in case images or other scripts affect element widths

