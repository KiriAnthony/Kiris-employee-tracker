

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

-- department_id should reference id from department table
CREATE TABLE role (
 id INT PRIMARY KEY,
 title VARCHAR(30),
 salary DECIMAL,
 department_id INT,
 CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

-- role_id should reference id from role table
-- manager_id should ?????
CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL
);

