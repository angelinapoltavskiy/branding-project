# **MVC Components**

## Search Bar
![MVC component for search bar](/imgs/MVC-Search.jpg)

* This component is responsible for displaying/returning each matching store card when they are queried for. 
* This component resides on the client.
* The other components that the search bar communicates with are the firebase databsase to check for matched search bar text.


## Store Cards
![MVC component for store cards](/imgs/MVC-Store.jpg)

* This component is responsible for displaying information about each store.
* This component resides on the client.
* The other components that the store cards communicate with are the firebase databsase to access store names and images.

## Filters
![MVC component for filters on store cards](/imgs/MVC-Filters.jpg)

* This component is responsible for displaying/returning all stores that match the filters input by the user.
* This component resides on the client.
* The other components that the store cards communicate with are the 'ship to' and 'categories' section from the firebase databsase to access store names.


## Contact Form
![MVC component for contact form](/imgs/MVC-Contact.jpg)

* This component is responsible for taking contact information from the user and passing that data onto the third party service, and that information ultimately being shared with the PM through email.
* This component resides on the client.
* The other components that the store cards communicate with are the third party form service.




