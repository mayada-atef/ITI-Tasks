SELECT  `fname`, `lname` FROM users WHERE  lname="25hi";
CREATE INDEX lname on users(lname);
CREATE INDEX fname_lname on users(fname,lname);


EXPLAIN SELECT * FROM users WHERE  fname="25hi";
EXPLAIN SELECT * FROM users WHERE  lname="25hi";