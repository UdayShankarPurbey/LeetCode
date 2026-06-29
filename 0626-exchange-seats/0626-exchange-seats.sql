/* Write your T-SQL query statement below */
SELECT  S.id , S1.student FROM (
SELECT *, 
CASE 
WHEN (SELECT MAX(ID) FROM Seat) %2 != 0 AND (SELECT MAX(ID) FROM Seat) = ID THEN ID 
WHEN  ID%2 =0 THEN ID - 1 
ELSE ID + 1  END AS TEST
FROM SEAT
) S
LEFT JOIN Seat S1 ON S.TEST = S1.id
ORDER BY S.ID