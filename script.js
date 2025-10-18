const tutorsData = [
  {
    image: 'assets/images/PromiseOnyeka.jpg',
    name: 'Promise Onyeka',
    status: 'Ex Tech Titans developer',
    about: 'Former frontend developer at Tech Titans, John creates captivating, intuitive interfaces that set industry standards and delight users worldwide. His passion for innovation drives every project he undertakes.',
  },

  {
    image: 'assets/images/StephenBassey.jpg',
    name: 'Stephen Bassey',
    status: 'Chief developer at freeCodeCamp',
    about: 'An expert MERN stack developer with the zeal of growing beginners to expert developers. He was a senior developer at freeCodeCamp, but he joined Blueprint Coder to pursue his passion for teaching coding.',
  },

  {
    image: 'assets/images/MaryJonathan.jpg',
    name: 'Mary Jonathan',
    status: 'UI/UX Designer',
    about: 'Mary is recognized as one of the world’s top UI/UX designers. She’s known for her passion for creating engaging interfaces, researching trends, and using client feedback to enhance user experience.',
  },

  {
    image: 'assets/images/OluwatoyinAbayomi.jpg',
    name: 'Oluwatoyin Abayomi',
    status: 'CEO of Mindbyte Technologies',
    about: 'A certified full stack developer driven by passion, he possesses exceptional coding abilities. He is also the founder of Mindbyte Academy, a coding school with numerous physical and online students.',
  },

  {
    image: 'assets/images/AlexSmart.jpg',
    name: 'Alex Smart',
    status: 'Professor of Computer Science at Smart Prime University',
    about: 'Dr. Alex, a renowned software developer, possesses strong problem-solving abilities that have earned him numerous awards worldwide. He specializes in backend development and machine learning.',
  },

  {
    image: 'assets/images/EmmanuelJohn.jpg',
    name: 'Emmanuel John',
    status: 'CEO of Blueprint Coder',
    about: 'As CEO and a leading AI developer, he combines visionary leadership with deep technical expertise. Driven by a passion for teaching, he now brings his wealth of experience to Blueprint Coder, inspiring the next generation of innovators.',
  },
];

const courseCards = [
  {
    image: 'assets/icons/frontend.svg',
    title: 'Front-end Development',
    description: 'Master core technologies like HTML, CSS, and JavaScript, and build a portfolio of real-world projects.',
  },

  {
    image: 'assets/icons/backend.svg',
    title: 'Back-end Development',
    description: 'Master the essential back-end technologies by learning to build the server-side logic, manage databases, and create robust APIs with languages like Python, Node.js, and Java.',
  },

  {
    image: 'assets/icons/fullstack.svg',
    title: 'Full-Stack Development',
    description: 'Master both the front-end and back-end by learning to build the complete stack, from user-facing interfaces to server-side logic and databases.',
  },

  {
    image: 'assets/icons/UIUX.svg',
    title: 'UI/UX',
    description: 'Master the art of a full design process, from user research and wireframing to prototyping and high-fidelity mockups, using industry-standard tools like Figma and Sketch.',
  },

  {
    image: 'assets/icons/jsframework.svg',
    title: 'Modern Javascript Framework',
    description: 'Master a modern JavaScript framework by learning to build dynamic, component-based user interfaces and single-page applications with React, Vue or Angular.',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const tutorsContainer = document.getElementById('tutors-container');
  tutorsData.forEach((tutor, index) => {
    const extraTutors = index >= 2 ? 'hidden-tutor' : '';
    const tutorHTML = `
      <section class="tutor-info ${extraTutors}">
        <figure class="tutorimage-container">
         <img src="${tutor.image}" class="tutor-img" alt="${tutor.name}">
        </figure>
        <section class="tutor-details">
          <strong>${tutor.name}</strong>
          <p>${tutor.status}</p>
          <hr class="thin-line">
          <p>${tutor.about}</p>
        </section>
      </section>`;
    tutorsContainer.insertAdjacentHTML('beforeend', tutorHTML);
  });

  const seeMoreBtn = document.createElement('button');
  seeMoreBtn.id = 'seemore-btn';
  seeMoreBtn.innerHTML = 'See More Tutors<i class="fa-solid fa-chevron-down"></i>';
  if (tutorsData.length > 2) {
    tutorsContainer.appendChild(seeMoreBtn);
  }
  seeMoreBtn.addEventListener('click', () => {
    tutorsContainer.classList.toggle('tutors-expanded');

    if (tutorsContainer.classList.contains('tutors-expanded')) {
      seeMoreBtn.innerHTML = 'See Less Tutors<i class="fa-solid fa-chevron-up"></i>';
    } else {
      seeMoreBtn.innerHTML = 'See More Tutors<i class="fa-solid fa-chevron-down"></i>';
    }
  });

  const courseSection = document.getElementById('course-section');
  const courseCardContainer = document.getElementById('course-container');
  courseCards.forEach((card) => {
    const cardHTML = `
      <section class="course-cards">
        <img class="course-img" alt="${card.title}" src="${card.image}">
        <h3>${card.title}</h3>
        <p id="course-description">${card.description}</p>
      </section>`;
    courseCardContainer.innerHTML += cardHTML;
  });
  const signUpBtn = document.createElement('button');
  signUpBtn.id = 'signup-btn';
  signUpBtn.textContent = 'Sign Up to Start';
  courseSection.appendChild(signUpBtn);
});