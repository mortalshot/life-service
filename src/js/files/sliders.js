/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Lazy, Autoplay, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.hero__slider')) {
		// Создаем слайдер
		new Swiper('.hero__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Lazy],
			observer: true,
			observeParents: true,
			slidesPerView: 1.7,
			spaceBetween: 10,
			autoHeight: false,
			speed: 800,
			watchOverflow: true,

			// Ленивая загрузка
			preloadImages: true,
			lazy: {
				loanOnTransitionStart: true,
				loadPrevNext: true,
			},

			// Брейкпоинты

			breakpoints: {
				450: {
					slidesPerView: 2.5,
					spaceBetween: 15,
				},
				575: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 5,
					spaceBetween: 20,
				},
				1400: {
					slidesPerView: 7,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.reviews__slider')) {
		// Создаем слайдер
		new Swiper('.reviews__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Lazy, Autoplay, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 15,
			autoHeight: false,
			speed: 800,
			watchOverflow: true,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,


			// Ленивая загрузка
			preloadImages: true,
			lazy: {
				loanOnTransitionStart: true,
				loadPrevNext: true,
			},


			// Эффекты
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},


			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			/* // Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			}, */

			// Брейкпоинты

			breakpoints: {
				575: {
					slidesPerView: 1.5,
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.template2__slider')) {
		// Создаем слайдер
		new Swiper('.template2__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Lazy, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 10,
			autoHeight: false,
			speed: 800,
			watchOverflow: true,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,


			// Ленивая загрузка
			preloadImages: true,
			lazy: {
				loanOnTransitionStart: true,
				loadPrevNext: true,
			},


			// Пагинация
			pagination: {
				el: '.template2__slider .swiper-pagination',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			/* // Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			}, */

			// Брейкпоинты

			breakpoints: {
				480: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.template3__slider')) {
		// Создаем слайдер
		new Swiper('.template3__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Lazy, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 10,
			autoHeight: false,
			speed: 800,
			watchOverflow: true,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,


			// Ленивая загрузка
			preloadImages: true,
			lazy: {
				loanOnTransitionStart: true,
				loadPrevNext: true,
			},


			// Пагинация
			pagination: {
				el: '.template3__slider .swiper-pagination',
				clickable: true,
			},
			

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			/* // Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			}, */

			// Брейкпоинты

			breakpoints: {
				480: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});