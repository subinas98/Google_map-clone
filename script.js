mapboxgl.accessToken =
  "pk.eyJ1Ijoic3ViaW4xOTk4IiwiYSI6ImNsMDk2N3hmODA1NWszaXBmYjhwb2l5MncifQ.Y8UFWRAerShSZpwlGaDq7Q"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([76.4621, 9.9971])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}
