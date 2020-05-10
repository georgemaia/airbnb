fetch('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
	.then(response => response.json())
	.then(data => {
  		return getBeds(data);
	})
.catch(error => console.error(error))


function getBeds(places){

      let output = '';
      for (
		var i = 0; i < places.length; i++) {
      	output += '<div class="col-md-3">'
      	output += '<img src="' + places[i].photo + '" class="img-fluid img-thumbnail bgcover"><br>';
        output += '<small>' + places[i].property_type + '</small>';
        output += '<h6>' + places[i].name + '</h6>';
        output += '<p><b>R$' + places[i].price + '</b>/noite</p>';
        output += '</div>'
      }
      document.querySelector('.wrapper').innerHTML = output;
}