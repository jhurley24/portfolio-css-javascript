<script>
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = '☀️ Good morning.';
    else if (hrs >= 12 && hrs <= 16)
        greet = '🌤️ Good afternoon.';
    else if (hrs >= 16 && hrs <= 24)
        greet = '🌙 Good evening.';

    document.getElementById('greeting').innerHTML =
        '<h2>' + greet + " I'm John.</h2>";
</script>

<script type="text/javascript" src="//w.24timezones.com/l.js" async></script>