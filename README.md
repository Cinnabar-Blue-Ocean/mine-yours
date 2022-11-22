# Mine Yours

A barter marketplace. Connecting the community in order to make a better world

> ### Group members<br>


## Table of Contents

1. [Description](#description)
2. [Technical Overview](#technical-overview)
3. [Usage](#usage)
4. [Requirements](#requirements)
5. [Firestore Methods](#firestoreMethods)
6. [Production](#production)
7. [Testing](#testing)

## Description



## Technical Overview


## Usage
In order to run the project locally please read [Requirements](#requirements) section for instructions setting up a local .env and for installing dependencies. Find further instructions for setting up the project for development or production in the [Development](#development) and [Production](#production) sections.

## Requirements

Node.js - version 16.0+

### Configuring .env


### Installing Dependencies
From within the root directory:
> 1. Run ```npm install``` to install all required dependencies

## Firestore Methods
Create New Listing
> ```postListing(name, description, photos, type, zip_code)```
>
> Returns document reference

Update Listing
> ```updateListing(listing_id, data)```
> data: data object with properties to change on the listing
> Returns document reference

Delete Listing
> ```deleteListing(listing_id)```

Update User Information
> ```updateUser(user_id, data)```
> data: data object with properties to change on the user
> Returns document reference

Get Listing by ID
> ```getListingById(listing_id)```
> Returns listing data

Post a trade
> ```postTrade(listing_id, receiver_id, expiration_date [, start_date])```
> Start date is optional, if not provided current time will be used
> Returns trade_id

Get trade by id
> ```getTradeById(trade_id)```
> Returns trade document


## Production

Creating production build:

## Testing

To get a coverage report from Jest use script ```npm run test-coverage```, along with the console coverage report an HTML file will be created in the coverage directory located in the projects root.

To just run the jest tests in the console with no coverage report use script ```npm run test```.
