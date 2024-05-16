let firstpost = document.querySelector(".post"); 
let postsBox = document.getElementById("postsBox") 



let mass = [
    {
        "id": 1,
        "ava": "adina.jpg",
        "user": "Adina",
        "post": "fizmat.jpeg",
        "likes": 3899,
        "text": "Обучаясь в стенах общеобразовательной школы-гимназии №51 в шестом классе, я стала задумываться кем я хочу стать, и учитывая мое трепетное отношение к математике, выбор пал на РФМШ."
    },
    {
        "id": 2,
        "ava": "alan.jpg",
        "user": "Alan",
        "post": "dog.jpg",
        "likes": 123,
        "text": "С древних времен собака живет рядом с человеком, он наш друг и помощник. Это первое животное, которое приручил древний человек. Он делилась с собакой едой, а та помогала ему на охоте и охраняла его и его жилье. С тех самых пор продолжается верная дружба между ними..."
    },
    {
        "id": 3,
        "ava": "lika.png",
        "user": "Lika",
        "post": "italy.jpg",
        "likes": 12345,
        "text": "It’s fair to say that I’ve visited Italy more than any other country in the world and I’ve picked up a few travel tips along the way. I know that many of you will be visiting the Prosecco region of Italy"
    },
    {
        "id": 4,
        "ava": "marina.jpg",
        "user": "Marina",
        "post": "breakfast.jpg",
        "likes": 987,
        "text": "The first waffle recipe we want to show you is an easy recipe with buttermilk. This makes the waffles taste super light and with some fresh fruit they taste truly delicious."
    },
    {
        "id": 5,
        "ava": "max.jpg",
        "user": "Max",
        "post": "baiterek.jpg",
        "likes": 13,
        "text": "Байтерек символизирует обновлённое государство, сумевшее сохранить свои корни, где родился великий султан Бейбарс, где жители всегда почитали родной язык казакша. "
    },
    {
        "id": 6,
        "ava": "irina.jpg",
        "user": "Irina",
        "post": "lake.jpg",
        "likes": 4498,
        "text": "Хочу поведать о санатории «Рахмановские ключи» в Катон-Карагайском районе Восточного Казахстана. Санаторий расположен недалеко от горы Белуха, наивысшей точки Горного Алтая. Прекрасная первозданная природа, сверкающие белизной горные вершины..."
    }
]
 


for(let i = 0; i < 17; i++){ 
    for(let j = 0; j < 6; j++){
        newpost = firstpost.cloneNode(true); 

        let ava = document.querySelector(".ava")
        let user = document.querySelector(".user")
        let post = document.querySelector(".img")
        let likes = document.querySelector(".counter")
        let text = document.querySelector(".text")
        
        ava.src = mass[j].ava
        user.innerHTML = mass[j].user
        post.src = mass[j].post
        likes.innerHTML = mass[j].likes
        text.innerHTML = mass[j].text

        postsBox.appendChild(newpost)



        let addCommentButton = document.querySelector(".add")
        addCommentButton.addEventListener('click', function() {
            let commentInput = document.querySelector(".comment")
            let commentText = commentInput.value.trim();
            
            if (commentText !== '') {
               let commentsDiv = document.querySelector(".comments");
               commentsDiv.style.border = "1px solid #112731"
               commentsDiv.style.borderRadius = "10%"
               commentsDiv.style.marginBottom = "25px"
               commentsDiv.style.padding = "10px"
               let by = document.createElement("h2")
               by.innerText = "By: You"
               commentsDiv.appendChild(by);
               let newComment = document.createElement('h3');
               newComment.textContent = commentText;
               commentsDiv.appendChild(newComment);
               
               commentInput.value = '';
            }
         });


        // let likeBtn = document.querySelector("#like")
        // likeBtn.addEventListener('click', function(){
        //     let currentCount = parseInt(likes.innerText);
        //     likes.innerText = currentCount + 1;
        // })
        function addLikes(){
            let currentCount = parseInt(likes.innerText);
            likes.innerText = currentCount + 1;
        }

        
    }
}
