var scrollpos=window.scrollY,header=document.querySelector("header"),scrollChange=1,add_class_on_scroll=function(){return header.classList.add("bg")},remove_class_on_scroll=function(){return header.classList.remove("bg")};window.addEventListener("scroll",(function(){(scrollpos=window.scrollY)>=scrollChange?add_class_on_scroll():remove_class_on_scroll()}));
//# sourceMappingURL=index.867382ce.js.map
