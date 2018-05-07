/*
  var targetLat = "51.517157";
  var targetLong = "-0.127267";
  var targetAddress = targetLat + ',' + targetLong;

  var date = new Date( 'Mon 30 Apr 2018');
  date.setHours(9);

  $(".p-adr").each(function(index) {
    var postcodeElement = this;
    var postcode = $(this).find(".p-postal-code").text().substring(2);

        $.getJSON('http://www.geopostcode.org.uk/api/' + encodeURIComponent($(this).text()) + '.json', {}, function(JsonData) {
            var address = JsonData.wgs84.lat + ',' + JsonData.wgs84.lon;
      			var citymapperUrl = 'https://developer.citymapper.com/api/1/traveltime/?startcoord=' + targetAddress + '&endcoord=' + address + '&time=' + date.toISOString() + '&time_type=arrival&key=45d51edcfaa22fccaaa8a79fbf99dfe6';
            console.log("looking up: " + citymapperUrl);
            $.getJSON(citymapperUrl, {}, function(CityMapperResult) {
              postcodeElement.after(" " + CityMapperResult.travel_time_minutes + " mins ");
            });
//          	.done(function() { console.log('getJSON request succeeded!'); })
//						.fail(function(jqXHR, textStatus, errorThrown) { console.log('getJSON request failed! ' + textStatus); })
//						.always(function() { console.log('getJSON request ended!'); })


        });

  });
  */