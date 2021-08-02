# Starwars Client

## An Angular project to access Starwars backend of https://swapi.dev/ 

### Project setup

#### Clone the project

Clone project from git repo https://github.com/cssam/StarwarsClient

in to your `$HOME/sites/` folder.

#### Install Required Libraries

Install the required libraries using these commands:
* npm update

To build:
```
> cd StarwarsClient
> ng build 
```

To run:
```
> cd StarwarsClient
> ng serve 
```
check http://localhost:4200

---

### App Using Guide

####Dashboard
App is routing to dashboard always

Click on the top heard to load the dashboard

http://localhost:4200/dashboard

![alt tag](https://user-images.githubusercontent.com/6191308/127857830-c65ac94a-f7c9-453b-8738-d72afdb870df.png)

#####Angular Material components used here
* mat-ripple

----

####People page

This page implemented as Accordion with Paginator.

![atl tag](https://user-images.githubusercontent.com/6191308/127858461-ee65e0f5-554e-423b-890e-f1e339ec1659.png)

At expand you will see

![alt tag](https://user-images.githubusercontent.com/6191308/127859547-f99c798a-f56a-44fa-ba1a-03489b538ec7.png)

Once click on Films
![alt_tag](https://user-images.githubusercontent.com/6191308/127859776-5f5f0ebd-47e4-47e4-8e99-f9cdcb2d2987.png)

Similarly you can see Species, Vehicles, Starships of each Person

#####Angular Material components used here
* mat-paginator
* mat-accordion
* mat-expansion-panel
* mat-list
* mat-subheader
* mat-list-icon
* mat-divider
* matBadge
* matBadgeColor


---

#### Films page

This page developed using Tab group with dynamic height based on tab contents.

It shows number of records for Starships, Planets, Characters, and Species but I didn't add loading since I did at Peoples page. 

Paginator didn't use since only 6 records available.

![alt tag](https://user-images.githubusercontent.com/6191308/127862049-de20efd6-3fc3-4f15-91c9-1eb130eb30db.png)

#####Angular Material components used here
* mat-tab-group
* mat-tab
* mat-card
* mat-card-header
* mat-card-subtitle
* mat-card-content
* mat-card-actions
* mat-button
* mat-icon
* matBadge
* matBadgeColor

---

#### Planet page

This page developed using Table with expandable rows with Paginator.

![alt tag](https://user-images.githubusercontent.com/6191308/127865210-7da79298-bb1e-44a4-81bf-5960ffec13ff.png)

At expand you will see

![alt tag](https://user-images.githubusercontent.com/6191308/127865379-f07374a0-c890-44f2-832d-6cf48c146cb4.png)

Again it shows number of records for Films and Residence but I didn't add loading since I did at Peoples page.

#####Angular Material components used here
* mat-paginator
* mat-table
* mat-cell
* mat-header-row
* mat-row

---

#### Theme

Added
`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`
in `index.html`

Added starwars-theme.css file and linked at angular.json file `"styles": [
"src/starwars-theme.css",
"src/styles.css"
],`

---

## Cloud Technologies

### Hiroku Deployment

I have deployed the app with Hiroku and you can access at https://starwarsclient.herokuapp.com/

#### Hiroku Configuration

* Procfile
* to get nodejs server deployment server.js needed to implement. Therefore 
  `"express": "^4.17.1",
  "path": "^0.12.7"` 
  had to added to the `package.json`
  
### AWS/GCP/Azure Deployment

I have added required yaml files to deploy the app in any of cloud services in
`kube-config`.
* config
* deployment
* ingress
* service

#### Ngnix configuration

I have added `nginx.conf` file required to run the app with ngnix server instead nodejs server. There we don't need configuration used for Hiroku server.

#### Dockerfile
I have created `Dockerfile` required to create app image for deployment in cloud environments. Image is pushed to my DockerHub repository `cssam/starwarsclient`.

---

### Testing

##### Postman collection

I used Postman to verify and compare the results. Configurations are in the file `Starwars.postman_collection.json`.


