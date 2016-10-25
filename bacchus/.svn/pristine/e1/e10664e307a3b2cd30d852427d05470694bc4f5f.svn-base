$(function () {
    // html loading 團體清單的內容
    $("#groupList-popPage").load("./groupList-pop.html");

    // jquery彈出視窗
    //override dialog's title function to allow for HTML titles
    $.widget("ui.dialog", $.extend({}, $.ui.dialog.prototype, {
        _title: function (title) {
            var $title = this.options.title || '&nbsp;'
            if (("title_html" in this.options) && this.options.title_html == true)
                title.html($title);
            else title.text($title);
        }
    }));

    // 開班 groupList-btn-modal-01
    $(document).on("click" , "#groupList-btn-modal-01" ,function (e){
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-01-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>住客畫面</h4></div>",
            title_html: true,
            width: 1000,
            maxwidth: 1920,
            buttons: [
                {
                    text: "Cancel",
                    "class": "btn btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "OK",
                    "class": "btn btn-primary btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

    // 簽認單 groupList-btn-modal-02
    $(document).on("click" , "#groupList-btn-modal-02" ,function (e){
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-02-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>住客畫面</h4></div>",
            title_html: true,
            width: 1000,
            maxwidth: 1920,
            buttons: [
                {
                    text: "Cancel",
                    "class": "btn btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "OK",
                    "class": "btn btn-primary btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

    // 團體名單 groupList-btn-modal-03
    $(document).on("click" , "#groupList-btn-modal-03" ,function (e){
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-03-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>團體名單</h4></div>",
            title_html: true,
            width: 1000,
            maxwidth: 1920,
            buttons: [
                {
                    text: "Cancel",
                    "class": "btn btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "OK",
                    "class": "btn btn-primary btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

    // 團體明細 groupList-btn-modal-04
    $(document).on("click" , "#groupList-btn-modal-04" ,function (e){
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-04-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>團體明細</h4></div>",
            title_html: true,
            width: 1000,
            maxwidth: 1920,
            buttons: [
                {
                    text: "Cancel",
                    "class": "btn btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "OK",
                    "class": "btn btn-primary btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

    // 住客帳維護 groupList-btn-modal-05
    $(document).on("click" , "#groupList-btn-modal-05" ,function (e){
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-05-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>住客帳維護</h4></div>",
            title_html: true,
            width: 1000,
            maxwidth: 1920,
            buttons: [
                {
                    text: "Cancel",
                    "class": "btn btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "OK",
                    "class": "btn btn-primary btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

    // 房租總額 groupList-btn-modal-06
    $(document).on("click" , "#groupList-btn-modal-06" ,function (e){
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-06-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>房租總額</h4></div>",
            title_html: true,
            width: 1000,
            maxwidth: 1920,
            buttons: [
                {
                    text: "Cancel",
                    "class": "btn btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "OK",
                    "class": "btn btn-primary btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

    // 團體轉帳 groupList-btn-modal-07
    $(document).on("click" , "#groupList-btn-modal-07" ,function (e){
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-07-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>團體轉帳</h4></div>",
            title_html: true,
            width: 1000,
            maxwidth: 1920,
            buttons: [
                {
                    text: "Cancel",
                    "class": "btn btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "OK",
                    "class": "btn btn-primary btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

    // 預估款轉入 groupList-btn-modal-08
    $(document).on("click" , "#groupList-btn-modal-08" ,function (e){
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-08-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>預估款轉入</h4></div>",
            title_html: true,
            width: 1000,
            maxwidth: 1920,
            buttons: [
                {
                    text: "Cancel",
                    "class": "btn btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "OK",
                    "class": "btn btn-primary btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

    // FOC groupList-btn-modal-09
    $(document).on("click" , "#groupList-btn-modal-09" ,function (e){
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-09-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>FOC</h4></div>",
            title_html: true,
            width: 1000,
            maxwidth: 1920,
            buttons: [
                {
                    text: "Cancel",
                    "class": "btn btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "OK",
                    "class": "btn btn-primary btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

    // 改導遊 groupList-btn-modal-10
    $(document).on("click" , "#groupList-btn-modal-10" ,function (e){
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-10-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>改導遊</h4></div>",
            title_html: true,
            width: 1000,
            maxwidth: 1920,
            buttons: [
                {
                    text: "Cancel",
                    "class": "btn btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "OK",
                    "class": "btn btn-primary btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

    // 改住客 groupList-btn-modal-11
    $(document).on("click" , "#groupList-btn-modal-11" ,function (e){
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-11-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>改住客</h4></div>",
            title_html: true,
            width: 1000,
            maxwidth: 1920,
            buttons: [
                {
                    text: "Cancel",
                    "class": "btn btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "OK",
                    "class": "btn btn-primary btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

    // 改房價 groupList-btn-modal-12
    $(document).on("click" , "#groupList-btn-modal-12" ,function (e){
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-12-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>改房價</h4></div>",
            title_html: true,
            width: 1000,
            maxwidth: 1920,
            buttons: [
                {
                    text: "Cancel",
                    "class": "btn btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "OK",
                    "class": "btn btn-primary btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

    // 預估款 groupList-btn-modal-13
    $(document).on("click" , "#groupList-btn-modal-13" ,function (e){
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-13-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>預估款</h4></div>",
            title_html: true,
            width: 1000,
            maxwidth: 1920,
            buttons: [
                {
                    text: "Cancel",
                    "class": "btn btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "OK",
                    "class": "btn btn-primary btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

    // 改公帳號CO日 groupList-btn-modal-14
    $(document).on("click" , "#groupList-btn-modal-14" ,function (e){
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-14-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>改公帳號CO日</h4></div>",
            title_html: true,
            width: 1000,
            maxwidth: 1920,
            buttons: [
                {
                    text: "Cancel",
                    "class": "btn btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "OK",
                    "class": "btn btn-primary btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

    // 改子房間CO日 groupList-btn-modal-15
    $(document).on("click" , "#groupList-btn-modal-15" ,function (e){
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-15-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>改子房間CO日</h4></div>",
            title_html: true,
            width: 1000,
            maxwidth: 1920,
            buttons: [
                {
                    text: "Cancel",
                    "class": "btn btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "OK",
                    "class": "btn btn-primary btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

    // 團體印帳單 groupList-btn-modal-16
    $(document).on("click" , "#groupList-btn-modal-16" ,function (e){
    //$("#groupList-btn-modal-16").on('click', function (e) {
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-16-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>團體印帳單</h4></div>",
            title_html: true,
            width: 1000,
            maxwidth: 1920,
            buttons: [
                {
                    text: "Cancel",
                    "class": "btn btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                },
                {
                    text: "OK",
                    "class": "btn btn-primary btn-minier",
                    click: function () {
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });

    //errorTip→
    //原本寫法   → $("#groupList-btn-modal-option").on('click', function (e)
    //新的寫法   → $(document).on("click" , "#groupList-btn-modal-option" ,function (e)
    // 彈出groupList-btn-modal-option
    $(document).on("click" , "#groupList-btn-modal-option" ,function (e){
        e.preventDefault();
        var dialog = $("#groupList-btn-modal-option-message").removeClass('hide').dialog({
            modal: true,
            title: "<div class='widget-header widget-header-small'><h4 class='smaller'>功能選項</h4></div>",
            title_html: true,
            width: 1000,
            maxWidth: 1920
        });
    });

});
