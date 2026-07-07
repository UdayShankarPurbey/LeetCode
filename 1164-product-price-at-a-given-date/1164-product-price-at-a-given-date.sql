# Write your MySQL query statement below
select distinct Products.product_id , coalesce( tf.new_price , 10) as price  from Products
left join (
select t1.product_id , new_price from (
select  product_id , MAX(change_date) as max_change_date  from Products
where change_date <= '2019-08-16'
group by product_id
) t1 left join  Products on Products.product_id = t1.product_id
where Products.product_id = t1.product_id and Products.change_date = t1.max_change_date
) tf on tf.product_id = Products.product_id 