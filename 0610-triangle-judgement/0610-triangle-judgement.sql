/* Write your T-SQL query statement below */
select * ,case when x+y > z and x+z > y and z+y > x then 'Yes' else 'No' end triangle   from Triangle