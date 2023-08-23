import { getResource } from "../services/requests";

const showMoreStyle = (trigger, styles) => {
    const cards = document.querySelectorAll(styles),
          btn = document.querySelector(trigger);

    /* cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'hidden-md');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-sm-offset-1');
        });
        //btn.styles.display = 'none';
        btn.remove();
    }); */

    btn.addEventListener('click', () => {
        getResource('http://localhost:3000/styles')
            .then(res => console.log(res));
    })

    function createCards() {
        response.forEach(item => {
            let card = document.createElement('div');
        })
    }
                {/* <div class="col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1">
					<div class=styles-block>
						<img src=assets/img/styles-1.jpg alt>
						<h4>Маслом</h4>
						<a href="#">Подробнее</a>
				</div> */}
};

export default showMoreStyle;