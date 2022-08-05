

const Articles = ({ articles }) => {
    return(
        <>
             {articles.map((article, index) =>
                <p key={index}>{article.name}</p>
       
            )}
        </>
    )
}
export default Articles;