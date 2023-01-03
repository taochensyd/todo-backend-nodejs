CREATE DATABASE todo;

USE todo;

CREATE TABLE TodoUser (
    UserID int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    Passwords varchar(255) NOT NULL,
    Email varchar(255) NOT NULL,
    PRIMARY KEY(UserID)
);

CREATE TABLE TodoTask(
    TaskID int NOT NULL AUTO_INCREMENT,
    UserID int NOT NULL,
    Title varchar(255) NOT NULL,
    TaskDescription varchar(255) NOT NULL,
    StartDate varchar(255),
    isCompleted boolean,
    PRIMARY KEY(TaskID),
    FOREIGN KEY(UserID) REFERENCES TodoUser(UserID)
);