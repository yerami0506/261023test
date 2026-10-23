$(".btns>li").click(function(){
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  /*필터링 효과 추가*/
  let a=$(this).attr('data-filter');
  grid.isotope({filter:a})
})

const grid=$(".main>section").isotope({})

Fancybox.bind("[data-fancybox]",{})

if(!sessionStorage.a){
  sessionStorage.a = 1;
  setTimeout(() => location.reload())
}
