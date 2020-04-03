# Commands

```bash
# starting an npm project
npm init -y # -y flag will accept all the defaults 

# installing knex and pg
npm i --save knex pg

# initializing knex configuration file
knex init

# Creating a database 
createdb --echo cohort_36

# Droping a database if you need to
dropdb --if-exists --echo cohort_36

# creating a migration for students
knex migrate:make CreateStudents

# Migrating a knex migration
knex migrate:latest

# Rolling back a database if you need to
knex migrate:rollback

# Creating a seed file for students
knex seed:make 001_students

```