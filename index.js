// Function to create the portfolio
function createPortfolio() {
  // Create the header
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  h1.textContent = 'My Portfolio';
  const p = document.createElement('p');
  p.textContent = 'Welcome to my personal portfolio';
  header.appendChild(h1);
  header.appendChild(p);


  // Create the section
  const section = document.createElement('section');


  // Create the about me card
  const aboutMeCard = createCard('About Me', [
    'Hello! My name is <strong>Nithyasri</strong>. I am studying <strong>2nd B.Sc Information Technology</strong>. I am interested in web development and technology.',
  ]);


  // Create the education card
  const educationCard = createCard('Education', [
    'B.Sc Information Technology – 2nd Year',
    'Higher Secondary – Completed',
  ], true);


  // Create the skills card
  const skillsCard = createCard('Skills', [
    'HTML & CSS',
    'JavaScript Basics',
    'Problem Solving',
  ], true);


  // Add the cards to the section
  section.appendChild(aboutMeCard);
  section.appendChild(educationCard);
  section.appendChild(skillsCard);


  // Create the footer
  const footer = document.createElement('footer');
  const footerP = document.createElement('p');
  footerP.innerHTML = '&copy; 2025 Nithyas in Nithyasri | Portfolio';
  footer.appendChild(footerP);


  // Add the header, section, and footer to the body
  document.body.appendChild(header);
  document.body.appendChild(section);
  document.body.appendChild(footer);
}


// Function to create a card
function createCard(title, content, isList = false) {
  const card = document.createElement('div');
  card.className = 'card';


  const h2 = document.createElement('h2');
  h2.textContent = title;
  card.appendChild(h2);


  if (isList) {
    const ul = document.createElement('ul');
    content.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    card.appendChild(ul);
  } else {
    content.forEach(item => {
      const p = document.createElement('p');
      p.innerHTML = item;
      card.appendChild(p);
    });
  }


  return card;
}


// Call the function to create the portfolio
createPortfolio();