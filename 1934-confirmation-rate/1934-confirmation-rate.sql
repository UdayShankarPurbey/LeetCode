/* Write your T-SQL query statement below */
select signups.user_id , coalesce(t1.confirmation_rate , 0.00) as confirmation_rate  from Signups 
left join (
select user_id , round((count(case when action = 'confirmed' then 1 end ) * 1.0) / COUNT(*) , 2) as confirmation_rate   from Confirmations 
group by user_id 
) as t1 on t1.user_id = Signups.user_id