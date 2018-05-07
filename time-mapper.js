$(function () {
    console.log("hello");

    const targetLat = "51.517157";
    const targetLong = "-0.127267";
    const targetAddress = targetLat + ',' + targetLong;

    const date = new Date('Mon 30 Apr 2018');
    date.setHours(9);
    $(".hotel__distance-postcode").each(function (index) {
        let postcodeElement = this;
        setTimeout(
            function () {
                fetch('http://www.geopostcode.org.uk/api/' + encodeURIComponent($(postcodeElement).text()) + '.json')
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (json) {
                        let address = json.wgs84.lat + ',' + json.wgs84.lon;
                        let cityMapperUrl = 'https://developer.citymapper.com/api/1/traveltime/?startcoord=' + targetAddress + '&endcoord=' + address + '&time=' + date.toISOString() + '&time_type=arrival&key=45d51edcfaa22fccaaa8a79fbf99dfe6';
                        return fetch(cityMapperUrl);
                    })
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (cityMapperResult) {
                        postcodeElement.prepend(" " + cityMapperResult.travel_time_minutes + " mins ");
                    })
                    .catch(error => console.error(error));
            }
            , 1000 * index);
    });
})
;