// from data.js
var tableData = data;

// Create variables for date field and the button.  By selecting .wrapper was ableto use the sumit function along with d3.event.preventDefault
var dateTime = d3.select(".wrapper");
var buttonFilt = d3.select("#filter-btn");
// Variable for data
var ufo = data;
// Variable for body of the table
var tbody = d3.select("#ufo-table");

// Setup to run a particular function when either datetime is submitted or button clicked.
buttonFilt.on("click", handleClick);
dateTime.on("submit", handleClick);


// Function to handle the click or submit
function handleClick() {
    // Prevent page refresh on submit
    d3.event.preventDefault();
    
    // Grab value entered in date time location
    var inputElement = d3.select("#datetime");
    // Map that value of that field to a variable
    var inputValue = inputElement.property("value");            
    // Create variable that stores filtered data that matches user input
    var filteredData = ufo.filter(encounter => encounter.datetime === inputValue);
    // Print data for testing purposes
    console.log(filteredData);

   // Build search/query.  Add new row <tr> for every entry in the filtered dataset
   // Then for each of the entries copy and append each rows data into the table <td>
    filteredData.forEach((entry) => {
        var row = tbody.append("tr");
        Object.entries(entry).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value );
        }
    )})
    
    

}


