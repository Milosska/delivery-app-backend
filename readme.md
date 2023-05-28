# Delivery-App Backend

This backend servise is intended to work with the front-end part of the devivery web-app.

### Base URL

This backend is located at render.com web service.
The base URL you need to work with it is indicated below:

```javascript
BASE_URL = "https://delivery-app-backend-ilxj.onrender.com";
```

### Endpoints

The endpoints you can use are listed below:

To authenticate the users and do all the authorization stuff you'll need **auth endpoint**

```javascript
"/api/auth";
```

Routes avaliable:  
**"/register"** - POST request that allows to register a new user;  
**"/login"** - POST request that allows user to login;  
**"/logout"** - POST request that allows user to logout;  
**"/current"** - POST request that allows to check user at the system having correct JWT-token;

---

To get all the products avaliable you'll need **products endpoint**  
For all the request here you'll need a JWT-token (avaliable after authentification process)

```javascript
"/api/products";
```

Routes avaliable:  
**"/:company"** - GET request that allows to obtain food products by the name of restaurant company;

Pagenation:
To use the pagination, add to your URI query params **page** to indicate current page and **limit** to indicate the nuber of assets per 1 page (server gives 10 assats by default).

---

To work with user's orders you'll need **orders endpoint**  
For all the request here you'll need a JWT-token (avaliable after authentification process)

```javascript
"/api/orders";
```

Routes avaliable:  
**"/"** - GET request that allows to obtain all the orders made by user;
**"/"** - POST request that allows to add new order to user's order history;
