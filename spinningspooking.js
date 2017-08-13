<script type="text/javascript">
$(document).ready(function()
{
    $("think").hover(
        function()
        {
            $(this).attr("src", "question.gif");
        },
        function()
        {
            $(this).attr("src", "questionstill.png");
        });
});
