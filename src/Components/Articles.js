
const Articles = ({ articles }) => {
    console.log("From component", articles)
    return (
        <>
            <div className="container">
                <div className="row">
                    {articles.map((article, index) =>
                        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch" key={index}>
                            <div className="card card-top m-3">
                                <img className="card-img-top" src={article.fields.featuredImage.fields.file.url} alt="Bologna" />

                                <div className="card-img-overlay">
                                    <a href="#" className="btn btn-light btn-sm">{article.fields.blogtype}</a>
                                </div>

                                <div className="card-body">
                                    <div className="row">
                                        <h4 className="card-title">{article.fields.name}</h4>
                                        <p className="card-text p-height">{article.fields.heading}</p>
                                        <span classNameName="author card-link">Written by<a href="#">{article.fields.author}</a></span> <br />
                                        <a href="#" className="btn btn-info mt-3">Read Blog</a>
                                       
                                    </div>
                                </div>

                                <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                                    <div className="views">{article.fields.time}
                                    </div>
                                    <div className="stats">
                                        <i className="far fa-eye"></i> Comment
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Articles;