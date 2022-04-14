# Lab Angular S3 Route53

## An Angular project to access Starwars backend of https://swapi.dev/ 

### Project setup

#### Clone the project

Clone project from git repo https://github.com/cssamLabs/Lab-Anguar-S3-Route53

in to your `$HOME/sites/` folder.

#### Install Required Libraries

Install the required libraries using these commands:
* npm update

To build:
```
> cd Lab-Anguar-S3-Route53
> ng build 
```

To run:
```
> cd Lab-Anguar-S3-Route53
> ng serve 
```
check http://localhost:4200

---

### App Using Guide

#### Dashboard
App is routing to dashboard always

Click on the top heard to load the dashboard

http://localhost:4200/dashboard

![alt tag](https://user-images.githubusercontent.com/6191308/127857830-c65ac94a-f7c9-453b-8738-d72afdb870df.png)

##### Angular Material components used here are
* mat-ripple

----

#### People page

This page implemented as Accordion with Paginator.

![atl tag](https://user-images.githubusercontent.com/6191308/127858461-ee65e0f5-554e-423b-890e-f1e339ec1659.png)

At expand you will see

![alt tag](https://user-images.githubusercontent.com/6191308/127859547-f99c798a-f56a-44fa-ba1a-03489b538ec7.png)

Once click on Films
![alt_tag](https://user-images.githubusercontent.com/6191308/127859776-5f5f0ebd-47e4-47e4-8e99-f9cdcb2d2987.png)

Similarly you can see Species, Vehicles, Starships of each Person. SnackBar appears if no content.

##### Angular Material components used here are
* mat-paginator
* mat-accordion
* mat-expansion-panel
* mat-list
* mat-subheader
* mat-list-icon
* mat-divider
* matBadge
* matBadgeColor
* MatSnackBar


---

#### Films page

This page developed using Tab group with dynamic height based on tab contents.

It shows number of records for Starships, Planets, Characters, and Species but I didn't add loading since I did at Peoples page. 

Paginator didn't use since only 6 records available.

![alt tag](https://user-images.githubusercontent.com/6191308/127862049-de20efd6-3fc3-4f15-91c9-1eb130eb30db.png)

##### Angular Material components used here are
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

This page developed using Table with expandable rows and Paginator.

![alt tag](https://user-images.githubusercontent.com/6191308/127865210-7da79298-bb1e-44a4-81bf-5960ffec13ff.png)

At expand you will see

![alt tag](https://user-images.githubusercontent.com/6191308/127865379-f07374a0-c890-44f2-832d-6cf48c146cb4.png)

Again it shows number of records for Films and Residence. Loading titles of them are added using dialog.

##### Angular Material components used here are
* mat-paginator
* mat-table
* mat-cell
* mat-header-row
* mat-row
* MatSnackBar
* MatDialog

---

#### Species page

This page developed using List with Bottomsheet and Paginator.

![alt tag](https://user-images.githubusercontent.com/6191308/128227961-0c5f5d2d-02d5-4465-855f-0a179200f2ad.png)

At expand you will see

![alt_tag](https://user-images.githubusercontent.com/6191308/128227436-3c072019-0d81-40fa-8e9d-28e773297658.png)

##### Angular Material components used here are

* mat-paginator
* mat-list
* MatBottomSheet
* BottomsheetSpeciesComponent
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

### AWS S3 deployment
See the description of how to configure Angular app as static web site in AWS S3. [AWs S3 StaticWeb](https://AWS-Configuration-S3-StaticWeb-HostedZone)

In development CMD run following to build compiled files for static web.

Following command in project root will build sttaic web files.
```
ng build
```
![Angular build](https://user-images.githubusercontent.com/6191308/163465562-08bbf21d-7a0f-4bae-ac62-9af29c0049f1.png)

Then goto dist/StarwarsClient folder and run aws s3 command
```
cd dist/StarwarsClient
aws s3 cp . s3://starwars.hibersoft.com --recursive
```
![upload to s3 bucket](https://user-images.githubusercontent.com/6191308/163465937-a10f3ff8-6098-498e-a645-b9c31d048197.png)


Hosted Site
![hosted Angular web site](https://user-images.githubusercontent.com/6191308/163467211-151ca863-e775-4281-9a65-0854c9fdc55f.png)




### Hiroku Deployment

I have deployed the app with Hiroku and you can access at https://starwarsclient.herokuapp.com/.
There are few additional steps has to take to deploy on Heroku.
I added server.js and Procfile file to deploy on Heroku. You can find them in heroku-deployment branch.

#### Hiroku Configuration

* Procfile
* to get nodejs server deployment server.js needed to implement. Therefore 
  `"express": "^4.17.1",
  "path": "^0.12.7"` 
  had to added to the `package.json`
  
  ![Heroku Git Branch Configuration](https://user-images.githubusercontent.com/6191308/163465134-09288f36-c3e3-4d8d-8831-28729a8f7896.png)

  
### Containerized Deployment

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


