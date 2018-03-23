$(window).on("load",function(){
    var $swiper = new Swiper(".main-container",{
        mode:"vertical",
        calculateHeight:true,
        mousewheelControl:true,
        followFinger:false,
        speed:1000,
        onSlideChangeStart:function (swiper) {
            $(".main-container .swiper-slide").removeClass("act")
        },
        onSlideChangeEnd:function (swiper) {
            $(".swiper-slide-active").addClass("act")
            if(swiper.activeIndex==5){
                $swiper.disableMousewheelControl();
                $("html").addClass("showFooter")
            }else{
                $swiper.enableMousewheelControl();
                $("html").removeClass("showFooter")
            }
        }
    })
    $(".backtop").click(function () {
        $swiper.enableMousewheelControl();
        $("html").removeClass("showFooter")
        $swiper.swipeTo(0)
    })
    var windowTop=0;
    $(window).scroll(function(){
        windowTop=$(window).scrollTop();
    })
    $(document).mousewheel(function(event, delta) {
        if(delta>0 && windowTop==0){
            $swiper.enableMousewheelControl();
            $("html").removeClass("showFooter")
        }
    });
    setTimeout(function () {
        $(".screen1").addClass("act")
    },200)
    $(".form-l").show()
    $(".jsMarginT").css("marginTop",($(window).height() - $(".jsMarginT").height())/2)
    var pops = [[
        "家族化“蝶翼式”进气格栅，不争锋自有声",
        "耀目灯组，犀利绽放的华彩盛宴",// "激流式LED后位置灯，所过之处皆惊艳",
        "简洁尾部造型设计，进取气质蓬勃焕发",
        "17英寸双色运动轮毂，激进设计动感立现"
    ],[
        "中式庭院式环抱内饰设计，人性化构思带来非凡空间享受",
        "多功能平底式真皮方向盘，便捷与质感一手掌控",
        "Forest Air森林空气净化系统，一路清新畅然",
        "软质座椅"
    ],[
        "触控式副驾显示屏，悉心巧设满载互动乐趣",
        "in Call 3.0智能车载互联系统，智能生活由此开启",
        "右侧盲区可视系统，远离盲区视不可挡",
        "ACC with Stop/Go全速自适应巡航系统"
    ],[
        "底特律专家级底盘调教，承载精彩底气十足",
        "HEEAB高刚度钢吸能车身，钢筋铁骨安全守护",
        "全系标配电子车身稳定系统，从容应对多变路况",
        "PAB预警辅助制动系统，预见前路安行无忧"
    ]]
    for (var i = 0; i < pops.length; i++) {
        var icons = $(".icons").eq(i)
        for (var j = 0; j < pops[i].length; j++) {
            icons.find(".icon").eq(j).attr("title",pops[i][j])
        }
    }
    var $popswiper;
    $(".icons .icon").click(function () {
        var fileName = Number($(this).closest(".icons").attr("data-file"));
        var $index = Number($(this).closest(".icons").attr("data-index"));
        var thisIndex = $(this).index();
        var thisTexts = pops[$index];
        var $html = "";
        for (var i = 0; i < thisTexts.length; i++) {
            $html +="<div class='swiper-slide'>\
					<p>"+thisTexts[i]+"</p>\
					<img src=img/"+fileName+"/"+i+".jpg>\
				</div>";
        }
        $(".popup-container .swiper-wrapper").html($html)
        $(".popup").show()
        // initPopSwiper()
        $popswiper = new Swiper(".popup-container",{
            calculateHeight:true,
            loop:true
        })
        $popswiper.reInit()
        $popswiper.swipeTo(thisIndex,0)
    })
    $(".swiper-box .prev").click(function () {
        $popswiper.swipePrev()
    })
    $(".swiper-box .next").click(function () {
        $popswiper.swipeNext()
    })
    $(".popup .close").click(function () {
        $(".popup").hide()
    })
    // function initPopSwiper() {
    // 	$popswiper = new Swiper(".popup-container",{
    // 		calculateHeight:true
    // 	})
    // }
    // 表单预约试驾 模拟placeholder
    $(".form-l input").focus(function () {
        $(this).css('background','#e3e3e3')
    }).blur(function () {
        if (this.value == '') {
            $(this).css('background','none')
        } else {
            $(this).css('background','#e3e3e3')
        };
    })
    $(".form-l select").change(function () {
        $(this).siblings("p").html($(this).find('option:selected').text());
    })
    var $url = "../php/"
    function initDriveplugin() {
        raetonccConfig = {
            ctiurl: $url,
            cartype: 'jc_',
            aid: '405',
            op: 'try',
            carname: '第二代逸动',
            carcode: 'C211',
            from_source: 'pc',
            provinceText: '选择省份<b>PROVINCE</b>',
            cityText: '选择城市<b>CITY</b>',
            townText: '选择地区<b>TOWN</b>',
            dealerText: '选择4S店<b>CHOOSE</b>',
            carcodeText: '第二代逸动',
            debug: 0, //1：不发到长安服务器，只发送到测服 0：发到长安服务器+测服
            hasRaffle: false,
            dtimeEle: $("#dtime"),
            otimeEle: '',
            carcodeEle: '',
            loadprovincechange: function(e) {
                e.prev("p").html(this.provinceText);
                this.cityEle.prev("p").html(this.cityText);
                this.townEle.prev("p").html(this.townText);
                this.dealerEle.prev("p").html(this.dealerText);
            },
            carcodechange: function(e) {
                // e.prev("p").html(e.find("option:selected").text());
            },
            provincechange: function(e) {
                e.prev("p").html(e.val()=="0"?this.provinceText:e.find("option:selected").text());
                this.cityEle.prev("p").html(this.cityText);
                this.townEle.prev("p").html(this.townText);
                this.dealerEle.prev("p").html(this.dealerText);

            },
            citychange: function(e) {
                e.prev("p").html(e.val()=="0"?this.cityText:e.find("option").not(function() {
                    return !this.selected
                }).text());
                this.townEle.prev("p").html(this.townText);
                this.dealerEle.prev("p").html(this.dealerText);

            },
            townchange: function(e) {
                e.prev("p").html(e.find("option").not(function() {
                    return !this.selected
                }).text());
                this.dealerEle.prev("p").html(this.dealerText);

            },
            dealerchange: function(e) {
                e.prev("p").html(e.val()=="0"?this.dealerText:e.find("option:selected").text());
            },
            reload: function() {
                // 重置表单====
                this.unameEle.val('').siblings('p').html("姓名<b>NAME</b>");
                this.umobileEle.val('').siblings('p').html("手机号<b>MOBILE</b>");
                this.provinceEle.prev("p").html(this.provinceText);
                this.cityEle.prev("p").html(this.cityText);
                this.townEle.prev("p").html(this.townText);
                this.dealerEle.prev("p").html(this.dealerText);
                this.provinceEle.val("0");
                this.cityEle.val("0");
                this.townEle.val("0");
                this.dealerEle.val("0");
                $(".form-l input").blur()
                // this.dealerEle.prev("p").html(this.dealerText);

            },
            submitdrive: function(e) {
                this.reload();
            }
        }
        //实例化试驾插件
        raetonccDrive = new Testdrive(raetonccConfig);
        raetonccDrive.init();
    }
    initDriveplugin();
})
