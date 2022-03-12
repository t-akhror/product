

$(document).ready(function(){

    $(".collapse.show").each(function(){
        $(this).prev('.card-header').find('img').attr("src", "images/minus_circle.png");
    });

    $('.collapse').on('show.bs.collapse',function(){
        $(this).prev('.card-header').find('img').attr("src", "images/minus_circle.png");
    }).on('hide.bs.collapse',function(){
        $(this).prev('.card-header').find('img').attr("src", "images/plus_circle.png");
    })
})

