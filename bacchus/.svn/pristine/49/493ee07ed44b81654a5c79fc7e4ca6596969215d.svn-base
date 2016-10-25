
jQuery(function($) {
    // logo 開合
    $('.sidebar-collapse').click(function(){
        //$('.companyInfo').toggle();
        $('.companyInfo').css('display','none');
        //if($(this).parents('.menu-min').css('display')=='block'){
        //    $('.companyInfo').css('display','none');
        //}
        //else {
        //    $('.companyInfo').css('display','block');
        //}
    });
    // 詳細介紹 參考js
    //$('.detail-introduce-open').click(function(){
    //    $(this).parents('.ques-block').find('.detail-introduce').toggle();
    //    if ( $(this).parents('.ques-block').find('.detail-introduce').css('display') == 'block' ){
    //        $(this).parent().find('.fa-check').css('visibility','visible');}
    //    else if ( $(this).parents('.ques-block').find('.detail-introduce').css('display') == 'none' ){
    //        $(this).parent().find('.fa-check').css('visibility','hidden');}
    //});
    // 詳細介紹 參考js END

    // 超訂設定 展開|合併
    $('#overBook-open-btn').click(function(){
        $('.overbooking-merge').css('display','none');
        $('.overbooking-open-li').css('display','none');
        $('.overbooking-open').css('display','block');
        $('.overbooking-merge-li').css('display','block');
    });

    $('#overBook-merge-btn').click(function(){
        $('.overbooking-open').css('display','none');
        $('.overbooking-merge-li').css('display','none');
        $('.overbooking-merge').css('display','block');
        $('.overbooking-open-li').css('display','block');
    });



    $('.top-ul>ul>li>a').click(function(){
        $(a).removeClass('active-1');
        $(this).addClass('active-1');
    });

    //$( "#bacchus-header" ).load( "bacchus-header.html" );

    // reception search Bar
    $('.show-search-detail').click(function(){
        $('.rece-search-detail').slideToggle();
    });

    // table　排版問題
    // Change the selector if needed
    var $table = $('table.co-scroll'),
        $bodyCells = $table.find('tbody tr:first').children(),
        colWidth;

    // Adjust the width of thead cells when window resizes
    $(window).resize(function() {
        // Get the tbody columns width array
        colWidth = $bodyCells.map(function() {
            return $(this).width();
        }).get();

        // Set the width of thead columns
        $table.find('thead tr').children().each(function(i, v) {
            $(v).width(colWidth[i]);
        });
    }).resize(); // Trigger resize handler
});
