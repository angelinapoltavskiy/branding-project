// When the user scrolls the page, execute myFunction
window.onscroll = function() { missionStatement() };

// Get the header
var header = document.getElementById("missionStatement");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function missionStatement() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//search bar
function mySearchFunction() {
    // Declare variables
    var input, filter, ul, li, item, i, txtValue;
    // User Input
    input = document.getElementById("myInput");
    // Filter, makes search not case sensitive
    filter = input.value.toUpperCase();
    // Grabs the parent element by id
    ul = document.getElementById("stateList");
    // Individual item on list
    li = ul.getElementsByTagName("li");

    // Treats lists items like an array, where each item can be accessed through it's index
    for (i = 0; i < li.length; i++) {
        item = li[i];
        // Iterate over each list item to see if the value of the input, ignoring case, matches the inner text or inner html of the item.
        txtValue = item.textContent || item.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            // Displays list items that are a match, and nothing if no match
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


//filter bar
var $filterCheckboxes = $('input[type="checkbox"]');
var filterFunc = function() {

    var selectedFilters = {};

    $filterCheckboxes.filter(':checked').each(function() {

        if (!selectedFilters.hasOwnProperty(this.name)) {
            selectedFilters[this.name] = [];
        }

        selectedFilters[this.name].push(this.value);
    });

    // create a collection containing all of the filterable elements
    var $filteredResults = $('.shop');

    // loop over the selected filter name -> (array) values pairs
    $.each(selectedFilters, function(name, filterValues) {

        // filter each .flower element
        $filteredResults = $filteredResults.filter(function() {

            var matched = false,
                currentFilterValues = $(this).data('category').split(' ');

            // loop over each category value in the current .flower's data-category
            $.each(currentFilterValues, function(_, currentFilterValue) {

                // if the current category exists in the selected filters array
                // set matched to true, and stop looping. as we're ORing in each
                // set of filters, we only need to match once

                if ($.inArray(currentFilterValue, filterValues) != -1) {
                    matched = true;
                    return false;
                }
            });

            // if matched is true the current .shop element is returned
            return matched;

        });
    });

    $('.shop').hide().filter($filteredResults).show();
}

$filterCheckboxes.on('change', filterFunc);