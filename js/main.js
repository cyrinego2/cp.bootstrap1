var txt=document.getElementById("myText");
function gras(){
    txt.style.fontWeight="bold"
}
function italic(){
    txt.style.fontStyle="italic"
}
function underline(){
    txt.style.textDecoration="underline"
}
function taille(){
    txt.style.fontSize=document.getElementById("size").value
}
function police(){
    txt.style.fontFamily=document.getElementById("police").value
}
$(".viewmore button").css('opacity',0);

$('.viewmore').hover(function(){
$(this).css("opacity",0.7);
$(this).find("button").css('opacity',1);
},function(){
    $(this).css("opacity",1);
$(this).find("button").css('opacity',0);


})