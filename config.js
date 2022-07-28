const speakers = [
  {
    image: 'https://randomuser.me/api/portraits/men/19.jpg',
    name: 'John Doe',
    desig:
      'Senior software engineer at mica finserve Africa with 10 yesrs experience in the field',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.',
  },
  {
    image: 'https://randomuser.me/api/portraits/women/19.jpg',
    name: 'Jane Doe',
    desig:
      'IT consultant at MOICT finserve Africa with 10 yesrs experience in the field',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/16.jpg',
    name: 'Kevin Smith',
    desig:
      'Head of system testing at mica Amaco with 10 yesrs experience in the field',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.',
  },
  {
    image: 'https://randomuser.me/api/portraits/women/16.jpg',
    name: 'Mercy Smith',
    desig:
      'Head of strategies at mica finserve Africa with 10 yesrs experience in the field',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    name: 'Bill Clinton',
    desig:
      'Senior software engineer at Jininue Africa with 10 yesrs experience in the field',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.',
  },
  {
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: 'Hillary Clinton',
    desig:
      'System security officer at mica finserve Africa with 10 yesrs experience in the field',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.',
  },
];
function showSpeakers(speaker, n) {
  let list = '';
  for (let i = 0; i < n; i += 1) {
    list += ` <div class="col-md-12 col-lg-6">
    <div class="card bg-light">
      <div class="card-body d-flex featured-speaker-b">
        <img
          src="${speaker[i].image}"
          class=" mb-3"
          alt="speaker-Image"
        />
        <div class="mx-3">
        <h3 class="card-title mb-3">${speaker[i].name}</h3>
        <div class="d-inline-block">
        <p class="designation">${speaker[i].desig}</p>
         <hr class="h-speakers">
        </div>
        <p class="align-left">
          ${speaker[i].description}
        </p>
        </div>
       </div>
    </div>
  </div> `;

    document.querySelector('.row.g-2.speakers').innerHTML = list;
  }
}
showSpeakers(speakers, 2);

const moreBtn = document.body.querySelector('.showmore-btn');
moreBtn.addEventListener('click', () => {
  showSpeakers(speakers, speakers.length);
  moreBtn.classList.add('d-none');
});
