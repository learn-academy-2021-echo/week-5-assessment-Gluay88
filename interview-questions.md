# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is a block in Ruby?

  Your answer:
  Block is a no name piece of code/function. It can accept input in form of arguments and will return a value. It can be created with the do and end keywords and with curly bracket {}. It could passed to a method.

  Researched answer:
  Ruby block is an anonymous functions that can be passed into methods. Block is enclosed in a do-end statement or curly braces {}. do-end is usually used for blocks that span through multiple lines while {} is used for single line blocks. The block is passed to the each method of an array object.


2. What is a gem?

  Your answer:
  Gem is library or snippet of code and package manager for the Ruby programming language. It used to extend or modify functionality in Ruby applications and used to install RSpec and we can run Ruby code in it.

  Researched answer:
  Gem is a package manager for the Ruby programming language that provides a standard format for distributing Ruby programs and libraries, a tool designed to easily manage the installation of gems, and a server for distributing them.



3. What is Ruby on Rails?

  Your answer:
  Ruby on Rails is a web-application framework that includes everything needed to create database-backed web applications. It's written in Ruby programming language.

  Researched answer:
  Ruby on Rails is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. It encourages and facilitates the use of web standards such as JSON or XML for data transfer and HTML, CSS and JavaScript for user interfacing. 



4. What is a relational database? Are there other kinds of databases?

  Your answer:
  A relational database has tables that have relationships to each other. It has primary keys, rows and columns that stores a collection data (like excel spreadsheet).

  Researched answer:
  A relational database is almost exactly like an Excel spreadsheet or Google Sheets document with information displayed in rows and columns. A table is one set of rows and columns. A database can have many tables that have relationships to each other. The description of the layout of all the tables in a database and the name and data type of each column within each table in a database is called a schema.



5. What are primary keys? Why are they important?

  Your answer:
  Every each row of a Rail's table has a primary key as known as "id". It's a very unique and very important so we can call/tell them apart by their id.

  Researched answer:
  Primary keys - By default, Active Record will use an integer column named id as the table's primary key. When using Rails Migrations to create your tables, this column will be automatically created.
  Each row must have a unique way of identifying itself to other parts of the program.
  In Rails, every row of a table has a primary key named "id", and that ID is guaranteed to be unique. This prevents problems like two Person instances being confused for each other because they have the same name. We can always tell them apart by their ID.



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes:
In Rails, a RESTful routes provides a mapping between HTTP verbs and URLs to controller actions. By convention, each action also maps to a specific CRUD operation in a database. A single entry in the routing file, such as: resources :photos Copy.

2. JSON:
JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications.

3. ERB:
ERB (Embedded RuBy) is a feature of Ruby that enables you to conveniently generate any kind of text, in any quantity, from templates. The templates themselves combine plain text with Ruby code for variable substitution and flow control, which makes them easy to write and maintain.

4. Params:
Params in Ruby on Rails is a hash. It is the collection of data received by the application during a particular HTTP request. The data may be obtained from different sources such as links, form submissions, and redirects.

5. API:
An application programming interface (API) is a connection between computers or between computer programs. It is a type of software interface, offering a service to other pieces of software.
