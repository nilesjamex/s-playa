<script setup>
import LocomotiveScroll from 'locomotive-scroll';
import { onMounted } from 'vue';
import Home from './components/Home.vue';
import Cursor from './functions/cursor';

onMounted(() => {
  const container = document.querySelector('[data-scroll-container]');
  const gallery = document.querySelector('.gallery')
const items = Array.from(container.querySelectorAll('.gallery__item'));
let totalWidth = 0;
let itemsAppended = 0;

// Clone items
const clonedItems = [...items];
console.log(clonedItems)

// Calculate total width
items.forEach(item => {
 totalWidth += item.offsetWidth;
});
const lscroll = new LocomotiveScroll({
  el: container,
  smooth: true,
  direction: 'horizontal'
});

function appendItems() {
  const fragment = document.createDocumentFragment();
  clonedItems.forEach(item => {
    const clone = item.cloneNode(true);
    fragment.appendChild(clone);
  });
  container.appendChild(fragment);
  itemsAppended++;
  lscroll.update();
}

lscroll.on('scroll', (obj) => {
  const scrollRight = obj.scroll.x + container.clientWidth;
  const scrollPercentage = scrollRight / (totalWidth * (itemsAppended + 1));

  // Append items when approaching the end
  if (scrollPercentage > 0.75) { // Limit appends to prevent excessive growth
    appendItems();
  }

  // Reset scroll position when reaching the end of original content
  if (obj.scroll.x >= totalWidth * itemsAppended) {
    lscroll.scrollTo(obj.scroll.x % totalWidth, { duration: 0, disableLerp: true });
  }

  // Scale images
  for (const key of Object.keys(obj.currentElements)) {
    if (obj.currentElements[key].el.classList.contains('gallery__item-imginner')) {
      let progress = obj.currentElements[key].progress;
      const scaleVal = progress < 0.5 ? 
        clamp(map(progress, 0, 0.5, 0.2, 1), 0.2, 1) : 
        clamp(map(progress, 0.5, 1, 1, 0.2), 0.2, 1);
      obj.currentElements[key].el.parentNode.style.transform = `scale(${scaleVal})`;
    }
  }
});

// Helper functions
const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;
const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;

// Initial append
appendItems();

lscroll.update();

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

