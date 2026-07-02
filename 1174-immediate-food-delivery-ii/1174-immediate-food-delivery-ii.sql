# Write your MySQL query statement below
select   round(((count(pref_delivery) * 1.0) / count(*)) * 100 , 2) as immediate_percentage    from (
SELECT case when d.order_date = d.customer_pref_delivery_date then 1 end as pref_delivery
FROM Delivery d
JOIN (
    SELECT customer_id,
           MIN(order_date) AS first_order_date
    FROM Delivery
    GROUP BY customer_id
) t1
ON d.customer_id = t1.customer_id and d.order_date = t1.first_order_date
) fin_tab
