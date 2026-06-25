/* Write your T-SQL query statement below */
select customer_id   from  customer_transactions
group by customer_id
having count(case when transaction_type = 'purchase' then 1 end ) >= 3 
and DATEDIFF(DAY ,MIN(transaction_date), Max(transaction_date)) >= 30 
and ((count(case when transaction_type = 'refund' then 1 end ) * 1.0) /count(transaction_type) ) < 0.2