

const Articles = ({ articles }) => {
    console.log("From component", articles)
    return(
        <>  
            {/* {articles.map((article, index) => 
                <div key={index}> */}
                    {/* <div classNameName="page-header">
                        <h1>Bootstrap 3 Blog Template <small>Design / Bootstrap</small></h1>
                    </div> */}
                    {/* <p key={index}>{article.fields.name}</p> */}
                    {/* <div>
                        <div classNameName="meta">
                            Written by <span classNameName="author">{article.fields.author}</span> <span classNameName="date">{article.fields.time}</span> 
                        </div>
                        <h2><a href="">{article.fields.name}</a></h2>
                        <p>{article.fields.description}</p>
                        <a href="#" className="btn btn-primary">Read More <span className="glyphicon glyphicon glyphicon-chevron-right" aria-hidden="true"></span></a>
                        <figure>
                            <img src={article.fields.featuredImage.fields.file.url} alt="A girl rowing a boat on a lake" />
                            <figcaption>Image by google <a href="https://unsplash.com/">Unsplash.photos</a></figcaption>
                         </figure>
                    </div> */}
                 {/* </div> */}
             {/* )}     */}
                    <div className="container">
                        <div className="row">
                        {articles.map((article, index) =>
                            <div className="col-6 col-sm-12 col-md-6 col-lg-6" key={index}>
                                <div className="card">
                                    <img className="card-img" src={article.fields.featuredImage.fields.file.url} alt="Bologna" />
                                    <div className="card-img-overlay">
                                    <a href="#" className="btn btn-light btn-sm">{article.fields.blogtype}</a>
                                    </div>
                                    <div className="card-body">
                                    <h4 className="card-title">{article.fields.name}</h4>
                                    <p className="card-text">{article.fields.heading}</p>
                                    Written by <span classNameName="author"><a href="#">{article.fields.author}</a></span> <span classNameName="date">{article.fields.time}</span> 
                                    <a href="#" className="btn btn-info">Read Blog</a>
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