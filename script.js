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

  // Calculate relevance scores for each result
  results.forEach(result => {
    result.relevance = calculateRelevance(result, searchTerm);
  });

  // Sort results by relevance in descending order
  results.sort((a, b) => b.relevance - a.relevance);

  // Display results
  if (results.length === 0) {
    // Step 3: If there are no matching results in titles
    // ... (no results handling)
  } else {
    // Display each result
    results.forEach(result => {
      var resultElement = document.createElement("div");
      resultElement.innerHTML = `<strong>${result.title}</strong><br>${result.content}`;
      resultsContainer.appendChild(resultElement);
    });

    // Make the results box visible
    resultsContainer.style.backgroundColor = "rgba(255, 255, 255, 1)";
    resultsContainer.style.display = "block";
  }
}

// Calculate relevance based on title and content
function calculateRelevance(result, searchTerm) {
  var titleMatch = result.title.toLowerCase().includes(searchTerm) ? 1 : 0;
  var contentMatch = result.content.toLowerCase().includes(searchTerm) ? 1 : 0;
  return titleMatch + contentMatch;
}
