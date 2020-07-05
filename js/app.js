$(function () { 
    $("#toggleMenu").on("click",function () { 
        $("#menuMobile").toggleClass("show");
        if($(this).children().hasClass("fa fa-align-justify")){
            $(this).children().attr("class","fa fa-times");
        }
        else{
            $(this).children().attr("class","fa fa-align-justify");
        }
     });

    // Show Menu Con

    $("#menuMobile  li >  a").on("click",function (e) {
        // e.preventDefault(); 
        $(this).next().toggleClass("active");
     });

    //  Scroll
    $(document).on("scroll",function () { 
        if(document.documentElement.scrollTop > 200){
            $("header").addClass("header-sticky");
        }
        else{
            $("header").removeClass("header-sticky");

        }
     });

    //  Tab 1

    const tabLinks = $(".tab_main a");
    const tabMains = $(".tab_contents .tab_item");
    $.each(tabLinks, function (i, item) { 
        $(item).on("click",function(e){
            e.preventDefault();
            removeActive(tabLinks);
            removeActive(tabMains);
            $(this).addClass("active");
            $(tabMains[i]).addClass("active");
        });
    });

    // Tab2 
    const tabLinks1 = $(".tab_service_main a");
    const tabMains1 = $(".tab_service_content .tab_servie_item");
    $.each(tabLinks1, function (i, item) { 
        $(item).on("click",function(e){
            e.preventDefault();
            removeActive(tabLinks1);
            removeActive(tabMains1);
            $(this).addClass("active");
            $(tabMains1[i]).addClass("active");
        });
    });
 });

 function removeActive(tabs) { 
    for(let i= 0 ; i < tabs.length;i++)
    {
        tabs[i].classList.remove("active");
    }
}