<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = ref();

const getImages = async () => {
  const url = "https://api.unsplash.com/photos/?client_id=gX7jXIs13WPuculHhh9ILr4w3bXdMpAalFL0QQhrCaw&page=1&per_page=20"
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    images.value = json;
    console.log(images.value.length)
  } catch (error) {
    console.error(error.message);
  }
}

const background = (item) => {
  // document.querySelector(".main").setAttribute('style', `background-image: url(${item})`);
  document.querySelector(".main").style.backgroundImage = `url(${item})`;
}

const imgArr = ref([
  {
    img: "https://images.unsplash.com/photo-1719937206589-d13b6b008196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MXwxfGFsbHwxfHx8fHx8fHwxNzMzMTYwNDM0fA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1732919258508-3fd53a8007b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHwyfHx8fHx8fHwxNzMzMTYwNDM0fA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1733028724656-b456573528ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHw1fHx8fHx8fHwxNzMzMTYwNDM0fA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1732763045205-3fbe320e642f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHw0fHx8fHx8fHwxNzMzMTYwNDM0fA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1733028724656-b456573528ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHw1fHx8fHx8fHwxNzMzMTYwNDM0fA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1733031510035-3fda1ac87b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHw2fHx8fHx8fHwxNzMzMTczOTU2fA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1732980763819-241e8e5c2917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHw3fHx8fHx8fHwxNzMzMTczOTU2fA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1733041449219-deacc2a0e898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHw4fHx8fHx8fHwxNzMzMTczOTU2fA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1733036432312-be0c9295b745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHw5fHx8fHx8fHwxNzMzMTczOTU2fA&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1732888169391-9001089d6342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHwxMHx8fHx8fHx8MTczMzE3Mzk1Nnw&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1732980512600-5ebc0d22fa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHwxM3x8fHx8fHx8MTczMzE3Mzk1Nnw&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1712817616366-00edffdb0e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHwxNHx8fHx8fHx8MTczMzE3Mzk1Nnw&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1733124405677-04355df59c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHwxNXx8fHx8fHx8MTczMzE3Mzk1Nnw&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1733108906414-fde4a7596456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHwxNnx8fHx8fHx8MTczMzE3Mzk1Nnw&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1733077151860-010be218a47e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHwxN3x8fHx8fHx8MTczMzE3Mzk1Nnw&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1733065525789-fa815b071bdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHwxOHx8fHx8fHx8MTczMzE3Mzk1Nnw&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1733078868229-fac69ef3afad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHwxOXx8fHx8fHx8MTczMzE3Mzk1Nnw&ixlib=rb-4.0.3&q=80&w=1080"
  },
  {
    img: "https://images.unsplash.com/photo-1733130778428-fd82429af975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODIxNjZ8MHwxfGFsbHwyMHx8fHx8fHx8MTczMzE3Mzk1Nnw&ixlib=rb-4.0.3&q=80&w=1080"
  },
])

