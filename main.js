const data = [
    {
        id: "1",
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        name: "Bill Anderson",
        position: "The Boss",
        description: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actuallyseitan.VHS farm- to - table schlitz, edison bulb pop - up 3 wolf moon tote bag street art shabby chic."
    },
    {
        id: "2",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        name: "Susan Smith",
        position: "WEB DEVELOPER",
        description: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: "3",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        name: "Anna Johnson",
        position: "WEB DESIGNER",
        description: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    }
]
const content_element = document.querySelector("#content")
const btn_back = document.querySelector("#btn-back")
const btn_next = document.querySelector("#btn-next")
const btn_random = document.querySelector("#btn-random")

btn_random.addEventListener("click", function () {
    random = Math.floor(Math.random() * data.length)+1;
    console.log(random);
    random_item = data.find(element => element.id == random);
    render(random_item)
  });

btn_back.addEventListener("click", function() {
    current_key = document.querySelector("#key").value;
    prev_key = (current_key == 1) ? data.length : --current_key;
    prev_item = data.find(element => element.id == prev_key);
    render(prev_item)
});

btn_next.addEventListener("click",function() {
    current_key = document.querySelector("#key").value;
    next_key = (current_key == data.length) ? 1 : ++current_key;
    next_item = data.find(element => element.id == next_key);
    render(next_item)
});

const render = (item) => {
    let html = `
        <input type="hidden" id="key" name="key" value="${item.id}">
        <div class="image">
            <img src="${item.image}" alt="">
        </div>
        <div class="infor">
            <div class="content">
                <h4>${item.name}</h4>
                <h5  class="position">${item.position}</h5>
                <p>E${item.description}
                </p>
            </div>
        </div>
    `;
    content_element.innerHTML = html;
}