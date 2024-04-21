# Write your MySQL query statement below
select e1.employee_id, e1.name, COUNT(e1.employee_id) as reports_count, ROUND(AVG(e2.age)) as average_age
from Employees e1 join Employees e2 on e1.employee_id = e2.reports_to
group by employee_id
order by employee_id
-- select mgr.employee_id, mgr.name, COUNT(emp.employee_id) as reports_count, ROUND(AVG(emp.age)) as average_age
-- from employees emp join employees mgr
-- on emp.reports_to = mgr.employee_id
-- group by employee_id
-- order by employee_id