onMounted(() => {
	let iteration = 0; // gets iterated when we scroll all the way to the end or start and wraps around - allows us to smoothly continue the playhead scrubbing in the correct direction.

const spacing = 0.1,    // spacing of the cards (stagger)
  snap = gsap.utils.snap(spacing), // we'll use this to snap the playhead on the seamlessLoop
  cards = gsap.utils.toArray('.cards img'),
  seamlessLoop = buildSeamlessLoop(cards, spacing),
  scrub = gsap.to(seamlessLoop, { // we reuse this tween to smoothly scrub the playhead on the seamlessLoop
    totalTime: 0,
    duration: 0.5,
    ease: "power3",
    paused: true
  }),
  trigger = ScrollTrigger.create({
    start: 0,
    onUpdate(self) {
      if (self.progress === 1 && self.direction > 0 && !self.wrapping) {
        wrapForward(self);
      } else if (self.progress < 1e-5 && self.direction < 0 && !self.wrapping) {
        wrapBackward(self);
      } else {
        scrub.vars.totalTime = snap((iteration + self.progress) * seamlessLoop.duration());
        scrub.invalidate().restart(); // to improve performance, we just invalidate and restart the same tween. No need for overwrites or creating a new tween on each update.
        self.wrapping = false;
      }
    },
    end: "+=3000",
    pin: ".main"
  });

function wrapForward(trigger) { // when the ScrollTrigger reaches the end, loop back to the beginning seamlessly
  iteration++;
  trigger.wrapping = true;
  trigger.scroll(trigger.start + 1);
}

function wrapBackward(trigger) { // when the ScrollTrigger reaches the start again (in reverse), loop back to the end seamlessly
  iteration--;
  if (iteration < 0) { // to keep the playhead from stopping at the beginning, we jump ahead 10 iterations
    iteration = 9;
    seamlessLoop.totalTime(seamlessLoop.totalTime() + seamlessLoop.duration() * 10);
    scrub.pause(); // otherwise it may update the totalTime right before the trigger updates, making the starting value different than what we just set above. 
  }
  trigger.wrapping = true;
  trigger.scroll(trigger.end - 1);
}

function scrubTo(totalTime) { // moves the scroll position to the place that corresponds to the totalTime value of the seamlessLoop, and wraps if necessary.
  let progress = (totalTime - seamlessLoop.duration() * iteration) / seamlessLoop.duration();
  if (progress > 1) {
    wrapForward(trigger);
  } else if (progress < 0) {
    wrapBackward(trigger);
  } else {
    trigger.scroll(trigger.start + progress * (trigger.end - trigger.start));
  }
}

document.querySelector(".next").addEventListener("click", () => scrubTo(scrub.vars.totalTime + spacing));
document.querySelector(".prev").addEventListener("click", () => scrubTo(scrub.vars.totalTime - spacing));




function buildSeamlessLoop(items, spacing) {
  let overlap = Math.ceil(1 / spacing), // number of EXTRA animations on either side of the start/end to accommodate the seamless looping
    startTime = items.length * spacing + 0.5, // the time on the rawSequence at which we'll start the seamless loop
    loopTime = (items.length + overlap) * spacing + 1, // the spot at the end where we loop back to the startTime 
    rawSequence = gsap.timeline({paused: true}), // this is where all the "real" animations live
    seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
      paused: true,
      repeat: -1, // to accommodate infinite scrolling/looping
      onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
        this._time === this._dur && (this._tTime += this._dur - 0.01);
      }
    }),
    l = items.length + overlap * 2,
    time = 0,
    i, index, item;

  // set initial state of items
  gsap.set(items, {xPercent: 400, opacity: 0, scale: 0});

  // now loop through and create all the animations in a staggered fashion. Remember, we must create EXTRA animations at the end to accommodate the seamless looping.
  for (i = 0; i < l; i++) {
    index = i % items.length;
    item = items[index];
    time = i * spacing;
    rawSequence.fromTo(item, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false}, time)
               .fromTo(item, {xPercent: 400}, {xPercent: -400, duration: 1, ease: "none", immediateRender: false}, time);
    i <= items.length && seamlessLoop.add("label" + i, time); // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
  }
  
  // here's where we set up the scrubbing of the playhead to make it appear seamless. 
  rawSequence.time(startTime);
  seamlessLoop.to(rawSequence, {
    time: loopTime,
    duration: loopTime - startTime,
    ease: "none"
  }).fromTo(rawSequence, {time: overlap * spacing + 1}, {
    time: startTime,
    duration: startTime - (overlap * spacing + 1),
    immediateRender: false,
    ease: "none"
  });
  return seamlessLoop;
}

function getCenterImage() {
  const cards = gsap.utils.toArray('.cards img');
  // Find the image with the most prominent scale or opacity
  return cards.find(img => {
    const scale = gsap.getProperty(img, 'scale');
    const opacity = gsap.getProperty(img, 'opacity');
    return scale > 0.5 && opacity > 0.5;
  });
}

// You can call this function to get the center image
const centerImage = getCenterImage();
if (centerImage) {
  background(centerImage.src);
}
// get images
getImages();
})

</script>

<template>
 <section class="main">
  <!-- <nav>
    <button>niles.</button>
  </nav> -->
		<div class="cards">
        <img v-for="item in imgArr" :key="item.id" :src="item.img" @mouseover="background(item.img)" alt="" width="544" height="605">
         <!-- <li>1</li> -->
		</div>
	<div class="actions">
    <button class="prev">Prev</button>
    <button class="next">Next</button>
  </div>
<div class="drag-proxy"></div>
 </section>
</template>

<style lang="scss" scoped>
.main {
	position: absolute;
  width: 100%;
  height: 100vh;
  background-size: cover;
  backdrop-filter: blur(30px);
  // filter: blur(10px);
  nav {
    padding: 1.5rem 3%;
  }
  button {
    height: 32px;
    width: 80px;
    // padding: 1rem;
    border: 1px solid $black;
    border-radius: 15px;
    text-align: center;
    font-size: 2rem;
    color: $black;
    font-family: "cabinet-grotest", sans-serif;
    font-weight: 400;
    line-height: 120%;
    background-color: transparent;
  }

.cards {
  position: absolute;
  width: 34rem;
  height: 38rem;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cards li {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 34rem;
  height: 38rem;
  text-align: center;
  line-height: 18rem;
  font-size: 2rem;
  font-family: sans-serif;
  background-color: #9d7cce;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.8rem;
}

.cards img {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 34rem;
  height: 38rem;
  text-align: center;
  line-height: 18rem;
  font-size: 2rem;
  font-family: sans-serif;
  // background-color: #9d7cce;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.8rem;
}

// .cards li img {
//   width: 34rem;
//   height: 38rem;
//   position: absolute;
//   top: 0;
//   left: 0;
// }

.actions {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
}
}
</style>
