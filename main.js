<!DOCTYPE html>
<body>
<html>
<script>

$.ajax({
    url : "http://api.wunderground.com/api/ef5a156e62f050d2/conditions/q/OH/Columbus.json",
    dataType : "json",
    success : function(url) {
        var location = url['location']['city'];
        var temp_f = url['current_observation']['temp_f'];
        $(".conditions").html("Current temperature in " + location + " is: " + temp_f+"ºF");
    }
});

</script>
</body>
</html>

