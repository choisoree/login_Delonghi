$(function(){
    //gnb 메뉴
    $("#gnb ul#mainmenu li").mouseover(function(){
        $(this).children("ul").stop().fadeIn(500);
        $("#submenuBG").stop().fadeIn(500);
    });

    $("#gnb ul#mainmenu li").mouseout(function(){
        $(this).children("ul").stop().fadeOut(500);
        $("#submenuBG").stop().fadeOut(500);
    });




    //멀티탭
    $(".loginselectBtn:first-child").click(function(){
        $(".loginselectBtn:nth-child(2)").css({
            "color":"#777",
            "border": "1px solid #ccc",
            "border-bottom":"1px solid #3289e8",
            "border-left":"1px solid #3289e8"
        });
       $(this).css({
            "color":"#3289e8",
            "border":"1px solid #3289e8",
            "border-bottom":"none"
       });

        $("#tabcontent1").css({"display":"block"});
        $("#tabcontent2").css({"display":"none"});
    });

    $(".loginselectBtn:nth-child(2)").click(function(){
        $(".loginselectBtn:first-child").css({
            "color":"#777",
            "border": "1px solid #ccc",
            "border-bottom":"1px solid #3289e8"
        });
       $(this).css({
           "color":"#3289e8",
            "border":"1px solid #3289e8",
            "border-bottom":"none"
       });

        $("#tabcontent1").css({"display":"none"});
        $("#tabcontent2").css({"display":"block"});
    });


    //로그인에서 미입력 경고창
    $(".loginBtn").click(function(){
        alert("메일주소나 멤버십번호를 넣어주세요");
    });




});
