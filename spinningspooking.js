$(document).ready(function()
{
    $("#think").hover(
        function()
        {
            $(this).attr("src", "images/question.gif");
        },
        function()
        {
            $(this).attr("src", "images/questionstill.png");
        },
            $('<img />',{ src: 'images/question.gif'});
    );
});
