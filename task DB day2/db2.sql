use newcompany;
-- 	Display the Department id, name and id and the name of its manager 
select dname,dnum, concat(Fname ,' ' ,Lname) as 'full name', MGRSSN
from departments , employee
where MGRSSN=SSN;

-- 2.	Display the name of the departments and the name of the projects under its control.
select  dname ,pname 
from departments d , project p
where d.Dnum=p.Dnum;

-- 3.	Display the full data about all the dependence associated with the name of the employee they depend on him/her.
select dependent.* , employee.Fname
from dependent 
left outer join employee
on dependent.ESSN=employee.SSN;

-- 4.	Display (Using Union Function) make Question a ‘Union’ Question b)
-- a.	 The name and the gender of the dependence that's gender is Female and depending on Female Employee.
-- b.	 And the male dependence that depends on Male Employee.

select dependent.Dependent_name, dependent.Sex 
from dependent
join employee 
on  dependent.ESSN=employee.SSN
where dependent.Sex='F' and employee.Gender='F'
union all
select dependent.Dependent_name, dependent.Sex 
from dependent
join employee 
on  dependent.ESSN=employee.SSN
where dependent.Sex='M' and employee.Gender='M';

-- select dependent.Dependent_name, dependent.Sex 
-- from dependent
-- where dependent.Sex='M' and dependent.ESSN in (select employee.SSN from employee where employee.Gender='M');


-- 5.	Display the full data of the employees who is managing any of the company's departments.
select *
from departments
left outer join employee 
on departments.MGRSSN= employee.SSN;

-- 6.	Display the Id, name and location of the projects in Cairo or Alex city.
select project.Pnumber,project.Pname,project.Plocation
from project 
where project.City='Cairo' or project.City='Alex';

-- 7.	Display the Projects full data of the projects with a name starts with "a" letter.
select * from project
where project.Pname like 'a%';

-- 8.	display all the employees in department 30 whose salary from 1000 to 2000 LE monthly

select * 
from employee
where employee.DNO=30 and employee.Salary between 1000 and 2000;

-- 9.	Retrieve the names of all employees in department 10 who works more than or equal10 hours per week on "AL Rabwah" project.
select fname 
from employee 
where employee.SSN in 
(select works_for.Essn from works_for 
where works_for.hours>=10 and works_for.Pno in (select project.Pnumber from project where Pname='AL Rabwah')) and employee.DNO=10;

-- 10.	Find the names of the employees who directly supervised with Kamel Mohamed.
select employee.Fname 
from employee 
where employee.SuperSSN in (select employee.SSN from employee  where employee.Fname='Kamel' and employee.Lname='Mohamed');

-- 11.	For each project, list the project name and the total hours per week (for all employees) spent on that project.
select project.Pname , sum(works_for.hours) 
from works_for
left outer join project
on works_for.Pno=project.Pnumber
group by works_for.Pno;

-- 12.	Retrieve the names of all employees who work in every project sorted.
select employee.Fname,project.Pname
from works_for ,project ,employee
where project.Pnumber=works_for.Pno and employee.SSN =works_for.Essn
order by project.Pname;

-- 13.	Display the data of the department which has the smallest employee ID over all employees' ID.
select departments.Dname 
from departments
join employee
on departments.Dnum=employee.DNO and employee.SSN in (select min(employee.SSN) from employee);

-- 14.	For each department, retrieve the department name and the maximum, minimum and average salary of its employees.
select departments.Dname, max(employee.Salary), min(employee.Salary), avg(employee.Salary)
from employee ,departments
where employee.DNO=departments.Dnum
group by departments.Dnum;

-- 15.	List the last name of all managers who have no dependents.
select employee.Lname from employee , departments 
where employee.SSN=departments.MGRSSN and departments.MGRSSN not in (select dependent.ESSN from dependent);


-- 16.	For each department-- if its average salary is less than the average salary of all departments-- display its number, name and number of its employees.
select departments.Dname , departments.Dnum , count(employee.SSN) ,avg(employee.Salary)
from departments ,employee
where departments.Dnum=employee.DNO 
group by departments.Dname
having avg(employee.Salary) < (select avg(employee.Salary) from employee where employee.DNO is not null);

-- 17.	Retrieve a list of employees and the projects they are working on ordered by department and within each department, ordered alphabetically by last name, first name.
select employee.Fname ,employee.Lname,works_for.Pno 
from employee,works_for
where employee.SSN=works_for.Essn
order by employee.DNO ,employee.Fname,employee.Lname;

-- 18.	For each project located in Cairo City , find the project number, 
-- the controlling department name ,the department manager last name ,address and birthdate.
select project.Pnumber, departments.Dname, employee.Lname,employee.Address,employee.Bdate
from project,departments,employee
where employee.SSN=departments.MGRSSN and project.Dnum=departments.Dnum and  project.City='Cairo';



-- 19.	Make a list of all projects’ numbers for projects 
-- that involve an employee whose last name is Mohamed, either as a worker or as a manager of the department that controls the project.
-- (solve it with nested Q or union function )

select project.Pnumber from employee,project,works_for
where employee.SSN=works_for.Essn and employee.Lname='Mohamed' and project.Pnumber=works_for.Pno;

-- select project.Pnumber from departments,project,employee 
-- where departments.Dnum=project.Dnum  and employee.SSN=departments.MGRSSN and employee.Lname='Mohamed';

-- select project.Pnumber from employee,project,works_for,departments
-- where employee.Lname='Mohamed' and ((employee.SSN=works_for.Essn and project.Pnumber=works_for.Pno) or(departments.Dnum=project.Dnum  and employee.SSN=departments.MGRSSN)) ;


-- 20.	Display the employee number and name who has no dependent on him/her (use exists).
select employee.SSN,employee.Fname 
from employee 
where NOT EXISTS (select dependent.ESSN from dependent where employee.SSN=dependent.ESSN)














