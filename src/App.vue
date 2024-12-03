<script setup>
import LocomotiveScroll from 'locomotive-scroll';
import { onMounted } from 'vue';
import Home from './components/Home.vue';
import Cursor from './functions/cursor';

onMounted(() => {
  // Initialize custom cursor
  const cursor = new Cursor(document.querySelector('.cursor'));

// Mouse effects on all links and others
[...document.querySelectorAll('button,.gallery__item-img,.gallery__item-number')].forEach(link => {
    link.addEventListener('mouseenter', () => cursor.enter());
    link.addEventListener('mouseleave', () => cursor.leave());
});
})

// onMounted(() => {
//   const lscroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     direction: 'horizontal'
// });

// // let's scale the images when scrolling.
// lscroll.on('scroll', (obj) => {
//     for (const key of Object.keys(obj.currentElements)) {
//         if ( obj.currentElements[key].el.classList.contains('gallery__item-imginner') ) {
//             let progress = obj.currentElements[key].progress;
//             const scaleVal = progress < 0.5 ? clamp(map(progress,0,0.5,0.2,1),0.2,1) : clamp(map(progress,0.5,1,1,0.2),0.2,1);
//             obj.currentElements[key].el.parentNode.style.transform = `scale(${scaleVal})`
//         }
//     }
// });
// lscroll.update();

// })

</script>

<template>
  <Home />
  <svg class="cursor" width="20" height="20" viewBox="0 0 20 20">
			<circle class="cursor__inner" cx="10" cy="10" r="5"/>
		</svg>
</template>

