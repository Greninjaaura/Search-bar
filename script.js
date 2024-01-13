function search() {
  // Perform the search and get results

  // Assuming you have a variable called resultsContainer to represent the results container
  resultsContainer.style.backgroundColor = "rgba(255, 255, 255, 1)"; // Set background to fully visible
}

// Sample data for demonstration
const sampleData = [
  { title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet..." },
  { title: "Sample Result", content: "This is a sample result." },
  { title: "Another Result", content: "Here's another matching result." },
];

function search() {
  var searchTerm = document.getElementById("search-input").value.toLowerCase();
  var searchResults = performSearch(searchTerm);
  displayResults(searchResults);
}

function performSearch(term) {
  // Step 1: Check for matches in titles
  var titleResults = sampleData.filter(result => result.title.toLowerCase().includes(term));

  // Step 2: If there are no results based on titles, check for matches in content
  if (titleResults.length === 0) {
    return sampleData.filter(result => result.content.toLowerCase().includes(term));
  }

  // Return the results based on titles if any
  return titleResults;
}

function displayResults(results) {
  var resultsContainer = document.getElementById("search-results");
  // Clear previous results
  resultsContainer.innerHTML = "";

  // Step 3: If there are no matching results in titles
  if (results.length === 0) {
    // Step 4: If there is no data available at all
    if (sampleData.length === 0) {
      resultsContainer.innerHTML = "No data available.";
    } else {
      resultsContainer.innerHTML = "No results found.";
    }
  } else {
    // Display each result
    results.forEach(result => {
      var resultElement = document.createElement("div");
      resultElement.innerHTML = `<strong>${result.title}</strong><br>${result.content}`;
      resultsContainer.appendChild(resultElement);
    });
  }
}
