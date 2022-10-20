
/**Menu**/


const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
 const menuBody = document.querySelector('.menu__body');
 iconMenu.addEventListener('click', function(e){
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
 });
}


/******************************************* */

let tours= [
    {
        type: "Автобусный тур",
        title: "Обзорная по Сочи (из Адлера)",
        duration: "6 часов",
        cost: "618 ₽",
        description: "Приглашаем вас на экскурсию 'Обзорная по Большому Сочи':Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...",
        background: "images/tours/tour1.jpg",
    },
    {
        type: "Конный тур",
        title: "Конные прогулки",
        duration: "1.5 часа",
        cost: "1800 ₽",
        description: "Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых...",
        background: "images/tours/tour2.jpg",
    },
    {
        type: "Квадротур",
        title: "Пасть дракона",
        duration: "2.5 часа",
        cost: "3500 ₽",
        description: "Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или 'Пасть Дракона' (экскурсионное название). Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...",
        background: "images/tours/tour3.jpg",
    },
    {
        type: "Автобусный тур",
        title: "Женский монастырь",
        duration: "4 часa",
        cost: "1000 ₽",
        description: "Троице - Георгиевский женский монастырь расположен в селе Лесное в живописном месте, в котором гармонично сочетаются красота природы и красота архитектуры сотворенная руками человека. Это удивительное место расположено совсем недалеко от Чёрного моря - всего в 20 километрах",
        background: "images/tours/tour1.jpg",
    },

    {
        type: "Квадротур",
        title: "Пасть дракона",
        duration: "2.5 часа",
        cost: "3500 ₽",
        description: "Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или 'Пасть Дракона' (экскурсионное название). Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...",
        background: "images/tours/tour3.jpg",
    },
    {
        type: "Автобусный тур",
        title: "Женский монастырь",
        duration: "4 часa",
        cost: "1000 ₽",
        description: "Троице - Георгиевский женский монастырь расположен в селе Лесное в живописном месте, в котором гармонично сочетаются красота природы и красота архитектуры сотворенная руками человека. Это удивительное место расположено совсем недалеко от Чёрного моря - всего в 20 километрах",
        background: "images/tours/tour2.jpg",
    },

    {
        type: "Квадротур",
        title: "Пасть дракона",
        duration: "2.5 часа",
        cost: "3500 ₽",
        description: "Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или 'Пасть Дракона' (экскурсионное название). Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи...",
        background: "images/tours/tour3.jpg",
    },
    {
        type: "Автобусный тур",
        title: "Обзорная по Сочи (из Адлера)",
        duration: "6 часов",
        cost: "618 ₽",
        description: "Приглашаем вас на экскурсию 'Обзорная по Большому Сочи':Экскурсия начнется с подъёма на гору Большой Ахун - это  высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...",
        background: "images/tours/tour1.jpg",
    },
    {
        type: "Конный тур",
        title: "Конные прогулки",
        duration: "1.5 часа",
        cost: "1800 ₽",
        description: "Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых...",
        background: "images/tours/tour2.jpg",
    },
   
];

let s="";
for(i=0; i<tours.length; i++){

s += `
<div class="tour" style = "background: url(${tours[i].background}) left no-repeat">
    <div class="tour__type">${tours[i].type}</div>
    <div class="tour__title">${tours[i].title}</div>
        <div class="tour__duration">
            <span class="material-icons">
                schedule
            </span>${tours[i].duration}
        </div>
        <div class="tour__cost">
            <span class="material-icons">
                payments
            </span>${tours[i].cost}
        </div>
    
    <div class="tour__description">${tours[i].description}</div>
    <button class="button button_small">Подробнее</button>
</div>
`;
}
toursArr.innerHTML = s;



 /**********************************/

 let reviews= [
    {
        name: "Иван Иванов",
        age: "25 лет",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        avatar: "images/review/avatar2.jpg",
    },

    {
        name: "Петр Петров",
        age: "30 лет",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        avatar: "images/review/avatar1.jpg",
    },

    {
        name: "Петр Петров",
        age: "30 лет",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        avatar: "images/review/avatar2.jpg",
    },

    {
        name: "Петр Петров",
        age: "30 лет",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        avatar: "images/review/avatar1.jpg",
    },

    {
        name: "Владимир Сидоров",
        age: "30 лет",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        avatar: "images/review/avatar2.jpg",
    },

    {
        name: "Петр Петров",
        age: "30 лет",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        avatar: "images/review/avatar1.jpg",
    },
    
    {
        name: "Петр Петров",
        age: "30 лет",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        avatar: "images/review/avatar2.jpg",
    },

   
    
        
];

let r="";
for(j=0; j<reviews.length; j++){

r += `
<div class="review">
<img src="${reviews[j].avatar}" alt="">

<div>
<div class="review__name">${reviews[j].name}, ${reviews[j].age}</div>

<div class="review__text">${reviews[j].text}</div>
 </div>  
</div>
`;
}
reviewsArr.innerHTML = r;




///*************************** */



$('.slider').slick({
    arrows: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1
        }
      }
    ]
  });
   
   


// 

$('.slider2').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.7,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 991.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 428,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1.3,
          }
        }
       
      ]
  });
