


// js for calculator

console.clear();

$('.w-l-input').on('change', function (e) {
    let width = $('#width').val();
    let length = $('#length').val();

    if (width > 0 && length > 0) {
        $('#total').val(width * length);
        updatecosts();
    }

    console.log(width);

});
$('#total').on('change', function (e) {
    $('#width').val('');
    $('#length').val('');
    updatecosts();

});

function updatecosts() {
    updateTile();
    updateHardwood();
    updateLaminate();
    updateCarpet();
}

function updateTile() {
    let totalsqft = $('#total').val();
    let tilecost = totalsqft * 10 * 1;
    $('#tilecost').text(formatter.format(tilecost));
}

function updateHardwood() {
    let totalsqft = $('#total').val();
    let hardwoodcost = totalsqft * 3 * 1;
    $('#hardwood').text(formatter.format(hardwoodcost));
}

function updateLaminate() {
    let totalsqft = $('#total').val();
    let laminatecost = totalsqft * 1.50 * 1;
    $('#laminate').text(formatter.format(laminatecost));
}

function updateCarpet() {
    let totalsqft = $('#total').val();
    let carpetcost = totalsqft * 2.50 * 1;
    $('#carpet').text(formatter.format(carpetcost));
}


var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});





// map function

let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
        center: { lat: 48.754902, lng: -122.478119 },
        zoom: 12,
    });
}

initMap();










