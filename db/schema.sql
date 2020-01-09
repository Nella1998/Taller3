CREATE TABLE schema_migrations (version varchar(255) primary key);
CREATE TABLE carrers (
	id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	name	VARCHAR(30) NOT NULL
);
CREATE TABLE departments (
	id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	name	VARCHAR(30) NOT NULL
);
CREATE TABLE provinces
( id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(40) NOT NULL,
  department_id INTEGER,
  FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE CASCADE
);
CREATE TABLE districts
( id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(40) NOT NULL,
  province_id INTEGER,
  FOREIGN KEY (province_id)
    REFERENCES provinces(id)
    ON DELETE CASCADE
);
CREATE VIEW vw_locations AS
  SELECT DI.id AS id, (DI.name || ', ' || PR.name || ', ' || DE.name) AS name
  FROM districts DI
  JOIN provinces PR ON DI.province_id = PR.id
  JOIN departments DE ON PR.department_id = DE.id
  LIMIT 2000;
CREATE TABLE sexs (
	id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	name	VARCHAR(6) NOT NULL
);
CREATE TABLE images (
	id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	name	VARCHAR(30) NOT NULL,
  url	VARCHAR(100) NOT NULL
);
CREATE TABLE teachers (
	id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	names	VARCHAR(40) NOT NULL,
	last_names VARCHAR(40) NOT NULL,
	img	TEXT NOT NULL,
	district_id	INTEGER,
	sex_id	INTEGER
);
CREATE TABLE teachers_carrers (
	id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	teacher_id	INTEGER NOT NULL,
	carrer_id	INTEGER NOT NULL
);
CREATE VIEW vw_teachers_locations AS
  SELECT
  T.id, T.names, T.last_names,  T.img,
  D.id AS district_id,  (D.name || PR.name || DE.name) AS district_name,
  S.id AS sex_id, S.name AS sex_name
  FROM teachers T
  JOIN districts D ON D.id = T.district_id
  JOIN provinces PR ON D.province_id = PR.id
  JOIN departments DE ON PR.department_id = DE.id
  JOIN sexs S ON S.id = T.sex_id
  LIMIT 2000;
-- Dbmate schema migrations
INSERT INTO schema_migrations (version) VALUES
  ('20191008034430'),
  ('20191008034552'),
  ('20191008034908'),
  ('20191008035401'),
  ('20191008035452'),
  ('20191008035501'),
  ('20191008035511'),
  ('20191008035708'),
  ('20191008035748'),
  ('20191008035755'),
  ('20191008035957'),
  ('20191008040721'),
  ('20191008040819'),
  ('20191008042020'),
  ('20191008042028'),
  ('20191008042339'),
  ('20191008223545');
