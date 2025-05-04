// Add this to a new file called 'search.js' in your static/js directory
// This will enhance the search experience with a dropdown of results

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-form input[name="q"]');
    const searchResultsDropdown = document.createElement('div');
    searchResultsDropdown.className = 'search-results-dropdown';
    document.querySelector('.search-form').appendChild(searchResultsDropdown);
    
    // Add styles for the dropdown
    const style = document.createElement('style');
    style.textContent = `
        .search-form {
            position: relative;
        }
        .search-results-dropdown {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: white;
            border-radius: 0 0 4px 4px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 1000;
            max-height: 300px;
            overflow-y: auto;
        }
        .search-results-dropdown.active {
            display: block;
        }
        .search-result-item {
            padding: 10px 15px;
            border-bottom: 1px solid #eee;
            cursor: pointer;
            display: flex;
            align-items: center;
        }
        .search-result-item:hover {
            background-color: #f8f9fa;
        }
        .search-result-img {
            width: 40px;
            height: 40px;
            object-fit: contain;
            margin-right: 10px;
        }
        .search-result-name {
            font-weight: 500;
        }
        .search-result-price {
            margin-left: auto;
            color: #28a745;
            font-weight: 500;
        }
        .search-no-results {
            padding: 10px 15px;
            color: #6c757d;
            text-align: center;
        }
    `;
    document.head.appendChild(style);
    
    // Optional: Implement live search with AJAX
    // This requires creating a separate endpoint that returns JSON
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.trim();
        
        if (query.length < 2) {
            searchResultsDropdown.classList.remove('active');
            return;
        }
        
        searchTimeout = setTimeout(() => {
            // This is commented out as it requires an AJAX endpoint
            // Uncomment and implement if you want live search functionality
            
            /*
            fetch(`/api/search-suggestions/?q=${encodeURIComponent(query)}`)
                .then(response => response.json())
                .then(data => {
                    searchResultsDropdown.innerHTML = '';
                    
                    if (data.length === 0) {
                        searchResultsDropdown.innerHTML = '<div class="search-no-results">No products found</div>';
                    } else {
                        data.forEach(product => {
                            const item = document.createElement('div');
                            item.className = 'search-result-item';
                            item.innerHTML = `
                                <img src="${product.image}" alt="${product.name}" class="search-result-img">
                                <span class="search-result-name">${product.name}</span>
                                <span class="search-result-price">$${product.price.toFixed(2)}</span>
                            `;
                            item.addEventListener('click', () => {
                                window.location.href = product.url;
                            });
                            searchResultsDropdown.appendChild(item);
                        });
                    }
                    
                    searchResultsDropdown.classList.add('active');
                })
                .catch(error => {
                    console.error('Error fetching search suggestions:', error);
                });
            */
        }, 300);
    });
    
    // Hide dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target) && !searchResultsDropdown.contains(event.target)) {
            searchResultsDropdown.classList.remove('active');
        }
    });
    
    // Show dropdown when focusing on the search input
    searchInput.addEventListener('focus', function() {
        if (this.value.trim().length >= 2) {
            searchResultsDropdown.classList.add('active');
        }
    });
});