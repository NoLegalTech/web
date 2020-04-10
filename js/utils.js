const query = (_) => document.querySelector(_);

const onPageLoad = (_) => document.addEventListener('DOMContentLoaded', _);

const scrollTo = (_) => query(_).scrollIntoView({ behavior: 'smooth' });

const element = ($) => ({
    onClick: (_) => {
        query($).addEventListener('click', function (e) {
            e.preventDefault();
            _();
        });
    }
});
