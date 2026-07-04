# Write your MySQL query statement below
select customer_id from (
select customer_id ,count(distinct product_key) product_count from Customer
group by customer_id
) t1 
where t1.product_count = (select count(product_key) from Product)