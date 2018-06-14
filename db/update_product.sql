-- UPDATE products SET description = $2 WHERE product_id = $1;
update products 
set description = $2
where product_id = $1;