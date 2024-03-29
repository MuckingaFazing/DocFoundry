# DocFoundry

Welcome to AwesomeDocIndexer, a powerful document storage and indexing application built with Kotlin and Apache Solr.

## Overview

AwesomeDocIndexer is a comprehensive solution for storing, managing, and indexing documents using Apache Solr. With its intuitive user interface and robust backend, it offers seamless document search and retrieval capabilities.

## Features

- Index documents with Apache Solr
- Intuitive web UI
- Efficient document retrieval and search functionality
- Secure user authentication and access control

## Installation

### Prerequisites

- Java Development Kit (JDK) installed (version 20 or higher)
- Kotlin installed (version 1.3 or higher)

### Installing Apache Solr with Homebrew

1. Open your terminal.

2. Run the following command to install Apache Solr using Homebrew:

   ```bash
   brew install solr
   solr start -e cloud
   solr stop -all

### Copy the following 2 files into your directory if they are missing:

solr.xml and zoo.cfg - they are both located in the solr folder of this project
/usr/local/Cellar/solr/9.4.1/server/solr/

## Admin terminal for solr

http://127.0.0.1:8983/solr/#/

## Authentication

To enable authentication, run the following: 

   ```bash
   solr auth enable -type basicAuth -prompt true -z 127.0.0.1:9983
   ```

Navigate to http://127.0.0.1:8983/solr/#/~security to setup users/roles/permissions


## UI(React)

Navigate to the ui folder in your terminal:
   ```bash
   npm run dev
   ```
UI located at: http://localhost:3000

React Libraries installed:
   ```bash
   npm i clsx framer-motion tailwind-merge @iconify/react
   npm i @nextui-org/react framer-motion
   npm install primereact
   ```
   
