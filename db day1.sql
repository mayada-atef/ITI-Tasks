use companyschema;
select * from employee;

-- insert into employee (DNO,SSN,superSSN,DNO,SSN,Fname,Lname,Bdate,Address,Gender) values (30,102672,112233,30,102660,'mayada','atef','1998-04-12','7 st','F');
insert into employee (DNO,SSN,superSSN) values (30,102672,112233);
update employee
set Fname='m' ,Lname ='a' ,Bdate='1998-06-02',Address='7 st cairo ',Gender='F',Salary ='10000'
where SSN=102672;

insert into employee (DNO,SSN,Fname,Lname,Bdate,Address,Gender) values (30,102660,'mayada','atef','1998-04-12','7 st','F') ;
select * from departments ;

insert into departments values ('DEPT IT',100,112233,'2006-11-1');

update departments
set MGRSSN = 968574
where Dnum=100;

update departments
set MGRSSN = 102672
where Dnum=20;

update employee 
set SuperSSN=102672
where SSN=102660;

-- dependent 
select * from dependent where ESSN =223344;
delete from dependent where ESSN =223344;

-- manager 
select * from departments where MGRSSN =223344;
update departments 
set MGRSSN=102672
where MGRSSN =223344;
select * from departments;

-- supervisor 
select * from employee where SuperSSN =223344;
update employee 
set SuperSSN =102672 
where SuperSSN =223344;

-- work in projects 
select * from  works_for where Essn =223344;
update works_for
set Essn =102672 
where Essn =223344;

-- update salary 
update employee 
set  Salary= Salary+ Salary*0.2
where SSN =102672;

select * from employee where SSN=102672;


-- 2.	Display the employee First name, last name, Salary and Department number.

select Fname,Lname,DNO,Salary from employee;


-- 3.	If you know that the company policy is to pay an annual commission for each employee with specific percent equals 10% of
--  his/her annual salary .Display each employee full name and his annual commission in an ANNUAL COMM column (alias).

select concat(Fname,' ',Lname) as "full name" ,(salary*12*0.1) as "ANNUAL COMM "
from employee ;


-- 4.	Display the employees Id, name who earns more than 1000 LE monthly.
select Fname,SSN 
from employee 
where Salary>1000;

-- 5.	Display the employees Id, name who earns more than 10000 LE annually.
select Fname,SSN 
from employee 
where Salary*12>10000;


-- 6.	Display the names and salaries of the female employees 
select Fname,Salary
from employee 
where Gender='F';

-- 7.	Display each department id, name which managed by a manager with id equals 968574.
select Dname,Dnum
from departments 
where MGRSSN=968574;

-- select * from project;
-- 8.	Dispaly the ids, names and locations of  the pojects which controled with department 10.
select Pname,Pnumber,Plocation
from project
where Dnum=10;









