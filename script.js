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
  // First, check for matches in titles
  var titleResults = sampleData.filter(result => result.title.toLowerCase().includes(term));

  // If there are no results based on titles, check for matches in content
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

  if (results.length === 0) {
    resultsContainer.innerHTML = "No results found.";
  } else {
    // Display each result
    results.forEach(result => {
      var resultElement = document.createElement("div");
      resultElement.innerHTML = `<strong>${result.title}</strong><br>${result.content}`;
      resultsContainer.appendChild(resultElement);
    });
  }
}
