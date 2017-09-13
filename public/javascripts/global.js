// Carlist data array for filling in table
var datalistarray = new Array();


// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();

});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';
	for (var i=0; i<datalistarray.length; i++){
		tableContent += '<tr onclick="deleteCar(this)" title="Click any cell to delete row">';
		tableContent += '<td>' + datalistarray[i][0] + '</td>';
		tableContent += '<td>' + datalistarray[i][1] + '</td>';
		tableContent += '<td>' + datalistarray[i][2] + '</td>';
		tableContent += '<td>' + datalistarray[i][3] + '</td>';
		tableContent += '<td>' + datalistarray[i][4] + '</td>';
		tableContent += '<td>' + datalistarray[i][5] + '</td>';
		tableContent += '<td>' + datalistarray[i][6] + '</td>';
		tableContent += '</tr>';
	}
	$('#carList table tbody').html(tableContent);
};
// Add Car button click
$('#btnAddCar').on('click', addCar);

// Add Car
function addCar(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addCar input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

	$('#addCar select').each(function(index, val) {
        if(!$(this).val() ) { errorCount++; }
    });
    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {
		var newCar = ([$('#addCar fieldset select#inputMake').val(),
		$('#addCar fieldset select#inputModel').val(),
		$('#addCar fieldset input#inputYear').val(),
		$('#addCar fieldset input#inputValue').val(),
		$('#addCar fieldset input#inputMileage').val(),
		$('#addCar fieldset select#inputTransmission').val(),
		$('#addCar fieldset input#inputColour').val()]);
		datalistarray.push(newCar);
		$('#addCar fieldset input').val('');
		populateTable();
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};
// Delete Car
function deleteCar(element) {

    // Pop up confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this car?');
    // Check and make sure
    if (confirmation === true) {
		var row = element.rowIndex;
		datalistarray.splice(row -1,1);
		populateTable();
    }
    else {
        // If they said no, do nothing
        return false;

    }

};
// Change the make of the car depending on the model dropdown choice
function changeMake() {
	var make = $('#addCar fieldset select#inputMake').val();
	var modelSelect = document.getElementById('inputModel');
	if (make == 'Porsche'){
		modelSelect.options.length = 0;
		modelSelect.options[modelSelect.options.length] = new Option('911 GTI', '911 GTI');
		modelSelect.options[modelSelect.options.length] = new Option('912', '912');
		modelSelect.options[modelSelect.options.length] = new Option('918 Spyder', '918 Spyder');
		modelSelect.options[modelSelect.options.length] = new Option('924', '924');
	}
	else if (make == 'Ferrari'){
		modelSelect.options.length = 0;
		modelSelect.options[modelSelect.options.length] = new Option('550 Maranello', '550 Maranello');
		modelSelect.options[modelSelect.options.length] = new Option('550 Barchetta', '550 Barchetta');
		modelSelect.options[modelSelect.options.length] = new Option('575 Maranello', '575 Maranello');
		modelSelect.options[modelSelect.options.length] = new Option('599 GTO', '599 GTO');
	}
	else if (make == 'BMW'){
		modelSelect.options.length = 0;
		modelSelect.options[modelSelect.options.length] = new Option('E12', 'E12');
		modelSelect.options[modelSelect.options.length] = new Option('E21', 'E21');
		modelSelect.options[modelSelect.options.length] = new Option('1502', '1502');
		modelSelect.options[modelSelect.options.length] = new Option('E24', 'E24');
	}
	else{
		modelSelect.options.length = 0;
		modelSelect.options[modelSelect.options.length] = new Option('500SE', '500SE');
		modelSelect.options[modelSelect.options.length] = new Option('500SEC', '500SEC');
		modelSelect.options[modelSelect.options.length] = new Option('500SEL', '500SEL');
		modelSelect.options[modelSelect.options.length] = new Option('560SEL', '560SEL');
	}
}