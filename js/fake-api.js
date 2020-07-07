
const data = [
    {
        id:1,
        title : "KHÁCH SẠN TẠI ĐÀ NẴNG",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt omnis cum nemo sapiente modi...",
        image:"card2.jpg",
    },
    {
        id:2,
        title : "KHÁCH SẠN TẠI HÀ NỘI",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt omnis cum nemo sapiente modi...",
        image:"card2.jpg",
    },
    {
        id:3,
        title : "KHÁCH SẠN TẠI HẢI PHÒNG",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt omnis cum nemo sapiente modi...",
        image:"card2.jpg",
    },
    {
        id:4,
        title : "KHÁCH SẠN TẠI THÁI BÌNH",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt omnis cum nemo sapiente modi...",
        image:"card2.jpg",
    },
    {
        id:5,
        title : "KHÁCH SẠN TẠI HUẾ",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt omnis cum nemo sapiente modi...",
        image:"card2.jpg",
    },
    {
        id:6,
        title : "KHÁCH SẠN TẠI PHÚ QUỐC",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt omnis cum nemo sapiente modi...",
        image:"card2.jpg",
    },
    {
        id:7,
        title : "KHÁCH SẠN TẠI ĐỒNG NAI",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt omnis cum nemo sapiente modi...",
        image:"card2.jpg",
    },
    {
        id:8,
        title : "KHÁCH SẠN TẠI KHÁNH HÒA",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt omnis cum nemo sapiente modi...",
        image:"card2.jpg",
    },
    {
        id:9,
        title : "KHÁCH SẠN TẠI HỒ CHÍ MINH",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa deserunt omnis cum nemo sapiente modi...",
        image:"card2.jpg",
    }
];
$(function () { 
    const listHotels  = $("#listHotels");
    listHotels.html(showData(data));
    const wrapCards  = $(".wrapCard");
    let start = 0;
    let end = 3;
    let scroll = 0;
    [...sliceArr(data,start,end)].forEach((item,i)=>{
        $(wrapCards[i]).removeClass("hide");
    });
    $(".button_ok").on("click",function (e){
        e.preventDefault();
        scroll+=$(wrapCards[0]).height();
        $('html ,body').animate({scrollTop : listHotels.offset().top + scroll},500);
        end = end + 3;
        [...sliceArr(data,start,end)].forEach((item,i)=>{
            $(wrapCards[i]).removeClass("hide");
            $(wrapCards[i]).addClass("show");
            
        });
        if(end>=data.length){
            $(this).css({
                "display":"none"
            })
        }
        
    });

});

function showData(data) { 
    return data.reduce((str,item)=>{
        return str + `<div class="col col-12 col-md-6 col-lg-4">
                        <div class="wrapCard hide">
                            <div class="card_img">
                                <img src="./../img/index/${item.image}" alt="Khach san MIA">
                                <h3 class="card_title bg_1"><a href="#">${item.title}</a></h3>
                            </div>
                            <div class="card_body border_lime">
                            <p class="line line-2">${item.content}.</p>
                            <a href="hotel-child.html" class="btn-geranal btn_radius">Xem Thêm</a>
                            </div>
                </div>
        </div>`;
    },"");
};

function sliceArr(arr,start,end){
    return arr.slice(start,end);
}
