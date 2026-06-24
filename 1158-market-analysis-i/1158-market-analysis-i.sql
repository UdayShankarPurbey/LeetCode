# Write your MySQL query statement below
select user_id as buyer_id , join_date , case when orders_in_2019 is null then 0 else orders_in_2019 end as orders_in_2019  from Users 
left join (
select buyer_id , count(*) as orders_in_2019 from Orders
where year(Orders.order_date) = '2019'
group by buyer_id
) t1 on t1.buyer_id = Users.user_id

