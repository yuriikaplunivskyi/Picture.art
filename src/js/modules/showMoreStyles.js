const showMoreStyle = (trigger, styles) => {
    const cards = document.querySelectorAll(styles),
          btn = document.querySelector(trigger);

    cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'hidden-md');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-sm-offset-1');
        });
        //btn.styles.display = 'none';
        btn.remove();
    })
};

export default showMoreStyle;