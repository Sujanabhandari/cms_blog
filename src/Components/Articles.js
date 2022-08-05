

const Articles = ({ articles }) => {
    console.log("From component", articles)
    return(
        <>
             {articles.map((article, index) =>
                <p key={index}>{article.fields.name}</p>
       
            )}
        </>
    )
}
export default Articles;