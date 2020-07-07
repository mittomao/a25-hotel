$(function () { 
    const book =$("#bookNow");
    book.on("click",function (e) { 
        e.preventDefault();
        // $('html ,body').animate({scrollTop : $(".main-product").offset().top},1000);
        $('html , body').animate({scrollTop : $(".list-rooms").offset().top - 120},1000)
     });
 })