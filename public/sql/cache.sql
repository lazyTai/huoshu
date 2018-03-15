SELECT * FROM 
demo.think_article 
LIMIT 1000;


(
    SELECT 
    id,
    article_id,
    user_id,
    count(id) as like_num FROM 
    demo.think_article_like 
    where status=1
    LIMIT 1000
) as table_like_num
join  think_article
on think_article.id
=table_like_num.article_id

(
    SELECT * FROM 
    demo.think_article 
    join 
    (
        SELECT 
        article_id,
        user_id,
        count(id) as like_num FROM 
        demo.think_article_like 
        where status=1
        LIMIT 1000
    ) as table_like_num
    on 
    think_article.id=table_like_num.article_id

)
join 
think_user
on
think_user.id=think_article.user_id


SELECT count(*) FROM 
demo.think_article 
LIMIT 1000;
