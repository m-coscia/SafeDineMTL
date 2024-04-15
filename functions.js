// initializing map
var map = L.map('map').setView([45.49650, -73.57879], 18);

// adding map styling
var tile = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
}).addTo(map);

// attribute for the safety of a restaurant
const Status = {
    Safe: "safe",
    Unsafe: "unsafe"
} 

// variable to store list of restaurants
var restaurants = [
    {name: 'Allons Burger', latitude: 45.4964506, longitude: -73.5786648, status: Status.Safe, numViolations: 0},
    {name: 'Poulet Rouge', latitude: 45.4947498, longitude: -73.5784050, status: Status.Safe, numViolations: 0},
    {name: 'Antep Kebab', latitude: 45.4952512, longitude: -73.5795704, status: Status.Safe, numViolations: 2}, 
    {name: 'Shifu', latitude: 45.4964427, longitude: -73.5785902, status: Status.Safe, numViolations: 0},
    {name: 'Yi Fang Tea', latitude: 45.4963869, longitude: -73.5786988, status: Status.Safe, numViolations: 0},
    {name: 'Mr Tantuni', latitude: 45.4962498, longitude: -73.5787705, status: Status.Safe, numViolations: 0},
    {name: 'Kebab Express', latitude: 45.4966171, longitude: -73.5789917, status: Status.Safe, numViolations: 0},
    {name: 'Misoya', latitude: 45.4978354, longitude: -73.5785398, status: Status.Safe, numViolations: 0},
    {name: 'Yumi Burger', latitude: 45.4962591, longitude: -73.5782745, status: Status.Safe, numViolations: 0},
    {name: 'Mr. Puffs', latitude: 45.4963141, longitude: -73.5787252, status: Status.Safe, numViolations: 0},
    {name: 'Olivia\'s', latitude: 45.4974467, longitude: -73.5778311, status: Status.Safe, numViolations: 0},
    {name: 'DonDonYa', latitude: 45.4972312, longitude: -73.5772686, status: Status.Safe, numViolations: 0},
    {name: 'Pizza Hut', latitude: 45.4971162, longitude: -73.57719790, status: Status.Safe, numViolations: 0},
    {name: 'Tim Hortons', latitude: 45.4959818, longitude: -73.5796559, status: Status.Safe, numViolations: 0},
    {name: 'Al-Taïb', latitude: 45.4961292, longitude: -73.5799412, status: Status.Safe, numViolations: 0},
    {name: 'Château Kabab', latitude: 45.4958917, longitude: -73.5801350, status: Status.Safe, numViolations: 0},
    {name: 'Subway', latitude: 45.4959022, longitude: -73.5802646, status: Status.Safe, numViolations: 0},
    {name: 'Starbucks', latitude: 45.4956457, longitude: -73.5796279, status: Status.Safe, numViolations: 0},
    {name: 'Nos Thés', latitude: 45.4949266, longitude: -73.5781872, status: Status.Safe, numViolations: 0},
    {name: 'Burger King', latitude: 45.4948231, longitude: -73.5782987, status: Status.Safe, numViolations: 0},
    {name: 'Java U', latitude: 45.4957981, longitude: -73.5790314, status: Status.Safe, numViolations: 0},
    {name: 'Thaï Express', latitude: 45.4958800, longitude: -73.5789809, status: Status.Safe, numViolations: 0},
    {name: 'Pizza Bella', latitude: 45.4958670, longitude: -73.5788498, status: Status.Safe, numViolations: 0},
    {name: 'A&W', latitude: 45.4960239, longitude: -73.5788540, status: Status.Safe, numViolations: 0},
    {name: 'Van Houtte', latitude: 45.4954239, longitude: -73.5777120, status: Status.Safe, numViolations: 0},
];

// variable to store list of markers
var markersArr = [];

// test: adding marker
var marker = L.marker([45.49728, -73.57890]).addTo(map);
