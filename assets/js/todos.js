// check of specific todo by clicking
$("ul").on("click","li",function(){
    // if li is gray turn it black else turn it gray
   $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){$(this).remove();});
    event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
    if (event.which===13){
        var todoText=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></span></i> "+todoText+"</li>");
    }
})

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});