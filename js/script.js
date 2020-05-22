/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const students = document.getElementsByClassName('student-item');
const onPage = 10;

// ---------------------------------------------
// Display a specific amount of students on page
// ---------------------------------------------

function showPage(list, page = 1) {
   // Create a start index variable for each page
   let startIndex = (page * onPage) - onPage;
   // Create a end index variable for ech page
   let endIndex = page * onPage;

   // Use the startIndex and endIndex for displaing only a specific amount of students on page
   for (var i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         // show all students with a index between startIndex and endIndex
         list[i].style.display = 'block';
      } else {
         // hide all students with a index outside the startIndex and endIndex
         list[i].style.display = 'none';
      }
   }
}

// -------------------
// Add Pagination list
// -------------------

function addPagination(list) {
   const page = document.querySelector('.page');
   // create the pagination-div
   let paginationDiv = document.createElement('DIV');
   // fill the pagination-div with content
   let paginationHTML = `
      <ul>   
   `;

   // determine the amount of pagination-links
   const sites = Math.ceil(list.length / 10);
   // append the first pagination-link with active-class
   paginationHTML += `
         <li>
            <a class="active" href="#">1</a>
         </li>
   `
   // append more pagination-links
   for (var i = 2; i <= sites; i++) {
      paginationHTML += `
         <li>
            <a href="#">${i}</a>
         </li>
      `;
   }

   paginationHTML += `
      </ul>
   `;
   // add the pagination content into the pagination-div
   paginationDiv.innerHTML = paginationHTML;
   // append the pagination-div to the page-div
   page.appendChild(paginationDiv);
   // add the pagination-clas to the pagination-div
   paginationDiv.className = 'pagination';


   // --------------------------------------------
   // change the active-status on pagination-links
   // --------------------------------------------

   const pagination = document.querySelector('.pagination');
   const siteLinks = pagination.querySelectorAll('a');

   showPage(list);

   // Change the site-content by clicking the pagination-link
   pagination.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
         for (var i = 0; i < siteLinks.length; i++) {
            // remove the active-class from the current active pagination-link
            siteLinks[i].classList.remove('active');
         }

         let site = event.target.textContent;
         // add the active-class to the new pagination-link
         event.target.classList.add('active');
         showPage(list, site);
      };
   });
};

// Call the addPagination-Function
addPagination(students);


