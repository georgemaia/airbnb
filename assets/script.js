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
      	output += '<div class="card border-light mb-3 col-md-3">'
      	output += '<img src="' + places[i].photo + '" class="card-img-top bgcover">';
        output += '<div class="card-body">';
        output += '<small>' + places[i].property_type + '</small>';
        output += '<h6>' + places[i].name + '</h6>';
        output += '</div>';
        output += '<div class="card-footer border-light">';
        output += '<b>R$' + places[i].price + '</b>/noite';
        output += '</div>';
        output += '</div>'
      }
      document.querySelector('.wrapper').innerHTML = output;
}