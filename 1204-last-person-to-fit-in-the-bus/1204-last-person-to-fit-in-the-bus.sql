# Write your MySQL query statement below

select person_name from Queue where turn = (select max(turn) from  (
select * ,(select SUM(q1.weight) from Queue q1 where q1.turn <= Queue.turn) as sum_weight   from Queue 
) t where t.sum_weight <= 1000)