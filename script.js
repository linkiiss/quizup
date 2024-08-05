$(document).ready(function () {
	let isAuth = false;
	 $('.eye-img').click(function() {
            var pwdInput = $('#user-pwd');
            var pwdFieldType = pwdInput.attr('type');
            if (pwdFieldType === 'password') {
                pwdInput.attr('type', 'text');
                $(this).attr('src', 'elems/opened-eye.svg');
            } else {
                pwdInput.attr('type', 'password');
                $(this).attr('src', 'elems/closed-eye.svg');
            }
        });


	$('#watch-more').click(function() {
		$('.adjustable').css('display', 'block');
		$('#watch-more').css('display', 'none');
		
	})
	console.log(window.location.pathname)
	

	if (window.location.pathname === '/D:/%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%B5%20%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/2%20%D0%BA%D1%83%D1%80%D1%81/web/quizup/index.html' && $(window).scrollTop() === 0) {
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: $(window).height() + 200
            }, 500); // время анимации в миллисекундах
        }, 2000); // задержка в две секунды
    }
	
	$('.sign-placeholder').click(function() { 
		$('.sign-window').css('display', 'none');
		$('.sign-successful-container').css('display', 'flex');
		isAuth = true;
	})
	
	if (isAuth == true) {
		$('.to-cabinet-index').text('Личный кабинет');
		
	} else {
		$('.to-cabinet-index').text('Войти');
	}
	
	$('.sign-successful-a1').hover(
	function() {
		$('.button-text1').css('color', '#FFF5DE');
	}, function() {
		$('.button-text1').css('color', '#3B372D');
	})
	$('.sign-successful-a2').hover(
	function() {
		$('.button-text2').css('color', '#FFF5DE');
	}, function() {
		$('.button-text2').css('color', '#3B372D');
	})
	
		
	
	//1
	
	var ussrmovies = {
	name: "Кино СССР",
	descstart: "Этот квиз окунет вас в амосферу советского кино! С <br>помощью кинопоиска мы собрали для вас самые <br>яркие и популярные фильмы. Сыграйте, подтвердите <br>свои знания или же узнайте что-то новое",
    descend: "Все эти, и не только, фильмы можно посмотреть  в <br>хорошем качестве на Кинопоиске! ",
    time: "10",
    img1: "elems/quiz1/quiz-page-img1.png",
    img2: "elems/quiz1/quiz-page-img2.png",
    images: [
        "elems/quiz1/1.jpg",
        "elems/quiz1/2.jpg",
        "elems/quiz1/3.jpg",
        "elems/quiz1/4.jpg",
        "elems/quiz1/5.jpg",
        "elems/quiz1/6.webp",
        "elems/quiz1/7.jpg",
        "elems/quiz1/8.jpg",
        "elems/quiz1/9.jpg",
        "elems/quiz1/10.jpg"
    ],
	   questions: [
       { 
           question: "Какой период показывали в сериале “Бригада”?", 
           answer: "с 1989 по 2000",
           options: ["с 1989 по 2000", "с 2001 по 2010", "с 1976 по 1991", "с 1987 по 1998"]
       },
       { 
           question: "Кем был Данила, по его словам, во время Первой чеченской войны в фильме “Брат”?", 
           answer: "Писарем",
           options: ["Писарем", "Танкистом", "Десантником", "Пограничником"]
       },
       { 
           question: "Вместо кого полетел в Ленинград Евгений Лукашин в фильме “Ирония Судьбы”?", 
           answer: "Вместо Павлика",
           options: ["Вместо Павлика", "Вместо Гриши", "Вместо Толи", "Вместо Димы"]
       },
       { 
           question: "Как лев и тигры выбрались из своих клеток на палубе в фильме “Полосатый рейс”?", 
           answer: "Шимпанзе открыла клетки",
           options: ["Шимпанзе открыла клетки", "Клетки были открыты", "Животные сломали клетки", "Клеток не было"]
       },
       { 
           question: "Где главные герои фильма “Москва слезам не верит” встретились впервые?", 
           answer: "В электричке",
           options: ["В электричке", "В кафе", "В театре", "В автобусе"]
       },
       { 
           question: "В каком городе по сюжету фильма “Операция Ы” происходят истории всех новелл?", 
           answer: "Зареченск",
           options: ["Зареченск", "Красногорск", "Зеленоград", "Кишинев"]
       },
       { 
           question: "Как назывался лайнер, на котором главный герой фильма «Бриллиантовая рука» отправился в туристическую поездку?", 
           answer: "Михаил Светлов",
           options: ["Михаил Светлов", "Аврора", "Победа", "Москва"]
       },
       { 
           question: "Какой шлем похитил бандит Доцент из фильма 'Джентльмены удачи'?", 
           answer: "Шлем Александра Македонского",
           options: ["Шлем Александра Македонского", "Шлем танкиста", "Детский шлем", "Строительный шлем"]
       },
       { 
           question: "Кто из трёх мушкетёров первым оказывается в одном кадре с Д'Артаньяном?", 
           answer: "Арамис",
           options: ["Арамис", "Атос", "Портос", "Никто"]
       },
       { 
           question: "Что происходит в последней сцене фильма “Летят журавли”?", 
           answer: "В небе пролетают журавли",
           options: ["В небе пролетают журавли", "Борис обнимает Веронику", "Вероника уезжает", "Борис уходит домой"]
       }
   ]
};


	
	
	//2
	
	var worldwidemovies = {
    name: "Мировое кино",
    descstart: "В этой игре вы можете подтвердить свои знания о <br>кино мирового уровня. Все ваши любимые фильмы, <br>актеры и режиссеры собраны именно здесь не без <br>помощи Кинопоиска. Заходите и играйте!",
    descend: "Все эти, и не только, фильмы можно посмотреть в <br>хорошем качестве на Кинопоиске!",
    time: "7",
    img1: "elems/quiz2/quiz-page-img1.png",
    img2: "elems/quiz2/quiz-page-img2.png",
    images: [
        "elems/quiz2/1.jpg",
        "elems/quiz2/2.jpg",
        "elems/quiz2/3.jpg",
        "elems/quiz2/4.jpg",
        "elems/quiz2/5.jpg",
        "elems/quiz2/6.jpg",
        "elems/quiz2/7.webp",
        "elems/quiz2/8.webp",
        "elems/quiz2/9.jpg",
        "elems/quiz2/10.jpg"
    ],
    questions: [
        {
            question: "В каком из этих фильмов снималась Энн Хэтэуэй?",
            answer: "8 подруг оушена",
            options: ["8 подруг оушена", "Начало", "Престиж", "Матрица"]
        },
        {
            question: "Как прозвали себя бандиты во второй части фильма \"Один дома\"?",
            answer: "Липкие",
            options: ["Липкие", "Мокрые", "Скользкие", "Сухие"]
        },
        {
            question: "Сколько фаз в киновселенной Марвел?",
            answer: "4",
            options: ["4", "2", "3", "5"]
        },
        {
            question: "При помощи какого инструмента сбежал главный герой в фильме \"Побег из Шоушенка\"?",
            answer: "Геологический молоток",
            options: ["Геологический молоток", "Столовая ложка", "Лом", "Лопата"]
        },
        {
            question: "Какой волшебный предмет использовала Гермиона в фильме \"Гарри Поттер. Узник Азкабана\"?",
            answer: "Маховик Времени",
            options: ["Маховик Времени", "Золотой снитч", "Распределяющая шляпа", "Философский камень"]
        },
        {
            question: "За какой фильм Леонардо ди Каприо получил свой первый Оскар?",
            answer: "Выживший",
            options: ["Выживший", "Волк с Уолл-стрит", "Титаник", "Великий Гэтсби"]
        },
        {
            question: "\"Интерстеллар\", \"Темный рыцарь\", \"Начало\" - какой режиссер снял все эти фильмы?",
            answer: "Кристофер Нолан",
            options: ["Кристофер Нолан", "Мартин Скорсезе", "Мэтью Вон", "Квентин Тарантино"]
        },
        {
            question: "Как звали Барбосу в фильме \"Пираты Карибского моря\"?",
            answer: "Гектор",
            options: ["Гектор", "Дэвид", "Майкл", "Джон"]
        },
        {
            question: "Кем был отец Вилли Вонки в фильме \"Чарли и шоколадная фабрика\"?",
            answer: "Дантист",
            options: ["Дантист", "Банкир", "Пекарь", "Архитектор"]
        },
        {
            question: "Какой из дистриктов занимался сельским хозяйством в фильме \"Голодные игры\"?",
            answer: "11",
            options: ["11", "8", "9", "10"]
        }
    ]
};
	
	
	
	///3
	
	var cartoons = {
	name: "Мультфильмы",
	descstart: "Окунитесь в детство и пройдите квиз о <br>мультфильмах разных поколений собраных <br>кинопоиском. Играя, вы сможете убедиться в своих <br>знаниях о различных мультфильмах или же узнать <br>для себя что-то новое.",
    descend: "Все мультики из этого квиза можно найти на Кинопоиске <br>и посмотреть в хорошем качестве!",
    time: "5",
	img1: "elems/quiz3/quiz-page-img1.png",
	img2: "elems/quiz3/quiz-page-img2.png",
    images: [
        "elems/quiz3/1.jpg",
        "elems/quiz3/2.webp",
        "elems/quiz3/3.jpg",
        "elems/quiz3/4.jpg",
        "elems/quiz3/5.jpeg",
        "elems/quiz3/6.jpg",
        "elems/quiz3/7.jpg",
        "elems/quiz3/8.png",
        "elems/quiz3/9.jpg",
        "elems/quiz3/10.jpg"
    ],
    questions: [
        { 
            question: "Сколько детей было у Шрека?", 
            answer: "3",
            options: ["1", "2", "3", "4"]
        },
        { 
            question: "Кто озвучивал По в Кунг-фу панде в российской адаптации?", 
            answer: "Михаил Галустян",
            options: ["Михаил Галустян", "Сергей Бурунов", "Данила Козловский", "Александр Петров"]
        },
        { 
            question: "В каком городе находился зоопарк из мультика “Мадагаскар 1”?", 
            answer: "Нью-Йорк",
            options: ["Нью-Йорк", "Лас-Вегас", "Москва", "Калифорния"]
        },
        { 
            question: "Как звали дочку Менни и Элли из мультика “Ледниковый период”?", 
            answer: "Персик",
            options: ["Персик", "Авокадо", "Гранат", "Манго"]
        },
        { 
            question: "Как звали одного из главных злодеев мультика “Черепашки ниндзя”?", 
            answer: "Шредер",
            options: ["Шредер", "Сплинтер", "Бибоп", "Рокстеди"]
        },
        { 
            question: "Что было главным сокровищем Красти Краб из мультика Губка Боб?", 
            answer: "Формула крабсбургера",
            options: ["Формула крабсбургера", "Бизнес-план", "Прошлое ресторана", "Деньги мстера Крабса"]
        },
        { 
            question: "В каком городе живут Симпсоны?", 
            answer: "Спрингфилд",
            options: ["Спрингфилд", "Готем-сити", "Метрополис", "Хилл-Велл"]
        },
        { 
            question: "Какая из диснеевских принцесс жила в Шотландии?", 
            answer: "Мерида",
            options: ["Мерида", "Ариэль", "Рапунцель", "Бэль"]
        },
        { 
            question: "Какой марки была машинка Салли из мультика “Тачки”?", 
            answer: "Порше",
            options: ["Порше", "Мерседес", "Шевроле", "Лада"]
        },
        { 
            question: "Любимое занятие Шарика из “Простоквашино”?", 
            answer: "Фотоохота",
            options: ["Фотоохота", "Гулять во дворе", "Смотреть кино", "Пасти корову"]
        }
    ]
};
		
		//4
		
		var music00 = {
    name: "Музыка пред 00х",
    descstart: "Играйте и наслаждайтесь бессмертными <br>композициями всемирного масштаба! Мы собрали для вас интеренсые вопросы по всеми любой музыке и ее авторах! Проверьте себя на знание легенд.",
    descend: "Все эти, и не только, музыкальные композиции можно <br>послушать на Яндекс.Музыке!",
    time: "10",
    img1: "elems/quiz4/quiz-page-img1.png",
    img2: "elems/quiz4/quiz-page-img2.png",
    images: [
        "elems/quiz4/1.jpg",
        "elems/quiz4/2.jpeg",
        "elems/quiz4/3.jpg",
        "elems/quiz4/4.webp",
        "elems/quiz4/5.jpg",
        "elems/quiz4/6.jpg",
        "elems/quiz4/7.jpg",
        "elems/quiz4/8.jpg",
        "elems/quiz4/9.jpg",
        "elems/quiz4/10.jpg"
    ],
    questions: [
        {
            question: "После какого альбома группа Король и Шут начала набирать большую популярность?",
            answer: "Акустический альбом",
            options: ["Камнем по голове", "Продавец кошмаров", "Акустический альбом", "Театр демона"]
        },
        {
            question: "Какое было первое название группы Кино?",
            answer: "Гарин и гиперболоиды",
            options: ["Гарин и гиперболоиды", "Зарезанный одуванчик", "Апокалипсис", "Контора"]
        },
        {
            question: "Какая из песен группы Hi-Fi была перепета и завирусилась в 2021?",
            answer: "Седьмой лепесток",
            options: ["Седьмой лепесток", "На дано", "Беспризорник", "Школа №7"]
        },
        {
            question: "Какая из песен ABBA на данный момент (2024г) является самой популярной?",
            answer: "Money, Money, Money",
            options: ["Dancing Queen", "Gimmi Gimmi; Gimmi!", "Money, Money, Money", "The Winner Takes It All"]
        },
        {
            question: "Какую из этих песен Валерий Меладзе исполняет с Григорием Лепсом?",
            answer: "Обернитесь",
            options: ["Обернитесь", "Параллельные", "Небеса", "Океан и три реки"]
        },
        {
            question: "Какая песня Аллы Пугачевой стала хитом в 1980-х у японской публики?",
            answer: "Миллион алых роз",
            options: ["Миллион алых роз", "Позови меня с собой", "Этот мир", "Арлекино"]
        },
        {
            question: "Кто автор песни Пальма де Майорка?",
            answer: "Михаил Шуфутинский",
            options: ["Сергей Наговицын", "Михаил Шуфутинский", "Михаил Круг", "Бутырка"]
        },
        {
            question: "Какими музыкальными инструментами владеет Мадонна?",
            answer: "Гитара и ударные",
            options: ["Фортепиано и ударные", "Гитара и ударные", "Скрипка и фортепиано", "Гитара и скрипка"]
        },
        {
            question: "Саундтрек какого супергеройского фильма составлен из песен AC/DC?",
            answer: "Железный человек",
            options: ["Мстители. Финал", "Железный человек", "Тор", "Первый мститель"]
        },
        {
            question: "Какая из старых песен Шуры недавно стала популярной в интернете?",
            answer: "Ты не верь слезам",
            options: ["Ты не верь слезам", "Холодная луна", "Твори добро", "Слушай"]
        }
    ]
};

	//5
	
	var cultmusic = {
    name: "Культовая музыка",
    descstart: "Этот квиз окунет вас в мир культовой музыки! С <br>помощью музыкальных знаний мы собрали для вас самые <br>яркие и популярные вопросы. Сыграйте, подтвердите <br>свои знания или же узнайте что-то новое",
    descend: "Все эти, и не только, музыкальные композиции можно <br>послушать на Яндекс.Музыке!",
    time: "10",
    img1: "elems/quiz5/quiz-page-img1.png",
    img2: "elems/quiz5/quiz-page-img2.png",
    images: [
        "elems/quiz5/1.jpg",
        "elems/quiz5/2.jpg",
        "elems/quiz5/3.jpg",
        "elems/quiz5/4.jpg",
        "elems/quiz5/5.png",
        "elems/quiz5/6.webp",
        "elems/quiz5/7.jpg",
        "elems/quiz5/8.png",
        "elems/quiz5/9.jpg",
        "elems/quiz5/10.jpg"
    ],
    questions: [
        {
            question: "Какая песня Queen в 2002 году попала в Книгу рекордов Гиннеса?",
            answer: "Bohemian Rhapsody",
            options: ["Bohemian Rhapsody", "We Will Rock You", "The Show Must Go On", "I Want To Break Free"]
        },
        {
            question: "Из какого альбома Yesterday - самая популярная песня The Beatles?",
            answer: "Help!",
            options: ["Help!", "The Beatles", "Yellow Submarine", "Revolver"]
        },
        {
            question: "Исполняя какую песню, Майкл Джексон впервые сделал «лунную походку»?",
            answer: "Billie Jean",
            options: ["Billie Jean", "Bad", "Thriller", "They Don't Care About Us"]
        },
        {
            question: "Как в США называли Элвиса Пресли?",
            answer: "Король",
            options: ["Король", "Гений", "Ангел", "Легенда"]
        },
        {
            question: "Какая песня Led Zeppelin фигурирует в некоторых популярных картинах кино?",
            answer: "Immigrant song",
            options: ["Immigrant song", "Stairway to Heaven", "Whole Lotta Love", "Rock and Roll"]
        },
        {
            question: "За какую композицию Элтон Джон в 1995 г. получил \"Оскар\" за лучшую песню к фильму \"Король Лев\"?",
            answer: "Can You Feel the Love Tonight",
            options: ["Can You Feel the Love Tonight", "Circle of Live", "Hakuna matata", "I Just Can't Wait to Be King"]
        },
        {
            question: "К какому поджанру альтернативного рока относится творчество \"Нирваны\"?",
            answer: "Гранж",
            options: ["Гранж", "Постгранж", "Инди-рок", "Готик-рок"]
        },
        {
            question: "Откуда слово Gaga в псевдониме Леди ГаГи?",
            answer: "Название песни Radio Ga Ga",
            options: ["Название песни Radio Ga Ga", "Из словаря", "Придумала в детстве", "Подсказал продюссер"]
        },
        {
            question: "Чем прославилась песня Эминема RAP GOD?",
            answer: "Самая быстрая песня в стиле реп",
            options: ["Самая быстрая песня в стиле реп", "Самая медленная песня в стиле реп", "Самая короткая песня Эминема", "Самая длинная песня Эминема"]
        },
        {
            question: "Кто такой Зигги Стардаст в жизни Дэвида Боуи?",
            answer: "Вымышленный персонаж, созданный Боуи",
            options: ["Вымышленный персонаж, созданный Боуи", "Брат", "Сват", "Близкий друг"]
        }
    ]
};

	//6
	
	var modernmusic = {
	name: "Музыка moderna",
    descstart: "Современные музыкальные тренды, композиции и <br>их исполнители.  Сыграйте и откройте <br>для себя что-то новое, или же подтвердите, <br>что вы не отстаете от современности!",
    descend: "Все эти, и не только, музыкальные композиции можно <br>послушать на Яндекс.Музыке!",
    time: "10",
    img1: "elems/quiz6/quiz-page-img1.png",
    img2: "elems/quiz6/quiz-page-img2.png",
    images: [
        "elems/quiz6/1.jpg",
        "elems/quiz6/2.jpg",
        "elems/quiz6/3.jpg",
        "elems/quiz6/4.jpg",
        "elems/quiz6/5.webp",
        "elems/quiz6/6.jpg",
        "elems/quiz6/7.jpg",
        "elems/quiz6/8.webp",
        "elems/quiz6/9.jpg",
        "elems/quiz6/10.jpg"
    ],
    questions: [
        {
            question: "В каких жанрах поёт Noize MC?",
            answer: "Всё перечисленное",
            options: ["Панк-рок", "Альтернативный рэп", "Альтернативный рок", "Всё перечисленное"]
        },
        {
            question: "Какой клип артистов Hajime Records стал самым популярным в русском YouTube?",
            answer: "I Got Love",
            options: ["I Got Love", "Samurai", "Brooklyn", "Yamakasi"]
        },
        {
            question: "Сколько Грэмми выиграла Тейлор Свифт в 2010 году?",
            answer: "4",
            options: ["4", "5", "3", "0"]
        },
        {
            question: "Как назывался один из альбомов Моргенштерна?",
            answer: "Легендарная пыль",
            options: ["Легендарная пыль", "Старая пыль", "Новая пыль", "Гениальная пыль"]
        },
        {
            question: "С кем из артистов у The Weeknd нет фита?",
            answer: "Timbaland",
            options: ["Timbaland", "Lana Del Rey", "Ariana Grande", "Ed Sheeran"]
        },
        {
            question: "Кто поет с Rihanna в ее хите \"Umbrella\"?",
            answer: "Jay-Z",
            options: ["Jay-Z", "Kanye West", "Drake", "Eminem"]
        },
        {
            question: "Какой был первый хит Dua Lipa номер один в Великобритании?",
            answer: "New Rules",
            options: ["New Rules", "Levitating", "Physical", "Don't Start Now"]
        },
        {
            question: "В каком году Билли Айлиш выпустила альбом под названием \"Don't Smile At Me\"",
            answer: "2017",
            options: ["2017", "2016", "2018", "2019"]
        },
        {
            question: "Какая песня группы Дайте танк (!) является самой длинной?",
            answer: "Слова-паразиты",
            options: ["Слова-паразиты", "Маленький", "Искры", "Лучшее"]
        },
        {
            question: "Как называлась школьная группа Гарри Стайлза?",
            answer: "White Eskimo",
            options: ["White Eskimo", "Pink Eskimo", "Red Eskimo", "Black Eskimo"]
        }
    ]
};
	
	
	$("#ussrmovies").on("click", function() {
		var arrayName = $(this).attr("id"); 
		var arrayData = JSON.stringify(ussrmovies); 
		var url = "quiz.html?array=" + encodeURIComponent(arrayData); 
		window.location.href = url; 
	});
	
	$("#worldwidemovies").on("click", function() {
		var arrayName = $(this).attr("id"); 
		var arrayData = JSON.stringify(worldwidemovies); 
		var url = "quiz.html?array=" + encodeURIComponent(arrayData); 
		window.location.href = url; 
	});
	
	$("#cartoons").on("click", function() {
		var arrayName = $(this).attr("id"); 
		var arrayData = JSON.stringify(cartoons); 
		var url = "quiz.html?array=" + encodeURIComponent(arrayData); 
		window.location.href = url; 
	});
	
	$("#music00").on("click", function() {
		var arrayName = $(this).attr("id"); 
		var arrayData = JSON.stringify(music00); 
		var url = "quiz.html?array=" + encodeURIComponent(arrayData); 
		window.location.href = url; 
	});
	
	$("#cultmusic").on("click", function() {
		var arrayName = $(this).attr("id"); 
		var arrayData = JSON.stringify(cultmusic); 
		var url = "quiz.html?array=" + encodeURIComponent(arrayData); 
		window.location.href = url; 
	});
	
	$("#modernmusic").on("click", function() {
		var arrayName = $(this).attr("id"); 
		var arrayData = JSON.stringify(modernmusic); 
		var url = "quiz.html?array=" + encodeURIComponent(arrayData); 
		window.location.href = url; 
	});
	
	
	
	
	
	const urlParams = new URLSearchParams(window.location.search);
    const arrayData = urlParams.get('array');
    
    if (arrayData) {
        const array = JSON.parse(decodeURIComponent(arrayData)); 
        $(".quiz-page-name").text(array.name);
        $(".quiz-page-desc").html(array.descstart);
        $("#quiz-page-exact-time").text(array.time);
        $(".quiz-page-img1").attr("src", array.img1);
        $(".quiz-page-img2").attr("src", array.img2);
		
		$('.quiz-page-play-button').click(function() { 
			$('#quiz-page-entry').css('display', 'none');
			$('#quiz-page-questions-container').css('display', 'flex');
			$('.cross').css('display', 'flex');
		});
		
		let currentQuestionIndex = 0;
        let correctAnswers = 0;

        function updateQuestion(index) {
            $(".quiz-page-questions-img").attr("src", array.images[index]);

            $(".quiz-page-eachquestion-text").text(array.questions[index].question);
		

            let options = shuffle(array.questions[index].options);
            $(".answer-1").text("А. " + options[0]);
            $(".answer-2").text("Б. " + options[1]);
            $(".answer-3").text("В. " + options[2]);
            $(".answer-4").text("Г. " + options[3]);
        }
		
		function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

        updateQuestion(currentQuestionIndex);

        $(".quiz-answer-container").on("click", function() {
            let selectedAnswer = $(this).find("p").text().slice(3);

            if (selectedAnswer === array.questions[currentQuestionIndex].answer) {
                correctAnswers++;
            } else {
				console.log(array.questions[currentQuestionIndex].question, 'верный -', array.questions[currentQuestionIndex].answer);
			}
			correct_answer = array.questions[currentQuestionIndex].answer;
			$(".quiz-answer-container:contains('" + correct_answer + "')").css('background', 'rgba(255, 255, 255, .25)'  );
			setTimeout(function() {
				$(".quiz-answer-container").css('background-color', '');
				currentQuestionIndex++;
            if (currentQuestionIndex < array.questions.length) {
                updateQuestion(currentQuestionIndex);
            } else {
                // Показываем результаты
                $('#quiz-page-questions-container').css('display', 'none');
                $('#quiz-page-end').css('display', 'flex');
                $('#balls-counter').text(correctAnswers + " балла(-ов)");
				$('.quiz-page-end-desc').html(array.descend);
            }
				
			}, 1000);
            
        });
		
	
    }
	
})

