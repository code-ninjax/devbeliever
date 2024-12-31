    var typed = new Typed('.typewriter', {
        strings: ['Webdeveloper', 'WebDesigner', 'Ui/Ux Designer'],
        typeSpeed: 70,
        backSpeed: 100,
        loop: true
    })

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    let typed2Initialized = false;
    document.addEventListener('scroll', function() {
        const aboutTitle = document.querySelector('.about-title-typewriter');
        if (isInViewport(aboutTitle) && !typed2Initialized) {
            typed2Initialized = true;
            var typed2 = new Typed('.about-title-typewriter', {
                strings: ['Get To Know More','About Me'],
                typeSpeed: 50,
                backSpeed: 50,
                loop: false
            });
        }
    });


    let typed3Initialized = false;
    document.addEventListener('scroll', function() {
        const experienceTitle = document.querySelector('.experience-typewriter');
        if (isInViewport(experienceTitle) && !typed3Initialized) {
            typed3Initialized = true;
            var typed3 = new Typed('.experience-typewriter', {
                strings: ['My Work history', 'Experience(Resume)'],
                typeSpeed: 50,
                backSpeed: 50,
                loop: false
            });
        }
    });

    // this is skill section js 
  function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateProgressBars() {
  document.querySelectorAll('.progress').forEach((progress) => {
    if (isInViewport(progress) && !progress.classList.contains('animated')) {
      const targetWidth = progress.getAttribute('data-width');
      progress.style.width = targetWidth;
      progress.classList.add('animated'); // Add a flag to prevent re-animation
    }
  });
}

// Attach scroll listener
window.addEventListener('scroll', animateProgressBars);

// Trigger animation check on page load
window.addEventListener('load', animateProgressBars);




// this is the navbar code 
   const navbar = document.getElementById('navbar');
   const hamburger = document.getElementById('hamburger');
   const sidebar = document.getElementById('sidebar');
   const closeBtn = document.getElementById('close-btn');
   let lastScrollY = window.scrollY;

   window.addEventListener('scroll', () => {
       if (window.scrollY > lastScrollY) {
           // Scrolling down
           navbar.classList.add('sticky');
       } else {
           // Scrolling up
           navbar.classList.remove('sticky');
       }
       lastScrollY = window.scrollY;
   });

   hamburger.addEventListener('click', () => {
       sidebar.classList.toggle('open'); // Toggle the sidebar
   });

   closeBtn.addEventListener('click', () => {
       sidebar.classList.remove('open'); // Close the sidebar
   });


