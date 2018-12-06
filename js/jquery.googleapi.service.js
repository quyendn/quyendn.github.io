var dataEnd = [];
var mapUtilities;
var markers = [];
var distance_p;
var latitude = "0";
var longitude = "0";
function getLocation() {
    $.getJSON("http://ip-api.com/json/?callback=?", function (data) {
        latitude = data.lat;
        longitude = data.lon;
    })
        .fail(function (err) {
           
        });
}
$(document).ready(function () {
    
    //$.get("https://api.ipdata.co?api-key=dc5d849972befb11d25b280d5aa7e42cc924e7e5e80a8efe2e3754b8", function (response) {
    //    latitude = response.latitude;
    //    longitude = response.longitude;
    //}, "jsonp");
    getLocation();
    showLocation();
    getLocationView();

    new PerfectScrollbar('#lst-result-u');
    $('#lst_child_u').owlCarousel({
        navigation: true,
        dots: false,
        items: 6,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 4],
        itemsTablet: [768, 3],
        itemsMobile: [479, 2]
    });
    $('#lst-result-u').find(".list-detail-item").each(function () {
        var item = {
            Utility_Name: $(this).find("h6.mg-t-0").text(),
            Utility_Address: $(this).find(".search_address").text(),
            ImageUrl: $(this).find('img').attr("src"),
            Utility_Location: $(this).attr("data-location")
        };
        dataEnd.push(item);
    });

    initAutocomplete(dataEnd);
});
function showLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var location = position.coords.latitude + ',' + position.coords.longitude;
            alert(location);
        }, function () {
            
        });
    }
}
function getLocationView() {
    if (navigator.geolocation) {
        
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    alert("Latitude: " + position.coords.latitude +
        "<br />Longitude: " + position.coords.longitude);
}
var directionsDisplay = new google.maps.DirectionsRenderer({
    suppressMarkers: true,
    polylineOptions: {
        strokeColor: '#EA015E'
    }
});

var directionsService = new google.maps.DirectionsService;

$('#container-map-show').on('click', '.list-detail-item', function () {
    $('.list-detail-utilities').find('.list-detail-item').each(function () {
        $(this).removeClass("checked_lo");
    });
    $(this).addClass("checked_lo");

    var currentLatLng = $(this).attr("data-location");
    var currentInfo = $(this).attr("data-no");

    directionsDisplay.setMap(mapUtilities);
    var ROnlick = $(this);
    calculateAndDisplayRoute(directionsService, directionsDisplay, currentLatLng, currentInfo, ROnlick);
});
function calculateAndDisplayRoute(directionsService, directionsDisplay, currentLatLng, currentInfo, ROnlick) {
    var start = "";
    var end = "";
    start = latitude + ',' + longitude;
    directionsService.route({
        origin: start,
        destination: currentLatLng,
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
            google.maps.event.trigger(markers[currentInfo], 'click');
            distance_p = displayDistanceValue(response.routes["0"].legs["0"].distance.value);
            ROnlick.find('.distance-detail').text(distance_p);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}


function calculateAndDisplayRoute1(directionsService, directionsDisplay, currentLatLng, currentInfo, ROnlick) {
    var start = "";
    var end = "";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            start = position.coords.latitude + ',' + position.coords.longitude;
            directionsService.route({
                origin: start,
                destination: currentLatLng,
                travelMode: 'DRIVING'
            }, function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                    google.maps.event.trigger(markers[currentInfo], 'click');
                    distance_p = displayDistanceValue(response.routes["0"].legs["0"].distance.value);
                    ROnlick.find('.distance-detail').text(distance_p);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }, function () {
            alert('Vui lòng tải lại trang web và cho phép trình duyệt sử dụng vị trí');
        });
    }
}

function displayDistanceValue(value) {
    var distance = "";
    if (value > 999) {
        distance = (value / 1000).toFixed(2) + " km";
    } else {
        distance = (Math.round(value) + " m");
    }
    return distance;
}

function HTMLMarker(pos) {
    this.lat = pos.lat;
    this.lng = pos.lng;
    this.pos = new google.maps.LatLng(pos.lat, pos.lng);
}

function initAutocomplete(data) {
    getLocation();
    mapUtilities = new google.maps.Map(document.getElementById('mvbinhImap'), {
        center: new google.maps.LatLng(data[0].Utility_Location.split(",")[0], data[0].Utility_Location.split(",")[1]),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    var iconBase = 'https://maps.gstatic.com/mapfiles/api-3/images/';

    for (i = 0; i < data.length; i++) {
        var itemLatLng = data[i].Utility_Location.split(",");
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(itemLatLng[0].trim(), itemLatLng[1].trim()),
            map: mapUtilities,
            icon: iconBase + 'spotlight-poi2.png'
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                var contentString = '<img style="float: left;width: 48px;height: 48px;margin-right: 12px;" src="' + data[i].ImageUrl + '" />'
                    + '<div style="max-height: 160px;margin-right: 10px;overflow-y: auto;" class="info-content">'
                    + '<h4>' + data[i].Utility_Name + '</h4>'
                    + '<p>' + data[i].Utility_Address + '</p>'
                    + '</div>';

                infowindow.setContent(contentString);
                infowindow.open(mapUtilities, marker);
            }
        })(marker, i));
        markers.push(marker);
    }
    //
    $.getJSON("http://ip-api.com/json/?callback=?", function (data) {
        latitude = data.lat;
        longitude = data.lon;
        var pos = {
            lat: latitude,
            lng: longitude
        };
        HTMLMarker.prototype = new google.maps.OverlayView();
        HTMLMarker.prototype.onRemove = function () { }

        //init your html element here
        HTMLMarker.prototype.onAdd = function () {
            var div = document.createElement('DIV');
            div.className = "htmlMarker";
            div.innerHTML = '<div class="pin_c bounce_c"></div><div class="pulse_c"</div>';
            var panes = this.getPanes();
            panes.overlayImage.appendChild(div);
        };

        HTMLMarker.prototype.draw = function () {
            var overlayProjection = this.getProjection();
            var position = overlayProjection.fromLatLngToDivPixel(this.pos);
            var panes = this.getPanes();
            panes.overlayImage.style.left = position.x + 'px';
            panes.overlayImage.style.top = position.y - 30 + 'px';
        };

        var htmlMarker = new HTMLMarker(pos);
        htmlMarker.setMap(mapUtilities);

    })
        .fail(function (err) {

        });

}

