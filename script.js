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
  return sampleData.filter(result => result.title.toLowerCase().includes(term));
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
