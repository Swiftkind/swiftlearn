$(function () {
    // catch event of clicking the bookmark icon
    $(document)
        .on('click', '.bookmark-event-icon-o', function (e) {
            e.preventDefault();

            var t = $(this),
                url = t.parent('a.bookmark-link').attr('href');

            $.get(url).done(function(data){
                if (typeof data !== 'undefined') {
                    t.addClass('fa-bookmark').removeClass('fa-bookmark-o');
                    t.parent('a.bookmark-link').attr('href', data.status_link);
                }
            });

        })
        .on('click', '.bookmark-event-icon', function (e) {
            e.preventDefault();

            var t = $(this),
                url = t.parent('a.bookmark-link').attr('href');

            $.get(url).done(function(data){
                if (typeof data !== 'undefined') {
                    t.addClass('fa-bookmark-o').removeClass('fa-bookmark');
                    t.parent('a.bookmark-link').attr('href', data.status_link);
                }
            });
        });
});
