import React from 'react'

export default function EditProduct() {
  return (
    <div>
                 
                 <div className='addproduct orcontainerss'>
            <h1>Edit Product</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Product Title</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">	SKU Number</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>



                    <div>

                        <label htmlFor="exampleInputPassword1" className="form-label">Weight</label>

                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                    </div>


                    <div>

                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                    </div>



                    <div>

                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                    </div>


                    <div>

                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                        </select>
                    </div>






                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
    </div>
  )
}
