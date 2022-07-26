const speakers = [
    {
        image: "https://randomuser.me/api/portraits/men/19.jpg",
        name: "John Doe",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda accusamus nobis sed cupiditate iusto? Quibusdam."
    },
    {
        image: "https://randomuser.me/api/portraits/women/19.jpg",
        name: "Jane Doe",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda accusamus nobis sed cupiditate iusto? Quibusdam."
    },
    {
        image: "https://randomuser.me/api/portraits/men/16.jpg",
        name: "Kevin Smith",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda accusamus nobis sed cupiditate iusto? Quibusdam."
    },
    {
        image: "https://randomuser.me/api/portraits/women/16.jpg",
        name: "Mercy Smith",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda accusamus nobis sed cupiditate iusto? Quibusdam."
    },
    {
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        name: "Bill Clinton",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda accusamus nobis sed cupiditate iusto? Quibusdam."
    },
    {
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        name: "Hillary Clinton",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Assumenda accusamus nobis sed cupiditate iusto? Quibusdam."
    },

]
  function showSpeakers (speaker) {
    let list="";
    for (let i=0; i<speaker.length; i++){
    list +=` <div class="col-md-12 col-lg-6">
    <div class="card bg-light">
      <div class="card-body d-flex">
        <img
          src="${speaker[i].image}"
          class=" mb-3"
          alt=""
        />
        <div class="mx-3">
        <h3 class="card-title mb-3">${speaker[i].name}</h3>
        <p class="card-text">
          ${speaker[i].description}
        </p>
        </div>
       </div>
    </div>
  </div> `
  document.querySelector('.row.g-2.speakers').innerHTML=list;
  }
}
showSpeakers(speakers);