/*search name*/
function searchUtilities(Root) {
    var value = Root.val().toLowerCase();
    $('.list-detail-utilities').find('.list-detail-item').each(function () {
        var findName = $(this).find('h6').text().toLowerCase();
        if (findName.indexOf(value) < 0) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });
}
function searchPlaceByName(Root) {
    var value = Root.val().toLowerCase();
    $('.list-detail-utilities').find('.list-detail-item .search_address').each(function () {
        var newElement = convertToUnsignChar($(this).text().toLowerCase());
        var arrayElementSplit = $(this).text().toLowerCase().split(" ");
        var arrayElementSplitInput = value.split(" ");
        var booleanMatch = false;
        for (var i = 0; i < arrayElementSplit.length; i++) {
            if (arrayElementSplitInput.length > 0) {
                for (var j = 0; j < arrayElementSplitInput.length; j++) {
                    if (arrayElementSplitInput[j] == arrayElementSplit[i]) {
                        booleanMatch = true;
                    }
                }
            }
        }

        var unSignValue = convertToUnsignChar(value);
        var unSignName = convertToUnsignChar($(this).closest('.list-detail-item').find(".col-xs-10 .mg-t-0").text());

        if (newElement.search(value) > -1 || $(this).text().toLowerCase().search(value) > -1 || booleanMatch || unSignName.indexOf(unSignValue) !== -1) {
            $(this).closest('.list-detail-item').show();
        } else {
            $(this).closest('.list-detail-item').hide();
        }
    });
}
function convertToUnsignChar(source) {
    source = source.toLowerCase();
    source = source.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    source = source.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    source = source.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    source = source.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    source = source.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    source = source.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    source = source.replace(/đ/g, "d");
    source = source.replace(/!|@@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\'|\"|\&|\#|\[|\]|~/g, "-");
    source = source.replace(/-+-/g, "-"); //thay thế nhiều dấu - thành 1 dấu -
    source = source.replace(/^\-+|\-+$/g, ""); //cắt bỏ ký tự - ở đầu và cuối chuỗi
    return source;
}

