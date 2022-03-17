

INSERT INTO department (name)
     VALUES
        ("Sales"),
        ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Management");

INSERT INTO role (title, salary, department_id)
    VALUES
        ("Salesperson", 75000, 1),
        ("Electrical Engineer", 130000, 2),
        ("Accountant", 100000, 3),
        ("Lawyer", 150000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ("Cindy", "Loohoo", 3, 1),
        ("Gerald", "Smith", 2, 1),
        ("Levi", "Brown", 4, 1),
        ("Karol", "Bunker", 1, 1);