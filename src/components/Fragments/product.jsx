const product = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="product-content">
                            <h1>Product</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptates.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-image">
                            <img src="https://images.unsplash.com/photo-1511556820780-a3a6b55fe9e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="product" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default product