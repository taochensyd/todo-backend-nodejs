INSERT INTO TodoUser (
        FirstName,
        LastName,
        Passwords,
        Email
    )
VALUES (
        "Tao",
        "Chen",
        "Mimashi123",
        "TAOCHENSYD@GMAIL.COM"
    );
INSERT INTO TodoTask (
        UserID,
        Title,
        TaskDescription,
        StartDate,
        isCompleted
    )
VALUES (
        1,
        "Create a todo database",
        "A MySQL database hosted on AWS RDS.",
        "03/01/20223",
        1
    );
VALUES (
        1,
        "Create a todo API endpoint",
        "NodeJS with Express API Endpoint.",
        "03/01/20223",
        0
    );

INSERT INTO TodoTask (
        UserID,
        Title,
        TaskDescription,
        StartDate,
        isCompleted
    )
VALUES (
        1,
        "Insert a task to the db",
        "Insert a record from a post method to the API Endpoint and insert into the db.",
        "2023-1-3",
        0
    );

