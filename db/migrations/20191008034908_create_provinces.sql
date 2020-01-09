-- migrate:up

CREATE TABLE provinces
( id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(40) NOT NULL,
  department_id INTEGER,
  FOREIGN KEY (department_id) 
    REFERENCES departments(id)
    ON DELETE CASCADE
)

-- migrate:down

DROP TABLE provinces;